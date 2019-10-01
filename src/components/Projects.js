import React, { Component } from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

export default class Projects extends Component {
    render() {
        let gridStyle = {
            minWidth: '450', 
            margin: '0 16px 46px 0'
        }

        return (
            // <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            //     <Tab>React</Tab>
            //     <Tab>Angular</Tab>
            //     <Tab>VueJS</Tab>
            // </Tabs> 
            <Grid>
                <Cell col={12}>
                    <div className="projects-grid">
                        <Card shadow={5} style={gridStyle}>
                            <CardTitle style={{color: 'darkviolet', height: '176px', background: 'url(/img/shopping-bg.jpg) center / cover'}} >e-shopping</CardTitle>
                            <CardText>
                                Smart phone shopping. Use Styled-Component with Create React App.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/kexiZeroing/shopping-cart" rel="noopener noreferrer" target="_blank"> 
                                    <Button colored ripple={true}>GitHub</Button>
                                </a>
                                <a href="https://shopping-kexi.netlify.com" rel="noopener noreferrer" target="_blank"> 
                                    <Button colored ripple={true}>Demo</Button>
                                </a>
                            </CardActions>
                        </Card>

                        <Card shadow={5} style={gridStyle}>
                            <CardTitle style={{color: 'darkviolet', height: '176px', background: 'url(/img/ricebook-bg.png) center / cover'}} >Ricebook</CardTitle>
                            <CardText>
                                Angular social platform. You can use the test user (kobe, 123) to login. Have fine with it.
                            </CardText>
                            <CardActions border>
                                <a href="https://ricebook-kd38.surge.sh" rel="noopener noreferrer" target="_blank"> 
                                    <Button colored ripple={true}>Demo</Button>
                                </a>
                            </CardActions>
                        </Card>

                        <Card shadow={5} style={gridStyle}>
                            <CardTitle style={{color: 'darkviolet', height: '176px', background: 'url(/img/chatroom-bg.png) center / cover'}} >Chatroom</CardTitle>
                            <CardText>
                                Chatroom supported by Websocket. Full Duplex communication.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/kexiZeroing/chatroom" rel="noopener noreferrer" target="_blank"> 
                                    <Button colored ripple={true}>GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                </Cell>
            </Grid>
        )
    }
}
