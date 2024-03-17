export interface Project {
  key: string;
  repo: string;
  stars: number | null;
}

export interface UiState {
  useDarkMode: boolean;
  androidProjects: Project[];
  desktopProjects: Project[];
  webProjects: Project[];
}

export const ANDROID_PROJECTS: Project[] = [
  {
    key: "simple-mp",
    repo: "simplemp-compose",
    stars: null,
  },
  {
    key: "layout-scaffold",
    repo: "layout-scaffold",
    stars: null,
  },
  {
    key: "bookmarks",
    repo: "bookmarks",
    stars: null,
  },
];

export const DESKTOP_PROJECTS: Project[] = [
  {
    key: "catppuccinifier",
    repo: "catppuccinifier",
    stars: null,
  },
  {
    key: "whiskers-launcher",
    repo: "whiskers-launcher",
    stars: null,
  },
];

export const WEB_PROJECTS: Project[] = [
  {
    key: "personal-website",
    repo: "personal-website",
    stars: null,
  },
];
