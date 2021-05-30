import styled from 'styled-components'

const RepositoriesStyle = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 0 100px;
  .searchForm {
    margin: 0 0 30px;
    display: flex;
    align-items: center;
    input {
      height: 30px;
      margin: 0 5px 0 0;
      width: 300px;
      padding: 0 10px;
      border: 1px solid #ebecf0;
      border-radius: 3px;
      &:focus {
        outline: 0;
      }
    }
    button {
      height: 30px;
      padding: 0 15px;
      cursor: pointer;
      background: #ebecf0;
      border: 0;
      border-radius: 3px;
      color: #172b4d;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.3s ease 0s;
      &:hover {
        background: #dadada;
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
  .repoList {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 15px;
    th {
      text-align: left;
      padding: 5px 10px;
      border-top: 1px solid #172b4d;
      border-bottom: 1px solid #172b4d;
    }
    td {
      padding: 5px 10px;
      border-top: 1px solid #172b4d;
      border-bottom: 1px solid #172b4d;
    }
  }
  .btnLoadMore {
    border: 0;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    &.small {
      font-size: 11px;
      margin: 10px 0 0;
      padding: 5px 10px;
    }
  }
  .boxInfo {
    list-style: none;
    display: flex;
    margin: 0 0 5px;
    &.small {
      li {
        font-size: 10px;
      }
    }
    li {
      font-size: 14px;
      padding: 0 15px 5px 0;
      span {
        font-weight: bold;
        padding: 0 5px 0 0;
      }
    }
  }
`

export default RepositoriesStyle
