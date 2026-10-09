<script lang="ts">
import ProjectCard from '#components/ProjectCard.svelte';
import LeftSidebar from '#lib/components/LeftSidebar.svelte';
import {projects} from '#lib/data/projects.ts';

</script>

<div class="layout">
    <LeftSidebar />
    <main>
        <!--Page content -->
    </main>
</div>

<!--

{#each projects as project (project.slug)}
    <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        githubLink={project.githubLink}
    />
{/each}
-->


