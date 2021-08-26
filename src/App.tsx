import { useState } from 'react';
import { Markdown } from './Markdown';
import { MarkdownInput } from './MarkdownInput';


const App = (): JSX.Element => {
  const myMarkdown: string = 
`# Lorem ipsum
## Lorem ipsum
### Lorem ipsum
#### Lorem ipsum
##### Lorem ipsum
###### Lorem ipsum

***

- ### Lorem ipsum
- > Lorem ipsum

| Lorem | ipsum |
|-------|-------|
| dolor | sit   |
| dolor | sit   |

- [ ] Lorem 
- [x] Lorem 

~Lorem~

**Lorem**

*Lorem*

> Lorem \`ipsum\` *dolor* sit amet consectetur **adipisicing elit.** Molestiae necessitatibus vel numquam nisi, dolores cumque animi illum maxime nemo nihil, expedita voluptatibus ad natus dolorum, laudantium quaerat autem voluptates deserunt?

---

- [Lorem](https://devchristam.com)
- Lorem
	- Lorem
	- Lorem
	- Lorem

1. [Lorem](#lorem-ipsum)
2. Lorem
3. Lorem
4. Lorem
5. Lorem

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci autem iusto corrupti maxime dolores, fugit totam magnam eum voluptatum. Rem quas quae repudiandae neque facere dicta architecto asperiores esse saepe.

![alt text](logo192.png)

\`\`\`js
let x = 0.1
let y = 0.2
let z = x + y

if(z === 0.3){
	return true
}
return false
\`\`\`

`;

  const [markdownText, setMarkdownText] = useState<string>(myMarkdown)

  return (
    <div className="grid md:grid-cols-2 h-screen grid-cols-1">
			<div className="mx-10">
				<MarkdownInput markdownText={markdownText} setMarkdownText={setMarkdownText}/>
			</div>
			<div className="mx-10 mt-10 md:mt-0">
				<span className="ml-2 text-2xl font-semibold">Markdown result:</span>
				<div className="p-2 m-2 rounded-md border border-gray-500">
					<Markdown markdownSource={markdownText} markdownText={markdownText} setMarkdownText={setMarkdownText}/>
				</div>
			</div>
    </div>
  );
}

export default App;
