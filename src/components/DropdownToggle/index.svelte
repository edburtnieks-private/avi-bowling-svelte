<script>
  import { createEventDispatcher } from 'svelte';
  import CaretIcon from '../Icons/CaretIcon/index.svelte';

  export let id = '';
  export let isInput = false;
  export let disabled = false;
  export let isContentVisible = false;

  const dispatch = createEventDispatcher();
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
  on:click={() => dispatch('toggleDropdown')}
  {disabled}
  {id}
  data-cy="dropdown-toggle-button">
  {#if isInput}
    <slot />
  {:else}
    <div class="link">
      <div data-cy="dropdown-toggle-text">
        <slot />
      </div>

      <div class="caret-icon-wrapper">
        <CaretIcon {disabled} link active={isContentVisible} />
      </div>
    </div>
  {/if}
</button>
