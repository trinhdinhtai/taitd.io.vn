import { Post, Series } from "@/.contentlayer/generated";

export type SocialProfile = {
  name: string;
  link: string;
};

export type AuthorType = {
  name: string;
  socialProfiles: SocialProfile[];
  handle: string;
  email: string;
};

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  content?: ContentNavItem[];
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export type SiteMetaData = {
  title: {
    template: string;
    default: string;
  };
  description: string;
  newsletterUrl?: string;
  postsOnHomePage: number;
  siteRepoUrl?: string;
};

export type SeriesItem = {
  title: string;
  slug: Post["slug"];
  status: Post["status"];
  isCurrent: boolean;
};

export type PostSeries = Series & { posts: SeriesItem[] };

export interface PostHeading {
  heading: number;
  text: string;
  slug: string;
}