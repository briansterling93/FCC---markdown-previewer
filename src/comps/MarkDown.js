import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Styling from './Styling.scss';

class MarkDown extends Component {
    updateText(e) {   
        const output = document.getElementById('userText').innerHTML = e.target.value;
    }
    render() {
        return (
          <div id='element'>
              <div id='editor'>
                <header><h2 className='headers'>Editor</h2></header>
                <textarea rows="14" cols="88" className='editorColor' onChange={this.updateText}></textarea>
              </div>
              <br />
                <div id='preview'>
                <header><h2 className='headers'>Previewer</h2></header>
                  <div id='userText'></div>
                </div>
          </div>
        )
    }
}

export default MarkDown;