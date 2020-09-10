import React,{Component} from 'react';

class Welcome extends Component{
	state={
			message:"Welcome Visitor"
		};
	
	changemessage(){
		this.setState({
			message:'Thankyou for subscribing '
		})
	}
render(){
	return(<div>
		<h1>
		{this.state.message}
		</h1>
		<button onClick={()=> this.changemessage()}>Krr mjaa aayega!!</button></div>
)
}
}
export default Welcome;