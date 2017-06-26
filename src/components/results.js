import React from 'react';
import PropTypes from 'prop-types';
import ResultName from './result-name';
import ResultLink from './result-link';
import styles from './results.css';

const Results = ({ langLinks }) => {
	if (langLinks.length < 1) {
		return null;
	}

	const validLinks = langLinks.filter(l => l);

	if (validLinks.length < 1) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={styles.resultNames}>
				{
					validLinks.map(link =>
						<ResultName key={link.url} lang={link.autonym}/>)
				}
			</div>
			<div className={styles.resultLinks}>
				{
					validLinks.map(link =>
						<ResultLink key={link.url} title={link.title} url={link.url}/>)
				}
			</div>
		</div>
	);
};

Results.propTypes = {
	langLinks: PropTypes.arrayOf(PropTypes.shape({
		autonym: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string
	})).isRequired
};

export default Results;
