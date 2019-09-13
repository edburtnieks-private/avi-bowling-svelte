<script>
  import Input from "../Input/index.svelte";
  import MinusIcon from "../Icon/MinusIcon/index.svelte";
  import PlusIcon from "../Icon/PlusIcon/index.svelte";

  const decrement = () => {
    if (value > minValue) {
      value -= 1;
    }
  };

  const increment = () => {
    if (value < maxValue) {
      value += 1;
    }
  };

  export let id;
  export let label;
  export let value;
  export let minValue;
  export let maxValue;
</script>

<style>
  button {
    background-color: var(--c-white);
    border: 0;
    cursor: pointer;
    padding: 15px 11px;
  }

  button:disabled {
    cursor: not-allowed;
  }

  .decrement-button,
  .increment-button {
    border-radius: var(--br-base);
  }

  .decrement-button {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .increment-button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
</style>

<Input {label} {value} {id} incrementInput>
  <button
    slot="decrement-button"
    type="button"
    class="decrement-button"
    on:click={decrement}
    disabled={value === minValue}>
    <MinusIcon disabled={value === minValue} />
  </button>

  <button
    slot="increment-button"
    type="button"
    class="increment-button"
    on:click={increment}
    disabled={value === maxValue}>
    <PlusIcon disabled={value === maxValue} />
  </button>
</Input>
