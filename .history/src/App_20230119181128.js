import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState('')
  const [selectedWallet, setSelectedWallet] = useState('')

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

      <button className='btn'>Connect Wallet</button>
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
