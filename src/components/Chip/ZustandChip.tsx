import { styled } from 'styled-components';

const ZustandChip = () => {
  return (
    <Chip>
      <img
        width="23px"
        height="23px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEwdGhYdGhcODAuabFoAAAAREg8PDQrEfGgiHhrSiXUGBQSLXEokIh+wc18dGBR8XlJbVktURTtdWlFEPjhCPDY5NS89OTMtKiVJQTpxYlczMCt1ZlokIBxPRj9hVUtZT0UTExFoXFJ9UUCSg3N/dWqeYEbOVyqlPB4jT27bAAAAFHRSTlMAqIox/gk+cvrp+lj+zPoe4Oa0gtfDlpAAAAGJSURBVCiRlZLXcuMwDEXVbBU7tpMFUdglueT/v3BJKbGc2bws+KABz6DwXhXFf8ZHiPVLWu9eEsEZ37b0oqXK3/O+PhcVdcORn+xPYKa2evcxChk3d12zwXdz6tBEUeIViBi8H7e26IehQyUCIOABwPBhg3HojgogVQIQKQXUPmFJ3T3dKA/KhNvNenRm/w17mhHACwhdb1prO7Hgbr88r/JEsIS56knfQ6bmOlwyXQmNooLV8fEIqVbFrjslmQ5rlTJA6VpP0Vqtg+uGS15nLUz1OGlrbQhutNqZj9z1LTNsGgIzWTfyOI5sJ7e+ps89Q3M6GoraJTR6rSPjBudT0xgiO8lnuFptDeIi0tKWmqOA4mjDY07LeofmnGH7XAjIxekz2MywX/TZmfUtWXRiTs44RjRf6pYqG5VYmk1o0lGI7kvaHSe6hleSDFAK3VP4AyefIDsp2RkhdJtlRetQKBtJiiDNe2Xp7+sZ0zxIB4H7ffEzKueY2TC7/lD8G3VblWXZ1r+gX+MvRD0sQ1ZcHdsAAAAASUVORK5CYII="
        alt=""
      />
      <SkillTitle>Zustand</SkillTitle>
    </Chip>
  );
};

export default ZustandChip;

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
