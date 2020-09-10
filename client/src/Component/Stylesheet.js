import React from 'react'
/*import './Mystyle.css'

function Stylesheet(props){
	let className =props.primary?'primary':''
	return (<div>
		<h1 className={`${className} font `}> Stylesheet</h1>
		</div>)

}

export default St8lesheet*/    

// until this is stylesheet now will do inline styling


const heading={
	fontSize:'90px',                    //camelcase should be present
	color:'red',
	textAlign:'center'
}

function Stylesheet (){
	return(
		<div>
		<h1 style={heading}> Inline 
		</h1>
		</div>

		)
}


export default Stylesheet