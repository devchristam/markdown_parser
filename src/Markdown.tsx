import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  children: string
}

const Markdown: React.FC<Props> = props => {
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
        {props.children}
      </ReactMarkdown>
    </div>
  );
}

export default Markdown;
