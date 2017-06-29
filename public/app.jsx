var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some h1!</h1>
        <p>Some Paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component',
    };
  },

  getInitialState: function () {
    return {
      name: this.props.name
    };
  },

  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    this.setState({
      name: name
    });

  },

  render: function() {

    var name = this.state.name,
        message = this.props.message;

    return (
      <div>

        <h1>Hello {name}</h1>
        <p>{message + "!!"}</p>

        <GreeterMessage />

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>

        <GreeterForm />

      </div>
    );
  }
});

var firstName = "Chris",
      message = "Message from Prop";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app');
);