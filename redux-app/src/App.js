import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);  
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  let url = ""
    return (
      <>
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

<div>
<a className="quantity_minus" title="Decrement" href={url}
  onClick={ () => dispatch(decNumber())}><span>-</span></a>
<input name="quantity" type="text" className="quantity_input" onChange={handleSubmit} value ={myState}/>
<a className="quantity_plus" title="Increment" href={url}
  onClick={ () => dispatch(incNumber())}><span>+</span></a>
</div>

    </div>
    </>
  );
}

export default App;
