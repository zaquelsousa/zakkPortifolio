<script lang="ts">
  const technologies = [
    'Go',
    'C',
    'SQL',
    'Linux',
    'Networking',
    'Backend systems',
    'Graphics programming'
  ];

  const reading = [
    { title: 'Code', author: 'Charles Petzold' },
    { title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt' },
    { title: 'Computer Networking: A Top-Down Approach', author: 'Kurose & Ross' },
    { title: 'How to Solve It', author: 'George Pólya' },
    { title: 'Logic in Computer Science', author: 'Huth & Ryan' }
  ];
</script>

<aside class="right-sidebar">
  <section class="section">
    <h2>Technologies & interests</h2>

    <ul class="technology-list">
      {#each technologies as technology}
        <li>{technology}</li>
      {/each}
    </ul>
  </section>

  <section class="section">
    <h2>Books & papers</h2>

    <ul class="reading-list">
      {#each reading as item}
        <li>
          <span class="book-title">{item.title}</span>
          <span class="book-author">{item.author}</span>
        </li>
      {/each}
    </ul>
  </section>
</aside>

<style>
  .right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 0;
    font-size: 0.85rem;
  }

  .section h2 {
    margin: 0 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color, #444);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .technology-list,
  .reading-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .technology-list li {
    color: var(--muted-color, #999);
  }

  .reading-list li {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .book-title {
    line-height: 1.4;
  }

  .book-author {
    color: var(--muted-color, #999);
    font-size: 0.75rem;
    line-height: 1.4;
  }
</style>


