import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './search-input';

const ENTER_KEY_CODE = 13;

export default class SearchInputContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.search = this.search.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleKeyDown(e) {
		if (e.keyCode === ENTER_KEY_CODE) {
			this.search();
		}
	}

	handleButtonClick() {
		this.search();
	}

	search() {
		if (this.state.value.trim()) {
			this.props.onSearch(this.state.value);
		}
	}

	render() {
		return (
			<SearchInput
				value={this.state.value}
				onKeyDown={this.handleKeyDown}
				onChange={this.handleChange}
				onButtonClick={this.handleButtonClick}
				/>);
	}
}

SearchInputContainer.propTypes = {
	onSearch: PropTypes.func.isRequired
};