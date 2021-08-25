import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

export interface MarkdownProps {
	markdownSource: string,
	markdownText: string,
	setMarkdownText: (markdownInput: string) => void
}

export const Markdown = (props: MarkdownProps): JSX.Element => {
  return (
    <ReactMarkdown className="break-words" remarkPlugins={[remarkGfm, remarkSlug]} children={props.markdownSource} components={{
      p: ({node, ...props}) => {return <p className="inline-block" {...props}></p>},
      h1: ({node, children, ...props}) => {return <h1 className="font-semibold text-5xl my-4" {...props}>{children}</h1>},
      h2: ({node, children, ...props}) => {return <h2 className="font-semibold text-4xl my-4" {...props}>{children}</h2>},
      h3: ({node, children, ...props}) => {return <h3 className="font-semibold text-3xl my-4" {...props}>{children}</h3>},
      h4: ({node, children, ...props}) => {return <h4 className="font-semibold text-2xl my-4" {...props}>{children}</h4>},
      h5: ({node, children, ...props}) => {return <h5 className="font-semibold text-xl my-4" {...props}>{children}</h5>},
      h6: ({node, children, ...props}) => {return <h6 className="font-semibold my-4" {...props}>{children}</h6>},
      strong: ({node, ...props}) => {return <span className="font-medium" {...props}></span>},
      em: ({node, ...props}) => {return <span className="italic" {...props}></span>},
      blockquote: ({node, ...props}) => {return <blockquote className="bg-white border-l-8 border-yellow-300 px-4 py-3 my-4 mx-1" {...props}></blockquote>},
      li: ({className, children}) => {
        if(className === "task-list-item"){
          return <li className="list-item my-1">{children}</li>
        }
        return <li className="list-item my-1">{children}</li>
      },
      ul: ({depth, className, children}) => {
        if(depth === 0 && className === "contains-task-list"){
					return <ul className="list-outside list-none my-4 ml-2">{children}</ul>
        }
				if(depth === 0){
					return <ul className="list-outside list-disc my-4 ml-6">{children}</ul>
				}
        if(className === "contains-task-list"){
					return <ul className="list-outside list-none ml-2">{children}</ul>
        }
				return <ul className="list-outside list-disc ml-6">{children}</ul>
			},
      ol: ({depth, className, children}) => {
        if(depth === 0 && className === "contains-task-list"){
					return <ol className="list-outside list-none my-4 ml-2">{children}</ol>
        }
				if(depth === 0){
					return <ol className="list-outside list-decimal my-4 ml-6">{children}</ol>
				}
        if(className === "contains-task-list"){
					return <ol className="list-outside list-none ml-2">{children}</ol>
        }
				return <ol className="list-outside list-decimal ml-6">{children}</ol>
			},
      a: ({node, ...props}) => {return <a className="text-blue-600 hover:underline" {...props}>{props.children}</a>},
      img: ({node, ...props}) => {return <span className="w-full flex justify-center"><img className="object-fill" alt={props.key} {...props}/></span>},
			code: ({node, inline, className, children, ...props}) => {
					const match = /language-(\w+)/.exec(className || '')
					return !inline && match ? (
						<SyntaxHighlighter className="rounded-lg" style={vs2015} language={match[1]} children={String(children).replace(/\n$/, '')} />
					) : (
						<span className="bg-yellow-200 text-yellow-800 px-1 rounded-md" {...props}>{children}</span>
					)
			},
      table: ({node, ...props}) => {return <table className="table-auto" {...props}></table>},
      td: ({children}) => {return <td className="border border-gray-700 px-4 py-2">{children}</td> },
      th: ({children}) => {return <th className="px-4 py-2">{children}</th> },
      del: ({node, ...props}) => {return <span className="line-through" {...props}></span> },
    }} />
  );
}

