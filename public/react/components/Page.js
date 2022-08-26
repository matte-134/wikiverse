import React, {useState} from 'react';

export const Page = (props) => {
const [isShown, setIsShown] = useState(false)
  return <>
    <h2 className="articleTitle" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>{props.page.title}</h2>
    {isShown && (
      <p className='article'>{props.page.content}</p>
    )}
  </>
} 
	