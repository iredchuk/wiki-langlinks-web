import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.css';

const Search = ({ langs, onLangSelectionChange, onInputChange, onButtonClick }) => {
	return (
		<div className={styles.container}>
			<select name="sourceLangSelector" onChange={onLangSelectionChange}>
				{
					langs.map(lang =>
						<option key={lang} value={lang}>{lang}</option>)
				}
			</select>
			<input className={styles.input} type="text" placeholder="Search query here..." onChange={onInputChange}/>
			<button className={styles.button} onClick={onButtonClick}>GO</button>
		</div>
	);
};

Search.propTypes = {
	langs: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLangSelectionChange: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

export default Search;
