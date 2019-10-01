import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class Landingpage extends Component {
    state = {shouldQRCodeShow: false}

    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML | CSS | JavaScript | React | Vue | Angular | NodeJS | Express</p>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/dangkexi/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/kexiZeroing" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://twitter.com/DangKexi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                <a href="https://weibo.com/dangkexi/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-weibo" aria-hidden="true" />
                                </a>
                                <span 
                                    className="wx-button"
                                    onMouseEnter={() => this.setState({shouldQRCodeShow: true})}
                                    onMouseLeave={() => this.setState({shouldQRCodeShow: false})}
                                >
                                   {this.state.shouldQRCodeShow && <img className="qrcode-img" src="/img/qrcode.jpg" alt="qrcode"/>}
                                    <i className="fa fa-weixin" aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
