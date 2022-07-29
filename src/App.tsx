import React from 'react';
import Layout from './components/layout'
import StoryPanel from './components/story-panel'
import Feed from './components/feed'
import Sidebar from './components/sidebar'

function App() {
  return (
    <Layout>
      <div className="space-y-3 lg:mx-0">
        <StoryPanel />
        <Feed />
      </div>
      <Sidebar />
    </Layout>
  );
}

export default App;
