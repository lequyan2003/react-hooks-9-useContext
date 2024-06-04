import './App.css';
// import { useEffect, useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar'
import { AppProvider } from './Context/AppContext';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   fetch('https://reqres.in/api/users/2')
  //     .then(res => res.json())
  //     .then(res => {
  //       setUserData(res.data);
  //     })
  // }, []);

  return (
    <div 
      className="App"
    >
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default App;
