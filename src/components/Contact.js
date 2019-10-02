import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import me from '../images/me.jpg';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kexi Dang</h2>
                        <img
                            src={me}
                            alt="avatar"
                            style={{height: '200px', borderRadius: '12px'}}
                        />
                        <p style={{ width: '85%', margin: 'auto', paddingTop: '1.5em'}}>
                            I will graduate in Dec 2019 at Rice University. I have worked for nearly 4 years after my undergraduate study as a front-end engineer. I'm always passionate and curious about web development and open to communicate. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (713) 449-6980
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        kd38@rice.edu
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-twitter-square" aria-hidden="true"/>
                                        @DangKexi
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
