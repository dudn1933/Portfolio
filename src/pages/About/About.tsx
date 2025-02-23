/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Divide from '../../components/Divide/Divide';
import LetterWrapper from '../../components/LetterWrapper/LetterWrapper';
import leehangeulImage from '/leehangeul.png';
import ReactChip from '../../components/Chip/ReactChip';
import AngularChip from '../../components/Chip/AngularChip';
import TypeScriptChip from '../../components/Chip/TypeScriptChip';
import JavaScriptChip from '../../components/Chip/JavaScriptChip';
import HTMLChip from '../../components/Chip/HTMLChip';
import SCSSChip from '../../components/Chip/SCSSChip';
import TailwindCSSChip from '../../components/Chip/TailwindCSSChip';
import ElectronChip from '../../components/Chip/ElectronChip';
import RxJSChip from '../../components/Chip/RxJSChip';
import D3Chip from '../../components/Chip/D3Chip';
import ZustandChip from '../../components/Chip/ZustandChip';
import ReactQueryChip from '../../components/Chip/ReactQueryChip';
import WebSocketChip from '../../components/Chip/WebSocketChip';
import GitHubChip from '../../components/Chip/GitHubChip';
import ConfluenceChip from '../../components/Chip/ConfluenceChip';
import FigmaChip from '../../components/Chip/FigmaChip';
import JIRAChip from '../../components/Chip/JIRAChip';
import SlackChip from '../../components/Chip/SlackChip';

