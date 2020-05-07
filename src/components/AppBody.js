import React, { Component } from 'react'
import { InputBox } from './InputBox'
import {Container, Section, Columns } from 'react-bulma-components/dist'
import { ConvertHumanToMachine , ConvertMachineToHuman } from '../functions/Translation'

const MachineIcon = <i className="fa fa-laptop"></i>;
const HumanIcon = <i className="fa fa-user"></i>

export class AppBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            human: '',
            machine: '',
        }
    }

    handleHumanChange = (event) => {
        this.setState({
            human: event.target.value,
            machine: ConvertHumanToMachine(event.target.value)
        });

    }

    handleMachineChange = (event) => {
        this.setState({
            human: ConvertMachineToHuman(event.target.value),
            machine: event.target.value,
        })
    }

    render() {
        return (
            <Section style={{height: '100%'}}>
                <Container fluid>
                    <Columns>
                        <Columns.Column>
                            <InputBox 
                                speaker="Human" 
                                icon={HumanIcon} 
                                speak={this.state.human}
                                handleSpeak={this.handleHumanChange}
                                listenTo={this.state.machine}
                                translator={ConvertMachineToHuman}
                                placeholder="Hello! I'm Human!"
                            />
                        </Columns.Column>
                        <Columns.Column>
                            <InputBox 
                                speaker="Machine" 
                                icon={MachineIcon} 
                                speak={this.state.machine}
                                handleSpeak={this.handleMachineChange}
                                listenTo={this.state.human}
                                translator={ConvertHumanToMachine}
                                placeholder= "01001000 01100101 01101100 01101100 01101111 00100001 00100000 01001001 00100111 01101101 00100000 01001000 01110101 01101101 01100001 01101110 00100001"
                            />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        )
    }
}

export default AppBody
