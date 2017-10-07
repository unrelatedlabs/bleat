module.exports = {
	helpers: require('./dist/bluetooth.helpers'),
	get classic() {
		var bluetooth = require('./dist/api.classic');
		require('./dist/adapter.evothings')(bluetooth);
		return bluetooth;
	},
	get webbluetooth() {
		var bluetooth = require('./dist/api.web-bluetooth');
		require('./dist/adapter.evothings')(bluetooth);
		return bluetooth;
	}
};
