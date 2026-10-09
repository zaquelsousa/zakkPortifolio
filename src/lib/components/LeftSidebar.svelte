<script lang="ts">
  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Writings', href: '/writings' },
    { label: 'Projects', href: '/projects' },
    { label: 'Lab', href: '/lab' },
    { label: 'About', href: '/about' }
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/zaquelsousa' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaquel-souza/' },
    { label: 'Email', href: 'mailto:zaqielsousa22@gmail.com' }
  ];
</script>

<aside class="sidebar">
    <h1 class="title">zaquel<br /> de souza</h1>

    <nav class="navigation" aria-label="Main navigation">
        {#each navigation as item}
            <a href={item.href}>{item.label}</a>
        {/each}
    </nav>

  <div class="social-links" aria-label="Social links">
    <a
      href={socialLinks[0].href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.74 1.8 3.03 1.37.1-.73.4-1.22.7-1.5-2.48-.28-5.08-1.24-5.08-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.1-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.1 5.49.4.34.76 1 .76 2.02v3.01c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    </a>

    <a
      href={socialLinks[1].href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.74H4.96V9.2h2.97v9.54ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.84h-2.96V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.2-1.79 2.46v4.72H9.48V9.2h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.58 1.98 3.58 4.56v5.22Z"
        />
      </svg>
    </a>

    <a
      href={socialLinks[2].href}
      aria-label="Email"
      title="Email"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </a>
  </div>
</aside>

<style>
    .title {
        font-size: 1.25rem;
        line-height: 1.3;
        margin: 0 0 1.5rem;
        overflow-wrap: anywhere;
    }
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    min-height: 0;
    box-sizing: border-box;
    padding: 1.5rem 1rem;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .navigation a {
    color: inherit;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 150ms ease;
  }

  .navigation a:hover {
    opacity: 1;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
  }

  .social-links a {
    display: inline-flex;
    color: inherit;
    opacity: 0.7;
    transition:
      opacity 150ms ease,
      transform 150ms ease;
  }

  .social-links a:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .social-links svg {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
