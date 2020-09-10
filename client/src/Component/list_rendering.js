import React from 'react'

const search = ({target}) => {
this.setState({item:target.value});
};
function Details(){
	const person = [
	{
		id:1,
		name:"mohit",
		age:20
	},
	{
		id:2,
		name:"Raman",
		age:25
	},
	{
		id:3,
		name:"Ankit",
		age:30
	}
]

const list = person.map((person,index) =>	
	<h2 id="index">
 	{person.id} {person.name} {person.age}
 	</h2>
 	)
 	return <div>
 	<input 
 	type="text"/>
 	<input 
 	type="button" 
 	value="Search"/>
 	{list}
</div>
 }
 
 export default Details

