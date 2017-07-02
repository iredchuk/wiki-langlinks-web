import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.css';
import SearchInput from './search-input';

const Search = ({ langs, onLangSelectionChange, onSearch }) => {
	return (
		<div className={styles.container}>
			<select name="sourceLangSelector" onChange={onLangSelectionChange}>
				{
					langs.map(lang =>
						<option key={lang} value={lang}>{lang}</option>)
				}
			</select>
			<SearchInput
				placeholder="Search query here..."
				onSearch={onSearch}
				/>
		</div>
	);
};

Search.propTypes = {
	langs: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLangSelectionChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired
};

export default Search;
