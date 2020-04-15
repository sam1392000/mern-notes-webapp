import React, { Component } from 'react'
import axios from 'axios'

 class CreateUser extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:" "
         }   
     }
     onchangeUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
 }
 onSubmit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username
        }
        console.log(user)
        axios.post("http://localhost:5000/user/add",user)
            .then((res)=>console.log(res.data));
        this.setState({
            username:''
        })

 }

     
    render() {
        return (
            <div>
                <h2>Create New User</h2>
                <form onSubmit={this.onSubmit}>
                    <div  className="form-group">
                        <label>User Name</label>
                        <input type='text' required 
                        onChange={this.onchangeUserName}
                        value={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                        value="Create User"
                        className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser
