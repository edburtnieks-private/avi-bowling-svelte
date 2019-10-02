<script>
  import { createEventDispatcher } from "svelte";
  import CaretIcon from "../Icons/CaretIcon/index.svelte";

  const dispatch = createEventDispatcher();

  let active = false;

  const toggleDropdown = () => {
    active = !active;
    dispatch("toggleDropdown");
  };

  export let id;
  export let isInput = false;
  export let disabled = false;
</script>

<style>
  .link-button {
    background-color: var(--c-white);
    border: 0;
    outline: 0;
    padding: var(--p-0);
  }

  .link-button:hover .link,
  .link-button:active .link,
  .link-button:focus .link {
    text-decoration-color: var(--c-blue);
    text-decoration: underline;
  }

  .link-button:disabled .link {
    color: var(--c-silver);
    text-decoration: none;
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

<button
  type="button"
  class:link-button={!isInput}
  class:global-input={isInput}
  on:click={toggleDropdown}
  {disabled}
  {id}>
  {#if isInput}
    <slot />
  {:else}
    <div class="link">
      <slot />

      <div class="caret-icon-wrapper">
        <CaretIcon {disabled} link {active} />
      </div>
    </div>
  {/if}
</button>
