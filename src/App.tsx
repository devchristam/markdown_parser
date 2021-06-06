import React from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const markdowntext: string = `
  # testing title 6xl
  ## testing title 5xl
  ### testing title 4xl
  #### testing title 3xl
  ##### testing title 2xl
  ###### testing title xl

  normal text
  `;
  return (
    <div>
      <ReactMarkdown components={{
        h1: ({node, ...props}) => {return <div className="text-6xl" {...props}></div>},
        h2: ({node, ...props}) => {return <div className="text-5xl" {...props}></div>},
        h3: ({node, ...props}) => {return <div className="text-4xl" {...props}></div>},
        h4: ({node, ...props}) => {return <div className="text-3xl" {...props}></div>},
        h5: ({node, ...props}) => {return <div className="text-2xl" {...props}></div>},
        h6: ({node, ...props}) => {return <div className="text-xl" {...props}></div>}  
      }}>
        {markdowntext}
      </ReactMarkdown>
    </div>
  );
}

export default App;
