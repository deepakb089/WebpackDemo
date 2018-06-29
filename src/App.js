import React from 'react'

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.incrBy1 = this.incrBy1.bind(this)
    }

    render() {
        return (
            <React.Fragment>
                <h1> The count is: {this.state.count} </h1>
                <p>
                    <input type="button" value="Increment" onClick={this.incrBy1} />
                </p>
            </React.Fragment>
        )
    }

    incrBy1() {
        console.log('incrBy1')
        this.setState({
            count: this.state.count + 1
        })
    }


}