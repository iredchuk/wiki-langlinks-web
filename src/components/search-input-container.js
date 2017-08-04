import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './search-input'

export default class SearchInputContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.search = this.search.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleKeyDown (e) {
    if (e.key === 'Enter') {
      this.search()
    }
  }

  search () {
    const searchTerm = this.state.value.trim()
    if (searchTerm) {
      this.props.onSearch(searchTerm)
    }
  }

  render () {
    return (
      <SearchInput
        value={this.state.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />)
  }
}

SearchInputContainer.propTypes = {
  onSearch: PropTypes.func.isRequired
}
