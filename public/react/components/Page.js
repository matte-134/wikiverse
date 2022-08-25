import React, {useState} from 'react';

export const Page = (props) => {
const [isShown, setIsShown] = useState(false)
  return <>
    <h2 onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>{props.page.title}</h2>
    {isShown && (
      <p>{props.page.content}</p>
    )}
  </>
} 
	