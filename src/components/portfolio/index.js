import React from 'react';
import styles from 'styled-components';
import Projects from '../projects';
const Wrapper = styles.div`
background: #F5F5F5;
height: 100vh;
display: flex;
flex-direction: column;
`;

const TitleContainer = styles.div`
margin: 0 auto;
`;
const Title = styles.h1`
font-size: 2em;
color: #FF8F00;
`;

const Subtitle = styles.h3`
font-size: 1.2em;
color: #FF6F00;
`;

const ProjectContainer = styles.div`
width: 80%;
display: flex;
flex-direction: row;
`;

class Portfolio extends React.Component {
    render() {
        return (
            <Wrapper>
                <TitleContainer>
                    <Title>Projects</Title>
                </TitleContainer>
                <Projects/>
            </Wrapper>
        )
    }
}

export default Portfolio;