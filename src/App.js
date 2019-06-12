import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import RolexBuilder from './containers/RolexBuilder/RolexBuilder';

function App() {
  return (
    <div >
      <Layout>
        <RolexBuilder/>
      </Layout>
    </div>
  );
}

export default App;
