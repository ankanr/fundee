import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'


class Demo extends Component{
	render(){
		return <div className="maindiv_style">
		<h1> Hello {this.props.name} </h1>

		<p> Welconming you guys lets rock!!!!!! </p>
		</div>
	}
}
 export default Demo;