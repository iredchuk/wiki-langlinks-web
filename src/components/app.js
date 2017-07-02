import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from './search';
import Results from './results';

const Container = styled.div`
	margin: 20px 20px;
	padding: 20px 40px;
	background-color: #fff;
	width: 400px;
`;

const App = props => {
	return (
		<Container>
			<Search
				langs={props.allLangs}
				onLangSelectionChange={props.onLangSelectionChange}
				onInputChange={props.onInputChange}
				onButtonClick={props.onButtonClick}
				/>
			<Results langLinks={props.langLinks}/>
		</Container>
	);
};

App.propTypes = {
	allLangs: PropTypes.array.isRequired,
	langLinks: PropTypes.array.isRequired,
	onLangSelectionChange: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

export default App;
