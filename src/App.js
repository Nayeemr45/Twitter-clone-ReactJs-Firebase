import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
