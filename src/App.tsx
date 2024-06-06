import React from 'react';
import CodeEditor from './Components/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Code Editor - Syntax Highlighting</h1>
      <CodeEditor />
    </div>
  );
};

export default App;
