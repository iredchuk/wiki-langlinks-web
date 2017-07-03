import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
	font-size: 100%;
	margin-left: 10px;
`;

const Button = styled.button`
	margin-left: 10px;
	font-size: 100%;
	font-weight: bold;
	color: #00e;
	background-color: #fff;
	border: none;
`;

const SearchInput = props => {
	return (
		<div>
			<Input
				type="text"
				placeholder="Search query here ..."
				value={props.value}
				autoFocus={1}
				onKeyDown={props.onKeyDown}
				onChange={props.onChange}
				/>
			<Button onClick={props.onButtonClick}>GO</Button>
		</div>
	);
};

SearchInput.propTypes = {
	value: PropTypes.string,
	onKeyDown: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
	value: ''
};

export default SearchInput;
