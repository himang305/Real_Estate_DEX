export const networks = [80001]

export const ChainId = {
  // MAINNET: 1,
  POLYGON: 80001
};

export const routerAddress = new Map();
// routerAddress.set(ChainId.MAINNET, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.POLYGON, "0x8d2494C5cc9e74b63151Ce856cF171B28404C72A");


export const kycAddress = new Map();
kycAddress.set(ChainId.POLYGON, "0x707f7BbbCd626e7EF9Fb5C5f9a72e406FaCEF6A8");

