import React, { Component } from 'react';

import UserForm from './components/UserForm';
import UsersList from './components/UsersList';


class Users extends Component {

    constructor() {
        super();

        this.state = {
            users:['Adam', 'Ola', 'Karol']
        }
    }

    updateUserList = (name) => {
        this.setState((prevState) => {
            return({users: prevState.users.concat(name)})

        });
    }

    deleteUser = (keyValue) => {
        console.log('usun uzytkownika z indexem' + keyValue);

        let updateUsersList = this.state.users.filter((user)=>{

            return this.state.users.indexOf(user) !== keyValue;
        });

        this.setState({
            users: updateUsersList
        });
    }



  render() {

    return (
      <div className="Users">
     <h1>User's list</h1>
     <UserForm  update={this.updateUserList}/>
     <UsersList  users={this.state.users} delete={this.deleteUser}/>
      </div>
    );
  }
}

export default Users;