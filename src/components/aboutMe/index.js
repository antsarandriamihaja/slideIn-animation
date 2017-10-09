import React from 'react';
import styles from 'styled-components';
import profilePic from '../../assets/profilePic.jpg';
import macwallpaper from '../../assets/macwallpaper.jpg';
import jsLogo from '../../assets/javascript.jpg';
import html5Logo from '../../assets/html5.jpg';
import css3Logo from '../../assets/css3.jpg';
import githubLogo from '../../assets/github.jpg';
import reactLogo from '../../assets/React-Logo-1.jpg';
import nodeLogo from '../../assets/nodejs.jpg';
import { Motion, spring } from 'react-motion';

const ContentWrapper = styles.div`

background: url(${macwallpaper});
background-repeat: no-repeat;
background-size: cover;
display: flex;
height: 100vh;
justify-content: center;
flex-direction: column;
`;

const About = styles.div`
margin: 0 auto;
padding: 10px 30px;
border-radius: 25px;
width: 50%;
background: rgba(245, 245, 245, 0.1);
`;

const Logo = styles.div`
background-image: url(${(props) => props.image});
background-repeat: no-repeat;
background-size: cover;
width: 200px;
height: 100px;
margin: 10px;
`;

const LogoContainer = styles.div`
width: 50%;
margin: 0 auto;
display: flex;
flex-flow: row wrap;
`;
const Title = styles.h1`
font-size: 2.5em;
`;

const Subtitle = styles.h3`
font-size: 1em;
text-align: left;
text-transform: uppercase;
color: #616161;
`;

const Button = styles.button`
color: white;
background-color: black;
font-size: 1em;
padding: 1em;
border: 0.5px solid black;
border-radius: 25px;
float: right;
`;
class AboutMe extends React.Component {
    render() {
        const { handleShowPortfolio } = this.props;

        return (
                <ContentWrapper>

                    <About >
                        <Title> Hi, I'm Antsa. I'm a web developer.I enjoy building beautiful and interactive web apps with Javascript technologies.</Title>
                        <Subtitle>front-end developer | node js developer </Subtitle>
                        <Button 
                            onClick={handleShowPortfolio}
                        >View Portfolio >></Button>
                    </About>

                </ContentWrapper>

        )
    }
}

export default AboutMe;