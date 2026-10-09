<script lang="ts">
import ProjectCard from '#components/ProjectCard.svelte';

const project = {
    name: 'Sem pena nem uma fi',
    description: 'This is a description of my project.',
    image: 'src/lib/assets/frango.jpg',
    githubLink: 'https://github.com/username/repository'
};

let name = "zaquel porra"
</script>


<h1>Welcome {name}</h1>


<ProjectCard
    name={project.name}
    description={project.description}
    image={project.image}
    githubLink={project.githubLink}
/>




