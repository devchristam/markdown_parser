import React, { useState } from 'react';
import { Markdown } from './Markdown';
import { MarkdownInput } from './MarkdownInput';


const App: React.FC = () => {
  const myMarkdown: string = `
  # testing title 6xl
  ## testing title 5xl
  ### testing title 4xl
  #### testing title 3xl
  ##### testing title 2xl
  ###### testing title xl

  normal text
  `;

  const [markdownText, setMarkdownText] = useState(myMarkdown)

  return (
    <div>
      <MarkdownInput markdownText={markdownText} setMarkdownText={setMarkdownText}/>
      <Markdown markdownSource={markdownText} markdownText={markdownText} setMarkdownText={setMarkdownText}/>
    </div>
  );
}

export default App;
