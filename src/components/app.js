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
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleLangSelectionChange(e) {
		const state = this.state;
		this.setState({
			selectedLang: e.target.value,
			searchTerm: state.searchTerm,
			langLinks: []
		});
	}

	handleSearch(searchTerm) {
		if (!searchTerm) {
			return undefined;
		}

		const index = this.allLangs.findIndex(l => l === this.state.selectedLang);
		if (index < 0) {
			return undefined;
		}

		const targetLangs = this.allLangs.slice(0, index).concat(this.allLangs.slice(index + 1));

		apiClient.fetchLangLinks({
			searchTerm,
			sourceLang: this.state.selectedLang,
			targetLangs
		}).then(result => {
			this.setState({
				selectedLang: this.state.selectedLang,
				searchTerm,
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
					onSearch={this.handleSearch}
					/>
				<Results langLinks={this.state.langLinks}/>
			</div>
		);
	}
}

export default App;
