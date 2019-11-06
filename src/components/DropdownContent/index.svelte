<script>
  import { createEventDispatcher } from 'svelte';
  import CloseIcon from '../Icons/CloseIcon/index.svelte';

  export let isContentVisible;

  const dispatch = createEventDispatcher();
</script>

<style>
  .dropdown-overlay {
    background-color: var(--c-mine-shaft-30);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: var(--zi-dropdown-overlay);
  }

  @media (min-width: 768px) {
    .dropdown-overlay {
      display: none;
    }
  }

  .dropdown-content {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    left: 16px;
    max-height: calc(100% - 32px);
    overflow-y: auto;
    padding: var(--p-xs);
    position: fixed;
    right: 16px;
    top: 16px;
    z-index: var(--zi-dropdown-content);
  }

  @media (min-width: 768px) {
    .dropdown-content {
      box-shadow: var(--bs-input);
      left: auto;
      margin-top: var(--m-xxs);
      max-width: 100%;
      overflow: visible;
      position: absolute;
      right: auto;
      top: auto;
    }
  }

  button {
    padding: 14px 8px;
    position: fixed;
    right: 8px;
    top: 8px;
  }

  @media (min-width: 768px) {
    button {
      position: absolute;
      right: -16px;
      top: -16px;
    }
  }
</style>

{#if isContentVisible}
  <div class="dropdown-overlay" />

  <div class="dropdown-content" data-cy="dropdown-content">
    <slot />

    <button
      class="global-button-input"
      type="button"
      on:click={() => dispatch('toggleDropdown')}
      data-cy="dropdown-close-button">
      <CloseIcon />
    </button>
  </div>
{/if}
