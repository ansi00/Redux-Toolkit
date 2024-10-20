import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './Redux/hooks/index.ts';
import { increment , decrement } from './Redux/slices/counter/index.ts';
import MyComp from './MyComp.tsx';


function App() {
const count = useAppSelector(state => state.counter)
const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {count} </h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

      </header>
      <MyComp />
    </div>
    
  );
}

export default App;
