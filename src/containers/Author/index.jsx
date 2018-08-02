import React from 'react';

export const Author = (props) => {
    let test = null;

    const handleClick = () => {
        test.style.color = 'red'; 
    }

    return(
        <div> 
            <div ref={(input) => test = input}>test</div>
            <h1 onClick={handleClick}>Author Component</h1>
        </div>
    )
}




export default Author;