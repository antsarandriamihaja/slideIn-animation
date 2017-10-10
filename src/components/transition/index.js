import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const springSettings = {
    stiffness: 200,
    damping: 20
}
const willLeave = () => ({
    opacity: spring(0, springSettings),
});

const willEnter = () => ({
    opacity: 0,
});

const getStyles = () => ({
    opacity: spring(1, springSettings),
});

const Transition = ({ children }) =>
    <TransitionMotion
        styles={ children ? [
            {
                key: 'key',
                style: getStyles(),
                data: children
            }
        ] : []}
        willEnter={willEnter}
        willLeave={willLeave}
    >
        {(interpolated) => 
            <div>
                {interpolated.map(({key, style, data}) => 
                    <div 
                    key = {`${key}-transition`} 
                    style={{opacity: style.opacity}}
                    > {data}</div>
                )}
            </div>
        }
    </TransitionMotion>

export default Transition;