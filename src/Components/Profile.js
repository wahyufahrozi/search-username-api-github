import React, { Component } from "react";
import { connect } from "react-redux";

import { getuser } from "../Public/Redux/Actions/user";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: ""
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = await this.props.dispatch(getuser(this.state.user));
    this.setState({
      data: this.state.userList
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">
            <b>GitHub Name</b>
          </label>
          <input
            id="name"
            name="user"
            placeholder="Enter your username"
            type="text"
            onChange={e => this.handleChange(e)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
