export interface Repo {
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
}

export interface UserData {
  avatar_url: string;
  bio: string;
  created_at: string;
  followers: number;
  following: number;
  stars: number;
  html_url: string;
  login: string;
  name: string;
  company: string;
  public_repos: number;
  repos_list: Repo[];
  stars_list: Repo[];
  followers_list: UserData[];
  following_list: UserData[];
}
