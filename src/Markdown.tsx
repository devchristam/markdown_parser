import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

export interface MarkdownProps {
	markdownSource: string,
	markdownText: string,
	setMarkdownText: (markdownInput: string) => void
}

export const Markdown = (props: MarkdownProps): JSX.Element => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} children={props.markdownSource} components={{
      h1: ({node, ...props}) => {return <div className="font-semibold text-5xl my-4" {...props}></div>},
      h2: ({node, ...props}) => {return <div className="font-semibold text-4xl my-4" {...props}></div>},
      h3: ({node, ...props}) => {return <div className="font-semibold text-3xl my-4" {...props}></div>},
      h4: ({node, ...props}) => {return <div className="font-semibold text-2xl my-4" {...props}></div>},
      h5: ({node, ...props}) => {return <div className="font-semibold text-xl my-4" {...props}></div>},
      h6: ({node, ...props}) => {return <div className="font-semibold my-4" {...props}></div>},
      strong: ({node, ...props}) => {return <span className="font-medium" {...props}></span>},
      em: ({node, ...props}) => {return <span className="italic" {...props}></span>},
      blockquote: ({node, ...props}) => {return <blockquote className="bg-white border-l-8 border-yellow-300 px-4 py-3 my-4 mx-1" {...props}></blockquote>},
      li: ({node, ...props}) => {return <li className="my-1" {...props}></li> },
      ul: ({node, depth, ...props}) => {
				if(depth === 0){
					return <ul className="list-inside list-disc my-4 ml-0" {...props}></ul>
				}
				return <ul className="list-inside list-disc ml-8" {...props}></ul>
			},
      ol: ({node, depth, ...props}) => {
				if(depth === 0){
					return <ol className="list-inside list-decimal my-4 ml-0" {...props}></ol>
				}
				return <ol className="list-inside list-decimal ml-8" {...props}></ol>
			},
      a: ({node, ...props}) => {return <a className="text-blue-600 hover:underline" {...props}>{props.children}</a>},
      img: ({node, ...props}) => {return <div className="w-full flex justify-center"><img className="object-fill" alt={props.key} {...props}/></div>},
			code: ({node, inline, className, children, ...props}) => {
					const match = /language-(\w+)/.exec(className || '')
					return !inline && match ? (
						<SyntaxHighlighter className="rounded-lg" style={vscDarkPlus} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
					) : (
						<span className="bg-yellow-200 text-yellow-800 px-1 mx-1 rounded-md" {...props}> {children} </span>
					)
			},
      table: ({node, ...props}) => {return <table className="table-auto" {...props}></table>},
      td: ({node, ...props}) => {return <td className="border border-gray-700 px-4 py-2" {...props}></td> },
      th: ({node, ...props}) => {return <th className="px-4 py-2" {...props}></th> },
      del: ({node, ...props}) => {return <span className="line-through" {...props}></span> },
    }} />
  );
}

