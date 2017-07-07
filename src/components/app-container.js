import React, { Component } from 'react';
import apiClient from '../services/api-client';
import App from './app';

export default class AppContainer extends Component {
	constructor() {
		super();

		this.state = {
			selectedLang: 'en',
			searchTerm: '',
			langLinks: [],
			loading: false,
			searchCache: null
		};

		this.allLangs = ['en', 'de', 'ru'];

		this.handleLangSelectionChange = this.handleLangSelectionChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleLangSelectionChange(e) {
		this.setState({
			selectedLang: e.target.value,
			langLinks: []
		});
	}

	async handleSearch(searchTerm) {
		if (!searchTerm) {
			return undefined;
		}

		const index = this.allLangs.findIndex(l => l === this.state.selectedLang);
		if (index < 0) {
			return undefined;
		}

		const targetLangs = this.allLangs.slice(0, index).concat(this.allLangs.slice(index + 1));

		const searchQuery = {
			searchTerm,
			sourceLang: this.state.selectedLang,
			targetLangs
		};

		if (JSON.stringify(searchQuery) === this.state.searchCache) {
			return undefined;
		}

		this.setState({ loading: true });

		try {
			const result = await apiClient.fetchLangLinks(searchQuery);

			this.setState({
				searchTerm,
				langLinks: result.langLinks,
				loading: false,
				searchCache: JSON.stringify(searchQuery)
			});
		} catch (err) {
			this.setState({
				searchTerm: '',
				langLinks: [],
				loading: false
			});
		}
	}

	render() {
		return (<App
			allLangs={this.allLangs}
			langLinks={this.state.langLinks}
			onLangSelectionChange={this.handleLangSelectionChange}
			onSearch={this.handleSearch}
			loading={this.state.loading}
			/>);
	}
}
