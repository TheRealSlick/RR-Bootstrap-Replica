import './App.css';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
