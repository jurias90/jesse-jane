import React from 'react';
import { Provider } from 'react-redux'
import Form from './Form'
import User from './User'

import store from '../redux/store';

const App = () => {

return (
  <Provider store={store}>
    <Form />
    <User />
  </Provider>
)
}
export default App;
