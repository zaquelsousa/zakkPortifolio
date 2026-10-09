<script lang="ts">

interface Props{
    name: string;
    description: string;
    image?: string;
    githubLink?: string
}

let {
    name = "project name",
    description,
    image,
    githubLink
}: Props = $props();

</script>

<div class="project-card">
  <img src={image} alt={name} />
  <h2>{name}</h2>
  <p>{description}</p>
  <a href={githubLink} class="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

<style>

.project-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.project-card h2 {
    margin-top: 10px;
    font-size: 1.5rem;
}

.project-card p {
    margin-top: 5px;
    font-size: 0.9rem;
    color: #666;
}
.project-card .github-link {
    display: block;
    margin-top: 15px;
    text-align: center;
    font-size: 0.8rem;
    color: #007bff;
    text-decoration: none;
}

.project-card .github-link:hover {
    text-decoration: underline;
}
</style>


