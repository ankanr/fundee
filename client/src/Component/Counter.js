import React,{Component} from 'react';

class Counter extends Component{
	state={                                               // it contains all the data needed in the program
		count :0,
		reset:0
	};

	render(){   
		return(
			<div>
			<span  style={{fontSize:25 }} className={this.getBadgeClasses()}>{this.formatCount()} </span>
			<button  onClick={this.incremented}> Increment</button>
			<button onClick={this.reset} className="btn btn-secondary btn-sm m-2">Reset</button>
			</div>
		);
	}

	incremented =()=>{
		this.setState({count:this.state.count +1})
	}

	reset =()=>{
		this.setState({count:this.state.reset})
	}

getBadgeClasses(){
		let classes="badge m-2 badge-"
		classes+=this.state.count===0?'warning':'primary';     
		///primary gives blue color where warning =yellow
        return classes;
}


formatCount(){                  /// function used
	//const {count}=this.state;
	return this.state.count===0?'Zero':this.state.count; 
	}
}
export default Counter;