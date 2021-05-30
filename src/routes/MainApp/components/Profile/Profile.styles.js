import styled from 'styled-components'

const ProfileStyles = styled.div`
  width: 100%;
  padding: 20px 15px;
  box-shadow: 0 8px 32px rgb(47 60 74 / 1%), 0 8px 16px rgb(47 60 74 / 2%);
  min-height: calc(100vh - 40px);
  @media screen and (max-width: 769px) {
    min-height: 0;
  }
  .userBox {
    display: flex;
    flex-wrap: wrap;
  }
  .boxLeft {
    width: 120px;
    margin: 0 auto 20px;
  }
  .boxRight {
    width: 100%;
    padding: 0 15px;
  }
  .userThumb {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .userDetail {
    list-style: none;
    text-align: center;
    li {
      padding: 0 0 10px;
      font-size: 14px;
      color: #304156;
      strong {
        font-size: 18px;
        color: #304156;
      }
    }
  }
`
export default ProfileStyles
