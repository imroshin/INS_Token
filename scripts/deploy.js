// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Interstellar = await ethers.getContractFactory('Interstellar');
    console.log('Deploying Contract...');
    const INS = await Interstellar.deploy();
    await INS.deployed();
    console.log('Contract deployed to:', INS.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    