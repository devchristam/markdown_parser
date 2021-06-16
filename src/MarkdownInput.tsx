import React from 'react'	

export interface markdownInputProps {
	markdownText: string,
	setMarkdownText: (markdownInput: string) => void
}

export const MarkdownInput = ({markdownText, setMarkdownText}: markdownInputProps): JSX.Element => {

	const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setMarkdownText(event.target.value)
	}

	return (
		<div>
			<textarea className="resize-none" value={ markdownText } onChange={ updateMarkdown } ></textarea>
		</div>
	)
}