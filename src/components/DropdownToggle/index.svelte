<script>
  import { createEventDispatcher } from "svelte";
  import CaretIcon from "../Icons/CaretIcon/index.svelte";

  const dispatch = createEventDispatcher();

  let active = false;

  const toggleDropdown = () => {
    active = !active;
    dispatch("toggleDropdown");
  };

  export let isInput = false;
  export let id = "";
</script>

<style>
  button {
    background-color: var(--c-white);
    border: 0;
    padding: var(--p-0);
    width: 100%;
  }

  .link {
    align-items: center;
    color: var(--c-blue);
    display: flex;
    font-size: var(--fs-s);
  }

  .caret-icon-wrapper {
    margin-left: var(--m-xxs);
  }
</style>

<button type="button" on:click={toggleDropdown} {id}>
  {#if isInput}
    <slot />
  {:else}
    <div class="link">
      <slot />

      <div class="caret-icon-wrapper">
        <CaretIcon link {active} />
      </div>
    </div>
  {/if}
</button>
