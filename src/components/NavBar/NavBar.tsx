/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const [highlighterStyle, setHighlighterStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const handleLinkStyle = (e: React.MouseEvent) => {
    // const target = e.target as HTMLAnchorElement;
    // if (!target.id) return;
    // const rect = target.getBoundingClientRect();
    // setHighlighterStyle({
    //   top: rect.top + window.scrollY,
    //   left: rect.left + window.scrollX,
    //   width: rect.width / 2,
    //   height: rect.height / 2,
    // });
  };

  return (
    <StyledNav onClick={handleLinkStyle}>
      <StyledLink id="home" to="/">
        HOME
      </StyledLink>
      <StyledLink id="about" to="/about">
        ABOUT
      </StyledLink>
      <StyledLink id="projects" to="/projects">
        PROJECTS
      </StyledLink>
      <StyledLink id="experience" to="/experience">
        EXPERIENCE
      </StyledLink>
      <StyledLink id="contact" to="/contact">
        CONTACT
      </StyledLink>
      <StyledLink id="blog" to="/blog">
        BLOG
      </StyledLink>
      <Highlighter style={highlighterStyle} />
    </StyledNav>
  );
};

export default NavBar;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 144px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 1rem 2rem 1rem 2rem;

  color: white;

  &.navbar.navbar-lg {
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f78fcc;
  padding: 2rem;
  user-select: none;
  font-weight: 600;

  &:hover {
    color: #fcbf02; /* 예시로 hover 시 빨간색 */
  }

  /* 클래스 명에 따라 다른 스타일을 주고 싶다면, 예: */
  &.router-link-active.router-link-exact-active {
    font-weight: bold;
  }
`;

const Highlighter = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 0, 0.2);
  border: 1px solid yellow;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
`;
