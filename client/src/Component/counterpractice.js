import React,{Component} from 'react';

class Count extends Component{
state={   // it contains all the dynamic values to be stored
	count:0,
	reset:0

}
incremented= () => {
	this.setState({
		count:this.state.count +1
	})
}
reset=()=>{
	this.setState({
		count:this.state.reset
	})
}
render(){
	return(
		<div>
			<div>
			<h4>count-{this.state.count}</h4></div>
			<button onClick={this.incremented}>Increment</button>
			<button onClick={this.reset}>Reset</button>
			</div>
		)
}
}
export default Count