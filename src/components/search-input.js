import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-input.css';

const ENTER_KEY_CODE = 13;

class SearchInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.search = this.search.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	handleClick() {
		this.search();
	}

	search() {
		if (this.state.value.trim()) {
			this.props.onSearch(this.state.value);
		}
	}

	render() {
		return (
			<div>
				<input
					className={styles.input}
					type="text"
					placeholder={this.props.placeholder}
					autoFocus={1}
					onKeyDown={this.handleKeyDown}
					value={this.state.value}
					onChange={this.handleChange}
					/>
				<button className={styles.button} onClick={this.handleClick}>GO</button>
			</div>
		);
	}
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	onSearch: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
	placeholder: 'Search query here ...'
};

export default SearchInput;
