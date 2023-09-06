import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import logo from './assets/grafiki.svg';
import Image from 'next/image';

const config: DocsThemeConfig = {
  logo: <span>grafiki - documentation</span>,
  project: {
    link: 'https://www.grafiki.app/',
    icon: <Image
      height={30}
      priority
      src={logo}
      alt="Logo"
    />
  },
  docsRepositoryBase: 'https://github.com/leberkaassemmel/grafiki_docu',
  footer: {
    text: 'Nextra Docs Template',
  },
};

export default config;
