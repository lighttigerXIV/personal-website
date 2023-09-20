import axios from "axios";

export interface Project {
    name: string,
    image: string,
    url: string,
    gitName: string,
    stars: string,
    tags: string[]
};

export let projects: Project[] = [
    {
        name: "Simple MP",
        image: "simple-mp.png",
        url: "https://github.com/lighttigerXIV/SimpleMP-Compose",
        gitName: "lighttigerXIV/SimpleMP-Compose",
        stars: "?",
        tags: ["Android"]
    },
    {
        name: "Catppuccinifier",
        image: "catppuccinifier.png",
        url: "https://github.com/lighttigerXIV/catppuccinifier",
        gitName: "lighttigerXIV/catppuccinifier",
        stars: "?",
        tags: ["Linux", "Windows"]
    },
    {
        name: "Terminal Runner",
        image: "ulauncher-terminal-runner.png",
        url: "https://github.com/lighttigerXIV/ulauncher-terminal-runner-extension",
        gitName: "lighttigerXIV/ulauncher-terminal-runner-extension",
        stars: "?",
        tags: ["Linux"]
    },
    {
        name: "Session Manager",
        image: "ulauncher-session-manager.png",
        url: "https://github.com/lighttigerXIV/ulauncher-session-manager",
        gitName: "lighttigerXIV/ulauncher-terminal-runner-extension",
        stars: "?",
        tags: ["Linux"]
    },
    {
        name: "Personal Website",
        image: "personal-website.png",
        url: "https://github.com/lighttigerXIV/personal-website",
        gitName: "lighttigerXIV/personal-website",
        stars: "?",
        tags: ["Web"]
    }
]

interface ProjectWithStarsCallback{
    (result: Project[]): void
}

export function getProjectsWithStars(onFinish: ProjectWithStarsCallback){

    let newProjects: Project[] = [];


    projects.forEach((project)=>{
        axios.get("https://api.github.com/repos/" + project.gitName)
        .then((response) => {
            project.stars = response.data.stargazers_count;

            newProjects.push(project);

            if(newProjects.length == projects.length){
                newProjects.sort((a,b) => {
                    if(a.stars > b.stars){return -1}
                    else if(a.stars < b.stars){return 1}
                    else {return 0}
                });

                onFinish(newProjects);
            }
        })
        .catch((error) => {console.error(error)});
    });
}