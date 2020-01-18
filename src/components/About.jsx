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
    border-radius: 50%;
    width: 150px;
    border: 1px solid #c7c5c5;
    margin: 0 auto;
    display: block;
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.2);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #006179cc;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #006179cc;
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