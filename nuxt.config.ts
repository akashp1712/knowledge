export default defineNuxtConfig({
  vite: {
    server: {
      allowedHosts: true
    }
  },
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],
  
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'akashp1712', // your GitHub/GitLab username or organization
      repo: 'knowledge', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    }
  }
})