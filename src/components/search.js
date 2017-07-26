import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchInputContainer from './search-input-container'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Lang = styled.div`
  position: relative;
  border: 1px solid #bbd;
  border-radius: 5px;
  background-color: #fff;
  flex: 0 0 auto;
`

const LangSelect = styled.select`
  font-size: 20px;
  padding: 10px;
  border: 0;
  background-color: #def;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const Search = ({ langs, onLangSelectionChange, onSearch }) => {
  return (
    <Container>
      <Lang>
        <LangSelect name='sourceLangSelector' onChange={onLangSelectionChange}>
          {
            langs.map(lang => <option key={lang} value={lang}>{lang}</option>)
          }
        </LangSelect>
      </Lang>
      <SearchInputContainer onSearch={onSearch} />
    </Container>
  )
}

Search.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLangSelectionChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Search
