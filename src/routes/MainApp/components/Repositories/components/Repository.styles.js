import styled from 'styled-components'

const RepositoryStyle = styled.div`
  background-color: #ebecf0;
  padding: 15px;
  margin: 0 0 10px;
  border-radius: 5px;
  .repoHeader {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .repoName {
    color: #172b4d;
    font-size: 15px;
    font-weight: bold;
    width: calc(100% - 135px);
  }
  .btnGroup {
    display: flex;
    align-items: center;
    padding: 2px 0 0;
  }
  .btnShowMoreInfo {
    border: 0;
    padding: 0;
    background: none;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #172b4d;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    &:before {
      content: ""attr(data-content)"";
      display: block;
      position: absolute;
      right: 0;
      top: 150%;
      border-radius: 3px;
      background: rgb(0 0 0 / 60%);
      color: #fff;
      width: 140px;
      padding: 5px 15px;
      transition: all 0.5s ease 0s;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      @media screen and (max-width: 769px) {
        display: none;
      }
    }
    &:disabled {
      opacity: 0.3;
      pointer-events: none;
      &:hover {
        &:before {
          display: none;
        }
      }
    }
    &:hover {
      &:before {
        top: 110%;
        opacity: 1;
        visibility: visible;
      }
    }
    ~ .btnShowMoreInfo {
      margin: 0 0 0 15px;
    }
    svg {
      margin: 0 2px 0 0;
    }
  }
  .repoContentBoxTitle {
    color: #172b4d;
    font-size: 13px;
    font-weight: bold;
    margin: 0 0 10px;
  }
  .repoContentBox {
    background: #ffffff;
    border-radius: 5px;
    padding: 15px 10px;
    margin: 10px 0 0;
    max-width: 500px;
  }
  .stargazerBox {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 5px 0;
    + .stargazerBox {
      margin: 5px 0;
    }
    .stargazerThumb {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 10px 0 0;
    }
    .stargazerName {
      color: #172b4d;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .issuesPopupWrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    padding: 30px 15px;
    background: rgb(0 0 0 / 36%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .issuesPopup {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 315px;
    padding: 15px 0;
    margin: auto;
    background: #fff;
    position: relative;
  }

  .btnClosePopup {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    right: -10px;
    top: -10px;
    z-index: 2;
    background: black;
    color: #fff;
    font-weight: bold;
    border: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    overflow-y: auto;
  }

  .popupHeader {
    padding: 5px 15px;
  }

  .issueBox {
    display: block;
    padding: 10px 15px;
    border-top: 1px solid #ebedef;
    border-bottom: 1px solid #ebedef;
    transition: all 0.3s ease 0s;
    margin: -1px 0 0;
    &:hover {
      background: #f6f8fa;
      color: #0366d6;
    }
  }

  .issuesTitle {
    display: block;
    color: #24292e;
    font-size: 14px;
    transition: all 0.3s ease 0s;
    font-weight: bold;
    margin: 0 0 5px;
    strong {
      margin: 0 10px 0 0;
    }
  }
  .issueDescription {
    font-size: 12px;
    margin: 0;
    color: #22863a;
    &.closed {
      color: #cb2431;
      a {
        color: #cb2431;
      }
    }
    a {
      color: #22863a;
      padding: 0 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .popupFooter {
    padding: 0 15px;
  }
  .scrollBox {
    max-height: 170px;
    padding: 10px 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1px;
    }
  }
`
export default RepositoryStyle;
