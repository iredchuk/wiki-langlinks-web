import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Search from './search'
import Results from './results'

const Container = styled.div`
  line-height: 120%;
  margin: 10px 20px 0 20px;
  padding: 20px;

  @media (max-width: 330px) {
    margin: 10px 10px 0 10px;
    padding: 10px;
  }
`

const App = props => {
  return (
    <Container>
      <Search
        langs={props.allLangs}
        onLangSelectionChange={props.onLangSelectionChange}
        onSearch={props.onSearch} />
      <Results langLinks={props.langLinks} loading={props.loading} />
    </Container>
  )
}

App.propTypes = {
  allLangs: PropTypes.array.isRequired,
  langLinks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onLangSelectionChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default App
