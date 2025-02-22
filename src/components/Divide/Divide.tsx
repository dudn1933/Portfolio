import { styled } from 'styled-components';

interface DivideState {
  width?: string;
  border?: string;
  margin?: string;
}

const Divide = ({ width, border, margin }: DivideState) => {
  return <Wrapper $width={width} $border={border} $margin={margin} />;
};

export default Divide;

const Wrapper = styled.div<{ $width?: string; $border?: string; $margin?: string }>`
  width: ${({ $width }) => $width ?? '100%'};
  height: 0px;
  border: ${({ $border }) => $border ?? ''};
  margin: ${({ $margin }) => $margin ?? ''};
`;
