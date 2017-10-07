import React from 'react';
import styles from 'styled-components';
import profilePic from '../../assets/profilePic.jpg';

const ContentWrapper = styles.div`
display: flex;
justify-content: center;
margin: 0 auto;
height: 100vh;
color: black;
`;

const ProfilePic = styles.div`
background-image: url(${profilePic});
background-repeat: no-repeat;
background-size: cover;
width: 200px;
height: 200px;
clear: right;
border-radius: 50%;
`;

const Title = styles.h1`
font-size: 3em;
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