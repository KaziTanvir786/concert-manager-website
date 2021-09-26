import './App.css';
import Booking from './components/Header/Booking/Booking';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="main">
      {/* header component */}
      <Header></Header>
      {/* booking field component */}
      <Booking></Booking>
    </div>
  );
}

export default App;
