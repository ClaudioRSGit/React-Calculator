import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-'];

  const updateCalc = value => {

    if(
      ops.includes(value) && calc == '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ){
      return;
    }

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const creadteDigits = () => {
    const digits = [];

    for(let i=1;i<10;i++){
      digits.push(
        <button 
        onClick={() => updateCalc(i.toString())}
        key={i}>
        {i}
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLAst = () => {
    if(calc == ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const deleteAll = () => {
    if(calc == ''){
      return;
    }
    const value = calc.slice(0, -10);
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        {result ? <span>({result})</span> : ''} &nbsp;
        {calc || "0"}
        </div>
        <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            

            <button onClick={deleteLAst}>DEL</button>
            <button onClick={deleteAll}>AC</button>
        </div>
        <div className="operators">
            <button onClick={() => updateCalc('^(1/2)')}>√</button>
            <button onClick={() => updateCalc('^')}>^</button>
            <button onClick={() => updateCalc('')}>BIN</button>
            <button onClick={() => updateCalc('')}>OCT</button>
            <button onClick={() => updateCalc('')}>HEX</button>
        </div>
        <div className="digits">
          {creadteDigits() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => calculate()}>=</button>
        </div>


      </div>
    </div>
  );
}

export default App;
