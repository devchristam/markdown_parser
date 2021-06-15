import React from 'react'	

export interface markdownInputProps {
	markdownText: string,
	setMarkdownText: (markdownInput: string) => void
}

export const MarkdownInput: React.FC<markdownInputProps> = ({markdownText, setMarkdownText}) => {

	const updateMarkdown = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setMarkdownText(event.target.value)
	}

	return (
		<div>
			<input type="text" value={ markdownText } onChange={ updateMarkdown }/>
			{markdownText}
		</div>
	)
}