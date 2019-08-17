import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Styling from './Styling.scss';

class MarkDown extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     header:  "# This is a header",
  //     subHeader: '## This is a subheader'
  //   }
  // }
    // updateText(e) {   
    //     const output = document.getElementById('userText').innerHTML = e.target.value;
    // }
    render() {
        const placeholder =
          '# Welcome to my Markdown Previewer!<hr />\n\n## This is a subheading<hr />\n\n### And here are a few other cool gadgets:\n\nHere is a cool [Link](https://blank.org/) !\n\nYou can make text **bold**, _italic_, better yet **_both_**!..\n\n1.Create\n\n2.Numbered\n\n3.Lists!\n\n-Even Create..\n\n*Asterick\n\n-Lists! :D\n\n*Last but **NOT** least ;) - create cool images like the one below:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)'


        return (
          <div id='element'>
              <div id='editor'>
                <header><h2 className='headers'>Editor</h2></header>
                <textarea rows="14" cols="88" className='editorColor' onChange={this.updateText}>
                  {placeholder}
                </textarea>
              </div>
                  <br />
                    <div id='preview'>
                      <header><h2 className='headers'>Previewer</h2></header>
                        <div id='userText'>
                        <ReactMarkdown source={placeholder} escapeHtml={false} />
                        </div>
                     </div>
          </div>
        )
    }
}

export default MarkDown;