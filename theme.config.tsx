import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import logo from './public/grafiki.svg';
import Image from 'next/image';

const config: DocsThemeConfig = {
  logo: <span style={{ display: 'flex', alignItems: 'center', fontSize: 'x-large', gap: '8px' }}><Image
    height={30}
    priority
    src={logo}
    alt="Logo"
  /> grafiki</span>,
  docsRepositoryBase: 'https://github.com/leberkaassemmel/grafiki_docu',
  footer: {
    text: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {new Date().getFullYear()} © <a href='https://www.grafiki.app/' target="_blank">
          grafiki
        </a>
        <Image
          height={30}
          priority
          src={logo}
          alt="Logo"
        />
      </span>
    )
  }
};

export default config;
