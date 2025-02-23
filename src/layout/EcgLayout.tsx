import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import CursorFollower from '../components/CursorFollower/CursorFollower';
import hangeul from '/hangeul.png';
import { useLocation } from 'react-router-dom';

const EcgLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector('#content-scroll') as HTMLElement;
    if (container) container.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    const container = document.querySelector('#content-scroll') as HTMLElement;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      // 최대 스크롤 영역 = scrollHeight - clientHeight
      const scrollableHeight = scrollHeight - clientHeight;

      // 진행도(백분율)
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LayoutWrapper $isHome={isHome}>
      {isHome && <Background src={hangeul} />}
      {isHome && <BackgroundOverlay />} {/* 오버레이 추가 */}
      <NavBar />
      <ContentWrapper id="content-scroll">{children}</ContentWrapper>
      <EcgSvg id="ecg" />
      <CursorFollower />
      <ScrollProgressBar style={{ height: `${scrollProgress}%` }} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div<{ $isHome: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ $isHome }) => ($isHome ? 'transparent' : 'black')};
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 어두운 색상의 반투명 오버레이 (opacity 0.4는 필요에 따라 조절) */
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -0.5; /* Background 보다 위, 콘텐츠보다 아래 */
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 144px);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const EcgSvg = styled.svg`
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ScrollProgressBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  background-color: #f78fcc;
  z-index: 9999;
`;

export default EcgLayout;
