// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '管理套装',
  tagline: '从内到外，全面自我管理与提升',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://app-info-web.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'secondtime-github', // Usually your GitHub org/user name.
  projectName: 'app-info-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'ja', 'zh-Hant', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
      'zh-Hans': {
        label: '简体中文',
      },
      'zh-Hant': {
        label: '繁體中文',
      },
    }
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/icon.png',
      navbar: {
        title: '管理套装',
        logo: {
          alt: 'SimpleStyle Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'outfitSidebar',
            position: 'left',
            label: '👔穿搭',
          },
          {
            type: 'docSidebar',
            sidebarId: 'excerciseSidebar',
            position: 'left',
            label: '🏋️健身',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dreamSidebar',
            position: 'left',
            label: '🎯目标',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '技术',
            items: [
              {
                label: '技术支持',
                to: '/docs/outfit/support',
              },
            ],
          },
          {
            title: '用户',
            items: [
              {
                label: '隐私政策',
                to: '/docs/outfit/privacy-policy',
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '许可协议',
                href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teki Ho. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
