import React, { useRef, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import moment from 'moment'
import LoadmoreButton from 'components/LoadmoreButton'
import { GET_ISSUES_BY_REPOSITORY } from 'utils/graphql/schema'
import PropTypes from 'prop-types'

const Issues = ({ login, name, setShowIssues }) => {
  const { loading, data, fetchMore } = useQuery(GET_ISSUES_BY_REPOSITORY, {
    variables: {
      login,
      name,
      after: null,
    },
    notifyOnNetworkStatusChange: true,
  })

  const { repository = {
    issues: {},
  } } = data && data.repositoryOwner || {}

  const handleFetchIssues = async (variables) => {
    await fetchMore({
      variables,
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (prevResult) {
          fetchMoreResult.repositoryOwner.repository.issues.nodes = [
            ...prevResult.repositoryOwner.repository.issues.nodes,
            ...fetchMoreResult.repositoryOwner.repository.issues.nodes
          ];
        }
        return fetchMoreResult;
      }
    })
  }

  const myRef = useRef()
  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setShowIssues(false);
    }
  }
  const handleClickInside = () => setShowIssues(true);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  })

  const handleLoadmore = () => {
    const variables = {
      after: repository.issues.pageInfo.endCursor,
    }
    handleFetchIssues(variables);
  }

  return (
    <>
      {repository.issues.nodes && repository.issues.nodes.length > 0 && (
        <div className="issuesPopupWrapper" onClick={handleClickInside} style={{ animation: `fadeIn 1s` }}>
          <div className="issuesPopup" ref={myRef} >
            <div className="popupHeader">
              <h2 className="boxTitle">Issues</h2>
              <ul className="boxInfo small">
                <li><span>TotalCount:</span>{repository.issues.totalCount}</li>
                <li><span>Loaded:</span>{repository.issues.nodes.length}</li>
              </ul>
            </div>

            <div className="popupContent">
              <div className="scrollBox">
                {repository.issues.nodes.map(issue =>
                  <div key={issue.id} className="issueBox">
                    <a href={issue.url} target="_blank" rel="noreferrer" className="issuesTitle" style={{ animation: `fadeIn 1s` }}>
                      <span className="stargazerName">
                        {issue.title}
                      </span>
                    </a>
                      {issue.closed ?
                        (
                          <p className="issueDescription closed">
                          #{issue.number} by
                            <a href={issue.author.url} target="_blank">
                            {issue.author.login}</a>was closed on {moment(issue.closedAt).format("MMM Do YY")}
                            </p>
                        ) :
                        (
                          <p className="issueDescription">
                            #{issue.number} opened {moment(issue.closedAt).startOf('day').fromNow()} by<a href={issue.author.url} target="_blank">
                            {issue.author.login}</a>
                          </p>
                        )
                      }
                  </div>
                )}
              </div>
            </div>
            <div className="popupFooter">
              {repository.issues.pageInfo && repository.issues.pageInfo.hasNextPage && (
                <LoadmoreButton
                  className="btnLoadmore small"
                  label="Loadmore issuses"
                  handleLoadmore={handleLoadmore}
                  loading={loading}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Issues.propTypes = {
  name: PropTypes.string,
  issues: PropTypes.object,
  url: PropTypes.string,
  login: PropTypes.string,
  setShowIssues: PropTypes.func,
}

export default Issues
