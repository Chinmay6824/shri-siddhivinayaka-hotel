/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
let repo = ''
if (process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.split('/')[1] || ''
}

// When building on GitHub Actions for GitHub Pages, if repo is not <user>.github.io,
// use repo name as basePath unless explicitly overridden by BASE_PATH
const isUserPage = repo.toLowerCase().endsWith('.github.io')
const basePath = process.env.BASE_PATH !== undefined 
  ? process.env.BASE_PATH 
  : (isGithubActions && !isUserPage && repo ? `/${repo}` : '')

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig


