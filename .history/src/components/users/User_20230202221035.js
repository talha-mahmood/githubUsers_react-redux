import constants from 'picomatch/lib/constants';
import React, { Component } from 'react'

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.match.params.login)
    }
  render() {
    const{
        name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hirable
    }
    return (
      <div>User</div>
    )
  }
}
export default User;