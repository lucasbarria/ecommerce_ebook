import React from 'react'
import Dashboard from './dashboard.css'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>

      <div id="content-wrapper" className="d-flex flex-column">
        <MainContent/>

        

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
