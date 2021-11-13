module.exports = async ({ getNamedAccounts, deployments}: any) => {
  const { deploy } = deployments;
  const { deployer, erc721base } = await getNamedAccounts();

  if (!erc721base) {
    await deploy("TestBase", {
      from: deployer,
      args: [],
      log: true,
    });
  }
};
module.exports.tags = ["TestBase"];