import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	font-size: 100%;
	flex: 1 0 30px;
`;

const ResultLink = ({ title, url }) => {
	return (
		<Container>
			<a href={url}>{title}</a>
		</Container>
	);
};

ResultLink.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};

export default ResultLink;
