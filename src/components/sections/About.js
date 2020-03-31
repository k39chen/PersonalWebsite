import React from 'react';
import styled from 'styled-components';
import { localize } from '../../helpers/localize';
import { miniHeading, wellShadow, computeTriangleRightStyles } from '../../styles/common';
import { FaPlus } from 'react-icons/fa';
import { white, borderGray, mainBlue } from '../../styles/colors';
import { Button, Link } from '../../styles/buttons';

const Container = styled.div``;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
`;

const Biography = styled.div`
  position: relative;
  width: 75vw;
  max-width: 1200px;
  padding: 2em;
  padding-right: calc(20vw + 2em);
  background-color: ${white};
  border: 1px solid ${borderGray};
  border-top: 2px solid ${mainBlue};
  text-align: left;
  box-shadow: ${wellShadow};
  box-sizing: border-box;
`;

const ProfileImg = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20vw;
  background-image: url(${process.env.PUBLIC_URL}/images/photo.jpg);
  background-size: cover;
`;

const CardLabel = styled.div`
  ${miniHeading}
  position: absolute;
  top: -1em;
  left: 0;
  width: 10vw;

  &:after {
    ${computeTriangleRightStyles()}
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2em;
  text-align: right;
`;

const NextButton = styled(Button)`
  font-size: 0.9em;
`;

export default class SectionAbout extends React.Component {
  render() {
    return (
      <Container>
        <div className="section-title">{localize('Common', 'about')}</div>

        <CardsContainer>

          <Card>
            <Biography>
              <p>Kevin is an alumnus of the <Link href='https://uwaterloo.ca/future-students/programs/computer-science' target='_blank'>University of Waterloo Computer Science</Link> program.</p>
              <p>He quickly established his life passion as a builder of simple, custom, and elegant web applications.</p>
              <p>His projects emphasize: rapid development startup, solid programming practices, remaining framework-agnostic where possible, easy access for end users, appealing visuals, and <Link>Dark Mode</Link>.</p>
              <p>Today, Kevin spends his days delivering high-quality front-end solutions as a Senior Software Engineer at the <Link href="https://www.veeva.com/" target="_blank">Veeva Systems Toronto Office</Link> constantly on the prowl for the next quick side project to build.</p>

              <ButtonContainer>
                <NextButton className="primary"><FaPlus />See more</NextButton>
              </ButtonContainer>

              <CardLabel>Biography</CardLabel>
            </Biography>

            <ProfileImg></ProfileImg>
          </Card>

        </CardsContainer>

      </Container>
    );
  }
}
