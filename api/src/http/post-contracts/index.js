let arc = require('@architect/functions');
let data = require('@architect/data');

exports.handler = async function http(request) {
	let session = await arc.http.session.read(request);
	let contract = { title: request.body.title, summary: request.body.summary };

	await data.contracts.put(contract);
	console.log(contract);

	return {
		status: 200
	}
}