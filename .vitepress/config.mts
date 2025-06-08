import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zluqe Wiki',
  description: 'Quality hosting, for quality bots.',
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Zluqe/logo/main/z.png' }]
  ],

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/Zluqe/logo/main/z.png',
    outlineTitle: 'On this page',
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/Zluqe/wiki/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Account',
        items: [
          { text: 'Make an Account', link: '/account/make-a-account' },
          { text: 'Create a Server',    link: '/account/create-a-server' },
          { text: 'What Are Credits?',   link: '/account/what-are-credits' },
          { text: 'Earn More Credits',   link: '/account/earn-more-credits' }
        ]
      },
      {
        text: 'Links',
        items: [
          { text: 'Website', link: 'https://zluqe.org', icon: 'Website' },
          { text: 'Panel', link: 'https://panel.zluqe.org', icon: 'Panel' },
          { text: 'Status', link: 'https://status.zluqe.org', icon: 'Status' },
          { text: 'Discord', link: 'https://zluqe.org/discord', icon: 'Discord' }
        ]
      }
    ],

    sidebar: {
      '/account/': [
        {
          text: 'Account Guides',
          collapsible: true,
          items: [
            { text: 'Make an Account',    link: '/account/make-a-account' },
            { text: 'Create a Server',     link: '/account/create-a-server' },
            { text: 'What Are Credits?',    link: '/account/what-are-credits' },
            { text: 'Earn More Credits',    link: '/account/earn-more-credits' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zluqe' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 Zluqe'
    }
  },

  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['wiki.zluqe.org']
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: ['wiki.zluqe.org']
    }
  }
})
