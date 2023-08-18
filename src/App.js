import './App.css';
import Navbar_AL from './components/Navbar_AL';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const token = true;
        
  return (
    <div className="App">
      <Navbar/>
      <Navbar_AL/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
