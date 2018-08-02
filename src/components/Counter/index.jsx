import React from 'react';



const Counter = props => {
    const { counter, users, increment, decrement, incrementIfOdd, incrementAsync,  beginFetchData } = props;
    
    const asyncFetch = () => {
        beginFetchData();
    }

    const fn = () => {
       incrementAsync({
        type: 'INCREMENT_ASYNC'
       })
    }


    return (
        <div>
            <span> counter: { counter }</span>
            {' '}
            <button type="primary" onClick={increment}>increment</button>
            {' '}
            <button type="primary" onClick={decrement}>decrement</button>
            {' '}
            <button type="primary" onClick={incrementIfOdd}>incrementIfOdd</button>
            {' '}
            <button type="primary" onClick={fn}>incrementAsync</button>
            {' '}
            <button type="primary" onClick={asyncFetch}>request_user_repos</button>
            <div>{users && JSON.stringify(users)}</div>
        </div>
    )
};

export default Counter;