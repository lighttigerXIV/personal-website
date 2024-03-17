import { hexToCSSFilter } from "hex-to-css-filter";
import { ANDROID_PROJECTS, DESKTOP_PROJECTS, Project, UiState, WEB_PROJECTS } from "./Model";
import axios from "axios";

export class AppViewModel {
  uiState: UiState = {
    useDarkMode: this.getUseDarkMode(),
    androidProjects: ANDROID_PROJECTS,
    desktopProjects: DESKTOP_PROJECTS,
    webProjects: WEB_PROJECTS,
  };
  
  getUseDarkMode(): boolean {
    let darkModeSetting = localStorage.getItem("useDarkMode");

    if (darkModeSetting === "true") {
      return true;
    }

    return false;
  }

  toggleDarkMode() {
    this.uiState.useDarkMode = !this.uiState.useDarkMode;

    let setting = this.uiState.useDarkMode ? "true" : "false";

    localStorage.setItem("useDarkMode", setting);
  }

  getIconFilter(): string {
    let hexColor = this.uiState.useDarkMode ? "#FFEBB8" : "#382800";
    let filter = hexToCSSFilter(hexColor, {
      acceptanceLossPercentage: 0,
    });

    return filter.filter.slice(0, -1);
  }

  async loadStars() {
    let androidProjects = this.uiState.androidProjects;

    androidProjects.forEach(async (project) => {
      const stars = await this.fetchProjectStars(project);

      let newProjects: Project[] = [];

      this.uiState.androidProjects.forEach((p) => {
        if (p.repo === project.repo) {
          let newProject = project;
          newProject.stars = +stars;

          newProjects.push(newProject);
        } else {
          newProjects.push(p);
        }
      });

      this.uiState.androidProjects = newProjects;
    });

    let desktopProjects = this.uiState.desktopProjects;

    desktopProjects.forEach(async (project) => {
      const stars = await this.fetchProjectStars(project);

      let newProjects: Project[] = [];

      this.uiState.desktopProjects.forEach((p) => {
        if (p.repo === project.repo) {
          let newProject = project;
          newProject.stars = +stars;

          newProjects.push(newProject);
        } else {
          newProjects.push(p);
        }
      });

      this.uiState.desktopProjects = newProjects;
    });

    let webProjects = this.uiState.webProjects;

    webProjects.forEach(async (project) => {
      const stars = await this.fetchProjectStars(project);

      let newProjects: Project[] = [];

      this.uiState.webProjects.forEach((p) => {
        if (p.repo === project.repo) {
          let newProject = project;
          newProject.stars = +stars;

          newProjects.push(newProject);
        } else {
          newProjects.push(p);
        }
      });

      this.uiState.webProjects = newProjects;
    });
  }

  async fetchProjectStars(project: Project): Promise<string> {
    try {
      const response = await axios.get("https://api.github.com/repos/lighttigerXIV/" + project.repo);
      return response.data.stargazers_count;
    } catch {
      return "#";
    }
  }
}


