const defaultMD = `# Scratch.md
### A very simple Markdown previewer

---

Instructions:

1. Type your markdown in the left pane.
2. See the changes in the right pane.
3. ?????
4. Profit!

---

If you need to learn how to get started with Markdown, [read this](http://daringfireball.net/projects/markdown/basics).

This project was completed as part of [FreeCodeCamp's JavaScript curriculum](http://www.freecodecamp.com).

Be sure to checkout [WriteMe.md](http://writeme.mattstow.com/), which was a visual inspiration for this project.`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userInput: marked(defaultMD, {sanitize: true})};
  }

  updateUserInput(event) {
    const md = marked(event.target.value.toString(), {sanitize: true});
    this.setState({ userInput: md });
  }

  render() {
    return (
      <div className="body">
        <UserForm updateInputHandler={this.updateUserInput.bind(this)}/>
        <Preview userInput={this.state.userInput}/>
      </div>
    )
  }
}

class UserForm extends React.Component {

  render() {
    return (
      <div className="userForm">
        <textarea autoFocus onChange={this.props.updateInputHandler} defaultValue={defaultMD}></textarea>
      </div>
    )
  }
}

class Preview extends React.Component {
  rawMarkup(md) {
    return {__html: md};
  }

  render() {
    return (
      <div className="preview">
        <span dangerouslySetInnerHTML={this.rawMarkup(this.props.userInput)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
