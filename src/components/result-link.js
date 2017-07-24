import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 20px;
  flex: 1 0 30px;
`

const ResultLink = ({ title, url }) => {
  return (
    <Container>
      <a href={url} target='_blank'>{title}</a>
    </Container>
  )
}

ResultLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ResultLink
