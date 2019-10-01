import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <img
                            src="/img/me.jpg"
                            alt="avatar"
                            style={{height: '180px', borderRadius: '50%'}}
                        />
                        <h3>Kexi Dang</h3>
                        <hr className="hr-line"/>

                        <h5>Address</h5>
                        <p>Houston, TX</p>
                        <h5>Email</h5>
                        <p>dangkexi@gmail.com</p>
                        <h5>Web</h5>
                        <p><a className="web-link" href="https://kexizeroing.github.io" rel="noopener noreferrer" target="_blank">https://kexizeroing.github.io/</a></p>
                        <hr className="hr-line"/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
