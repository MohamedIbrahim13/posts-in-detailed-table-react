import React from 'react';
import PostContextProvider from './contexts/PostContext';
import Posts from './components/Posts';


function App() {
  return (
    <div className="container">
      
        <PostContextProvider>
            
              <Posts />
              
            
        </PostContextProvider>
      
    </div>
  );
}

export default App;
