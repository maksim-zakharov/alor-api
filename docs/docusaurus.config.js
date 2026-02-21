// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alor API',
  tagline: 'Node.js SDK для Alor Open API',
  favicon: 'img/logo.svg',

  // GitHub Pages: project site
  url: 'https://maksim-zakharov.github.io',
  baseUrl: '/alor-api/',

  organizationName: 'maksim-zakharov',
  projectName: 'alor-api',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/maksim-zakharov/alor-api/tree/master/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Alor API',
        logo: {
          alt: 'Alor API',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/api',
            position: 'left',
            label: 'API Reference',
          },
          {
            href: 'https://github.com/maksim-zakharov/alor-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Введение',
                to: '/docs/intro',
              },
              {
                label: 'Сервисы',
                to: '/docs/services',
              },
              {
                label: 'API Reference',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/maksim-zakharov/alor-api',
              },
              {
                label: 'Alor Open API',
                href: 'https://alor.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maksim Zakharov. MIT License.`,
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api',
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        out: 'docs/api',
        plugin: ['typedoc-plugin-markdown'],
        markdown: {
          entryDocument: 'README.md',
          hidePageHeader: true,
        },
        excludeExternals: true,
        excludePrivate: true,
        excludeProtected: true,
        readme: 'none',
        exclude: ['**/helpers.ts'],
      },
    ],
  ],
};

module.exports = config;
