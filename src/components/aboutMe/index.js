import React from 'react';
import styles from 'styled-components';
import profilePic from '../../assets/profilePic.jpg';

const ContentWrapper = styles.div`
flex-direction: row;
justify-content: center;
margin: 0 auto;
height: 100vh;
color: black;
`;

const ProfilePic = styles.div`
margin: 0 auto;
margin-top: 15%;
background-image: url(${profilePic});
background-repeat: no-repeat;
background-size: cover;
width: 300px;
height: 300px;
clear: right;
border-radius: 50%;
`;

const Title = styles.h1`
font-size: 2em;
text-align: center;
`;

class AboutMe extends React.Component {
    render() {
        return(
            <ContentWrapper>
                <ProfilePic/>
                <Title> Web Developer </Title>
            </ContentWrapper>
        )
    }
}

export default AboutMe;