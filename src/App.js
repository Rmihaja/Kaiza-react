import './styles/theme.css';
import './styles/App.css';
import './styles/posts.css';
import './styles/messages.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <div className="App light">
      <Header />  
      <div className="content">
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
