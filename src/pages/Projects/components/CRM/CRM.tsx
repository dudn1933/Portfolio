/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WebSocketChip from '../../../../components/Chip/WebSocketChip';
import RxJSChip from '../../../../components/Chip/RxJSChip';
import TailwindCSSChip from '../../../../components/Chip/TailwindCSSChip';
import AngularChip from '../../../../components/Chip/AngularChip';

const CRM = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Wrapper>
      <Title>LiveStudio CRM</Title>
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
              <VideoDescription>
                <TextField>
                  <FieldTitle>개발 기간</FieldTitle>
                  <FieldContent>2021.06 ~ 2024.10 (두번 변경)</FieldContent>
                </TextField>
                <TextField>
                  <FieldTitle>주요 기능</FieldTitle>
                  <FieldContent>
                    LiveStudio CRM은 병원 및 의료 장비 관리 시스템으로, 병원, 장치, 계정의 생성, 할당 및 제거 기능을 제공하며, 병원 내 침상 관리 및 포인트 관리 기능을 포함하는 통합 솔루션입니다. 이를
                    통해 의료진과 관리자들은 병원의 운영을 보다 효율적으로 관리할 수 있으며, 장비 및 계정의 체계적인 할당과 유지보수가 가능합니다.
                    <br />
                    <br />
                    LiveStudio CRM의 주요 기능 중 하나는 병원과 장치, 계정 간의 유기적인 연동을 제공하는 것입니다. 관리자는 시스템을 통해 새로운 병원을 등록하거나 기존 병원의 정보를 업데이트할 수
                    있으며, 병원 내 장비 및 계정의 생성과 할당, 제거 작업을 직관적으로 수행할 수 있습니다. 이러한 기능은 의료진의 업무 흐름을 최적화하고 관리 부담을 줄이며, 전체적인 시스템 운영을
                    효율적으로 개선하는 데 기여합니다.
                    <br />
                    <br />
                    병원 내 침상 관리 기능 또한 CRM 시스템의 핵심 요소 중 하나입니다. 병원의 실시간 침상 현황을 관리하고, 환자의 배정을 원활하게 진행할 수 있도록 설계되었습니다. 이를 통해 환자 이동 및
                    병상 재배치를 효과적으로 운영할 수 있도록 지원합니다. 또한, 병원별 포인트 관리 기능을 통해 환자의 진료 및 관리와 관련된 데이터를 추적하고, 병원 내 리소스를 보다 체계적으로 관리할
                    수 있습니다.
                  </FieldContent>
                </TextField>
              </VideoDescription>
            </Content>
            <TextField style={{ marginTop: '1rem' }}>
              <FieldTitle>사용한 주요 기술 스택</FieldTitle>
              <FieldContent>
                <ChipWrapper>
                  <Chips>
                    <AngularChip />
                    <WebSocketChip />
                    <RxJSChip />
                    <TailwindCSSChip />
                  </Chips>
                </ChipWrapper>
              </FieldContent>
            </TextField>
          </SlideContent>
        </SwiperSlideWrapper>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default CRM;

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
  width: 1440px;
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
