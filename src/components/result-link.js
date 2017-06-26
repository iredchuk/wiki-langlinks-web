import React from 'react';
import PropTypes from 'prop-types';
import styles from './result-name.css';

const ResultLink = ({ title, url }) => {
	return (
		<div className={styles.result}>
			<a href={url}>{title}</a>
		</div>
	);
};

ResultLink.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};

export default ResultLink;
