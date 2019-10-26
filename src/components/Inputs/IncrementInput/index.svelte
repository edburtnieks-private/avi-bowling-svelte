<script>
  import { createEventDispatcher } from 'svelte';
  import Input from '../Input/index.svelte';
  import MinusIcon from '../../Icons/MinusIcon/index.svelte';
  import PlusIcon from '../../Icons/PlusIcon/index.svelte';

  export let id;
  export let label;
  export let value;
  export let minValue;
  export let maxValue;
  export let valueText = '';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  const decrement = () => {
    if (value > minValue) {
      value -= 1;
    }

    dispatch('decrement');
  };

  const increment = () => {
    if (value < maxValue) {
      value += 1;
    }

    dispatch('increment');
  };
</script>

<style>
  .label {
    margin-bottom: var(--m-xxs);
  }

  button {
    box-shadow: none;
    padding: 15px 11px;
  }

  .disabled-value {
    background-color: var(--c-white);
  }

  .disabled-input {
    background-color: var(--c-mercury);
  }
</style>

{#if !label}
  <div class="label">
    <slot name="label" />
  </div>
{/if}

<Input
  {id}
  {label}
  {value}
  {valueText}
  {disabled}
  incrementInput>
  <button
    slot="decrement-button"
    type="button"
    class="global-button-input"
    class:disabled-value={value === minValue}
    class:disabled-input={disabled}
    on:click={decrement}
    disabled={disabled || value === minValue}
    data-cy="decrement-button">
    <MinusIcon disabled={disabled || value === minValue} />
  </button>

  <button
    slot="increment-button"
    type="button"
    class="global-button-input"
    class:disabled-value={value === maxValue}
    class:disabled-input={disabled}
    on:click={increment}
    disabled={disabled || value === maxValue}
    data-cy="increment-button">
    <PlusIcon disabled={disabled || value === maxValue} />
  </button>
</Input>
