import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
    //to clear the data from input
    this.input.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NameForm;
