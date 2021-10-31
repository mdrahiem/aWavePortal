const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    // We don't need to import hre explicitily coz it's injected
    // in runtime (while running npx hardhat command)
    // The below WavePortal is the contract name (not file name)
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
      });
    await waveContract.deployed();
    console.log("contract deployed successfully!", waveContract.address);
    console.log("Contract deployed by", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave('This is wave #1');
    await waveTxn.wait();
    console.log('Got message from #1');

    const waveTxn2 = await waveContract.wave('This is wave #2');
    await waveTxn2.wait();
    console.log('Got message from #2');

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave('Another message');
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });