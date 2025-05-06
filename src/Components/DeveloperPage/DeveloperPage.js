import React from 'react';
import styled from 'styled-components';

function DeveloperPage() {
  return (
    <DeveloperPageStyled>
      <HeroSection>
        <h1>Meet the Developers</h1>
        <p>Get to know the brilliant minds behind this project!</p>
      </HeroSection>
      <CardContainer>
        <Card>
          <ImageWrapper>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFHMyPmSoqRNw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677696873301?e=2147483647&v=beta&t=sLaQ5OnfAXPIk_5kX2P8cmTekX5fPwe2-7lgt2v8gvQ" alt="Reena R" />
          </ImageWrapper>
          <h2>Reena R</h2>
          <p>Undergrad in BNMIT, passionate about AI and Machine Learning.</p>
          <a
            href="https://www.linkedin.com/in/reena-raj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </Card>
        <Card>
          <ImageWrapper>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQE97g7rBm0Flg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729501461292?e=1743033600&v=beta&t=2Nzc1FrcxHnkOn8_PBDyl2cSjemgDAlVs3MOmnFSv7E" alt="Rishab A Merlecha" />
          </ImageWrapper>
          <h2>Rishab A Merlecha</h2>
          <p>Undergrad in BNMIT, with a keen interest in Data Science.</p>
          <a
            href="https://www.linkedin.com/in/rishab-a-merlecha-a2111525b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </Card>
      </CardContainer>
    </DeveloperPageStyled>
  );
}

const DeveloperPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f9f9f9;
  color: #4b0082;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: darkviolet;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #4b0082;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: darkviolet;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #4b0082;
  }
`;

export default DeveloperPage;
