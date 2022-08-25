import React from 'react';

export const Page = (props) => {

  return <>
    <h2>{props.page.title}</h2>
      <h3>{props.page.author}</h3>
      <p>{props.page.content}</p>
  </>
} 
	