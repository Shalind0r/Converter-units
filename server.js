const liveServer = require('live-server');

const params = {
	host: 'localhost', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	ignore: 'node_modules', // comma-separated string for paths to ignore
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	root: './public',
};

liveServer.start(params);
