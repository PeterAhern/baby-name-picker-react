import './App.css';
import BabyNames from './BabyNames';
import allBabyNames from "./babyNameData";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baby Names</h1>
        <p>  Traverse through the world of baby names, with this little tool.</p>
      </header>
      <BabyNames data={allBabyNames}/>

    </div>
  );
}

export default App;
