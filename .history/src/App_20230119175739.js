import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div>

      <p>Choose Network</p>
      <div><Button text={'BNB Chain'}/>
      <Button text={'Polygon Chain'}/>
      <Button text={'Ethereum Chain'}/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
