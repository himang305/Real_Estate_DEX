import React, { useState } from "react";
import { ethers } from "ethers";

const Kyc = ({ contractAddress }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [kycInfo, setKYCInfo] = useState("");

  const connectMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, ['function getKYCInfo(address) view returns (string)'], provider);

      try {
        const info = await contract.getKYCInfo(walletAddress);
        setKYCInfo(info);
      } catch (error) {
        console.error("Error retrieving KYC info:", error);
      }
    }
  };

  return (
    <div>
      <h1>KYC Info Retrieval</h1>
      <input
        type="text"
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={connectMetamask}>Retrieve KYC Info</button>
      {kycInfo && <p>KYC Info: {kycInfo}</p>}
    </div>
  );
};

export default Kyc;