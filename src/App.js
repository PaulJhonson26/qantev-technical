import logo from './Qantev_Logo.png';
import './App.css';
import data from './data_sample.json';
import AgencyList from './components/AgencyList';
function App() {
  return (

      <div>
        <div className = "container-banner">
          <div>
            <img src = {logo} className = "logo-qantev"/>
          </div>
        </div>
        <div className="container-main">
          <div className = "container-content">
            <AgencyList />
          </div>
        </div>
      </div>



  );
}

export default App;
