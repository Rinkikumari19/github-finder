
import './App.css';
import React,{useMemo} from 'react';
import Github_data from './components/Github_data';
import Navbar_com from './components/Navbar_com';
import Functinal_comp from './components/Functional_comp';
import Class_comp from './components/Class_comp';

function App() {
  const MemoComp = useMemo(()=>{
    return <Github_data />
  },[])
// console.log(MemoComp,"meo")
  return (
    <div className="App">
      <Navbar_com />
      {MemoComp}
      {/* <Functinal_comp />
      <Class_comp /> */}
    </div>
  );
}

export default App;
