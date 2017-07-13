import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 100%;
  flex: 1 0 30px;
`

const ResultName = ({ lang }) => {
  return (
    <Container>
      <span>{lang}</span>
    </Container>
  )
}

ResultName.propTypes = {
  lang: PropTypes.string.isRequired
}

export default ResultName
