import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"


export default class Delete extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            quantity:""
        }
    }
    
    componentDidMount(){
        let list =""
        axios({
            method: 'get',
            url: `http://localhost:5000/users/${this.props.match.params.id}`,
            
        })
        .then((response) =>{
            console.log(response.data)
            this.setState({
                name :response.data[0].name,
                quantity:response.data[0].quantity
            })
           
           
        })
       
    }
    del =(id)=>{
      console.log(id)
   axios({
       method: 'GET',
       url: `http://localhost:5000/users/delete/` + id,
       
   })}
   render(){
       //console.log(this.props)
       return(
            <div className= "container">
                <form >
                <div className="form-group col-lg-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" value = {this.state.name}  />
                </div>
                <button className="btn btn-primary" type ="button" onClick ={() => { this.state.del(this.props.match.params.id); this.props.history.push('/')}} >Delete</button>
                </form>
            </div>
       )
   } 
}

