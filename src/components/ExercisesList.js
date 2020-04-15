import React, { Component } from 'react'
import Exercise from './Exercise'
import axios from 'axios'
 class ExercisesList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              exercises:[]
         }
         
     }
     componentDidMount(){
         axios.get('http://localhost:5000/exercise/')
            .then(res=>{
                this.setState({
                    exercises:res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
     }
     deleteExercise=(id)=>{
            axios.delete('http://localhost:5000/exercise/'+id)
                .then(res=>{
                    console.log(res.data)
                })
                this.setState({
                    exercises:this.state.exercises.filter(ex=>ex._id!==id)
                })
     }
     exerciselist=()=>{
         return this.state.exercises.map(currentexercise=>{
             return <Exercise exercise={currentexercise}
              deleteExercise={this.deleteExercise} 
              key={currentexercise._id}/>
         })
     }
     
    render() {
        return (
            <div>
                <h3>Logged Exercise</h3>
                <table  className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciselist()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExercisesList
