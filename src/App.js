import './App.css';
import { fake_data } from './Static_data';
import { useState } from 'react';
import Main from "./components/main/Main"

function App() {
  const [count, setCount] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [right, setRight] = useState(0)
  const [ans, setAns] = useState("")
  console.log("xato: ", wrong)
  let data = fake_data[count]
  return (
    <div className="App">
      <Main setRight={setRight} right={right} wrong={wrong} setWrong={setWrong} data={data} ans={ans} setAns={setAns} setCount={setCount} count={count} />
      <div className='natija' style={{ display: 'flex', justifyContent: "space-around" }}>
        <h1 style={{ marginRight:"20px", }} >To'gri : {right}</h1>
        <h1>Noto'gri : {wrong}</h1>

      </div>
    </div >
  );
}

export default App;
