import React, { Component } from 'react';
import apiClient from '../services/api-client';
import Search from './search';
import Results from './results';
import styles from './app.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			selectedLang: 'en',
			searchTerm: '',
			langLinks: []
		};

		this.allLangs = ['en', 'de', 'ru'];

		this.handleLangSelectionChange = this.handleLangSelectionChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleLangSelectionChange(e) {
		const state = this.state;
		this.setState({
			selectedLang: e.target.value,
			searchTerm: state.searchTerm,
			langLinks: []
		});
	}

	handleInputChange(e) {
		const state = this.state;
		this.setState({
			selectedLang: state.selectedLang,
			searchTerm: e.target.value,
			langLinks: state.langLinks
		});
	}

	handleButtonClick() {
		if (!this.state.searchTerm) {
			return undefined;
		}

		const index = this.allLangs.findIndex(l => l === this.state.selectedLang);
		if (index < 0) {
			return undefined;
		}

		const targetLangs = this.allLangs.slice(0, index).concat(this.allLangs.slice(index + 1));

		apiClient.fetchLangLinks({
			searchTerm: this.state.searchTerm,
			sourceLang: this.state.selectedLang,
			targetLangs
		}).then(result => {
			this.setState({
				selectedLang: this.state.selectedLang,
				searchTerm: this.state.searchTerm,
				langLinks: result.langLinks
			});
		});
	}

	render() {
		return (
			<div className={styles.app}>
				<Search
					langs={this.allLangs}
					onLangSelectionChange={this.handleLangSelectionChange}
					onInputChange={this.handleInputChange}
					onButtonClick={this.handleButtonClick}
					/>
				<Results langLinks={this.state.langLinks}/>
			</div>
		);
	}
}

export default App;
