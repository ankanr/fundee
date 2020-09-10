import React,{Component} from 'react';

class Counters extends Component{

state={
	count :0,
	tags:['tag1','tag2','tag3','tag4']
}
// now we will check for condition whether the array is empty or not  (we can check only one condtion in jsx done in line no.22)


renderTags(){
	if(this.state.tags.length===0) return <p> No tags are presents !! </p>

	return 	 <ol>
       <li>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</li>
       </ol>
}
render(){
	return (
       <div>
       {this.state.tags.length!==0 && 'The elements are :'}    
       {this.renderTags()}
       </div>



		)
}
}
export default Counters;