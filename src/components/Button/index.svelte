<script>
  export let type = "button";
  export let buttonType = "primary";
</script>

<style>
  button {
    border-radius: var(--br-base);
    border: var(--bw-btn-s) solid var(--c-green);
    cursor: pointer;
    font-size: var(--fs-s);
    font-weight: var(--fw-bold);
    letter-spacing: var(--ls-btn-s);
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

  .secondary {
    background-color: var(--c-white);
    color: var(--c-green);
  }
</style>

<button
  {type}
  class:primary={buttonType === 'primary'}
  class:secondary={buttonType === 'secondary'}>
  <slot />
</button>
