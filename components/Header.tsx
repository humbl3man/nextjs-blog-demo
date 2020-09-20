import Link from 'next/link';
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ctx } from '../context/context';
import { siteTitle } from '../config/site';

const HeaderWrapper = styled.header`
  height: 90px;
  padding: 2rem 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 96rem;
  margin: auto;
`;

const Heading = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`;

const ThemeToggle = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--text-color);
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`;

export default function Header() {
  const { theme, toggleTheme } = useContext(ctx);
  return (
    <HeaderWrapper>
      <Container>
        <Heading>
          <Link href="/">{siteTitle}</Link>
        </Heading>
        <ThemeToggle title={theme === 'light' ? 'Activate Dark Theme' : 'Activate Light Theme'} type="button" onClick={toggleTheme}>
          {theme === 'light' ? <img src="/dark.svg" alt="Dark" /> : <img src="/light.svg" alt="Light" />}
        </ThemeToggle>
      </Container>
    </HeaderWrapper>
  );
}
