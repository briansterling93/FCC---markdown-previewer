import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Styling from './Styling.scss';

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:  "# This is a header",
      subHeader: '## This is a subheader'
    }
  }
    // updateText(e) {   
    //     const output = document.getElementById('userText').innerHTML = e.target.value;
    // }
    render() {
      const placeholder = 
      '# This is a header';

    
        return (
          <div id='element'>
              <div id='editor'>
                <header><h2 className='headers'>Editor</h2></header>
                <textarea rows="14" cols="88" className='editorColor' value={placeholder} onChange={this.updateText}>
                
                </textarea>
              </div>
                  <br />
                    <div id='preview'>
                      <header><h2 className='headers'>Previewer</h2></header>
                        <div id='userText'>
                          <div id='headerTxt'><ReactMarkdown source={this.state.header} /></div>
                            <div id='subHeader'><ReactMarkdown source={this.state.subHeader} /></div>
                              <div id='link'></div>
                                <div id='inlineCode'></div>
                                  <div id='codeBlock'></div>
                                    <div id='listItem'></div>
                                      <div id='blockQoute'></div>
                                        <div id='image'></div>
                                          <div id='boldedText'></div>
                        </div>
                     </div>
          </div>
        )
    }
}

export default MarkDown;