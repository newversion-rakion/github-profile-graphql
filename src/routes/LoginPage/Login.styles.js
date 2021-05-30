import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoginStyles = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 15px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginBoxWrapper {

  }
  .pageTitle {
    text-align: center;
  }
  .loginForm {
    padding: 20px 0;
  }
  .btnGithubLogin {
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    color: #172b4d;
    svg {
      margin: 0 10px 0 0;
    }
  }
`
