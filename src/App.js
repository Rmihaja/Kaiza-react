import './styles/theme.css';
import './styles/App.css';
import './styles/posts.css';
import './styles/messages.css';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App light">
      <Header />  
      <div className="content">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
