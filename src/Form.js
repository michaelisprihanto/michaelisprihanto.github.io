import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }


  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange} />
          <label>Job</label>
          <input
            className="form-control"
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange} />
            <input className="btn btn-primary mt-3" type="button" value="Submit" onClick={this.submitForm} />
        </div>
      </form>
    );
  }

}

export default Form;
