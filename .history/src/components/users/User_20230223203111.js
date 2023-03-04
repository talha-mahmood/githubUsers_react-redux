
import React, { Component, Fragment} from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const User= ({user, loading,getUser,getRepos,repos,match})=>{ 
    componentDidMount(){
        this.props.getUser(match.params.login)
        this.props.getUserRepos(match.params.login)
    }

    
  render() {
    const{
        name,company,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable
    }=this.props.user;

    

    if(loading) return <Spinner/>
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable:{''}
        {hireable ? (<i className='fas fa-check text-success'/>):(<i className='fas fa-times-circle text-danger'/>)}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url} className='round-img' style={{width:'150px'}}/>
            <h1>{name}</h1>
            <p>Location :{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username:</strong>{login}
                  </Fragment>}
              </li>
               <li>
                {company && <Fragment>
                  <strong>Company:</strong>{company}
                  </Fragment>}
              </li>
               <li>
                {blog && <Fragment>
                  <strong>Website:</strong>{blog}
                  </Fragment>}
              </li>
            </ul>
          </div>
          <div className='card text-center'>
            <div className='badge bg-primary'>Followers: {followers}</div>
            <div className='badge bg-success'>Following: {following}</div>
            <div className='badge bg-danger'>Pubic repos: {public_repos}</div>
            <div className='badge bg-dark'>Public Gists: {public_gists}</div>
          </div>
          </div>

          <Repos repos={repos}/>
         
      </Fragment>
    )
  
}
User.propTypes={
  user:PropTypes.bool,
  loading:PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
}
export default User;