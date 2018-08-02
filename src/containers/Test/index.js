import React, { Component } from 'react';


class Text extends Component {
    
    render() {
        console.log(this.props)

        return <h1>{this.props.count}</h1>
    }
}


class Test extends Component {

    state = {
        count: 0,
        name: 'dream',
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        const obj = {
            name: 'dream',

        }
        return (
            <div>
                <p>
                    <button onClick={this.handleClick}>点击</button>
                </p>
                <Text {...this.state} />
            </div>
        )
    }
}

export default Test;



