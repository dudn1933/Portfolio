import { styled } from 'styled-components';

const JIRAChip = () => {
  return (
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
  );
};

export default JIRAChip;

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
