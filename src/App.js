import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';

function App() {
  return (
    <div className='container'>
      <div className='navbar-menu'>
        <Navbar />
      </div>
      <div className='body'>
        <Body />
      </div>
    </div>
  );
}

export default App;
