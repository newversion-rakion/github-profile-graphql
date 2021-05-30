import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GITHUB_ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET } from 'utils/constants'
import { LoginStyles } from './Login.styles.js'

const Login = props => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const query = new URLSearchParams(props.location.search)
    const code = query.get('code')
    if (code) {
      setLoading(true)
    }
    if (code) {
      (async () => {
        const rawResponse = await fetch(GITHUB_ACCESS_TOKEN, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
          }),
        })
        const content = await rawResponse.json()

        localStorage.setItem('token', content.access_token)
        props.history.push('/in')
      })()
    }
  }, [props.location.search])

  if (loading) {
    return (
      <div className="pageLoading" />
    )
  }

  return (
    <LoginStyles>
      <div className="loginBoxWrapper">
        <h1 className="pageTitle center" style={{ animation: `topToBottom 1s` }}>Hello</h1>
        <div className="loginForm" style={{ animation: `bottomToTop 1s` }}>
          <a
            className="btnGithubLogin"
            href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${CLIENT_ID}`}>
            <svg version="1.1" width="32" height="32" viewBox="0 0 16 16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Sign in
          </a>
        </div>
      </div>
    </LoginStyles>
  )
}

Login.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
}

export default Login
