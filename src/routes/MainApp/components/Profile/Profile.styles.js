import styled from 'styled-components'

const ProfileStyles = styled.div`
  width: 100%;
  padding: 15px 0 50px;
  .userBox {
    display: flex;
    flex-wrap: wrap;
  }
  .boxLeft {
    width: 150px;
  }
  .boxRight {
    width: calc(100% - 150px);
    padding: 0 15px;
    @media screen and (max-width: 530px) {
      width: 100%;
      padding: 20px 0;
    }
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
    li {
      padding: 0 0 10px 10px;
      @media screen and (max-width: 530px) {
        padding: 0 0 10px;
      }
      span {
        font-weight: bold;
        padding: 0 10px 0 0;
      }
    }
  }
`
export default ProfileStyles
