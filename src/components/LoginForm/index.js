// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', isValid: true}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      statusCode: data.status_code,
      errorMsg: data.error_msg,
    }

    if (response.ok === true) {
      this.onSubmitSuccess()
      this.setState({isValid: true})
    } else {
      this.setState({isValid: false, errorMsg: formattedData.errorMsg})
    }
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={this.updateUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.updatePassword}
        />
      </div>
    )
  }

  render() {
    const {isValid, errorMsg} = this.state
    return (
      <div className="login-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-img"
          />
          <div>{this.renderUsernameField()}</div>
          <div>{this.renderPasswordField()}</div>
          <button type="submit">Login</button>
          {isValid ? null : <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
