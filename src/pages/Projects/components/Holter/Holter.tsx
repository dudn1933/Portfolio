/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import WebSocketChip from '../../../../components/Chip/WebSocketChip';
import RxJSChip from '../../../../components/Chip/RxJSChip';
import D3Chip from '../../../../components/Chip/D3Chip';
import TailwindCSSChip from '../../../../components/Chip/TailwindCSSChip';
import AngularChip from '../../../../components/Chip/AngularChip';
import JSPDFChip from '../../../../components/Chip/JSPDFChip';
import PdfMakeChip from '../../../../components/Chip/PdfMakeChip';
import holterImage from '/holter.png';
import events from '/events.png';
import report from '/report.png';
import morphology from '/morphology.png';

const Holter = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Wrapper>
      <Title>
        LiveStudio Holter
        <SlideButtons>
          <PrevSlide onClick={() => swiperRef.current?.slidePrev()}>Prev</PrevSlide>
          <NextSlide onClick={() => swiperRef.current?.slideNext()}>Next</NextSlide>
        </SlideButtons>
      </Title>
      <SwiperWrapper
        modules={[Navigation, Pagination]}
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        loop={false}
        grabCursor={true}
        speed={800}
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        <SwiperSlideWrapper>
          <SlideContent>
            <Content>
              <img src={holterImage} alt="" width="800px" height="475px" />
              <VideoDescription>
                <TextField>
                  <FieldTitle>주요 기능</FieldTitle>
                  <FieldContent>
                    LiveStudio Holter는 실시간 환자 감시 모니터링 시스템으로 측정한 데이터를 판독할 수 있는 프로그램 입니다. 특정 시간대를 선택 및 입력하여 심전도 데이터를 분석할 수 있으며, 부정맥
                    통계와 Morphology, Event, General, Patient Event를 통해 부정맥 유형별 상세 분석이 가능하고 판독 결과는 자동으로 보고서로 생성되어 의료진이 즉시 활용할 수 있도록 지원합니다.
                    <br />
                    <br />
                    <ul>
                      실시간 데이터 판독 및 시점 분석
                      <li>• 특정 시간대를 클릭하거나 직접 입력하여 심전도 생체 신호를 정밀 분석 가능</li>
                      <li>• 심장 리듬 변화 및 이상 패턴 탐지</li>
                    </ul>
                    <ul>
                      부정맥 유형별 정밀 분석
                      <li>• Morphology(형태학적 분석), Event(이벤트 기반 분석), General(일반 통계 분석), Patient Event(환자 지정 이벤트 분석) 모듈 제공</li>
                    </ul>
                    <ul>
                      의료 표준 기반 보고서 자동 생성
                      <li>• PDF 및 인쇄 지원을 통해 병원 및 의료 기관에서 직접 활용 가능</li>
                    </ul>
                    <br />
                  </FieldContent>
                </TextField>
              </VideoDescription>
            </Content>
            <FieldContainer>
              <TextField style={{ width: '800px' }}>
                <FieldTitle>사용한 주요 기술 스택</FieldTitle>
                <FieldContent>
                  <ChipWrapper>
                    <Chips>
                      <AngularChip />
                      <WebSocketChip />
                      <RxJSChip />
                      <D3Chip />
                      <TailwindCSSChip />
                      <JSPDFChip />
                      <PdfMakeChip />
                    </Chips>
                  </ChipWrapper>
                </FieldContent>
              </TextField>
              <TextField style={{ marginLeft: '1rem' }}>
                <FieldTitle>개발 기간</FieldTitle>
                <FieldContent>2021.06 ~ 현재</FieldContent>
              </TextField>
            </FieldContainer>
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent>
            <TextField>
              <FieldTitle>주요 역할</FieldTitle>
              <FieldContent>
                입사 당시 LiveStudio Holter는 Angular 9 기반으로 개발되어 있었으며, 버전이 낮아 지원이 중단된 라이브러리가 많아 유지보수가 어려운 상황이었습니다. 이에 따라 Angular 17로
                업그레이드하면서 아키텍처를 전면 재설계하고, 코드 리팩토링 및 로직 최적화를 진행하여 시스템의 안정성과 성능을 향상시켰습니다.
                <br />
                LiveStudio Holter의 아키텍처 설계 및 구현을 주도하며, 데이터 판독, Line Chart 최적화, WebSocket 기반 데이터 스트리밍, 비동기 API 최적화를 담당하였습니다. 특히, RxJS를 활용한 전역
                데이터 업데이트 및 D3.js 기반 차트 렌더링 최적화를 수행하여 실시간 데이터 처리 속도를 개선하였습니다.
                <br />
                또한, Caliper(심전도 R-peak 측정 도구), Line 확대/축소, 부분 인쇄, 키보드 전용 판독 기능을 추가하여 사용자 경험(UX)을 개선하였으며, API 캐싱 전략을 적용하여 백엔드와의 데이터 교환
                효율성을 극대화하였습니다. 이를 통해 시스템의 유지보수성을 강화하고, 사용자 만족도를 높이는 데 기여하였습니다.
                <br />
                <Architecture>
                  <ArchitectureContent>
                    <ul style={{ marginTop: '1rem' }}>
                      데이터 로딩시간 최적화
                      <li>• 기존 10~20초 소요되던 로딩 시간을 비동기 분할 처리 방식으로 개선하여 1~2초 이내에 데이터를 제공하도록 최적화</li>
                      <li>• 판독 속도 불만에 대한 사용자 피드백을 반영하여 Chart 렌더링 로직을 전면 재설계 및 최적화</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      비동기 데이터 처리 최적화
                      <li>• D3를 활용한 데이터 시각화를 구현하여 실시간 데이터 변동에도 렌더링 성능 저하를 최소화</li>
                      <li>• 대량의 데이터를 처리하기 위해 애니메이션 최적화 적용</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      사용자 피드백 반영 및 지속적인 기능 개선
                      <li>• 사용자들의 “속도가 느리다”, “이런 기능이 필요하다” 등의 피드백을 신속하게 반영하여 지속적인 개선을 진행하였으며, 결과적으로 사용자 만족도를 극대화</li>
                      <li>• 병원 및 의료진으로부터 “사용성이 크게 개선되었다”는 긍정적인 피드백</li>
                      <li>• 위 경험으로 인한 스스로 사용자 경험을 분석하고 불편한 점을 찾아 개선하는 주도적인 접근 방식을 도입</li>
                      <li>• 위 과정에서 새로운 기능 및 사용성 개선을 제안하여 실제 제품에 반영된 사례가 다수 존재하며, 이를 통해 제품의 완성도를 높이는 데 기여</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      비동기 API 통신 최적화
                      <li>• 백엔드 서비스와의 데이터 교환 효율성을 높이기 위해 캐싱 전략 적용</li>
                    </ul>
                  </ArchitectureContent>
                </Architecture>
              </FieldContent>
            </TextField>
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={morphology} alt="" width="75%" height="80%" />
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={events} alt="" width="75%" height="80%" />
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={report} alt="" width="40%" height="80%" />
          </SlideContent>
        </SwiperSlideWrapper>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default Holter;

const FieldContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const TextField = styled.div`
  display: grid;
  grid-template-rows: 2rem calc(100% - 2rem);
`;

const FieldTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.55;
`;

const FieldContent = styled.div`
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;

  ul {
    font-size: 1.2rem;
    font-weight: 600 !important;
  }

  li {
    padding-left: 1rem;
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Title = styled.div`
  color: #f78fcc;
  font-size: 3rem;
  font-weight: 400;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: calc(100% - 3rem);
  overflow: hidden;
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

const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 800px);
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ChipWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Chips = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const SlideButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PrevSlide = styled.button`
  outline: none;
  color: #f78fcc;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
    color: #fcbf02;
  }
`;

const NextSlide = styled.button`
  outline: none;
  color: #f78fcc;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
    color: #fcbf02;
  }
`;

const Architecture = styled.div`
  margin-top: 1rem;

  display: flex;
  gap: 2rem;

  img {
    width: 450px;
    height: 500px;
  }
`;

const ArchitectureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
