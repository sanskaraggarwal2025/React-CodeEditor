// src/CodeEditor.tsx
import React, { useState, useRef, ChangeEvent } from 'react';
import Highlight from './Highlight';
import '../index.css';

const CodeEditor: React.FC = () => {
 const [code, setCode] = useState<string>('');
 const textareaRef = useRef<HTMLTextAreaElement>(null);

 const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  setCode(event.target.value);
 };

 return (
  <div className="code-editor">
   <textarea
    ref={textareaRef}
    value={code}
    onChange={handleChange}
    spellCheck="false"
    autoComplete="off"
    className="code-input"
   />
   <div className="highlighted-code">
    <Highlight code={code} />
   </div>
  </div>
 );
};

export default CodeEditor;
