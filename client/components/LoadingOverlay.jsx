import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const LoadingOverlay = ({ children, isLoading = false }) => (
  <div className={classNames('loading-overlay', { 'loading-overlay--active': isLoading })}>
    {/* Display content once it has stopped loading */}
    {!isLoading && children}
  </div>
)

LoadingOverlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isLoading: PropTypes.bool,
}

LoadingOverlay.defaultProps = {
  children: null,
  isLoading: false,
}

export default LoadingOverlay
