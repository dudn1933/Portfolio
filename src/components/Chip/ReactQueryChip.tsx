import { styled } from 'styled-components';

const ReactQueryChip = () => {
  return (
    <Chip>
      <img width="23px" height="23px" src="https://velog.velcdn.com/images/gn0lee/post/efc2dbcd-5b61-4453-be8b-a018624bc3aa/image.png" alt="" />
      <SkillTitle>ReactQuery</SkillTitle>
    </Chip>
  );
};

export default ReactQueryChip;

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
