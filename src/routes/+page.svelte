<script lang="ts">
import ProjectCard from '#components/ProjectCard.svelte';
import {projects} from '#lib/data/projects.ts';

let name = "zaquel porra"
</script>


<h1>Welcome {name}</h1>


{#each projects as project (project.slug)}
    <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        githubLink={project.githubLink}
    />
{/each}


