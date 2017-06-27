var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component',
    };
  },
  render: function() {

    var name = this.props.name,
        message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!!"}</p>
      </div>
    );
  }
});

var firstName = "Chris",
      message = "Message from Prop";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
);