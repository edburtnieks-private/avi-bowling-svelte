<script>
  import { createEventDispatcher } from 'svelte';

  export let value;
  export let disabled = false;
  export let isActive = false;

  const dispatch = createEventDispatcher();

  const toggleLane = event => {
    dispatch('toggleLane', event.target.value);
  };
</script>

<style>
  button {
    height: 32px;
  }

  .active {
    background-color: var(--c-green);
    box-shadow: none;
    color: var(--c-white);
  }

  .active:hover,
  .active:focus,
  .active:active {
    background-color: var(--c-green-darker);
  }
</style>

<button
  type="button"
  class="global-button-input"
  class:active={isActive}
  on:click={toggleLane}
  data-cy="lane-button"
  {value}
  {disabled}>
  <slot />
</button>
