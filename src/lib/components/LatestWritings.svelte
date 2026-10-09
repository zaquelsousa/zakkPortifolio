<script lang="ts">
import {writings} from '#lib/data/writings.ts';

const latestWritings = writings.slice(0, 3);

function formtDate(date: string): string[] {
    const parsed = new Date(`${date}T00:00:00`);

    return [
        parsed.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
        parsed.toLocaleDateString('en-US', { day: '2-digit' }),
        parsed.getFullYear().toString()
    ];
}
</script>

<section class="latest-writings">
  <header class="section-header">
    <h2>Latest writing</h2>
    <a href="/writings" class="view-all">View all →</a>
  </header>

  <div class="writing-list">
    {#each latestWritings as writing (writing.slug)}
      <article class="writing-row">
        <time class="writing-date" datetime={writing.publishedAt}>
          {#each formtDate(writing.publishedAt) as part}
            <span>{part}</span>
          {/each}
        </time>

        <div class="writing-content">
          <a class="writing-title" href={`/writings/${writing.slug}`}>
            {writing.title}
          </a>

          <p>{writing.description}</p>
        </div>

        <ul class="writing-tags" aria-label="Article tags">
          {#each writing.tags as tag (tag)}
            <li>{tag}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<style>
  .latest-writings {
    width: 100%;
    min-width: 0;
    font-family: monospace;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .section-header h2 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
  }

  .view-all {
    flex-shrink: 0;
    color: #8ab4e8;
    font-size: 0.8rem;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .writing-list {
    display: flex;
    flex-direction: column;
  }

  .writing-row {
    display: grid;
    grid-template-columns: 60px minmax(0, 1fr) auto;
    align-items: start;
    gap: 1rem;

    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color, #383838);
  }

  .writing-date {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: var(--muted-color, #888);
    font-size: 0.7rem;
    line-height: 1.35;
  }

  .writing-content {
    min-width: 0;
  }

  .writing-title {
    color: var(--text-color, #ddd);
    font-size: 0.85rem;
    line-height: 1.4;
    text-decoration: none;
  }

  .writing-title:hover {
    color: #8ab4e8;
  }

  .writing-content p {
    margin: 0.3rem 0 0;
    color: var(--muted-color, #999);
    font-size: 0.75rem;
    line-height: 1.45;
  }

  .writing-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.35rem;
    max-width: 180px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .writing-tags li {
    padding: 0.2rem 0.4rem;
    border: 1px solid #34485c;
    border-radius: 4px;
    color: #8ab4e8;
    font-size: 0.65rem;
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    .writing-row {
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 0.75rem;
    }

    .writing-tags {
      grid-column: 2;
      justify-content: flex-start;
      max-width: none;
    }
  }
</style>
