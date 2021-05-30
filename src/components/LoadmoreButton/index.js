import React, { useState } from 'react'
import LoadmoreButtonStyle from './LoadmoreButton.styles'

const LoadmoreButton = props => {
  const { loading, label, className, handleLoadmore } = props
  return (
    <LoadmoreButtonStyle
      className={`${className} ${loading ? 'loading' : ''}`}
      type="button"
      onClick={handleLoadmore}
      disabled={loading}
    >
      {loading ? 'Loading...' : label}
    </LoadmoreButtonStyle>
  )
}

LoadmoreButton.propTypes = {
}

export default LoadmoreButton
