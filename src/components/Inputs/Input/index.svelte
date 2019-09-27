<script>
  import DropdownToggle from "../../DropdownToggle/index.svelte";
  import CaretIcon from "../../Icons/CaretIcon/index.svelte";

  const handleChange = event => {
    value = event.target.value;
  };

  export let id;
  export let incrementInput = false;
  export let label = "";
  export let placeholder = "";
  export let type = "text";
  export let value = "";
  export let isDropdownToggle = false;
  export let dropdownToggleText = "";
  export let isDropdownActive = "";
  export let valueText = "";
  export let disabled = false;
</script>

<style>
  .dropdown-toggle-input {
    align-items: center;
    display: flex;
    justify-content: space-between;
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
  <label for={id}>{label}</label>
{/if}

{#if isDropdownToggle}
  <DropdownToggle {id} on:toggleDropdown isInput={isDropdownToggle} {disabled}>
    <div class="dropdown-toggle-input">
      <span>{dropdownToggleText}</span>
      <div class="caret-icon-wrapper">
        <CaretIcon {disabled} active={isDropdownActive} />
      </div>
    </div>
  </DropdownToggle>

  <slot name="dropdown-content" />
{:else}
  <div
    class:global-input-wrapper={incrementInput}
    class:increment-input-wrapper={incrementInput}
    class:increment-input-wrapper-disabled={disabled && incrementInput}>
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
      on:change={handleChange} />

    <slot name="increment-button" />
  </div>
{/if}
