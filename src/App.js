import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Web3Auth } from "@web3auth/modal";

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState(null);

 

  const onConnect = async () => {
   
    
    if (selectedNetwork === 'ethereum') {
      window.web3 = new Web3(window.ethereum);

    }

    else if (selectedNetwork === 'polygon') {
      // window.web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.polygon.io"));
      const web3auth = new Web3Auth({
        clientId: "BHgVODRbv330NID6h2jcmLkCFXIuVO5ntveQW7IRPcleCVs060EJQzvFabWCrmZQ835ozQdL9fRaG-k4Dlt1Ej0", // get it from Web3Auth Dashboard
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x89", // hex of 137, polygon mainnet
          rpcTarget: "https://rpc.ankr.com/polygon",
          // Avoid using public rpcTarget in production.
          // Use services like Infura, Quicknode etc
          displayName: "Polygon Mainnet",
          blockExplorer: "https://polygonscan.com",
          ticker: "MATIC",
          tickerName: "Matic",
        },
      });
  await web3auth.initModal();
  
  const web3authProvider = web3auth.connect();
  
   window.web3 = new Web3(web3authProvider); 

    }
    else if (selectedNetwork === 'bnb') {
      // window.web3 = new Web3('https://bsc-dataseed1.binance.org:443');
      const web3auth = new Web3Auth({
        clientId: "BHgVODRbv330NID6h2jcmLkCFXIuVO5ntveQW7IRPcleCVs060EJQzvFabWCrmZQ835ozQdL9fRaG-k4Dlt1Ej0", // get it from Web3Auth Dashboard
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x38", // hex of 56
          rpcTarget: "https://rpc.ankr.com/bsc",
          // Avoid using public rpcTarget in production.
          // Use services like Infura, Quicknode etc
          displayName: "Binance SmartChain Mainnet",
          blockExplorer: "https://bscscan.com/",
          ticker: "BNB",
          tickerName: "BNB",
        },
      });
      await web3auth.initModal();
      
      const web3authProvider = web3auth.connect();
      
       window.web3 = new Web3(web3authProvider); //

    }



    if(selectedWallet === 'metamask'){
      if(!window.ethereum){
        setError('Install MetaMask Extention')
        return;
      }
      try {
        const address = (await window.web3.eth.getAccounts())[0];

        // Get user's balance in ether
        const balance = window.web3.utils.fromWei(
          await window.web3.eth.getBalance(address) // Balance is in wei
        );
        setAddress(address);
       
        setBalance(balance);
    } catch (error) {
        console.log(error);
    }
  }else {
    const walletConnectProvider = new WalletConnectProvider({
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Optional
  });
  window.web3 = new Web3(walletConnectProvider);
  try {
      await walletConnectProvider.enable();
      const accounts = await window.web3.eth.getAccounts();
      setAddress(accounts[0]);
      const balanceWei = await window.web3.eth.getBalance(accounts[0]);
      const balanceEther = window.web3.utils.fromWei(balanceWei, 'ether');
      setBalance(balanceEther);
  } catch (error) {
      console.log(error);
  }
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

        {error && <div className="error">{error}</div>}
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
