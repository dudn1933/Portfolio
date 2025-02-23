import { useEffect, useState } from 'react';
import LetterWrapper from '../../components/LetterWrapper/LetterWrapper';
import { styled } from 'styled-components';

const Experience = () => {
  const text = 'EXPERIENCE';
  const events = [
    { date: '2014.03', description: '강릉원주대학교 전자공학 입학' },
    { date: '2014.11 ~ 2016.06', description: '육군 이기자부대 전역' },
    { date: '2017 ~ 2020.06', description: '대학교 학과 임원 및 총학생회 활동' },
    { date: '2020.09 ~ 2021.03', description: '강릉원주대학교 산학협력단 프로그램 참여' },
    { date: '2021.02 ~ 2021.06', description: '코드스쿼드 부트캠프 참여' },
    { date: '2021.06 ~ 현재', description: 'MEZOO(현 직장) 근무' },
  ];
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <Wrapper>
      <LetterWrapper text={text} visibleIndexes={visibleIndexes} />
      <ScrollContentWrapper id="content-scroll-top">
        {events?.map(event => (
          <EventWrapper>
            <Date>{event.date}</Date>
            <Description>{event.description}</Description>
          </EventWrapper>
        ))}
      </ScrollContentWrapper>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100%);
  height: 100%;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-behavior: smooth;

  padding: 0 5rem;
`;

const ScrollContentWrapper = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 1rem;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Date = styled.div`
  font-size: 3rem;
`;
const Description = styled.div`
  font-size: 1.5rem;
`;
