import React from "react";
import { getUser } from "../../api";
import UserCard from "./UserCard";
import './style.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    getUser().then((data) => {
      const { results } = data;
      this.setState({
        users: results,
      });
    });
  }

  renderMoreUsers() {
    return this.state.users.map((oneUser) => 
      <UserCard user={oneUser} key={oneUser.login.uuid}/>
    );
  }

  render() {
    return <>{this.renderMoreUsers()}</>;
  }
}

export default UserList;
