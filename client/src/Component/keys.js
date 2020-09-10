import React from 'react'

function Key (){
	const names=["Bruce","Dyna","Clerk"]
	/*let person=[
	{
		id:19,
		name:'Bruce',
		age:30,
		skill:'React'
	},
	{
		id:27,
		name:'Daisy',
		age:32,
		skill:'Node'
	},
	{
		id:35,
		name:'Harry',
		age:20,
		skill:'Angular'
	}
	]*/
	const namelist = names.map((name,index) => <h2 Key={index}>{index} {name}</h2>)
	return(
		<div>
		{
			namelist
		}
		</div>
		)
}

export default Key
