import React, {useEffect, useState} from "react";
import apiURL from '../api';
import seedData from "../../../server/seedData";

export const Form = () => {
	const [selectUsers, setSelectUsers] = useState([])
	const [getEmail, setGetEmail] = useState('')
	const [pages, setPages] = useState(pages)
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [name, setName] = useState('')
	const getusers = async () => {
		const res = await fetch(`${apiURL}/users`)
		const data = await res.json()
		setSelectUsers(data)
	}
	const findEmail = () => {
		setGetEmail(user.email)
	}

	useEffect(() => {
		getusers()
	}, [])


	// function findE(name) {
	// 	if(name === selectUsers.name) {
	// 		return selectUsers.email
	// 	}
	// }
	const handleChange = (e) => {
		setName(e.target.value)
		// setGetEmail(selectUsers.find(findE({name})))
	}

	const handleSubmit = (ev) => {
		ev.preventDefault()
		const postContent = async () => {
			console.log(name)
			const res = await fetch(`${apiURL}/wiki`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({'name': name, 'email': '', 'title': title, 'content': content})
			// const data = await res.json()
			// console.log(data)
		})
	}
		postContent()
		// setPages([...pages, {title, content}])
		// setTitle('') 
		// setContent('')
	}


	
    return <div>
            <form onSubmit={handleSubmit} className="newForm">  
				<h1>Add new Page</h1>
				<input onChange={e => setTitle(e.target.value)} type="text" placeholder='title' value={title}/>
				<select onChange={handleChange} value={name}>
					<option value='default'>Select Name</option>
					{selectUsers.map(user => <option value={user.name}>{user.name}</option>)}
				</select>
				<input onChange={e => setContent(e.target.value)} type="text" placeholder="content" value={content}/>
				{/* <input type="text" placeholder='tag' value={tag}/> */}
				<button type='submit'>Submit</button>
			</form>
        </div>
	
    
	}
