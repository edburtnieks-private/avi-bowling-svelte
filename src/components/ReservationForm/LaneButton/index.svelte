<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let isActive = false;

  const toggleLane = event => {
    isActive = !isActive;
    dispatch("toggleLane", event.target.value);
  };

  export let value;
</script>

<style>
  button {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    border: 0;
    box-shadow: var(--bs-input);
    color: var(--c-mine-shaft);
    height: 32px;
    padding: 0;
    width: 100%;
  }

  .active {
    background-color: var(--c-green);
    color: var(--c-white);
  }
</style>

<button type="button" class:active={isActive} on:click={toggleLane} {value}>
  <slot />
</button>
