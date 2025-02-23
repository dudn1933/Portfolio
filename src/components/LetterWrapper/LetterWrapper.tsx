import { keyframes, styled } from 'styled-components';

interface LetterWrapperState {
  text: string;
  visibleIndexes: number[];
}

const LetterWrapper = ({ text, visibleIndexes }: LetterWrapperState) => {
  const handleClick = () => {
    const container = document.querySelector('#content-scroll');
    const target = document.querySelector('#content-scroll-top');

    container?.scroll({
      top: (target as HTMLElement)?.offsetHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Container onClick={handleClick}>
      <div>
        {text.split('').map((char, index) => {
          return (
            <Letter key={index} $char={char} $isVisible={visibleIndexes?.includes(index)}>
              {char}
            </Letter>
          );
        })}
      </div>
      <Click>Click</Click>
    </Container>
  );
};

export default LetterWrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Letter = styled.span<{ $char: string; $isVisible: boolean }>`
  display: inline-block;
  padding-left: ${({ $char }) => ([' '].includes($char) ? '4rem' : '0')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.5s ease, transform 0.5s ease;

  /* 1270 이하이면  fontsize 10rem으로 변경 */
  font-size: 13rem;
  color: transparent;
  background: linear-gradient(90deg, white 0%, #f78fcc 100%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right center;
  }
`;

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Click = styled.div`
  user-select: none;
  font-size: 3rem;
  margin-top: 10rem;
  color: #f78fcc;
  cursor: pointer;
  animation: ${bounce} 1s ease-in-out infinite;
`;
