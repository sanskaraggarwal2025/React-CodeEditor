import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';

interface HighlightProps {
 code: string;
}

const Highlight: React.FC<HighlightProps> = ({ code }) => {
 const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');
 return (
  <pre className="language-js">
   <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
  </pre>
 );
};

export default Highlight;
