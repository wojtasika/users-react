import React, { Component } from 'react';



class UsersList extends Component {

    removeUser = (key) => {
        console.log(key);
        this.props.delete(key);
    }


  render() {

    const listItems = this.props.users.map((user, index)=>{
        return <li key={index} onClick={()=>this.removeUser(index)}>{user}</li>;

    });

    return (
      <ul className="users-list">
     {listItems}
    </ul>
    );
  }
}

export default UsersList;