<script>
  import DropdownToggle from '../../DropdownToggle/index.svelte';
  import CaretIcon from '../../Icons/CaretIcon/index.svelte';

  // Input props
  export let id;
  export let label;
  export let value;
  export let placeholder = '';
  export let disabled = false;
  export let type = 'text';

  // Increment input props
  export let valueText = '';
  export let incrementInput = false;

  // Dropdown input props
  export let isDropdown = false;
  export let isDropdownContentVisible = false;

  const handleChange = event => {
    value = event.target.value;
  };
</script>

<style>
  .dropdown-toggle-input {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: 16px;
  }

  .caret-icon-wrapper {
    margin-left: var(--m-xxs);
    z-index: var(--zi-select-caret);
  }

  .increment-input-wrapper {
    background-color: var(--c-white);
    display: flex;
  }

  .increment-input-wrapper-disabled {
    background-color: var(--c-mercury);
  }

  .increment-input {
    background-color: var(--c-white);
    color: var(--c-mine-shaft);
    padding: var(--p-xxs) var(--p-0);
    text-align: center;
  }

  .increment-input-disabled {
    background-color: var(--c-mercury);
    border-radius: 0;
    color: var(--c-silver);
  }
</style>

{#if label}
  <label for={id} data-cy="label">{label}</label>
{/if}

{#if isDropdown}
  <DropdownToggle {id} on:toggleDropdown isInput={isDropdown} {disabled}>
    <div class="dropdown-toggle-input">
      <span data-cy="dropdown-toggle-input-text">{value}</span>
      <div class="caret-icon-wrapper">
        <CaretIcon {disabled} active={isDropdownContentVisible} />
      </div>
    </div>
  </DropdownToggle>

  {#if isDropdownContentVisible}
    <slot name="dropdown-content" />
  {/if}
{:else}
  <div
    class:global-input-wrapper={incrementInput}
    class:increment-input-wrapper={incrementInput}
    class:increment-input-wrapper-disabled={disabled && incrementInput}
    data-cy="input-wrapper">
    <slot name="decrement-button" />

    <input
      {type}
      {placeholder}
      {id}
      class="global-input"
      class:increment-input={incrementInput}
      class:increment-input-disabled={disabled && incrementInput}
      value={valueText || value}
      disabled={disabled || incrementInput}
      on:change={handleChange}
      data-cy="input" />

    <slot name="increment-button" />
  </div>
{/if}
