<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isOpen;
</script>

<style>
  button {
    background-color: var(--c-white);
    border: 0;
    cursor: pointer;
    padding: 15px 8px;
    z-index: var(--zi-navigation-toggle);
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }
  }

  div {
    position: relative;
  }

  div,
  div::before,
  div::after {
    background-color: var(--c-mine-shaft);
    height: 2px;
    transition: transform 0.2s ease-in-out;
    width: 16px;
  }

  div::before,
  div::after {
    content: "";
    left: 0;
    position: absolute;
  }

  div::before {
    top: -4px;
  }

  div::after {
    top: 4px;
  }

  [data-is-open="true"] {
    transform: rotate(45deg);
  }

  [data-is-open="true"]::before {
    content: none;
  }

  [data-is-open="true"]::after {
    transform: rotate(90deg) translateX(-4px);
  }
</style>

<button on:click={() => dispatch('toggleNavigation')}>
  <div data-is-open={isOpen} />
</button>
