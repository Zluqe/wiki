import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Zluqe Wiki",
  description: "Quality hosting, for quality bots.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    server: {
      // listen on all interfaces (if you need LAN access)
      host: '0.0.0.0',
      // allow your custom hostname
      allowedHosts: ['wiki.zluqe.org']
    },
    preview: {
      // apply same settings to `vitepress preview`
      host: '0.0.0.0',
      allowedHosts: ['wiki.zluqe.org']
    }
  }
})
