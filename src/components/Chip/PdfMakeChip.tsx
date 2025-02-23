import { styled } from 'styled-components';

const PdfMakeChip = () => {
  return (
    <Chip>
      <SkillTitle>pdfmake</SkillTitle>
    </Chip>
  );
};

export default PdfMakeChip;

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
