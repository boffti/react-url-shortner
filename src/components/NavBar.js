import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class MenuExampleHeader extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Container>

                    <Menu.Item header>URL Shortener</Menu.Item>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        position='right'
                        name='Log In'
                        active={activeItem === 'Log In'}
                        onClick={this.handleItemClick}
                    />
                </Container>
            </Menu>

        )
    }
}