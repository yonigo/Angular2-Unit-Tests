export class ParseServise {
	getAddresses() {
		return fetch('http://localhost:3001/api/random-word', {
			method: 'GET',
		});
	}
}