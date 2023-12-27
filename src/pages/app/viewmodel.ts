import axios from "axios";
import { hexToCSSFilter } from "hex-to-css-filter";

export class ViewModel {

    currentTab: number = 0;
    hideMobileNav: boolean = true;
    inDarkMode: boolean = localStorage.getItem("inDarkMode") === "true" ? true : false;
    androidProjects: Project[] = ANDROID_PROJECTS;
    pcProjects: Project[] = PC_PROJECTS;
    webProjects: Project[] = WEB_PROJECTS;

    getIconCSSFilter(hexColor: string | null = null): string {

        let color = "";

        if (hexColor !== null) {
            color = hexColor;
        } else {
            color = this.inDarkMode ? "#cad3f5" : "#4c4f69";
        }

        let filter = hexToCSSFilter(color);
        return filter.filter.replace(";", "");
    }

    openLink(url: string) {
        window.open(url, "_blank");
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    }

    toggleDarkMode() {
        this.inDarkMode = !this.inDarkMode;
        localStorage.setItem("inDarkMode", String(this.inDarkMode));
    }

    async onContentScroll() {

        let contentDiv: HTMLDivElement = document.getElementById("content") as HTMLDivElement;
        let aboutMeSection: HTMLDivElement = document.getElementById("aboutMeSection") as HTMLDivElement;
        let contactsSection: HTMLDivElement = document.getElementById("contactsSection") as HTMLDivElement;
        let projectsSection: HTMLDivElement = document.getElementById("projectsSection") as HTMLDivElement;


        if (contentDiv.offsetTop >= aboutMeSection.getBoundingClientRect().top) {
            this.currentTab = 0;
        }

        if (contentDiv.offsetTop >= contactsSection.getBoundingClientRect().top) {
            this.currentTab = 1;
        }

        if (contentDiv.offsetTop >= projectsSection.getBoundingClientRect().top) {
            this.currentTab = 2;
        }


    }

    async getProjectStars(project: Project): Promise<string> {
        return "-";
        try {
            const response = await axios.get("https://api.github.com/repos/" + project.gitName);
            return response.data.stargazers_count;
        } catch {
            return "-";
        }
    }

    async goToAboutMe() {
        let aboutMeSection: HTMLDivElement = document.getElementById("aboutMeSection") as HTMLDivElement;
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }

    async goToContacts() {
        let contactsSection: HTMLDivElement = document.getElementById("contactsSection") as HTMLDivElement;
        contactsSection.scrollIntoView({ behavior: "smooth" });
    }

    async goToProjects() {
        let projectsSection: HTMLDivElement = document.getElementById("projectsSection") as HTMLDivElement;
        projectsSection.scrollIntoView({ behavior: "smooth" });
    }

    async closeMobileNav(){
        this.hideMobileNav = true;
    }

    async openMobileNav(){
        this.hideMobileNav = false;
    }
}


export interface Project {
    name: string,
    image: string,
    description: string,
    url: string,
    gitName: string,
    stars: string,
};

export let ANDROID_PROJECTS: Project[] = [
    {
        name: "Simple MP",
        image: "simple-mp.png",
        description: "A simple music player with material you in mind",
        url: "https://github.com/lighttigerXIV/SimpleMP-Compose",
        gitName: "lighttigerXIV/SimpleMP-Compose",
        stars: "-"
    }
]

export let PC_PROJECTS: Project[] = [
    {
        name: "Catppuccinifier",
        image: "catppuccinifier.png",
        description: "Apply catppuccin flavors to your wallpapers",
        url: "https://github.com/lighttigerXIV/catppuccinifier",
        gitName: "lighttigerXIV/catppuccinifier",
        stars: "-",
    },
    {
        name: "Simple Keyboard Launcher",
        image: "simple-kl.png",
        description: "A keyboard launcher built with tauri, rust and simplicity in mind",
        url: "https://github.com/lighttigerXIV/simple-keyboard-launcher",
        gitName: "lighttigerXIV/simple-keyboard-launcher",
        stars: "-",
    },
]

export let WEB_PROJECTS: Project[] = [
    {
        name: "Personal Website",
        image: "personal-website.png",
        description: "The website you are seeing",
        url: "https://github.com/lighttigerXIV/personal-website",
        gitName: "lighttigerXIV/personal-website",
        stars: "-",
    }
]