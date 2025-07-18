import React from "react";
import Aloha from "../Aloha/Aloha";

class Alohadashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [
        {
          firstName: "Luice",
          lastName: "Hamilton",
        },
        {
          firstName: "Max",
          lastName: "Ferstrappen",
        },
        {
          firstName: "Charles",
          lastName: "Leclerc",
        },
        {
          firstName: "Sebastian",
          lastName: "Vettel",
        },
        {
          firstName: "Fernando",
          lastName: "Alonso",
        },
      ],
      sortDirection: true,
    };
  }

  userToAloha() {
    const { usersArray } = this.state;
    return usersArray.map((user) => (
      <Aloha name={user.firstName} lastName={user.lastName} />
    ));
  }

  sortUsers() {
    const { usersArray, sortDirection } = this.state;
    const newArray = [...usersArray];
    newArray.sort((a, b) => {
      if (sortDirection) {
        return a.firstName > b.firstName ? 1 : -1;
      } else {
        return a.firstName > b.firstName ? -1 : 1;
      }
    });
    this.setState({
      usersArray: newArray,
      sortDirection: !sortDirection,
    });
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.sortUsers();
          }}
        >
          Sort!
        </button>
        {this.userToAloha()}
      </>
    );
  }
}

export default Alohadashboard;
