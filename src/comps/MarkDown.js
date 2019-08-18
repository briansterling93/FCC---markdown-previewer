import React from "react";
import ReactMarkdown from "react-markdown";
import Styling from "./Styling.scss";

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: `# Welcome to my Markdown Previewer!<hr />
      \n\n## This is a subheading<hr />
      \n\n### And here are a few other cool gadgets:
      \n\nHere is a cool [Link](https://blank.org/) !
      \n\nYou can make text **bold**, _italic_, better yet **_both_**!..
      \n\n1.Create
      \n\n2.Numbered
      \n\n3.Lists!
      \n\n-Even Create..
      \n\n*Asterisk
      \n\n-Lists! :D
      \n\n*Last but **NOT** least ;) - create cool images like the one below:
      \n\n![React Logo w/ Text](https://goo.gl/Umyytc)`
    };
  }
  updateText(e) {
    document.getElementById("userText").innerHTML = this.placeholder;
  }
  render() {
    return (
      <div id="element">
        <div id="editorDiv">
          <header>
            <h2 className="headers">Editor</h2>
          </header>
          <textarea
            rows="14"
            cols="88"
            className="editorColor"
            value={this.state.placeholder}
            name="placeholderValue"
            onChange={this.updateText}
            id="editor"
          />
        </div>
        <br />
        <div id="previewDiv">
          <header>
            <h2 className="headers">Previewer</h2>
          </header>
          <div>
            <p id="preview">
              <ReactMarkdown
                source={this.state.placeholder}
                escapeHtml={false}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkDown;
