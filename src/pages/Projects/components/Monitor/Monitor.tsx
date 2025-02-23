/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player';
import ReactChip from '../../../../components/Chip/ReactChip';
import AngularChip from '../../../../components/Chip/AngularChip';
import WebSocketChip from '../../../../components/Chip/WebSocketChip';
import RxJSChip from '../../../../components/Chip/RxJSChip';
import D3Chip from '../../../../components/Chip/D3Chip';
import TailwindCSSChip from '../../../../components/Chip/TailwindCSSChip';
import SCSSChip from '../../../../components/Chip/SCSSChip';
import ZustandChip from '../../../../components/Chip/ZustandChip';
import prevVer4Bed from '/prev_4bed.mov';
import prevVer32Bed from '/prev_32bed.mov';
import newVer4Bed from '/4bed.mov';
import newVer32Bed from '/32bed.mov';
import eventLog from '/event-log.png';
import monitorSetting from '/monitor-setting.png';

const Monitor = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Wrapper>
      <Title>
        LiveStudio Monitor
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
              <ReactPlayer url="https://youtu.be/yMVmDN4iP_Y" width="800px" height="475px" controls={true} playing={true} loop={true} />
              <VideoDescription>
                <TextField>
                  <FieldTitle>주요 기능</FieldTitle>
                  <FieldContent>
                    LiveStudio Monitor는 실시간 환자 감시 모니터링 시스템으로 4, 8, 16, 32, 64, 128, 256명의 환자를 모니터링할 수 있습니다.
                    <br />
                    <br />
                    <ul>
                      생체 신호 모니터링
                      <li>• 환자의 심전도(ECG), 호흡(RESP), 산소포화도(SpO₂) 데이터를 실시간으로 수집 및 분석</li>
                      <li>• D3.js 기반 Line Chart를 활용한 시각적 데이터 표현 및 실시간 수치 표기</li>
                    </ul>
                    <ul>
                      알람 시스템 최적화
                      <li>• 환자의 생체 신호 이상 감지 시 시각적 경고 및 경고음(Notification Sound) 트리거</li>
                      <li>• 알람 임계값 설정 및 다중 레벨 알림 지원</li>
                    </ul>
                    <ul>
                      환자 상태 및 모션 시각화
                      <li>• 환자의 움직임 및 상태를 아이콘 및 그래픽 요소로 직관적으로 표현</li>
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
                      <SCSSChip />
                    </Chips>
                    <Chips>
                      <ReactChip />
                      <WebSocketChip />
                      <RxJSChip />
                      <D3Chip />
                      <ZustandChip />
                      <TailwindCSSChip />
                    </Chips>
                  </ChipWrapper>
                </FieldContent>
              </TextField>
              <TextField style={{ marginLeft: '1rem' }}>
                <FieldTitle>개발 기간</FieldTitle>
                <FieldContent>
                  2021.06 ~ 현재
                  <br />
                  Angular -&gt; React 변환 중, 디자인 변경
                </FieldContent>
              </TextField>
            </FieldContainer>
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent>
            <TextField>
              <FieldTitle>주요 역할</FieldTitle>
              <FieldContent>
                프로젝트의 전반적인 아키텍처 설계부터 구현까지 전 과정에 직접 참여하였으며, WebSocket 기반 데이터 스트림 처리, 실시간 Line Chart 최적화, 알람 시스템 최적화, 비동기 API 통신 최적화를
                주도적으로 담당하였습니다.
                <br />
                또한, 데이터 흐름의 효율성을 극대화하고 성능 병목을 최소화하기 위해 RxJS와 D3.js를 활용하여 실시간 시각화 및 비동기 처리 로직을 최적화하였습니다.
                <br />
                <Architecture>
                  <ArchitectureContent>
                    <ul>
                      데이터 스트림 및 실시간 처리
                      <li>• WebSocket을 활용한 실시간 데이터 스트리밍 처리를 구축하여 대량의 생체 신호 데이터를 안정적으로 처리할 수 있도록 설계</li>
                      <li>• RxJS 기반의 데이터 흐름 제어 및 비동기 이벤트 관리 최적화</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      Line Chart 렌더링 최적화
                      <li>• D3를 활용한 데이터 시각화를 구현하여 실시간 데이터 변동에도 렌더링 성능 저하를 최소화</li>
                      <li>• 대량의 데이터를 처리하기 위해 애니메이션 최적화 적용</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      알람 시스템 최적화
                      <li>• 생체 신호 이상 감지 시, 경고 시각화 및 경고음 트리거 최적화</li>
                      <li>• 다양한 임계값 기반 다중 레벨 알람 시스템을 적용하여 긴급 상황 시 신속한 대응 가능</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      비동기 API 통신 최적화
                      <li>• 백엔드 서비스와의 데이터 교환 효율성을 높이기 위해 캐싱 전략 적용</li>
                    </ul>
                    <ul style={{ marginTop: '1rem' }}>
                      성능 최적화 및 리팩토링
                      <li>• 프로젝트 진행 이후 성능 최적화 작업을 중점적으로 수행, CPU 사용률을 낮추고 프레임 드롭을 최소화</li>
                      <li>• 불필요한 렌더링을 줄이기 위해 React.memo, useCallback, useMemo를 활용하여 컴포넌트 성능 개선</li>
                      <li>• 상태 관리를 개선하기 위해 Zustand 도입</li>
                    </ul>
                  </ArchitectureContent>
                </Architecture>
              </FieldContent>
            </TextField>
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent>
            <TextField>
              <FieldTitle>성능 개선</FieldTitle>
              <FieldContent className="videos" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                <div>
                  <div>이전 버전 4bed CPU 사용률 대략 10 ~ 20%</div>
                  <Content>
                    <ReactPlayer url={prevVer4Bed} width="75%" height="70%" controls={true} playing={true} loop={true} />
                  </Content>
                </div>
                <div>
                  <div>새 버전 4bed CPU 사용률 대략 4 ~ 10%</div>
                  <Content>
                    <ReactPlayer url={newVer4Bed} width="75%" height="70%" controls={true} playing={true} loop={true} />
                  </Content>
                </div>
                <div>
                  <div>이전 버전 32bed CPU 사용률 대략 40 ~ 74%</div>
                  <Content>
                    <ReactPlayer url={prevVer32Bed} width="75%" height="70%" controls={true} playing={true} loop={true} />
                  </Content>
                </div>
                <div>
                  <div>새 버전 32bed CPU 사용률 대략 4 ~ 12%</div>
                  <Content>
                    <ReactPlayer url={newVer32Bed} width="75%" height="70%" controls={true} playing={true} loop={true} />
                  </Content>
                </div>
              </FieldContent>
            </TextField>
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={monitorSetting} alt="" width="85%" />
          </SlideContent>
        </SwiperSlideWrapper>
        <SwiperSlideWrapper>
          <SlideContent style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={eventLog} alt="" width="85%" />
          </SlideContent>
        </SwiperSlideWrapper>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default Monitor;

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
  position: relative;
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
