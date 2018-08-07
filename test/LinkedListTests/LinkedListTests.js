const etherlime = require('etherlime');

const LinkedList = require('./../../build/LinkedList.json');

const defaultConfigs = {
    gasLimit: 4700000,
}

describe('Initializing DataContract', () => {

    it('should set initial values correctly', async () => {
        let deployer = new etherlime.EtherlimeGanacheDeployer();
        deployer.defaultOverrides = defaultConfigs;

        await deployer.deploy(LinkedList);
    });
});