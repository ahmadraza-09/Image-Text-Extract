import React, { useState } from 'react';
import ImageUpload from './components/imageupload';
import TextDisplay from './components/textdisplay';
import './App.css';

function App() {

  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Image Text Extractor</h1>
      <ImageUpload onTextExtracted={setText} />
      <TextDisplay text={text} />
    </div>
  );
}

export default App;
