import React from 'react'
import Head from './components/Head'
import Product from './components/Product'
import './App.css'
import {Provider} from 'react-redux'
import store from './store.js'



class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Head />
        <Product />
        
      </div>
      </Provider>
    )
  }





}




export default App