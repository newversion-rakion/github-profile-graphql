import styled from 'styled-components'

const MainAppStyles = styled.div`
  width: 100%;
  padding: 20px 0;
  .mainAppRow {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
  }
  .profileCol {
    padding-left: 15px;
    padding-right: 15px;
    width: 300px;
    @media screen and (max-width: 993px) {
      width: 250px;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
      margin: 0 0 20px;
    }
  }
  .repositoriesCol {
    padding-left: 15px;
    padding-right: 15px;
    width: calc(100% - 300px);
    @media screen and (max-width: 993px) {
      width: calc(100% - 250px);
    }
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`

export default MainAppStyles
