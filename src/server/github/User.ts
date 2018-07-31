/**
 * https://developer.github.com/v3/users/#response-with-public-and-private-profile-information
 */
export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: boolean
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  total_private_repos: number
  owned_private_repos: number
  private_gists: number
  disk_usage: number
  collaborators: number
  two_factor_authentication: boolean
  plan: Plan
}

/**
 * https://developer.github.com/v3/users/#response-with-public-and-private-profile-information
 */
export interface Plan {
  name: string
  space: number
  private_repos: number
  collaborators: number
}
