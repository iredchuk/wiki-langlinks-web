import React from 'react';
import PropTypes from 'prop-types';
import styles from './result-name.css';

const ResultName = ({ lang }) => {
	return (
		<div className={styles.result}>
			<span>{lang}</span>
		</div>
	);
};

ResultName.propTypes = {
	lang: PropTypes.string.isRequired
};

export default ResultName;
