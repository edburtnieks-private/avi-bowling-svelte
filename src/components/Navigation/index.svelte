<style>
  nav {
    margin-bottom: var(--m-m);
  }

  @media (min-width: 1024px) {
    nav {
      margin-bottom: 0;
      margin-left: var(--m-l);
    }
  }

  @media (min-width: 1280px) {
    nav {
      margin-left: var(--m-xxl);
    }
  }

  ul {
    margin: var(--m-0);
  }

  @media (min-width: 1024px) {
    ul {
      display: flex;
      margin: var(--m-0);
    }
  }

  li {
    padding: var(--p-xs) var(--p-0);
  }

  @media (min-width: 1024px) {
    li {
      padding: var(--p-0);
    }

    li:not(:last-of-type) {
      margin-right: var(--m-s);
    }
  }

  @media (min-width: 1280px) {
    li:not(:last-of-type) {
      margin-right: var(--m-l);
    }
  }

  a {
    color: var(--c-mine-shaft);
    display: block;
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    a {
      display: inline;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>

    <li>
      <a href="/gallery">Gallery</a>
    </li>

    <li>
      <a href="/special-offers">Special offers</a>
    </li>

    <li>
      <a href="/news">News</a>
    </li>

    <li>
      <a href="/news">Contacts</a>
    </li>
  </ul>
</nav>
