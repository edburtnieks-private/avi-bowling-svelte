<script>
  import { Link } from "svelte-routing";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let navigationItems;

  const changeActive = event => {
    // Get active link
    const activeElement = document.querySelector("[data-active]");

    // Get active link indicator
    const firstElement = document.querySelector(
      "[data-active] + .active-indicator"
    );
    const first = firstElement.getBoundingClientRect();

    // Change / move active indicator to clicked link
    delete activeElement.dataset.active;
    event.target.parentElement.dataset.active = true;

    // Get clicked link indicator
    const lastElement = document.querySelector(
      "[data-active] + .active-indicator"
    );
    const last = lastElement.getBoundingClientRect();

    // Calculate difference between active and clicked link
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;

    // Do animation
    lastElement.animate(
      [
        {
          transformOrigin: "center",
          transform: `
            translate(${deltaX}px, ${deltaY}px)
            ${deltaY === 0 ? `rotate(${deltaX < 0 ? "-" : ""}360deg)` : ""}
          `
        },
        {
          transformOrigin: "center",
          transform: "none"
        }
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "both"
      }
    );

    // Dispatch closing navigation menu
    dispatch("toggleNavigation");
  };
</script>

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
    position: relative;
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

  .navigation-link {
    padding-left: var(--p-m);
  }

  @media (min-width: 1024px) {
    .navigation-link {
      padding-left: var(--p-0);
    }
  }

  :global(.navigation-link a) {
    color: var(--c-mine-shaft);
    display: block;
    line-height: 1;
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    :global(.navigation-link a) {
      display: inline;
    }
  }

  .active-indicator {
    position: absolute;
    top: calc(50% - 8px);
    visibility: hidden;
  }

  @media (min-width: 1024px) {
    .active-indicator {
      left: calc(50% - 8px);
      top: calc(100% + 4px);
    }
  }

  [data-active] + .active-indicator {
    visibility: visible;
  }
</style>

<nav>
  <ul bind:this={navigationItems}>
    <li on:click={changeActive}>
      <div data-active class="navigation-link">
        <Link to="/">Home</Link>
      </div>

      <img
        class="active-indicator"
        src="./assets/icons/bowling-ball-icon.svg"
        alt="Bowling ball" />
    </li>

    <li on:click={changeActive}>
      <div class="navigation-link">
        <Link to="/gallery">Gallery</Link>
      </div>

      <img
        class="active-indicator"
        src="./assets/icons/bowling-ball-icon.svg"
        alt="Bowling ball" />
    </li>

    <li on:click={changeActive}>
      <div class="navigation-link">
        <Link to="/special-offers">Special offers</Link>
      </div>

      <img
        class="active-indicator"
        src="./assets/icons/bowling-ball-icon.svg"
        alt="Bowling ball" />
    </li>

    <li on:click={changeActive}>
      <div class="navigation-link">
        <Link to="/news">News</Link>
      </div>

      <img
        class="active-indicator"
        src="./assets/icons/bowling-ball-icon.svg"
        alt="Bowling ball" />
    </li>

    <li on:click={changeActive}>
      <div class="navigation-link">
        <Link to="/contacts">Contacts</Link>
      </div>

      <img
        class="active-indicator"
        src="./assets/icons/bowling-ball-icon.svg"
        alt="Bowling ball" />
    </li>
  </ul>
</nav>
