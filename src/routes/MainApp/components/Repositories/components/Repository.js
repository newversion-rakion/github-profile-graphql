import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Stargazers from './Stargazers';
import Issues from './Issues';
import RepositoryStyle from './Repository.styles.js'

const Repository = (props) => {
  const [showStargazers, setShowStargazers] = useState(false);
  const [showIssues, setShowIssues] = useState(false);

  return (
    <RepositoryStyle>
      <div style={{ animation: `fadeIn 1s` }}>
        <div className="repoHeader">
          <a className="repoName" href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
          <div className="btnGroup">
            <button
              data-content="Load Stargazers"
              type="button"
              className="btnShowMoreInfo"
              onClick={() => {
                setShowStargazers(true)
              }}
              disabled={props.stargazers.totalCount === 0}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-star mr-1">
                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              <span>{props.stargazers.totalCount}</span>
            </button>
            <button
              data-content="Load Issues"
              type="button"
              className="btnShowMoreInfo"
              onClick={() => {
                setShowIssues(true)
              }}
              disabled={props.issues.totalCount === 0}
            >
              <svg className="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
              </svg>
              <span>{props.issues.totalCount}</span>
            </button>
          </div>
        </div>
        
        {showStargazers && (
          <Stargazers {...props} />
        )}

        {showIssues && (
          <Issues {...props} setShowIssues={setShowIssues} />
        )}
      </div>

    </RepositoryStyle>
  )
}

Repository.propTypes = {
  name: PropTypes.string,
  stargazers: PropTypes.object,
  issues: PropTypes.object,
  url: PropTypes.string,
  login: PropTypes.string,
}

export default Repository
