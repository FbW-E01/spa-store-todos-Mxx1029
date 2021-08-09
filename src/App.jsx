import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { UserContext } from './contexts/UserContext';

function App() {
  // Here we are definining where the "user" state actually exists
  const [user, setUser] = useState(null);

  // Here we are defining what is the value provided by our context
  // We are "Providing" this value so that descendent elements can "Consume" it from the context
  const contextValue = { user, setUser };
  return (
    <UserContext.Provider value={contextValue}>
      <div className="App">

        <h1>Codelicious TODO</h1>

        {user && <>
          <p>
            Welcome, {user.name} 
            <a href="#" onClick={() => { setUser(null) }}>Log out</a>
          </p>
          <hr/>
          <TodoList />
        </>}
        
        {!user && <Login />}

      </div>
    </UserContext.Provider>
  );
}

export default App;
