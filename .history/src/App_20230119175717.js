import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div>

      <p>Choose Network</p>
      <div><Button text={'BNB Chain'}/></div>
      <div><Button text={'Polygon Chain'}/></div>
      <div><Button text={'Ethereum Chain'}/></div>
    </div>
  );
}

export default App;
