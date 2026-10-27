import fs from 'node:fs'

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const hasCname = fs.existsSync('./public/CNAME')

let repo = ''
if (process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.split('/')[1] || ''
}

// When using a custom domain (CNAME file present) or <user>.github.io, basePath is empty (root)
const isUserPage = repo.toLowerCase().endsWith('.github.io')
const basePath = process.env.BASE_PATH !== undefined 
  ? process.env.BASE_PATH 
  : (!hasCname && isGithubActions && !isUserPage && repo ? `/${repo}` : '')

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig


