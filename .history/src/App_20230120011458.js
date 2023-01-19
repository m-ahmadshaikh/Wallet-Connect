import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
// });

//  Create Web3
// let web3 = new Web3(provider);
let web3;

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState(null);

  const onConnect = async () => {
    console.log(selectedWallet);
    console.log(selectedNetwork);
    if (selectedNetwork === "ethereum") {
      console.log("eth");

      web3 = new Web3(window.web3.currentProvider);
    } else if (selectedNetwork === "bnb") {
      console.log("bnb");

      web3 = new Web3(
        new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/")
      );
    } else if (selectedNetwork === "polygon") {
      console.log("polygon");
      web3 = new Web3(
        new Web3.providers.HttpProvider("https://polygon.network")
      );
    }
    if (selectedWallet === "metamask" && window.ethereum) {
      console.log("metamask");
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
        const balanceWei = await web3.eth.getBalance(accounts[0]);
        const balanceEther = web3.utils.fromWei(balanceWei, "ether");
        setBalance(balanceEther);
      } catch (error) {}
    } else if (!window.ethereum) {
      setError("Install Metamask");
    } else {
      console.log("install metamask");
      // if (provider.connected) {
      //   // const provider = new WalletConnectProvider({
      //   //   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      //   // });
      //   // await provider.enable();
      //   // if (provider.connected) {
      //   //   const accounts = await web3.eth.getAccounts();
      //   //   setAddress(accounts[0]);
      //   //   const balanceWei = await web3.eth.getBalance(accounts[0]);
      //   //   const balanceEther = web3.utils.fromWei(balanceWei, "ether");
      //   //   setBalance(balanceEther);
      //   // }
      // }
    }
  };
  const onNetworkClick = (text) => {
    setSelectedNetwork(text);
  };
  const onWalletClick = (text) => {
    setSelectedWallet(text);
  };
  return (
    <div className="main">
      <div>
        <p>Choose Network</p>
        <div className="flex">
          <Button
            text={"BNB Chain"}
            active={selectedNetwork === "bnb"}
            onClick={() => onNetworkClick("bnb")}
          />
          <Button
            text={"Polygon Chain"}
            active={selectedNetwork === "polygon"}
            onClick={() => onNetworkClick("polygon")}
          />
          <Button
            text={"Ethereum Chain"}
            active={selectedNetwork === "ethereum"}
            onClick={() => onNetworkClick("ethereum")}
          />
        </div>

        <p>Choose Wallet</p>
        <div className="flex">
          <Button
            text={"Metamask"}
            active={selectedWallet === "metamask"}
            onClick={() => onWalletClick("metamask")}
          />
          <Button
            text={"Wallet Connect"}
            active={selectedWallet === "wallet_connect"}
            onClick={() => onWalletClick("wallet_connect")}
          />
        </div>

        <button onClick={onConnect} className="btn">
          Connect Wallet
        </button>

        {error && <div>{error}</div>}
      </div>

      <div>
        <h3>Account</h3>
        <div className="flex">
          <p>Address: {address}</p>
          <p>Balance: {balance}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
