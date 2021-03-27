import './styles/theme.css';
import './styles/App.css';
import './styles/posts.css';
import './styles/messages.css';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactAdd from './components/Contacts/ContactAdd';
import Chat from './components/Chats/Chat'
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="App light">
        <Header />  
        <div className="content">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contacts/add">
                <ContactAdd />
              </Route>
              <Route path="/chats/:id">
                <Chat />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
