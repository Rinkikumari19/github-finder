
import './App.css';
import React, { useMemo } from 'react';
import Github_data from './components/Github_data';
import Navbar_com from './components/Navbar_com';

function App() {
  const MemoComp = useMemo(() => {
    return <Github_data />
  }, [])
  return (
    <div className="App">
      <Navbar_com />
      {MemoComp}
    </div>
  );
}

export default App;
