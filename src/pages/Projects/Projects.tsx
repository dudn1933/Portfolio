/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import LetterWrapper from '../../components/LetterWrapper/LetterWrapper';
import Monitor from './components/Monitor/Monitor';
import Holter from './components/Holter/Holter';
import CRM from './components/CRM/CRM';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {
  const text = 'PROJECTS';
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [isIntroduceFirstVisible, setIsIntroduceFirstVisible] = useState(false);
  const [isIntroduceSecondVisible, setIsIntroduceSecondVisible] = useState(false);
  const [isIntroduceThirdVisible, setIsIntroduceThirdVisible] = useState(false);

  const swiperRef = useRef<any>(null);

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

      const firstEl = (container as HTMLElement).querySelector('.first') as HTMLElement;
      const secondEl = (container as HTMLElement).querySelector('.second') as HTMLElement;

      const firstBottom = firstEl.offsetTop + firstEl.offsetHeight;

      if (scrollBottom > firstEl.offsetTop) {
        setIsIntroduceFirstVisible(true);
      } else {
        setIsIntroduceFirstVisible(false);
      }

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
      <SwiperWrapper
        modules={[Navigation, Pagination]}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={{ releaseOnEdges: true }}
        centeredSlides={true}
        loop={false}
        grabCursor={true}
        speed={800}
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        <SwiperSlideWrapper id="content-scroll-top" style={{ position: 'relative' }}>
          <SlideContent>
            <LiveStudioMonitor className="first" $isVisible={isIntroduceFirstVisible}>
              <Monitor />
            </LiveStudioMonitor>
          </SlideContent>
          <MoveButton $top="88%" onClick={() => swiperRef?.current?.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999">
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z" />
            </svg>
          </MoveButton>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper style={{ position: 'relative' }}>
          <MoveButton $bottom="96%" onClick={() => swiperRef?.current?.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999" style={{ transform: 'rotate(180deg)' }}>
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z" />
            </svg>
          </MoveButton>
          <SlideContent>
            <LiveStudioHolter className="second" $isVisible={isIntroduceSecondVisible}>
              <Holter />
            </LiveStudioHolter>
          </SlideContent>
          <MoveButton $top="88%" onClick={() => swiperRef?.current?.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999">
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z" />
            </svg>
          </MoveButton>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper style={{ position: 'relative' }}>
          <SlideContent>
            <LiveStudioCRM className="third" $isVisible={isIntroduceThirdVisible}>
              <CRM />
            </LiveStudioCRM>
          </SlideContent>
          <MoveButton $bottom="96%" onClick={() => swiperRef?.current?.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999" style={{ transform: 'rotate(180deg)' }}>
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z" />
            </svg>
          </MoveButton>
        </SwiperSlideWrapper>
      </SwiperWrapper>
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

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const MoveButton = styled.button<{ $top?: string; $bottom?: string }>`
  width: 100%;
  position: absolute;
  outline: none;
  background-color: transparent;
  border: 0px;
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};

  transition: all 0.3s ease;
  animation: ${moveUpDown} 0.3s ease-in-out infinite alternate;
`;

const SwiperSlideWrapper = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;

const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  color: white;
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
