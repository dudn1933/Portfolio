import { styled } from 'styled-components';

const HTMLChip = () => {
  return (
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
  );
};

export default HTMLChip;

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

const SkillTitle = styled.span<{ $direction?: string }>`
  font-size: 1rem;

  text-align: ${({ $direction }) => $direction};
`;
