import React from 'react';
import { Markdown } from './Markdown';


const App: React.FC = () => {
  const myMakrdown: string = `
  # testing title 6xl
  ## testing title 5xl
  ### testing title 4xl
  #### testing title 3xl
  ##### testing title 2xl
  ###### testing title xl

  normal text
  `;

  return (
    <Markdown markdownSource={myMakrdown}/>
  );
}

export default App;
