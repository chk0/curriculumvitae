import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 2px;
    width: 160px;
    height: 160px;
    border: 1px solid #17e0e0;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #17e0e0;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #17e0e0;
`;

const AboutBio = styled.p`
    color: #757575;
    font-weight: 300;
    font-size: 1em;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-weight: 400;
    font-size: 1em;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name}/>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <AboutProfession>
                <p>{profession}</p>
            </AboutProfession>
            <AboutBio>
                <p>{bio}</p>
            </AboutBio>
            <AboutLocation>
                <p>{address}</p>
            </AboutLocation>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;