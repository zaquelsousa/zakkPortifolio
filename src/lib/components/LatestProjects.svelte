<script lang="ts">
  import ProjectCard from '#components/ProjectCard.svelte';
  import { projects } from '#lib/data/projects.ts';

  const latestProjects = projects.slice(0, 3);
</script>

<section class="latest-projects">
  <header class="section-header">
    <h2>Projects</h2>
    <a href="/projects">View all →</a>
  </header>

  <div class="project-grid">
    {#each latestProjects as project (project.slug)}
      <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        githubLink={project.githubLink}
      />
    {/each}
  </div>
</section>

<style>
  .latest-projects {
    margin-top: 2rem;
    min-width: 0;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .section-header h2 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
  }

  .section-header a {
    font-size: 0.8rem;
    color: #8ab4e8;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: 640px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
