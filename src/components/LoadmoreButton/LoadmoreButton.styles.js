import styled from 'styled-components'

const LoadmoreButton = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s ease 0s;
  &:hover {
    background: #dadada;
  }
  &.small {
    font-size: 11px;
    margin: 10px 0 0;
    padding: 5px 10px;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &.loading {
    &.small {
      &:before {
        width: 10px;
        height: 10px;
      }
    }
    &:before {
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      border-right: 2px solid black;
      border-top: 2px solid transparent;
      border-bottom: 2px solid black;
      border-left: 2px solid transparent;
      border-radius: 50%;
      animation: rotate 2s linear infinite;
      margin: 0 7px 0 0;
      opacity: 0.3;
    }
  }
`
export default LoadmoreButton
