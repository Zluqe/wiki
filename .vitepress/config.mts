import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zluqe Wiki",
  description: "Quality hosting, for quality bots.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Account', link: '/account' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zluqe' }
    ]
  },
  vite: {
    server: {
      host: '0.0.0.0',
      // allow your custom hostname
      allowedHosts: ['wiki.zluqe.org']
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: ['wiki.zluqe.org']
    }
  }
})
