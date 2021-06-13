import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
  markdownSource: string
}

export const Markdown: React.FC<MarkdownProps> = props => {
  return (
    <ReactMarkdown children={props.markdownSource} components={{
      h1: ({node, ...props}) => {return <div className="text-6xl my-4 mx-4" {...props}></div>},
      h2: ({node, ...props}) => {return <div className="text-5xl my-4 mx-4" {...props}></div>},
      h3: ({node, ...props}) => {return <div className="text-4xl my-4 mx-4" {...props}></div>},
      h4: ({node, ...props}) => {return <div className="text-3xl my-4 mx-4" {...props}></div>},
      h5: ({node, ...props}) => {return <div className="text-2xl my-4 mx-4" {...props}></div>},
      h6: ({node, ...props}) => {return <div className="text-xl my-4 mx-4" {...props}></div>},
      strong: ({node, ...props}) => {return <span className="font-bold" {...props}></span>},
      em: ({node, ...props}) => {return <span className="italic" {...props}></span>},
      blockquote: ({node, ...props}) => {return <blockquote className="bg-white border-l-8 border-green-600 px-4 py-3 my-4 mx-1" {...props}></blockquote>},
      ul: ({node, ...props}) => {return <ul className="list-inside list-disc my-4 mx-4" {...props}></ul>},
      ol: ({node, ...props}) => {return <ol className="list-inside list-decimal my-4 mx-4" {...props}></ol>},
      a: ({node, ...props}) => {return <a className="text-blue-400" {...props}>{props.children}</a>},
      img: ({node, ...props}) => {return <div className="w-1/4"><img className="object-fill" alt={props.key} {...props}/></div>},
    }} />
  );
}

