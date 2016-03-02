class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ''};
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
        <textarea autoFocus onChange={this.props.updateInputHandler}></textarea>
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
