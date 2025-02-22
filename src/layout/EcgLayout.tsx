import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import CursorFollower from '../components/CursorFollower/CursorFollower';

const EcgLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // D3를 활용한 ECG 애니메이션 추가 가능
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

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
    <LayoutWrapper>
      <NavBar />
      <ContentWrapper id="content-scroll">{children}</ContentWrapper>
      <EcgSvg id="ecg" />
      <CursorFollower />
      <ScrollProgressBar style={{ height: `${scrollProgress}%` }} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  overflow-y: scroll;
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
