import React, { useRef } from 'react'	

export interface markdownInputProps {
	markdownText: string,
	setMarkdownText: (markdownInput: string) => void
}

export const MarkdownInput = ({markdownText, setMarkdownText}: markdownInputProps): JSX.Element => {

	const markdownTextarea = useRef<HTMLTextAreaElement>(null)

	markdownTextarea.current?.addEventListener('keydown', function(e: KeyboardEvent) {
		if(e.key === 'Tab'){
			e.preventDefault()
		}
	})

	const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setMarkdownText(event.target.value)
	}

	return (
		<div className="h-5/6 min-w-full max-w-full w-full">
			<span className="ml-2 text-2xl font-semibold">Markdown text:</span>
			<textarea ref={markdownTextarea} className="p-2 resize-none w-full h-full rounded-md m-2 border border-gray-500" value={ markdownText } onChange={ updateMarkdown } ></textarea>
		</div>	
	)
}