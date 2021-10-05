import './App.css';
import Cake from './components/Cake';
import Counter from './components/Counter';
import IceCream from './components/IceCream';
import ItemContainer from './components/ItemContainer';
import Login from './components/Login';
import Users from './components/Users';
const App = () => {
  return (
    <div className='App'>
      <Counter />
      <Login />
      <Cake />
      <IceCream />
      <ItemContainer cake />
      <ItemContainer />
      <Users />
    </div>
  );
};

export default App;
