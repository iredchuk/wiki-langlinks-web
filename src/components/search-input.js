import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
	font-size: 100%;
	margin-left: 10px;
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
		</div>
	);
};

SearchInput.propTypes = {
	value: PropTypes.string,
	onKeyDown: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
	value: ''
};

export default SearchInput;
