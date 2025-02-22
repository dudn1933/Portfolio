/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Divide from '../../components/Divide/Divide';
import LetterWrapper from '../../components/LetterWrapper/LetterWrapper';

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
          <PersonalImage src="public/leehangeul.png" alt="이한글" />
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
                <Chip>
                  <SkillIcon $color="#087ea4ff" viewBox="-10.5 -9.45 21 18.9" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2" />
                    <g>
                      <ellipse rx="10" ry="4.5" />
                      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                    </g>
                  </SkillIcon>
                  <SkillTitle>React</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon viewBox="0 0 223 236" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path
                        fill="url(#paint0_linear)"
                        d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                      ></path>
                      <path
                        fill="url(#paint1_linear)"
                        d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear" x1="49.009" x2="225.829" y1="213.75" y2="129.722" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E40035"></stop>
                        <stop offset=".24" stopColor="#F60A48"></stop>
                        <stop offset=".352" stopColor="#F20755"></stop>
                        <stop offset=".494" stopColor="#DC087D"></stop>
                        <stop offset=".745" stopColor="#9717E7"></stop>
                        <stop offset="1" stopColor="#6C00F5"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="41.025" x2="156.741" y1="28.344" y2="160.344" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF31D9"></stop>
                        <stop offset="1" stopColor="#FF5BE1" stopOpacity="0"></stop>
                      </linearGradient>
                      <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h223v236H0z"></path>
                      </clipPath>
                    </defs>
                  </SkillIcon>
                  <SkillTitle>Angular</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 30 30">
                      <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
                      <polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264" />
                      <path
                        fill="#fff"
                        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                      />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>TypeScript</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 30 30">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>JavaScript</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 30 30">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                      <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
                      <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>HTML</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon $color="#cd6799">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>SCSS</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon $color="#00acc1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 50 40">
                      <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>TailwindCSS</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                      <circle cx="64" cy="64" r="64" fill="#2F3242" />
                      <path
                        d="M51.3954 39.5028C52.3733 39.6812 53.3108 39.033 53.4892 38.055C53.6676 37.0771 53.0194 36.1396 52.0414 35.9612L51.3954 39.5028ZM28.6153 43.5751L30.1748 44.4741L30.1748 44.4741L28.6153 43.5751ZM28.9393 60.9358C29.4332 61.7985 30.5329 62.0976 31.3957 61.6037C32.2585 61.1098 32.5575 60.0101 32.0636 59.1473L28.9393 60.9358ZM37.6935 66.7457C37.025 66.01 35.8866 65.9554 35.1508 66.6239C34.415 67.2924 34.3605 68.4308 35.029 69.1666L37.6935 66.7457ZM53.7489 81.7014L52.8478 83.2597L53.7489 81.7014ZM96.9206 89.515C97.7416 88.9544 97.9526 87.8344 97.3919 87.0135C96.8313 86.1925 95.7113 85.9815 94.8904 86.5422L96.9206 89.515ZM52.0414 35.9612C46.4712 34.9451 41.2848 34.8966 36.9738 35.9376C32.6548 36.9806 29.0841 39.1576 27.0559 42.6762L30.1748 44.4741C31.5693 42.0549 34.1448 40.3243 37.8188 39.4371C41.5009 38.5479 46.1547 38.5468 51.3954 39.5028L52.0414 35.9612ZM27.0559 42.6762C24.043 47.9029 25.2781 54.5399 28.9393 60.9358L32.0636 59.1473C28.6579 53.1977 28.1088 48.0581 30.1748 44.4741L27.0559 42.6762ZM35.029 69.1666C39.6385 74.24 45.7158 79.1355 52.8478 83.2597L54.6499 80.1432C47.8081 76.1868 42.0298 71.5185 37.6935 66.7457L35.029 69.1666ZM52.8478 83.2597C61.344 88.1726 70.0465 91.2445 77.7351 92.3608C85.359 93.4677 92.2744 92.6881 96.9206 89.515L94.8904 86.5422C91.3255 88.9767 85.4902 89.849 78.2524 88.7982C71.0793 87.7567 62.809 84.8612 54.6499 80.1432L52.8478 83.2597ZM105.359 84.9077C105.359 81.4337 102.546 78.6127 99.071 78.6127V82.2127C100.553 82.2127 101.759 83.4166 101.759 84.9077H105.359ZM99.071 78.6127C95.5956 78.6127 92.7831 81.4337 92.7831 84.9077H96.3831C96.3831 83.4166 97.5892 82.2127 99.071 82.2127V78.6127ZM92.7831 84.9077C92.7831 88.3817 95.5956 91.2027 99.071 91.2027V87.6027C97.5892 87.6027 96.3831 86.3988 96.3831 84.9077H92.7831ZM99.071 91.2027C102.546 91.2027 105.359 88.3817 105.359 84.9077H101.759C101.759 86.3988 100.553 87.6027 99.071 87.6027V91.2027Z"
                        fill="#A2ECFB"
                      />
                      <path
                        d="M91.4873 65.382C90.8456 66.1412 90.9409 67.2769 91.7002 67.9186C92.4594 68.5603 93.5951 68.465 94.2368 67.7058L91.4873 65.382ZM99.3169 43.6354L97.7574 44.5344L99.3169 43.6354ZM84.507 35.2412C83.513 35.2282 82.6967 36.0236 82.6838 37.0176C82.6708 38.0116 83.4661 38.8279 84.4602 38.8409L84.507 35.2412ZM74.9407 39.8801C75.9127 39.6716 76.5315 38.7145 76.323 37.7425C76.1144 36.7706 75.1573 36.1517 74.1854 36.3603L74.9407 39.8801ZM53.7836 46.3728L54.6847 47.931L53.7836 46.3728ZM25.5491 80.9047C25.6932 81.8883 26.6074 82.5688 27.5911 82.4247C28.5747 82.2806 29.2552 81.3664 29.1111 80.3828L25.5491 80.9047ZM94.2368 67.7058C97.8838 63.3907 100.505 58.927 101.752 54.678C103.001 50.4213 102.9 46.2472 100.876 42.7365L97.7574 44.5344C99.1494 46.9491 99.3603 50.0419 98.2974 53.6644C97.2323 57.2945 94.9184 61.3223 91.4873 65.382L94.2368 67.7058ZM100.876 42.7365C97.9119 37.5938 91.7082 35.335 84.507 35.2412L84.4602 38.8409C91.1328 38.9278 95.7262 41.0106 97.7574 44.5344L100.876 42.7365ZM74.1854 36.3603C67.4362 37.8086 60.0878 40.648 52.8826 44.8146L54.6847 47.931C61.5972 43.9338 68.5948 41.2419 74.9407 39.8801L74.1854 36.3603ZM52.8826 44.8146C44.1366 49.872 36.9669 56.0954 32.1491 62.3927C27.3774 68.63 24.7148 75.2115 25.5491 80.9047L29.1111 80.3828C28.4839 76.1026 30.4747 70.5062 35.0084 64.5802C39.496 58.7143 46.2839 52.7889 54.6847 47.931L52.8826 44.8146Z"
                        fill="#A2ECFB"
                      />
                      <path
                        d="M49.0825 87.2295C48.7478 86.2934 47.7176 85.8059 46.7816 86.1406C45.8455 86.4753 45.358 87.5055 45.6927 88.4416L49.0825 87.2295ZM78.5635 96.4256C79.075 95.5732 78.7988 94.4675 77.9464 93.9559C77.0941 93.4443 75.9884 93.7205 75.4768 94.5729L78.5635 96.4256ZM79.5703 85.1795C79.2738 86.1284 79.8027 87.1379 80.7516 87.4344C81.7004 87.7308 82.71 87.2019 83.0064 86.2531L79.5703 85.1795ZM84.3832 64.0673H82.5832H84.3832ZM69.156 22.5301C68.2477 22.1261 67.1838 22.535 66.7799 23.4433C66.3759 24.3517 66.7848 25.4155 67.6931 25.8194L69.156 22.5301ZM45.6927 88.4416C47.5994 93.7741 50.1496 98.2905 53.2032 101.505C56.2623 104.724 59.9279 106.731 63.9835 106.731V103.131C61.1984 103.131 58.4165 101.765 55.8131 99.0249C53.2042 96.279 50.8768 92.2477 49.0825 87.2295L45.6927 88.4416ZM63.9835 106.731C69.8694 106.731 74.8921 102.542 78.5635 96.4256L75.4768 94.5729C72.0781 100.235 68.0122 103.131 63.9835 103.131V106.731ZM83.0064 86.2531C85.0269 79.7864 86.1832 72.1831 86.1832 64.0673H82.5832C82.5832 71.8536 81.4723 79.0919 79.5703 85.1795L83.0064 86.2531ZM86.1832 64.0673C86.1832 54.1144 84.4439 44.922 81.4961 37.6502C78.5748 30.4436 74.3436 24.8371 69.156 22.5301L67.6931 25.8194C71.6364 27.5731 75.3846 32.1564 78.1598 39.0026C80.9086 45.7836 82.5832 54.507 82.5832 64.0673H86.1832Z"
                        fill="#A2ECFB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M103.559 84.9077C103.559 82.4252 101.55 80.4127 99.071 80.4127C96.5924 80.4127 94.5831 82.4252 94.5831 84.9077C94.5831 87.3902 96.5924 89.4027 99.071 89.4027C101.55 89.4027 103.559 87.3902 103.559 84.9077V84.9077Z"
                        stroke="#A2ECFB"
                        strokeWidth="3.6"
                        strokeLinecap="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.8143 89.4027C31.2929 89.4027 33.3023 87.3902 33.3023 84.9077C33.3023 82.4252 31.2929 80.4127 28.8143 80.4127C26.3357 80.4127 24.3264 82.4252 24.3264 84.9077C24.3264 87.3902 26.3357 89.4027 28.8143 89.4027V89.4027V89.4027Z"
                        stroke="#A2ECFB"
                        strokeWidth="3.6"
                        strokeLinecap="round"
                      />
                      <ellipse cx="63.9835" cy="23.2036" rx="4.48794" ry="4.495" stroke="#A2ECFB" strokeWidth="3.6" strokeLinecap="round" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64.8501 68.0857C62.6341 68.5652 60.451 67.1547 59.9713 64.9353C59.4934 62.7159 60.9007 60.5293 63.1167 60.0489C65.3326 59.5693 67.5157 60.9798 67.9954 63.1992C68.4742 65.4186 67.066 67.6052 64.8501 68.0857Z"
                        fill="#A2ECFB"
                      />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>Electron</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12.100000000000001 8.4 262.79999999999995 272.2" width="20" height="20">
                      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="53.496" x2="177.932" y1="247.701" y2="115.323">
                        <stop offset="0" stopColor="#e01d84" />
                        <stop offset=".401" stopColor="#df1d85" />
                        <stop offset=".77" stopColor="#932c87" />
                        <stop offset="1" stopColor="#5d2f88" />
                      </linearGradient>
                      <radialGradient id="b" cx="190.456" cy="80.2" gradientTransform="matrix(1 .00239 -.002 .8362 .16 12.685)" gradientUnits="userSpaceOnUse" r="121.582">
                        <stop offset="0" stopColor="#e01d84" />
                        <stop offset=".139" stopColor="#de1e85" />
                        <stop offset=".285" stopColor="#d62085" />
                        <stop offset=".434" stopColor="#c92386" />
                        <stop offset=".586" stopColor="#b72786" />
                        <stop offset=".739" stopColor="#9d2b87" />
                        <stop offset=".891" stopColor="#7c2e88" />
                        <stop offset="1" stopColor="#5d2f88" />
                      </radialGradient>
                      <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="83.212" x2="137.371" y1="62.336" y2="62.336">
                        <stop offset="0" stopColor="#e01d84" />
                        <stop offset=".238" stopColor="#da1e85" />
                        <stop offset=".658" stopColor="#c72085" />
                        <stop offset=".999" stopColor="#b52284" />
                      </linearGradient>
                      <path
                        d="M29.6 175.3c-5.2-16.2-6.7-33.3-3.7-50.9 1.3-7.3 3.3-14.3 5.5-21.4 0 0 13.8-45.3 60.5-66 0 0 16.1-8.5 40.3-9.1 0 0-3.3-3.2-5.4-4.6-11.4-7.6-28.4-10.1-38.7.6-3.1 3.2-5.7 6.7-8.6 9.9-3.3 3.6-7.3 6.6-11.9 8.3-4 1.5-8 1.2-12.1 1.9-4.2.7-8.5 2.2-11.9 4.9-3.7 3-5.2 7-5.6 11.6-.4 3.6-.3 7.3-.5 10.9C37 82 33.6 85 26 90.9c-3.2 2.4-5.9 5.6-7.9 9-6 10.6 3.6 21.6 4.1 32.3.1 2.2-.1 4.4-.9 6.5-.8 2.3-2.4 3.8-3.7 5.7-1.8 2.5-3 5.5-2.5 8.6s2.1 6 3.6 8.7c2.9 4.8 6.5 9.1 10.3 13.2.2 0 .4.2.6.4"
                        fill="#e32286"
                      />
                      <path
                        d="M220.4 213.7c23-10 32.8-27.3 32.8-27.3 21.5-29.3 14.2-60.2 14.2-60.2-13.7 29.8-26.2 38-26.2 38 33.7-51.3.2-82.3.2-82.3 13.7 29.2-4.5 64.8-4.5 64.8-15.3 32.2-37 43.7-37 43.7 24.2 4.5 42-11.8 42-11.8-34.7 37.5-72.3 35.7-72.3 35.7 15.8 17.7 39.5 16.2 39.5 16.2-31 7.3-60.1-3-84-22.9-4.5-3.7-8.8-7.7-12.8-12 0 0-3.6-3.8-4.3-4.8l-.1-.1c-.5 18.5 18.8 35.7 18.8 35.7-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 47.5-38.5 47.5-38.5c29.5 14.3 54.5 18.8 54.5 18.8 52.7 8.8 49.7-17 49.7-17 .5-22.2-33-45.8-33-45.8C145.9 8.4 91.9 37 91.9 37c-46.7 20.7-60.5 66-60.5 66-2.2 7.1-4.2 14.1-5.5 21.4-5.1 29.7 2.6 57.8 19.3 82.8 26 38.8 68.2 52.2 68.2 52.2 62.5 21.2 105.2-10 105.2-10 39.3-27 47.2-58.2 47.2-58.2-31.7 24.8-45.4 22.5-45.4 22.5zM171.6 67.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z"
                        fill="url(#a)"
                      />
                      <path
                        d="M238.5 98.4c.5-22.2-33-45.8-33-45.8C145.8 8.4 91.8 37 91.8 37c-46.7 20.7-60.5 66-60.5 66-2.7 7.7-5.1 19.5-5.1 19.5-2.9 14.8-1.6 28.5-1.6 28.5 1.2 13.1 4.1 21.9 4.1 21.9 3 9.4 4.4 12.3 4.4 12.3-.1-.3-.6-2.5-.6-2.5s-4.2-20.2-.3-39.6c0 0 3.4-20.2 17.2-35.8 0 0 22.4-31.9 64.1-19.4 0 0 9 3.2 12.1 4.8 3.1 1.5 8.5 3.8 8.5 3.8 29.5 14.3 54.5 18.8 54.5 18.8 52.9 8.9 49.9-16.9 49.9-16.9zm-66.9-19.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z"
                        fill="url(#b)"
                      />
                      <path d="M137.4 58.2l-34.1-10.6c-.2 0-1.2-.5-3 0 0 0-20.1 5.1-16.6 16.1 0 0 2.1 6.9 7.8 13.6l37.5-1.8z" fill="url(#c)" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>RxJS</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-10 -10 116 111">
                      <clipPath id="clip">
                        <path d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z" />
                      </clipPath>
                      <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="7" y1="64" x2="50" y2="107">
                        <stop offset="0" stopColor="#f9a03c" />
                        <stop offset="1" stopColor="#f7974e" />
                      </linearGradient>
                      <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="2" y1="-2" x2="87" y2="84">
                        <stop offset="0" stopColor="#f26d58" />
                        <stop offset="1" stopColor="#f9a03c" />
                      </linearGradient>
                      <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="45" y1="-10" x2="108" y2="53">
                        <stop offset="0" stopColor="#b84e51" />
                        <stop offset="1" stopColor="#f68e48" />
                      </linearGradient>
                      <g clipPath="url(#clip)">
                        <path d="M-100,-102m-28,0v300h300z" fill="url(#gradient-1)" />
                        <path d="M-100,-102m28,0h300v300z" fill="url(#gradient-3)" />
                        <path d="M-100,-102l300,300" fill="none" stroke="url(#gradient-2)" strokeWidth="40" />
                      </g>
                    </svg>
                  </SkillIcon>
                  <SkillTitle>D3.js</SkillTitle>
                </Chip>
                <Chip>
                  <img
                    width="23px"
                    height="23px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEwdGhYdGhcODAuabFoAAAAREg8PDQrEfGgiHhrSiXUGBQSLXEokIh+wc18dGBR8XlJbVktURTtdWlFEPjhCPDY5NS89OTMtKiVJQTpxYlczMCt1ZlokIBxPRj9hVUtZT0UTExFoXFJ9UUCSg3N/dWqeYEbOVyqlPB4jT27bAAAAFHRSTlMAqIox/gk+cvrp+lj+zPoe4Oa0gtfDlpAAAAGJSURBVCiRlZLXcuMwDEXVbBU7tpMFUdglueT/v3BJKbGc2bws+KABz6DwXhXFf8ZHiPVLWu9eEsEZ37b0oqXK3/O+PhcVdcORn+xPYKa2evcxChk3d12zwXdz6tBEUeIViBi8H7e26IehQyUCIOABwPBhg3HojgogVQIQKQXUPmFJ3T3dKA/KhNvNenRm/w17mhHACwhdb1prO7Hgbr88r/JEsIS56knfQ6bmOlwyXQmNooLV8fEIqVbFrjslmQ5rlTJA6VpP0Vqtg+uGS15nLUz1OGlrbQhutNqZj9z1LTNsGgIzWTfyOI5sJ7e+ps89Q3M6GoraJTR6rSPjBudT0xgiO8lnuFptDeIi0tKWmqOA4mjDY07LeofmnGH7XAjIxekz2MywX/TZmfUtWXRiTs44RjRf6pYqG5VYmk1o0lGI7kvaHSe6hleSDFAK3VP4AyefIDsp2RkhdJtlRetQKBtJiiDNe2Xp7+sZ0zxIB4H7ffEzKueY2TC7/lD8G3VblWXZ1r+gX+MvRD0sQ1ZcHdsAAAAASUVORK5CYII="
                    alt=""
                  />
                  <SkillTitle>Zustand</SkillTitle>
                </Chip>
                <Chip>
                  <img width="23px" height="23px" src="https://velog.velcdn.com/images/gn0lee/post/efc2dbcd-5b61-4453-be8b-a018624bc3aa/image.png" alt="" />
                  <SkillTitle>ReactQuery</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 193">
                      <path
                        d="m192.440223 144.644612h31.779888v-76.3052736l-35.804782-35.8047822-22.472322 22.4723223 26.497216 26.4972158zm31.86374 15.93187h-46.286275-64.566001l-26.497216-26.497216 11.2361612-11.236161 21.8853588 21.885359h45.028496l-44.357681-44.441533 11.320014-11.3200132 44.35768 44.3576812v-45.0284968l-21.801506-21.8015067 11.152309-11.1523092-55.09073-55.3422863h-54.3360633-56.3485097l31.6960367 31.6960367v.0838519h.1677039 65.572224l23.2269894 23.2269899-33.9600388 33.9600393-23.2269899-23.2269899v-18.028169h-31.7798886v31.192925l55.0068785 55.0068781-22.3884704 22.388471 35.8047822 35.804782h54.336063 101.54471z"
                        fill="#FF6600"
                      />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>WebSocket</SkillTitle>
                </Chip>
                <Chip>
                  <img width="23px" height="23px" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="" />
                  <SkillTitle>GitHub</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <linearGradient id="~hhCEjI~ovLo7bTsUTFpDa" x1="2" x2="44" y1="34.5" y2="34.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#2684ff" />
                        <stop offset=".28" stopColor="#1f7bf6" />
                        <stop offset=".742" stopColor="#0c62dd" />
                        <stop offset=".994" stopColor="#0052cc" />
                      </linearGradient>
                      <path
                        fill="url(#~hhCEjI~ovLo7bTsUTFpDa)"
                        d="M3.589,35.049c-0.453,0.738-0.962,1.595-1.394,2.277c-0.387,0.653-0.179,1.495,0.467,1.894 l9.063,5.572c0.655,0.404,1.514,0.201,1.919-0.453c0.004-0.007,0.008-0.013,0.012-0.02c0.363-0.606,0.83-1.393,1.338-2.236 c3.59-5.92,7.201-5.196,13.713-2.089l8.986,4.269c0.695,0.331,1.527,0.036,1.858-0.659c0.006-0.012,0.012-0.025,0.017-0.037 l4.315-9.75c0.305-0.696-0.005-1.508-0.697-1.825c-1.896-0.891-5.668-2.667-9.063-4.304C21.909,21.76,11.529,22.143,3.589,35.049z"
                      />
                      <linearGradient id="~hhCEjI~ovLo7bTsUTFpDb" x1="4" x2="46" y1="12.5" y2="12.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0052cc" />
                        <stop offset=".044" stopColor="#0255cf" />
                        <stop offset=".665" stopColor="#1c77f2" />
                        <stop offset="1" stopColor="#2684ff" />
                      </linearGradient>
                      <path
                        fill="url(#~hhCEjI~ovLo7bTsUTFpDb)"
                        d="M44.412,11.968c0.453-0.737,0.961-1.593,1.393-2.274c0.387-0.652,0.179-1.494-0.467-1.892 l-9.057-5.564c-0.638-0.429-1.504-0.261-1.934,0.377c-0.018,0.027-0.035,0.054-0.051,0.082c-0.362,0.605-0.829,1.391-1.338,2.233 c-3.588,5.912-7.197,5.189-13.703,2.087l-8.952-4.243c-0.695-0.33-1.526-0.035-1.857,0.658C8.441,3.444,8.435,3.456,8.429,3.469 l-4.312,9.738c-0.305,0.695,0.005,1.506,0.697,1.822c1.895,0.89,5.664,2.664,9.057,4.299C26.104,25.239,36.477,24.843,44.412,11.968 z"
                      />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>Confluence</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z" />
                      <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z" />
                      <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z" />
                      <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z" />
                      <circle cx="32" cy="24" r="7" fill="#29b6f6" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>Figma</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4 C33,17.741,33,9.254,33,8z" />
                      <path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z" />
                      <path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4 C17.741,14,9.254,14,8,14z" />
                      <path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z" />
                      <path
                        fill="#e91e63"
                        d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984 c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
                      />
                      <path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994 S4,30.228,4,28.022z" />
                      <path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4 C29.258,33,37.746,33,39,33z" />
                      <path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z" />
                    </svg>
                  </SkillIcon>
                  <SkillTitle>Slack</SkillTitle>
                </Chip>
                <Chip>
                  <SkillIcon>
                    <svg fill="none" viewBox="0 0 32 32" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#357DE8"
                        d="M11.034 21.99h-2.22c-3.346 0-5.747-2.05-5.747-5.052h11.932c.619 0 1.019.44 1.019 1.062v12.007c-2.983 0-4.984-2.416-4.984-5.784zm5.893-5.967h-2.219c-3.347 0-5.748-2.013-5.748-5.015h11.933c.618 0 1.055.402 1.055 1.025V24.04c-2.983 0-5.02-2.416-5.02-5.784zm5.93-5.93h-2.219c-3.347 0-5.748-2.05-5.748-5.052h11.933c.618 0 1.018.439 1.018 1.025v12.007c-2.983 0-4.984-2.416-4.984-5.784z"
                      ></path>
                    </svg>
                  </SkillIcon>
                  <SkillTitle>JIRA</SkillTitle>
                </Chip>
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

const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px 8px 10px;
  gap: 0.3rem;
  background: black;
  border: 1px solid white;
  border-radius: 0.3rem;
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

const SkillIcon = styled.svg<{ $color?: string }>`
  width: 1.2rem;
  height: 1.2rem;
  fill: none;
  color: ${({ $color }) => $color};
  stroke: ${({ $color }) => $color};
  stroke-width: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  circle {
    fill: ${({ $color }) => $color};
  }

  path {
    fill: ${({ $color }) => $color};
  }

  g {
    ellipse {
      transition: transform 0.3s ease-in-out;
    }
  }
`;
