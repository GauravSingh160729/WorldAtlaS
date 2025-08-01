import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  background: linear-gradient(90deg, #121212, #1c1c1c 80%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  position: relative;
  z-index: 100;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #e0e0e0;
  letter-spacing: 2px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s;
  color: #bbbbbb;
  @media (max-width: 900px) {
    display: block;
  }
  &:hover {
    color: #ffffff;
  }
`;

const NavLinks = styled.nav`
  @media (max-width: 900px) {
    position: absolute;
    left: 0;
    top: 64px;
    width: 100%;
    background: linear-gradient(90deg, #1f1f1f, #121212 80%);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.85);
    transform: ${({ open }) => (open ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s;
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 26px;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    padding: 12px 0;
  }
`;

const Li = styled.li`
  a {
    text-decoration: none;
    color: #ccc;
    font-weight: 500;
    font-size: 1.04rem;
    letter-spacing: 1px;
    padding: 10px 22px;
    border-radius: 8px;
    transition: background 0.18s, color 0.18s, box-shadow 0.18s;
    &:hover,
    &.active {
      background: #333333;
      color: #1e90ff; /* DodgerBlue for accent */
      box-shadow: 0 2px 8px rgba(30, 144, 255, 0.7);
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    a {
      display: block;
      width: 100%;
      padding: 16px 36px;
      font-size: 1.14rem;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on click (mobile UX improvement)
  const handleNavClick = () => setIsOpen(false);

  return (
    <NavbarContainer>
      <Logo>
        <NavLink to="/" onClick={handleNavClick}>
          WorldAtlas
        </NavLink>
      </Logo>
      <Hamburger onClick={() => setIsOpen((p) => !p)}>
        <span aria-label="toggle navigation" role="img">
          ☰
        </span>
      </Hamburger>
      <NavLinks open={isOpen}>
        <Ul>
          <Li>
            <NavLink to="/" onClick={handleNavClick}>
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/about" onClick={handleNavClick}>
              About
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/contact" onClick={handleNavClick}>
              Contact
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/country" onClick={handleNavClick}>
              Country
            </NavLink>
          </Li>
        </Ul>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
