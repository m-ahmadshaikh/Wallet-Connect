import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='main'>
      <div>
      <p>Choose Network</p>
      <div className='flex'><Button text={'BNB Chain'}/>
      <Button text={'Polygon Chain'}/>
      <Button text={'Ethereum Chain'}/>
      </div>
      

      <p>Choose Wallet</p>
      <div className='flex'><Button text={'BNB Chain'}/>
      <Button text={'Metamask'} />
      <Button text={'Wallet Connect'}/>
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