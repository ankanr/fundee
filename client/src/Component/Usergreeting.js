import React,{Component} from 'react'

class Conditional extends Component{
       
      state={
      	isloggin: true 

       };

	render(){


     /*<let message

     if(this.state.isloggin){
     	message=<div>Welcome Mr Kaushik</div>
     }
   		else{
   			message=<div> Welcome Mr Guest</div>
   		}
	return(<div>{message}</div>
)*/
return(
	this.state.isloggin?
	<div>Welcome Bhai </div>:
	<div> Welcome Guest ....Kese ho </div>
	)
 }  
}
export default Conditional	