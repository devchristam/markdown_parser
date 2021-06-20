import { useState } from 'react';
import { Markdown } from './Markdown';
import { MarkdownInput } from './MarkdownInput';


const App = (): JSX.Element => {
  const myMarkdown: string = 
`# testing title 6xl
## testing title 5xl
### testing title 4xl
#### testing title 3xl
##### testing title 2xl
###### testing title xl

***

**testing**

*testing*

> 12345

---

- [Testing](https://devchristam.com)
- Testing
- Testing
- Testing
- Testing
- Testing

1. [Testing](https://devchristam.com)
2. Testing
3. Testing
4. Testing
5. Testing
normal text`;

  const [markdownText, setMarkdownText] = useState<string>(myMarkdown)

  return (
    <div className="grid grid-cols-2 h-screen">
			<div>
				<MarkdownInput markdownText={markdownText} setMarkdownText={setMarkdownText}/>
			</div>
			<div className="mx-10">
				<span className="ml-2 text-2xl font-semibold">Markdown result:</span>
				<div className="p-2 m-2 rounded-md border border-gray-500">
					<Markdown markdownSource={markdownText} markdownText={markdownText} setMarkdownText={setMarkdownText}/>
				</div>
			</div>
    </div>
  );
}

export default App;
