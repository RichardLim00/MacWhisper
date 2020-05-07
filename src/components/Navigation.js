import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {Navbar, Heading} from 'react-bulma-components'


export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="warning"
                >
                    <Navbar.Brand>
                        <Navbar.Item href="/">
                            <Heading>MacWhisper</Heading>
                        </Navbar.Item>
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
