import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Codelicious TODO</h1>

      {user && <>
        <p>Welcome, {user.name} <a href="#" onClick={() => { setUser(null) }}>Log out</a></p>
        <hr/>
        <TodoList user={user} />
      </>}
      {!user && <Login setUser={setUser} />}
    </div>
  );
}

export default App;
