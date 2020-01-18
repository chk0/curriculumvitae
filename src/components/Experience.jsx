import React from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';

const ExpeSpan = styled.span`
    color: #2e313a;
    font-style: italic;
`;

const StyledP = styled.p`
    color: #757575;
    font-weight: 300;
    margin: .5em, 9, 1.2em, 0;
`;


const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experience" />
        <div className="Experience-container">
            {props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H3Styled>{exp.jobTitle} in {exp.company}</H3Styled>
                    <ExpeSpan>{exp.startDate} - {exp.endDate}</ExpeSpan>
                    <StyledP>{exp.jobDescription}</StyledP>
                </div>  
            ))}
        </div>
    </div>
);

export default Experience;