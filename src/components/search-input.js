import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1 0 auto;
`

const Input = styled.input`
  margin-left: 10px;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 350px) {
    width: auto;
  }
`

const SearchInput = props => {
  return (
    <Container>
      <Input
        type='text'
        placeholder='Search here ...'
        value={props.value}
        autoFocus={1}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </Container>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
  value: ''
}

export default SearchInput
