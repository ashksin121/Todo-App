import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Welcome from './containers/Welcome/Welcome';
import './App.css';

class App extends Component {

  render () {
    return (
      <div>
        <Layout>
        </Layout>
        <Welcome />        
      </div>
    )
  }
}

export default App;