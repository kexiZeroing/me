import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';

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
                        <h4>Education</h4>
                        <Education
                            startYear={2010}
                            endYear={2014}
                            schoolName="Beijing University of Technology"
                            degree="Bachelor of Engineering"
                        />
                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName="Rice University"
                            degree="Master of Computer Science"
                        />
                        <hr style={{borderTop: '3px solid palegoldenrod'}} />

                        <h4>Work Experience</h4>
                        <Experience
                            company="XuetangX"
                            title="Front-end Engineer"
                            jobDescription="Built the Rain-classroom Wechat miniprogram used in Tsinghua University"
                        />
                        <Experience
                            company="Baidu Online Network Technology (Beijing) Co.,Ltd"
                            title="Front-end Engineer"
                            jobDescription="Baidu Education department"
                        />
                        <Experience
                            company="Lianjia"
                            title="Front-end Engineer"
                            jobDescription="New estate web team"
                        />
                        <hr style={{borderTop: '3px solid palegoldenrod'}} />

                        <h4>Skills</h4>
                        <ul> 
                            <li><i>Programming language: &nbsp;</i> JavaScript, Java, PHP, C, C++</li>
                            <li><i>Web development: &nbsp;</i> HTML, CSS (SASS), JavaScript (TypeScript), jQuery, React, Angular, Vue, Webpack, NPM, Babel, Redux, GraphQL API, Jasmine, Node.js, Express, MongoDB</li>
                        </ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
