// src/CodeEditor.tsx
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import Highlight from './Highlight';
import '../index.css';

const CodeEditor: React.FC = () => {
 const [code, setCode] = useState<string>('');
 const textareaRef = useRef<HTMLTextAreaElement>(null);

 const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  setCode(event.target.value);
 };

 const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
  if (event.key === 'Enter') {
   const value = event.currentTarget.value;
   const cursorPosition = event.currentTarget.selectionStart;
   const textBeforeCursor = value.substring(0, cursorPosition);
   const textAfterCursor = value.substring(cursorPosition);

   // Check for shortcuts
   if (textBeforeCursor.endsWith('log')) {
    event.preventDefault();
    insertShortcut(
     cursorPosition,
     textBeforeCursor,
     textAfterCursor,
     'console.log()',
     'log'.length,
     'console.log('.length

    );
   }

   if (textBeforeCursor.endsWith('rafce')) {
    event.preventDefault();
    const componentTemplate = `import React from 'react';

const ComponentName = () => {
  return (
    <div>test</div>
  )
}

export default ComponentName
`;
    insertShortcut(
     cursorPosition,
     textBeforeCursor,
     textAfterCursor,
     componentTemplate,
     'rafce'.length,
     componentTemplate.indexOf('ComponentName'),
     componentTemplate.indexOf('ComponentName') + 'ComponentName'.length
    );
   }
  }
 };

 const insertShortcut = (
  cursorPosition: number,
  textBeforeCursor: string,
  textAfterCursor: string,
  shortcut: string,
  lengthToCut: number,
  start: number,
  end?: number
 ) => {
  const newCode = `${textBeforeCursor.slice(0, -lengthToCut)}${shortcut}${textAfterCursor}`;
  setCode(newCode);

  // Set cursor position
  setTimeout(() => {
   if (textareaRef.current) {
    textareaRef.current.selectionStart = cursorPosition - lengthToCut + start;
    textareaRef.current.selectionEnd = end ? cursorPosition - lengthToCut + end : cursorPosition - lengthToCut + start;
   }
  }, 0);
 };

 return (
  <div className="code-editor">
   <textarea
    ref={textareaRef}
    value={code}
    onChange={handleChange}
    onKeyDown={handleKeyDown}
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
