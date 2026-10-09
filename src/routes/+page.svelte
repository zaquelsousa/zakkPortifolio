<script lang="ts">
    import ProjectCard from '#components/ProjectCard.svelte';
    import Introduction from '#lib/components/Introduction.svelte';
    import LeftSidebar from '#lib/components/LeftSidebar.svelte';
    import {projects} from '#lib/data/projects.ts';

</script>

<div class="layout">
    <LeftSidebar />
    <main>
        <!--Page content -->
        <Introduction />
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


<style>
.layout {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 2.5rem;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  max-width: 1440px;
  padding: 2rem;
  box-sizing: border-box;
}

main {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

@media (max-width: 640px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.25rem;
  }
}
</style>


