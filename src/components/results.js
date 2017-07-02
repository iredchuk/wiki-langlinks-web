import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResultName from './result-name';
import ResultLink from './result-link';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding-top: 20px;
`;

const Names = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const Links = styled.div`
	padding-left: 32px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const NoResults = () => {
	return (
		<Container>
			No result for the selected language.
		</Container>
	);
};

const Results = ({ langLinks }) => {
	if (langLinks.length < 1) {
		return null;
	}

	const validLinks = langLinks.filter(l => l);

	if (validLinks.length === 0) {
		return <NoResults/>;
	}

	return (
		<Container>
			<Names>
				{
					validLinks.map(link =>
						<ResultName key={link.url} lang={link.autonym}/>)
				}
			</Names>
			<Links>
				{
					validLinks.map(link =>
						<ResultLink key={link.url} title={link.title} url={link.url}/>)
				}
			</Links>
		</Container>
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
