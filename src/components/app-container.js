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
			loading: false
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

	handleSearch(searchTerm) {
		if (!searchTerm || searchTerm === this.state.searchTerm) {
			return undefined;
		}

		const index = this.allLangs.findIndex(l => l === this.state.selectedLang);
		if (index < 0) {
			return undefined;
		}

		const targetLangs = this.allLangs.slice(0, index).concat(this.allLangs.slice(index + 1));

		this.setState({ loading: true });

		apiClient.fetchLangLinks({
			searchTerm,
			sourceLang: this.state.selectedLang,
			targetLangs
		}).then(result => {
			this.setState({
				searchTerm,
				langLinks: result.langLinks,
				loading: false
			});
		}).catch(() => {
			this.setState({
				searchTerm: '',
				langLinks: [],
				loading: false
			});
		});
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
