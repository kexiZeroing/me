import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                    <h5 style={{marginTop:'0px'}}>{this.props.schoolName}</h5>
                    <p>{this.props.schoolDescription}</p>
                    <p>{this.props.degree}</p>
                </Cell>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
            </Grid>
        )
    }
}
