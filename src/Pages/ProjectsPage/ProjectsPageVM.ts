import axios from "axios";

export class ProjectsPageVM {
  // =========================
  // UI
  // =========================
  uiState: UiState = {
    projects: PROJECTS,
  };

  // =========================
  // Functions
  // =========================

  async loadStars() {
    let projects = this.uiState.projects;

    projects.forEach(async (project) => {
      const stars = await this.fetchProjectStars(project);

      let newProjects: Project[] = [];

      this.uiState.projects.forEach((p) => {
        if (p.url === project.url) {
          let newProject = project;
          newProject.stars = stars;

          newProjects.push(newProject);
        } else {
          newProjects.push(p);
        }
      });

      this.uiState.projects = newProjects;
    });
  }

  async fetchProjectStars(project: Project): Promise<string> {
    try {
      const response = await axios.get("https://api.github.com/repos/" + project.gitName);
      return response.data.stargazers_count;
    } catch {
      return "-";
    }
  }
}

export interface UiState {
  projects: Project[];
}

export interface Project {
  name: string;
  image: string;
  description: string;
  url: string;
  gitName: string;
  stars: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Simple MP",
    image: "simple-mp.webp",
    description: "A simple music player with material you in mind",
    url: "https://github.com/lighttigerXIV/SimpleMP-Compose",
    gitName: "lighttigerXIV/SimpleMP-Compose",
    stars: "-",
  },
  {
    name: "Catppuccinifier",
    image: "catppuccinifier.webp",
    description: "Apply catppuccin flavors to your wallpapers",
    url: "https://github.com/lighttigerXIV/catppuccinifier",
    gitName: "lighttigerXIV/catppuccinifier",
    stars: "-",
  },
  {
    name: "Whiskers Launcher",
    image: "whiskers-launcher.webp",
    description: "A keyboard app launcher for Linux and Windows and with support for extensions ",
    url: "https://github.com/lighttigerXIV/whiskers-launcher",
    gitName: "lighttigerXIV/whiskers-launcher",
    stars: "-",
  },
  {
    name: "Bookmarks",
    image: "bookmarks.webp",
    description: " An Android app to quickly open urls on your browser",
    url: "https://github.com/lighttigerXIV/bookmarks",
    gitName: "lighttigerXIV/bookmarks",
    stars: "-",
  },
  {
    name: "Personal Website",
    image: "personal-website.webp",
    description: "The website you are seeing",
    url: "https://github.com/lighttigerXIV/personal-website",
    gitName: "lighttigerXIV/personal-website",
    stars: "-",
  },
];
