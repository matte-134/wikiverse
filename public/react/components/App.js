import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Form} from './Form'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [forms, setForms] = useState(false)

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	 
      		<h1 className='title'>WikiVerse</h1>
			<h2 className='header'>An interesting 📚</h2>
			<PagesList pages={pages} />
			<button onClick={() => setForms(!forms)}>Click here to add new Page</button>
			{forms ? <Form /> : null} 
		</main>
	)
}