

<div class="introduction">
  <div class="intro-text">
    <h1>
      Software developer interested in computer science,
      systems, backend development, and graphical programming.
    </h1>

    <p>
      I build things, study how they work, and write about what I
      learn in the process. This is my public notebook.
    </p>
  </div>

  <img
    class="intro-image"
    src="/frango.jpg"
    alt="Minimalist landscape illustration"
  />
</div>

<style>
  .introduction {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 140px;
    align-items: center;
    gap: 1.5rem;

    padding: 1rem 0 1.5rem;
    border-bottom: 1px solid var(--border-color, #ccc);
  }

  .intro-text h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.25rem, 2.5vw, 2rem);
    line-height: 1.15;
    font-weight: 600;
  }

  .intro-text p {
    margin: 0;
    font-family: monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--muted-color, #777);
  }

  .intro-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    .introduction {
      grid-template-columns: minmax(0, 1fr) 90px;
      gap: 0.75rem;
    }

    .intro-text h1 {
      font-size: 1.15rem;
    }

    .intro-text p {
      font-size: 0.7rem;
    }
  }
</style>
