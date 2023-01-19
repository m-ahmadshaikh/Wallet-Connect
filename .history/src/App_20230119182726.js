import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Web3 from 'web3'

let web3

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState('')
  const [selectedWallet, setSelectedWallet] = useState('')


  const onConnect = async ()=>{
    if( selectedWallet === 'ethereun'){
      const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_PROJECT_ID"))
    }else if ( selectedWallet === 'bnb'){
      const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"))
    }else if ( selectedWallet === 'polygon'){
      const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon.network"))
    }
    if (selectedNetwork === 'eth' &&  window.ethereum) {
      web3 = new Web3(window.ethereum)
      try {
          await window.ethereum.enable()
          const accounts = await web3.eth.getAccounts()
          console.log(accounts[0])
          const balance = await web3.eth.getBalance(accounts[0])
          console.log(web3.utils.fromWei(balance, 'ether'))
      } catch (error) {
          // User denied account access...
      }
  }
  }
  const onNetworkClick = (text)=>{
    setSelectedNetwork(text)
  }
  const onWalletClick = (text)=>{
    setSelectedWallet(text)
  }
  return (
    <div className='main'>
      <div>
      <p>Choose Network</p>
      <div className='flex'><Button text={'BNB Chain'} active={selectedNetwork === 'bnb'} onClick={()=>onNetworkClick('bnb')}/>
      <Button text={'Polygon Chain'} active={selectedNetwork === 'polygon'} onClick={()=>onNetworkClick('polygon')}/>
      <Button text={'Ethereum Chain'} active={selectedNetwork === 'ethereun'} onClick={()=>onNetworkClick('ethereum')}/>
      </div>
      

      <p>Choose Wallet</p>
      <div className='flex'>
      <Button text={'Metamask'}  active={selectedWallet === 'metamask'} onClick={()=>onWalletClick('metamask')}/>
      <Button text={'Wallet Connect'}  active={selectedWallet === 'wallet_connect'} onClick={()=>onWalletClick('wallet_connect')}/>
      </div>

      <button onClick={onConnect} className='btn'>Connect Wallet</button>
      </div>

      <div>
        <h3>Account</h3>
        <div className='flex'>
          <p>Address</p>
          <p>Balance</p>
        </div>
      </div>
    </div>
  );
}

export default App;
