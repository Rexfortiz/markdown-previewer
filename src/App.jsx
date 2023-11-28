import React, { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

const defaultMarkdown = `
# This is a header (H1 size)

## This is a sub-header (H2 size)

This is a link.

This is an inline code: \`console.log('Hello World!')\`.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

\`\`\`
asdjhasd
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


        1. And there are numbered lists too.
        1. Use just 1s if you want!
        1. And last but not least, let's not forget embedded images:
        
        ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`




function App() {
  
  const [editorValue, setEditorValue] = useState(defaultMarkdown)
  
  const newLine = () => {

    if(event.keyCode == 13) {
      return <br></br>
    }
  }
  
  let countForHeight = 0;

  function hideContainer(containerToHide) {
    const container = document.getElementById(containerToHide);
    if (containerToHide == "previewBox"){
      document.getElementById("editorBox").style.height = "800px";
      countForHeight++;

      if(countForHeight > 1){
        document.getElementById("editorBox").style.height = "100px";
        countForHeight = 0;
      }
    }
    
    container.style.display == 'none' ? container.style.display = 'block' : container.style.display = 'none';
  }


  return (
    <>
      <div>
        <div className="container">
        <h1 id="title">Markdown Previewer</h1>
          <div id="editorBox">
            <div className="topBar">
              <h3>Editor</h3>
              <button onClick={() => hideContainer("previewBox")}><i className="fa fa-arrows-alt"></i></button>
            </div>
            <textarea name="editor" id="editor" value={editorValue} onChange={(e) => setEditorValue(e.target.value)} onKeyDown={() => newLine()}/>
          </div>
          <div id='previewBox'>
            <div className="topBar">
              <h3>Previewer</h3>
              <button onClick={() => hideContainer("editorBox")}><i className="fa fa-arrows-alt"></i></button>
            </div>
            <div id="preview">
              <ReactMarkdown  onKeyDown={newLine}>{editorValue}</ReactMarkdown>             
            </div> 
          </div>
        </div>      
      </div>
    </>
  )
}

export default App
