import { hexToCSSFilter } from "hex-to-css-filter";
import { Router } from "vue-router";

export class RootPageVM {
  // ===================================
  // UI
  // ===================================

  uiState: UiState = {
    inDarkMode: localStorage.getItem("inDarkMode") === "true" ? true : false,
    currentTab: this.getTabFromURL(),
    showMobileNav: false,
  };

  openMobileNavBar() {
    this.uiState.showMobileNav = true;
  }

  closeMobileNavBar() {
    this.uiState.showMobileNav = false;
  }

  // ===================================
  // Functions
  // ===================================

  getTabFromURL(): Tab {
    if (window.location.pathname === "/projects") {
      return Tab.PROJECTS;
    } else if (window.location.pathname === "/contacts") {
      return Tab.CONTACTS;
    } else {
      return Tab.HOME;
    }
  }

  getThemeClass(): string {
    return this.uiState.inDarkMode ? "dark-theme" : "light-theme";
  }

  async toggleTheme() {
    this.uiState.inDarkMode = !this.uiState.inDarkMode;
    localStorage.setItem("inDarkMode", String(this.uiState.inDarkMode));
  }

  getIconFilter(): string {
    let filter = hexToCSSFilter(this.uiState.inDarkMode ? "#E8E493" : "#323000");
    return filter.filter.replace(";", "");
  }

  openHomePage(router: Router) {
    router.push("/");
    this.uiState.currentTab = Tab.HOME;
    this.closeMobileNavBar();
  }

  openProjectsPage(router: Router) {
    router.push("/projects");
    this.uiState.currentTab = Tab.PROJECTS;
    this.closeMobileNavBar();
  }

  openContactsPage(router: Router) {
    router.push("/contacts");
    this.uiState.currentTab = Tab.CONTACTS;
    this.closeMobileNavBar();
  }
}

export interface UiState {
  inDarkMode: boolean;
  currentTab: Tab;
  showMobileNav: boolean;
}

export enum Tab {
  HOME,
  PROJECTS,
  CONTACTS,
}
