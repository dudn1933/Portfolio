import { styled } from 'styled-components';

const GitHubChip = () => {
  return (
    <Chip>
      <img width="23px" height="23px" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="" />
      <SkillTitle>GitHub</SkillTitle>
    </Chip>
  );
};

export default GitHubChip;

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
