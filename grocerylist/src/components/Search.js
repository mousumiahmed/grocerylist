import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron } from 'reactstrap';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			first_name : ""
			
		}
	}

    handleInput = (event) => this.setState({[event.target.name] : event.target.value})
    

	render(){
		return (
			<React.Fragment>
				<input type = "text" onChange = {this.handleInput} name = "first_name" value = {this.state.first_name}/>
				
				<button 
					onClick = {() => this.props.handleSearch(this.state.first_name)} className="bg-warning"> 
					Enter first_name
				</button> 
			</React.Fragment>
		);
	}
}