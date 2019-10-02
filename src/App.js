import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    //  https://tleunen.github.io/react-mdl/components/layout/ 
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link className="nav-title" style={{color: '#fff'}} to="/">My Portfolio</Link>} scroll>
                <Navigation>
                    <Link to="/resume" className="nav-link">Resume</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a href="https://kexizeroing.github.io" className="nav-link" rel="noopener noreferrer" target="_blank">Blog</a>
                    <a href="https://www.yuque.com/u235546/qz3u9h" className="nav-link" rel="noopener noreferrer" target="_blank">Knowledge</a>
                </Navigation>
            </Header>
            <Drawer title={<Link className="nav-title" style={{color: '#000'}} to="/">My Portfolio</Link>}>
                <Navigation>
                    <Link to="/resume" className="nav-link">Resume</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <a href="https://kexizeroing.github.io" className="nav-link" rel="noopener noreferrer" target="_blank">Blog</a>
                    <a href="https://www.yuque.com/u235546/qz3u9h" className="nav-link" rel="noopener noreferrer" target="_blank">Knowledge</a>
                </Navigation>
            </Drawer>
            <Content>
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
