import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

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

const Search = ({ langs, onLangSelectionChange, onInputChange, onButtonClick }) => {
	return (
		<Container>
			<select name="sourceLangSelector" onChange={onLangSelectionChange}>
				{
					langs.map(lang =>
						<option key={lang} value={lang}>{lang}</option>)
				}
			</select>
			<Input type="text" placeholder="Search query here..." onChange={onInputChange}/>
			<Button onClick={onButtonClick}>GO</Button>
		</Container>
	);
};

Search.propTypes = {
	langs: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLangSelectionChange: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

export default Search;
