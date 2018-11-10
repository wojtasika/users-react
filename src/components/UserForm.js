import React, { Component } from 'react';



class UserForm extends Component {

    addUser = (e) => {
        e.preventDefault();
        console.log(this.inputValue.value);
        this.props.update(this.inputValue.value);
    }

  render() {
    return (
      <form onSubmit={this.addUser}>
          <input type="text" placeholder="Nazwa uzytkownika" ref={(data)=>{this.inputValue = data}}/>
          <input type="submit" value="Prześlij" />

      </form>
    );
  }
}

export default UserForm;