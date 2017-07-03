import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInputContainer from './search-input-container';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

const Search = ({ langs, onLangSelectionChange, onSearch }) => {
	return (
		<Container>
			<select name="sourceLangSelector" onChange={onLangSelectionChange}>
				{
					langs.map(lang =>
						<option key={lang} value={lang}>{lang}</option>)
				}
			</select>
			<SearchInputContainer onSearch={onSearch}/>
		</Container>
	);
};

Search.propTypes = {
	langs: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLangSelectionChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired
};

export default Search;
