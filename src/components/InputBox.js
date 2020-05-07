import React, { Component } from 'react'
import { Card, Heading } from 'react-bulma-components/dist'

export class InputBox extends Component {
    render() {
        //const translated = this.props.translator(this.props.listenTo)

        return (
            <Card>
                <Card.Content>
                    <Heading style={{textAlign: 'center'}}>
                        {this.props.icon} {this.props.speaker}
                    </Heading>
                    <textarea 
                        className="textarea" 
                        onChange={this.props.handleSpeak}
                        placeholder={this.props.placeholder}
                        value={this.props.speak}
                    >
                    </textarea>
                </Card.Content>
            </Card>
            
        )
    }
}


export default InputBox
