import request from 'superagent';

const apiBaseUrl = 'https://wiki-langlinks-api-qpnwbmjtsf.now.sh';

function fetchLangLinks({ searchTerm, sourceLang, targetLangs }) {
	return request
		.get(`${apiBaseUrl}/langlinks`)
		.query({
			search: searchTerm,
			source: sourceLang,
			target: targetLangs.join('|')
		})
		.accept('json')
		.then(res => res.body);
}

export default {
	fetchLangLinks
};
