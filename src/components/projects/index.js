import React from 'react';
import { Motion, spring } from 'react-motion';
import styles from 'styled-components';
import aria from './0.jpg';
import contact from './1.jpg';
import calculator from './3.jpg';
import githubRepo from './2.jpg';
import simon from './4.jpg';
import pomodoro from './5.jpg';
import wikiviewer from './6.jpg';
import weather from './7.jpg';
import urlshort from './8.jpg';
import './index.css';

const pictures = [aria, contact, githubRepo, calculator, simon, pomodoro, wikiviewer, weather, urlshort ];
const technologies = [
    "React, Node, Redux, PostgreSQL, Webpack, Babel",
    "React, create-react-app CLI",
    "React, create-react-app CLI",
    "jQuery, Bootstrap",
    "jQuery, Bootstrap",
    "jQuery, Bootstrap",
    "jQuery, Bootstrap",
    "jQuery, Bootstrap",
    "React, Node, MongoDB, Webpack, Babel"
]

const hrefs = [
    "http://apparia.co",
    "http://contacts-lightspeed.herokuapp.com/",
    "https://samsao-repo.herokuapp.com/",
    "http://codepen.io/arandriamihaja/full/amOXEA/",
    "http://codepen.io/arandriamihaja/full/oBMeRE/",
    "http://codepen.io/arandriamihaja/full/amqNEJ/",
    "http://codepen.io/arandriamihaja/full/MeemKL/",
    "http://codepen.io/arandriamihaja/full/QNeQWO/",
    "https://canada-url.herokuapp.com/",
]
const springSettings = { stiffness: 170, damping: 26 };
const NEXT = 'show-next';

const ProjectWrapper = styles.div`
  display: flex;
  align-items: center;
  height: 700px;
  position: relative;
  `;

const ProjectsInner = styles.div`
  overflow: hidden;
  position: relative;
  margin: auto;
  `;

const ProjectImage = styles.div`
  position: absolute;
  background-color: lightgray;
  `;

const Image = styles.div`
background: url(${(props) => props.image});
background-repeat: no-repeat;
background-size: cover;
`;

const Technologies = styles.div`
margin: 0 auto;
display: flex;
flex-direction: row;
background: #fff;
padding: 15px;
border-radius: 25px;
`;
export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [[640, 363], [640, 351], [800, 400], [700, 500], [800, 250], [600, 600], [800, 600], [600, 660], [400, 700]],
            currPhoto: 0,
        };
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ currPhoto: value });
    };

    clickHandler = (btn) => {
        let photoIndex = btn === NEXT ? this.state.currPhoto + 1 : this.state.currPhoto - 1;

        photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
        photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;

        this.setState({
            currPhoto: photoIndex
        })
    };

    render() {
        const { photos, currPhoto } = this.state;
        const [currWidth, currHeight] = photos[currPhoto];

        const widths = photos.map(([origW, origH]) => currHeight / origH * origW);

        const leftStartCoords = widths
            .slice(0, currPhoto)
            .reduce((sum, width) => sum - width, 0);

        let configs = [];
        photos.reduce((prevLeft, [origW, origH], i) => {
            configs.push({
                left: spring(prevLeft, springSettings),
                height: spring(currHeight, springSettings),
                width: spring(widths[i], springSettings),
            });
            return prevLeft + widths[i];
        }, leftStartCoords);

        return (
            <div>
                <button onClick={this.clickHandler.bind(null, '')}>Previous</button>
                <input
                    type="range"
                    min={0}
                    max={photos.length - 1}
                    value={currPhoto}
                    onChange={this.handleChange} />
                <button onClick={this.clickHandler.bind(null, NEXT)}>Next</button>
                <ProjectWrapper>
                    <Motion style={{ height: spring(currHeight), width: spring(currWidth) }}>
                        {container =>
                            <ProjectsInner
                                style={container}
                            >
                                {configs.map((style, i) =>

                                    <Motion key={i} style={style}>
                                        {style =>
                                            <a href={hrefs[i]} target="_blank">
                                            <img className="projectImage" src={pictures[i]} style={style} />
                                            </a>
                                           
                                        }
                                    </Motion>
                                   
                                )}
                             
                            </ProjectsInner>
                        }
                    </Motion>
                </ProjectWrapper>
            </div>
        );
    };
}