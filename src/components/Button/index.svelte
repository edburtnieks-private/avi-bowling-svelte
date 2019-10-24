<script>
  export let type = 'button';
  export let buttonType = 'primary';
  export let disabled = false;
</script>

<style>
  button {
    border-radius: var(--br-base);
    border: var(--bw-btn-s) solid var(--c-green);
    font-size: var(--fs-s);
    font-weight: var(--fw-bold);
    letter-spacing: var(--ls-btn-s);
    outline: 0;
    padding: var(--p-btn-s-mobile);
    width: 100%;
  }

  @media (min-width: 1024px) {
    button {
      width: auto;
      padding: var(--p-btn-s);
    }
  }

  .primary {
    background-color: var(--c-green);
    color: var(--c-white);
  }

  .primary:hover,
  .primary:active,
  .primary:focus,
  .secondary:hover,
  .secondary:active,
  .secondary:focus {
    background-color: var(--c-green-darker);
    border-color: var(--c-green-darker);
    color: var(--c-white);
  }

  .primary:disabled {
    background-color: var(--c-mercury);
    border-color: var(--c-mercury);
    color: var(--c-silver);
  }

  .secondary {
    background-color: var(--c-white);
    color: var(--c-green);
  }

  .secondary:disabled {
    background-color: var(--c-white);
    border-color: var(--c-silver);
    color: var(--c-silver);
  }
</style>

<button
  {type}
  {disabled}
  class:primary={buttonType === 'primary'}
  class:secondary={buttonType === 'secondary'}>
  <slot />
</button>
