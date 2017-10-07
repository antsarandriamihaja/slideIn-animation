import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';

const Wrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
`;
//flext-basis: take as much space as it can
const Box = styled.div`
flex-basis: ${(props) => props.width}%;
border: 2px solid white;
background: ${(props) => props.bgColor};
`;

const colors = [
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
];

const ContentWrapper = styled.div`
flex-basis: 100%
`;

class EntranceAnimation extends React.Component {

    render() {
    //     const {
    //     children
    // } = this.props;
    
        return (
            <StaggeredMotion
                defaultStyles={[
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                ]}
                styles={(prevStyles) => [
                    { width: spring(0) },
                    { width: spring(prevStyles[0].width) },
                    { width: spring(prevStyles[1].width) },
                    { width: spring(prevStyles[2].width) },
                    { width: spring(prevStyles[3].width) },
                    { width: spring(prevStyles[4].width) },
                ]}
            >
                {(styles) => (
                    <Wrapper>
                        <Box bgColor={colors[0]} width={styles[0].width} />
                        <Box bgColor={colors[1]} width={styles[1].width} />
                        <Box bgColor={colors[2]} width={styles[2].width} />
                        <Box bgColor={colors[3]} width={styles[3].width} />
                        <Box bgColor={colors[3]} width={styles[4].width} />
                        <Box bgColor={colors[3]} width={styles[5].width} />
                    </Wrapper>
                )}
                {/* <ContentWrapper>
                    {children}
                </ContentWrapper> */}
            </StaggeredMotion>
        );
    }
}

export default EntranceAnimation;