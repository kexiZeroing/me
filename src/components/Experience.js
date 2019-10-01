import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <h5 style={{marginTop:'0px'}}>{this.props.company}</h5>
                    <p className="work-item"> - {this.props.title}</p>   
                    <p className="work-item"> - {this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}
