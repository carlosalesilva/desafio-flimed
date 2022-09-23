import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';

import { createContext, useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Task from './pages/Tasks';
import FormTask from './pages/Tasks/Form';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
  const setAuthLS = (newAuth)=>{
    setAuth(newAuth);
    console.log(newAuth)
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }

  return (
    <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
      <Router history={history}>
        <Route exact path="/">
          {
            auth.token == null ?
              <Redirect to="/login"></Redirect> :
              <Home></Home>
          }

        </Route>
        <Route exact path="/login" component={Login}>
        </Route>
        <Route exact path="/tarefas_cadastro" component={FormTask}>
        </Route>
      </Router>
    </AuthContext.Provider>

  )
}

export default App;
