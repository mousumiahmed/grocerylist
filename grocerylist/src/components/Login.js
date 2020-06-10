import React, { Component } from 'react';
import axios from 'axios';
import { declareExportAllDeclaration } from '@babel/types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      loggedin:false,
      persons:[]
    }
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
      axios.get('https://reqres.in/api/users')
          .then(response => {
            console.log(response);
              this.setState({ 
                person: response.data.data, 
               
              });
             })
             .catch(function (error) {
                 console.log(error);
                 
             })
             console.log(this.state.persons)
         }

          onChangeFirstName(e) {
          this.setState({
               first_name: e.target.value
           });
          }
          
           onSubmit(e) {
           e.preventDefault();
           const first_name = {
           first_name: this.state.first_name
           };
           console.log(this.state.persons)
           this.state.persons.map((val,index)=>{
             if(first_name==val.first_name){
               this.setState={
                loggedin:true
              }
               }
               else{
                 alert("enere name correctly");
               }
           })
           }
 
  render() {
    console.log(this.state.persons)
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Your first_name:  </label>
                        <input type="text" className="form-control" placeholder="Enter first_name" value={this.state.first_name} onChange={this.onChangeFirstName} />
                    </div>
                    <div className="form-group">
                        <input type="submit"  className="btn btn-primary"/>
                    </div>
                </form>
        </div>
    )
  }
}