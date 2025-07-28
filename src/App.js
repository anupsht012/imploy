import logo from './logo.svg';
import './App.css';
// import DashboardPage from './Dashboard';
import { Sidebar } from './components/sidebar';
import { Navbar } from './components/navbar';
import { AppRoutes } from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
   <AppRoutes/>
    </div>
  );
}

export default App;
