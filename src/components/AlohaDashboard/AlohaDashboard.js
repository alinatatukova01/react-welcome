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
          id: 1,
        },
        {
          firstName: "Max",
          lastName: "Ferstrappen",
          id: 2,
        },
        {
          firstName: "Charles",
          lastName: "Leclerc",
          id: 3,
        },
        {
          firstName: "Sebastian",
          lastName: "Vettel",
          id: 4,
        },
        {
          firstName: "Fernando",
          lastName: "Alonso",
          id: 5,
        },
      ],
      sortDirection: true,
    };
  }

  userToAloha() {
    const { usersArray } = this.state;
    return usersArray.map((user) => (
      <Aloha key={user.id} name={user.firstName} lastName={user.lastName} />
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
