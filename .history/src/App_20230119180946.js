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
    setSelectedNetwork(text)
  }
  return (
    <div className='main'>
      <div>
      <p>Choose Network</p>
      <div className='flex'><Button text={'BNB Chain'} active={selectedNetwork === 'bnb'} onClick={()=>onNetworkClick('bnb')}/>
      <Button text={'Polygon Chain'} active={selectedNetwork === 'polygon'}/>
      <Button text={'Ethereum Chain'} active={selectedNetwork === 'ethereun'}/>
      </div>
      

      <p>Choose Wallet</p>
      <div className='flex'>
      <Button text={'Metamask'}  active={selectedWallet === 'metamask'}/>
      <Button text={'Wallet Connect'}  active={selectedWallet === 'wallet_connect'}/>
      </div>
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
