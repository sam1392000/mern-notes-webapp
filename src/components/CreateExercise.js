import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 class CreateExercise extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              description:'',
              duration:0,
              date:new Date(),
              user:[]
         }
     }
     componentDidMount(){
         axios.get('http://localhost:5000/user/')
            .then((res)=>{
                if(res.data.length > 0){
                    this.setState({
                        user:res.data.map(user=>user.username),
                        username:res.data[0].username
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
     }
     onChangeUserName=(e)=>{
            this.setState({
                username:e.target.value
            })
     }
     onChangeDuration=(e)=>{
        this.setState({
            duration:e.target.value
        })
   }
   onChangeDescription=(e)=>{
    this.setState({
        description:e.target.value
    })
}
    onChangeDate=(e)=>{
      this.setState({
        date:e
      })
  }
  onSubmitForm=(e)=>{
      e.preventDefault();
      const exercise={
          username:this.state.username,
          description:this.state.description,
          duration:this.state.duration,
          date:this.state.date
      }
      console.log(exercise)
      axios.post('http://localhost:5000/exercise/add',exercise)
            .then((res)=>console.log(res.data))
      this.setState({
        username:'',
        description:'',
        duration:0,
        date:new Date(),
        user:[]
      })
  }
    render() {
        return (
            <div>
                <h3>Create Exercise List</h3>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label>UserName</label>
                        <select type='text' required 
                        value={this.state.username}
                        className="form-control"
                        onChange={this.onChangeUserName}>
                            {
                                this.state.user.map((user)=>{
                                    return(
                                        <option 
                                        key={user}
                                        value={user}>
                                            {user}
                                        </option>
                                    )
                                })
                            }
                        </select>    
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type='text' value={this.state.description}
                        onChange={this.onChangeDescription}
                        className='form-control'
                       />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input text='text'
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <DatePicker selected={this.state.date}
                        onChange={this.onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Create new Exercise'
                        className="btn btn-primary"/>
                    </div>

                </form> 
            </div>
        )
    }
}

export default CreateExercise
