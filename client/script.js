class App extends React.Component {
  render() {
    return (
      <div className="body">
        <UserForm />
        <Preview />
      </div>
    )
  }
}

class UserForm extends React.Component {
  render() {
    return (
      <div className="userForm">
        <textarea autoFocus></textarea>
      </div>
    )
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <p>This is the Preview component.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
