import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from 'utils/graphql/schema'
import LoadmoreButton from 'components/LoadmoreButton'
import Repository from './components/Repository'
import RepositoriesStyle from './Repositories.styles'

const Repositories = () => {
  const [loginFieldValue, setLoginFieldValue] = useState('');
  const [skip, setSkip] = useState(true);
  const [variables, setVariables] = useState({
    after: null,
    login: '',
  });

  const { loading, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables,
    skip,
    notifyOnNetworkStatusChange: true,
  })

  const { repositories } = data && data.repositoryOwner || {}

  const handleFetchRepositories = async (variables, clearData = false) => {
    await fetchMore({
      variables,
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (Object.keys(prevResult).length > 0 && !clearData) {
          fetchMoreResult.repositoryOwner.repositories.nodes = [
            ...prevResult.repositoryOwner.repositories.nodes,
            ...fetchMoreResult.repositoryOwner.repositories.nodes
          ];
        }
        return fetchMoreResult;
      }
    })
  }

  const handleSubmit = () => {
    const clonedQueryVariables = { ...variables }
    clonedQueryVariables.login = loginFieldValue
    clonedQueryVariables.after = null
    setSkip(false)
    setVariables(clonedQueryVariables)
    handleFetchRepositories(clonedQueryVariables, true)
  }

  const handleLoadmore = () => {
    const variables = {
      after: repositories.pageInfo.endCursor,
    }
    handleFetchRepositories(variables);
  }

  return (
    <RepositoriesStyle style={{ animation: `fadeIn 1s` }}>
      <h2 className="boxTitle">Explorer other github user</h2>

      <form
        className="searchForm"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Type username then hit enter..."
          value={loginFieldValue}
          onChange={e => {
            setLoginFieldValue(e.target.value.trim())
          }}
        />
        <button type="submit" disabled={!loginFieldValue}>Search</button>
      </form>

      {repositories && (
        <>
          <ul className="boxInfo">
            <li>
              <span>TotalCount:</span>
              {repositories.totalCount}
            </li>
            <li>
              <span>Loaded:</span>
              {repositories.nodes.length}
            </li>
          </ul>

          <div className="repoList">
            {repositories.nodes.map(item => (
              <Repository key={item.id} {...item} login={variables.login} />
            ))}
          </div>
        </>
      )}

      {repositories && repositories.pageInfo && repositories.pageInfo.hasNextPage && (
          <LoadmoreButton
            className="btnLoadmore"
            label="Loadmore"
            handleLoadmore={handleLoadmore}
            loading={loading}
          />
      )}
    </RepositoriesStyle>
  )
}

Repositories.propTypes = {
}

export default Repositories
