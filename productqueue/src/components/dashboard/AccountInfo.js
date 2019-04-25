import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateUserInfo} from '../../actions';
import {Button} from '../../styles';


class AccountInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          disabled: true,
          user: {}
        }
      }
    
      componentDidMount() {
        this.setState({
          user: this.props.user
        })
      }

      updateUser = e => {
        console.log("updateUser has fired", e)
        const token = localStorage.getItem("token");
        const newInfo = this.state.user;
        e.preventDefault()
        this.props.updateUserInfo(newInfo, token)
        this.setState({
          disabled: true
        })
      }

      changeHandler = e => {
        console.log("changeHandler has fired", e)
        this.setState({
          user: {
            ...this.state.user,
            [e.target.name]: e.target.value
          }
        })
      }

      editHandler = () => {
        if (!this.state.disabled) {
          this.setState({
            user: this.props.user,
            disabled: true
          })
        } else {
          this.setState({
            disabled: false
          })
        }
      }

render(){
    return(
        <div>
            <h2>Account Info</h2>
            <fieldset disabled={this.state.disabled}>
            <form onSubmit={this.updateUser}>
                <p onClick={() => this.editHandler()}>
                {this.state.disabled ? 'EDIT' : 'CANCEL'}
                </p>

                <label htmlFor="first_name">First Name</label>
                <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={this.changeHandler}
                defaultValue={this.state.user.first_name}
                disabled={this.state.disabled}
                />

                <label htmlFor="last_name">Last Name</label>
                <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={this.changeHandler}
                defaultValue={this.state.user.last_name}
                disabled={this.state.disabled}
                />

                <label htmlFor="email">Contact Email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="ex. example@example.com"
                onChange={this.changeHandler}
                defaultValue={this.state.user.email}
                disabled={this.state.disabled}
                aria-label="email"
                />

                <label htmlFor="company">Company</label>
                <input
                type="text"
                id="company"
                name="company"
                onChange={this.changeHandler}
                defaultValue={this.state.user.company}
                disabled={this.state.disabled}
                />
                {this.state.disabled ? null : <button type="submit">Submit</button>}
            </form>
            </fieldset>
        </div>
    )
}
    
    
}


const mapStateToProps = state => {
    console.log('Account information for user', state)
    return {
      user: state.authReducer.user
    }
  }
  
  export default connect(
    mapStateToProps,
    {updateUserInfo}
  )(AccountInfo)