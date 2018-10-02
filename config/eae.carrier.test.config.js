
module.exports = {
    mongoURL: 'mongodb://mongodb/eae',
    port: 80,
	enableCors: true,
    swiftURL: 'http://swift:8080',
    swiftUsername: 'test:tester',
    swiftPassword: 'testing',
    eaeUsername: 'eaeUsername',
    eaeCarrierCollection: 'eae_carrier',  //for carrier controller
    eaeGlobalStatusCollection: 'eae_global_status'  //for status controller
};
