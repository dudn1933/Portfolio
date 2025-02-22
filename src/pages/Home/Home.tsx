import { styled } from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Lee Han Geul</Title>
        <SubTitle>Front-end developer</SubTitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 10rem;
  text-align: center;
  padding-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`;
