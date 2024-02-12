// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hoşgeldiniz!',
  tagline: "Türkiye'nin deprem riski yüksek bir coğrafyada bulunması sebebiyle, depremle baş etmeyi öğrenmek hayati bir öneme sahiptir. Hızır App, olası bir deprem anında yanınızda olacak ve size yardımcı olacaktır.",
  favicon: 'img/hızırlogo.png',

  // Set the production url of your site here
  url: 'https://asenatech.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AsenaTechnology', // Usually your GitHub org/user name.
  projectName: 'ber4tbey', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hızır App',
        logo: {
          alt: 'My Site Logo',
          src: 'img/hızırlogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kullanım Kılavuzu',
          },

          {
            href: 'https://github.com/AsenaTechnology',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Kullanım Kılavuzu',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'İnstagram',
                href: 'https://instagram.com/AsenaTechnology',
              },
              {
                label: 'Website',
                href: 'https://asenatech.com',
              },
              
            ],
          },
          
          {
            title: 'Daha Fazla',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/AsenaTechnology',
              },
            ],
          },
          {
            title: 'Geliştiriciler',
            items: [
              
              {
                label: 'Hasan Karaparça',
                href: 'https://www.instagram.com/hasan.karaparca/',

              },
              {
                label: 'Berathan Yedibela',
                href: 'https://instagram.com/Berathanyedibela',
                
              },
              {
                label: 'Burakcan Kapucuoğlu',
                href: 'https://www.instagram.com/brkcnkpcgl/',
                
              },
              {
                label: 'Eymen Alp Tokmakoğlu',
                href: 'https://www.instagram.com/otobus_cami/',
                
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AsenaTechnology`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
