import { useEffect, useState } from 'react';
import LetterWrapper from '../../components/LetterWrapper/LetterWrapper';
import { styled } from 'styled-components';

const Projects = () => {
  const text = 'PROJECTS';
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [isIntroduceFirstVisible, setIsIntroduceFirstVisible] = useState(false);
  const [isIntroduceSecondVisible, setIsIntroduceSecondVisible] = useState(false);
  const [isIntroduceThirdVisible, setIsIntroduceThirdVisible] = useState(false);

  useEffect(() => {
    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector('#content-scroll');

    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = (container as HTMLElement).scrollTop;
      const scrollBottom = (container as HTMLElement).scrollTop + (container as HTMLElement).offsetHeight;
      // 실제 요소들을 찾아 위치 계산
      const triggerPoint = (container as HTMLElement).offsetHeight * 0.5;

      if (scrollPosition > triggerPoint) {
        setIsIntroduceFirstVisible(true);
      } else {
        setIsIntroduceFirstVisible(false);
      }

      const firstEl = (container as HTMLElement).querySelector('.first') as HTMLElement;
      const secondEl = (container as HTMLElement).querySelector('.second') as HTMLElement;

      const firstBottom = firstEl.offsetTop + firstEl.offsetHeight;

      if (scrollBottom > firstBottom) {
        setIsIntroduceSecondVisible(true);
      } else {
        setIsIntroduceSecondVisible(false);
      }

      const secondBottom = secondEl.offsetTop + secondEl.offsetHeight;

      if (scrollBottom > secondBottom) {
        setIsIntroduceThirdVisible(true);
      } else {
        setIsIntroduceThirdVisible(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <LetterWrapper text={text} visibleIndexes={visibleIndexes} />
      <ScrollContentWrapper id="content-scroll-top">
        <LiveStudioMonitor className="first" $isVisible={isIntroduceFirstVisible}>
          LiveStudioMonitor
        </LiveStudioMonitor>
        <LiveStudioHolter className="second" $isVisible={isIntroduceSecondVisible}>
          LiveStudioHolter
        </LiveStudioHolter>
        <LiveStudioCRM className="third" $isVisible={isIntroduceThirdVisible}>
          LiveStudioCRM
        </LiveStudioCRM>
      </ScrollContentWrapper>
    </Wrapper>
  );
};

export default Projects;

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
  display: flex;
  flex-direction: column;
`;

const LiveStudioMonitor = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;
const LiveStudioHolter = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;
const LiveStudioCRM = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;
