<script lang="ts">
    import ProjectCard from '#components/ProjectCard.svelte';
    import Introduction from '#lib/components/Introduction.svelte';
    import LatestWritings from '#lib/components/LatestWritings.svelte';
    import LeftSidebar from '#lib/components/LeftSidebar.svelte';
    import RighhtSidebar from '#lib/components/RighhtSidebar.svelte';
    import {projects} from '#lib/data/projects.ts';

</script>

<!--TODO: fix left and right side bar scrolliung-->
<div class="layout">
    <LeftSidebar />
    
    <main>
        <!--Page content -->
        <Introduction />
        <LatestWritings />
    </main>

    <RighhtSidebar />
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
  grid-template-columns: 180px minmax(0, 1fr) 190px;
  gap: 2rem;

  width: 100%;
  height: 100vh;
  overflow: hidden;

  padding: 2rem;
  box-sizing: border-box;
}

main {
  min-width: 0;
  width: 100%;
  max-width: 800px;

  justify-self: center;

}

@media (max-width: 640px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.25rem;
  }
}
</style>