const About = () => {
  const text = 'ABOUT ME';
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  // const [isStackOpen, setIsStackOpen] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isIntroduceTitleVisible, setIsIntroduceTitleVisible] = useState(false);
  const [isIntroduceFirstVisible, setIsIntroduceFirstVisible] = useState(false);
  const [isIntroduceSecondVisible, setIsIntroduceSecondVisible] = useState(false);
  const [isIntroduceThirdVisible, setIsIntroduceThirdVisible] = useState(false);
  const [isIntroduceFourthVisible, setIsIntroduceFourthVisible] = useState(false);
  const [isIntroduceFifthVisible, setIsIntroduceFifthVisible] = useState(false);

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
      const scrollBottom = (container as HTMLElement).scrollTop + (container as HTMLElement).offsetHeight;

      const imageEl = (container as HTMLElement).querySelector('.scroll-image') as HTMLElement;
      const titleEl = (container as HTMLElement).querySelector('.scroll-title') as HTMLElement;
      const firstEl = (container as HTMLElement).querySelector('.scroll-first') as HTMLElement;
      const secondEl = (container as HTMLElement).querySelector('.scroll-second') as HTMLElement;
      const thirdEl = (container as HTMLElement).querySelector('.scroll-third') as HTMLElement;
      const fourthEl = (container as HTMLElement).querySelector('.scroll-fourth') as HTMLElement;
      const fifthEl = (container as HTMLElement).querySelector('.scroll-fifth') as HTMLElement;

      if (scrollBottom > imageEl?.offsetTop) {
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }

      if (scrollBottom > titleEl?.offsetTop) {
        setIsIntroduceTitleVisible(true);
      } else {
        setIsIntroduceTitleVisible(false);
      }

      if (scrollBottom > firstEl?.offsetTop) {
        setIsIntroduceFirstVisible(true);
      } else {
        setIsIntroduceFirstVisible(false);
      }

      if (scrollBottom > secondEl?.offsetTop) {
        setIsIntroduceSecondVisible(true);
      } else {
        setIsIntroduceSecondVisible(false);
      }

      if (scrollBottom > thirdEl?.offsetTop) {
        setIsIntroduceThirdVisible(true);
      } else {
        setIsIntroduceThirdVisible(false);
      }

      if (scrollBottom > fourthEl?.offsetTop) {
        setIsIntroduceFourthVisible(true);
      } else {
        setIsIntroduceFourthVisible(false);
      }

      if (scrollBottom > fifthEl?.offsetTop) {
        setIsIntroduceFifthVisible(true);
      } else {
        setIsIntroduceFifthVisible(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleIsSkillOpen = () => {
  //   setIsStackOpen(prev => !prev);
  // };

  return (
    <Wrapper>
      <LetterWrapper text={text} visibleIndexes={visibleIndexes} />
      <ScrollContentWrapper id="content-scroll-top">
        <PersonalInformation className="scroll-image" $isVisible={isImageVisible}>
          <PersonalImage src={leehangeulImage} alt="이한글" />
          <PersonalContent>
            <Content>
              <PersonalTitle>이한글</PersonalTitle>
              <PersonalSubTitle>프론트엔드 개발자</PersonalSubTitle>
              <Divide width="3.8rem" border="1px solid #e4e5e766" margin="24px 0 24px 0" />
              <Phone>
                📞
                <span>010-3346-1933</span>
              </Phone>
              <Email>
                📧
                <a href="mailto:g.leehangeul@gmail.com">g.leehangeul@gmail.com</a>
              </Email>
            </Content>
            <SkillStack>
              {/* onClick={handleIsSkillOpen} */}
              <SkillTitle $direction="right" style={{ width: '100%', fontSize: '1.3rem' }}>
                기술 스택 및 협업 도구
              </SkillTitle>
              {/* 옵션으로 열고 닫을 수 있다 $isOpen={isStackOpen} */}
              <ChipWrapper $isOpen={true}>
                <ReactChip />
                <AngularChip />
                <TypeScriptChip />
                <JavaScriptChip />
                <HTMLChip />
                <SCSSChip />
                <TailwindCSSChip />
                <ElectronChip />
                <RxJSChip />
                <D3Chip />
                <ZustandChip />
                <ReactQueryChip />
                <WebSocketChip />
                <GitHubChip />
                <ConfluenceChip />
                <FigmaChip />
                <SlackChip />
                <JIRAChip />
              </ChipWrapper>
            </SkillStack>
          </PersonalContent>
        </PersonalInformation>
        <PersonalIntroduce>
          <IntroduceTitle className="scroll-title" $isVisible={isIntroduceTitleVisible}>
            포기? 그게뭐지? 성능 개선과 코드 품질 향상에 집중해온 운동하는 프론트개발자
          </IntroduceTitle>
          <IntroduceContent>
            <FirstIntroduce className="scroll-first" $isVisible={isIntroduceFirstVisible}>
              모르는 것은 있을 수 있지만, 노력 앞에 불가능은 없다고 믿습니다.
              <br />
              행동하는 순간, 가능성은 곧 현실이 됩니다.
              <br />
              <br />
              안녕하세요, 4년 차 프론트엔드 개발자이자 끊임없이 몸과 마음을 단련하는 이한글입니다.
              <br />
              <br />
              현재 스타트업에서 실시간 환자 모니터링 CPU 사용률을 70~94%에서 여러가지 연구를 통해 4~12%로 크게 낮추어 성능을 개선했으며, 심전도 판독 프로그램 초기 로딩시간을 12~15초에서 비동기를
              이용해 1~2초로 개선한 경험이 있고 다양한 구조를 직접 구현하고 더 나은 서비스를 위해 최적화하는 과정에서 큰 희열을 느낍니다. 저는 ‘문제의 본질’을 탐구하는 즐거움을 바탕으로, 누구나
              일상에서 편리하게 사용할 수 있는 서비스를 만드는 것을 목표로 하고 있습니다.
            </FirstIntroduce>
            <br />
            <br />
            <SecondIntroduce className="scroll-second" $isVisible={isIntroduceSecondVisible}>
              경력에서 가장 자랑스럽게 생각하는 것<br />
              <br />
              입사 초기에는 업무 방향성에 대해 고민이 많았지만, 지속적인 문제 해결 과정을 통해 문제를 정의하고 개선안을 도출하는 역량을 키웠습니다. 이를 토대로 성능 이슈를 해결했고, 결과적으로 두 개의
              핵심 프로젝트를 리딩하면서 서비스를 재구축할 기회를 얻었습니다. 특히 기존 대비 혁신적인 속도 개선을 이룩해 사용자 경험을 극적으로 향상시킨 점을 가장 자랑스럽게 생각합니다.
            </SecondIntroduce>

            <br />
            <br />

            <ThirdIntroduce className="scroll-third" $isVisible={isIntroduceThirdVisible}>
              나만의 강점
              <br />
              <br />
              개발자로서 문제 해결에 다방면으로 접근하는 것이 저의 강점입니다. 기술적 한계를 마주하면 다양한 시각으로 분석해 창의적인 해결책을 찾고, 집요한 집중력으로 문제를 돌파합니다. ‘포기’라는
              단어 없이 끝까지 해결해내는 성격은 복잡한 이슈를 완성도 높게 마무리하는 저만의 원동력입니다. 또한 동료와 협업할 때는 유연한 소통을 통해 팀 시너지를 극대화할 수 있습니다.
            </ThirdIntroduce>
            <br />
            <br />
            <FourthIntroduce className="scroll-fourth" $isVisible={isIntroduceFourthVisible}>
              일에서 가장 중요하게 생각하는 것<br />
              <br />
              효율성과 팀 단합을 최우선으로 삼습니다. 개인 역량보다 협업을 통해 의견을 종합해 최적의 방향을 찾는 과정을 중요하게 여기며, 이 과정에서 새로운 아이디어가 탄생할 때 큰 희열을 느낍니다.
              결과물의 완성도와 사용자 피드백을 중시해 목표를 명확히 설정하고, 단순한 코드 구현이 아니라 사용자 경험을 고려한 제품을 제공하기 위해 끊임없이 고민합니다.
            </FourthIntroduce>
            <br />
            <br />
            <FifthIntroduce className="scroll-fifth" $isVisible={isIntroduceFifthVisible}>
              스트레스를 해결하는 방법
              <br />
              <br />
              매일 2시간 이상 러닝과 헬스로 스트레스를 해소합니다. 체계적인 운동은 단순히 스트레스를 푸는 것을 넘어 정신적 회복탄력성을 키워주는데 큰 도움이 됩니다. 운동 목표를 달성할 때마다 느끼는
              성취감은, 마치 개발 과정에서 복잡한 문제를 해결했을 때의 짜릿함과 닮아 있습니다. “탄탄한 건강 관리가 개발의 기본이다”라는 믿음으로, 장기적인 성장을 위해 꾸준히 운동을 실천하고 있습니다.
            </FifthIntroduce>
            <br />
            <br />
          </IntroduceContent>
        </PersonalIntroduce>
      </ScrollContentWrapper>
    </Wrapper>
  );
};

export default About;

/* Styled Components */
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

// const ScrollProgressBar = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 5px;
//   background-color: #f78fcc;
//   z-index: 9999;
// `;

const PersonalInformation = styled.div<{ $isVisible: boolean }>`
  display: flex;
  width: 100%;
  height: 400px;
  gap: 2rem;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const PersonalImage = styled.img`
  width: 300px;
  height: 100%;
`;

const PersonalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: white;
`;

const PersonalIntroduce = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5rem 0 5rem 0;
`;

const IntroduceTitle = styled.div<{ $isVisible: boolean }>`
  font-size: 28px;
  font-weight: 300;
  line-height: 1.55;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const IntroduceContent = styled.div`
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
`;

const FirstIntroduce = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const SecondIntroduce = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const ThirdIntroduce = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const FourthIntroduce = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const FifthIntroduce = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1.5s ease, transform 1.5s ease;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonalTitle = styled.div`
  display: inline-block;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 4px;
`;

const PersonalSubTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
`;

const Phone = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;

const Email = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  line-height: 1.5rem;

  a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: white;
  }
  a:hover {
    border-bottom: 2px solid #e4e5e766 !important;
    transition: all 0.1s ease-in-out;
  }
`;

const SkillStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const SkillTitle = styled.span<{ $direction?: string }>`
  font-size: 1rem;

  text-align: ${({ $direction }) => $direction};
`;

const ChipWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  /* padding: 1rem 0.5rem 1rem 0.5rem; */
  gap: 1rem;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0px')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;
