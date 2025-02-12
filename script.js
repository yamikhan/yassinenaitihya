// Sample array of project objects
const projects = [
    {
        name: "Projet 1",
        description: "Description du projet 1. Une application web qui fait XYZ.",
        demoLink: "https://example.com/demo1",
        repoLink: "https://github.com/username/project1"
    },
    {
        name: "Projet 2",
        description: "Description du projet 2. Une application mobile qui fait ABC.",
        demoLink: "https://example.com/demo2",
        repoLink: "https://github.com/username/project2"
    },
    {
        name: "Projet 3",
        description: "Description du projet 3. Un site e-commerce qui fait DEF.",
        demoLink: "https://example.com/demo3",
        repoLink: "https://github.com/username/project3"
    }
];

// Function to display projects
function displayProjects() {
    const projectsSection = document.getElementById('projects');

    projects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        // Create project title
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        // Create project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        // Create demo link
        const demoLink = document.createElement('a');
        demoLink.href = project.demoLink;
        demoLink.textContent = "Voir la démo";
        demoLink.target = "_blank"; // Open in a new tab

        // Create repository link
        const repoLink = document.createElement('a');
        repoLink.href = project.repoLink;
        repoLink.textContent = "Voir le code";
        repoLink.target = "_blank"; // Open in a new tab
        repoLink.style.marginLeft = "10px"; // Add some space between links

        // Append elements to project container
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(demoLink);
        projectDiv.appendChild(repoLink);

        // Append project container to projects section
        projectsSection.appendChild(projectDiv);
    });
}

// Call the function to display projects when the page loads
document.addEventListener('DOMContentLoaded', displayProjects);