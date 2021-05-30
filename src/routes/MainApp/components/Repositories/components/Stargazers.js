import React from 'react'
import { useQuery } from '@apollo/client'
import LoadmoreButton from 'components/LoadmoreButton'
import { GET_STARGAZERS_BY_REPOSITORY } from 'utils/graphql/schema'
import PropTypes from 'prop-types'

const Stargazers = ({ login, name }) => {
  const { loading, data, fetchMore } = useQuery(GET_STARGAZERS_BY_REPOSITORY, {
    variables: {
      login,
      name,
      after: null,
    },
    notifyOnNetworkStatusChange: true,
  })

  const { repository = {
    stargazers: {},
  } } = data && data.repositoryOwner || {}

  const handleFetchStargazers = async (variables) => {
    await fetchMore({
      variables,
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (prevResult) {
          fetchMoreResult.repositoryOwner.repository.stargazers.nodes = [
            ...prevResult.repositoryOwner.repository.stargazers.nodes,
            ...fetchMoreResult.repositoryOwner.repository.stargazers.nodes
          ];
        }
        return fetchMoreResult;
      }
    })
  }

  const handleLoadmore = () => {
    const variables = {
      after: repository.stargazers.pageInfo.endCursor,
    }
    handleFetchStargazers(variables);
  }

  return (
    <>
      {repository.stargazers.nodes && repository.stargazers.nodes.length > 0 && (
        <div className="repoContentBox" style={{ animation: `fadeIn 1s` }}>
          <h5 className="repoContentBoxTitle">Stargazers</h5>
          <ul className="boxInfo small">
            <li><span>TotalCount:</span>{repository.stargazers.totalCount}</li>
            <li><span>Loaded:</span>{repository.stargazers.nodes.length}</li>
          </ul>

          <div className="scrollBox">
            {repository.stargazers.nodes.map(star => 
              <a href={star.url} target="_blank" rel="noreferrer" key={star.id} className="stargazerBox">
                <span className="stargazerThumb">
                  <img src={star.avatarUrl} alt="" />
                </span>
                <span className="stargazerName">{star.name}</span>
              </a>
            )}
          </div>
          {repository.stargazers.pageInfo && repository.stargazers.pageInfo.hasNextPage && (
            <LoadmoreButton
              className="btnLoadmore small"
              label="Loadmore stargazers"
              handleLoadmore={handleLoadmore}
              loading={loading}
            />
          )}
        </div>
      )}
    </>
  )
}

Stargazers.propTypes = {
  name: PropTypes.string,
  stargazers: PropTypes.object,
  issues: PropTypes.object,
  url: PropTypes.string,
  login: PropTypes.string,
}

export default Stargazers
