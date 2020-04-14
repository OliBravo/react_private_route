import React from 'react';
import SignInForm from "./containers/signInForm";
import User from "./containers/user";
import './App.css';
import store from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <User />
      <SignInForm />
    </Provider>
      
  );
}

export default App;
