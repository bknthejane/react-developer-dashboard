export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubUserDetail extends GitHubUser {
  name: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}