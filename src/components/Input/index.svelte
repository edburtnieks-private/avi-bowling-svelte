<script>
  export let id;
  export let label = "Label";
  export let placeholder = "Placeholder";
  export let type = "text";
</script>

<style>
  .input-wrapper:not(:last-of-type) {
    margin-bottom: var(--m-s);
  }

  @media (min-width: 1024px) {
    .input-wrapper:not(:last-of-type) {
      margin: var(--m-0) var(--m-xxs) var(--m-0) var(--m-0);
    }
  }

  label {
    display: block;
    font-size: var(--fs-s);
    margin-bottom: var(--m-xxs);
  }

  input {
    background-color: var(--c-white);
    border-radius: var(--br-base);
    border: 0;
    box-shadow: var(--bs-input);
    color: var(--c-mine-shaft);
    font-size: 1rem;
    padding: var(--p-xxs) var(--p-xs);
    width: 100%;
  }

  @media (min-width: 1024px) {
    .input-wrapper:not(:last-of-type) {
      max-width: 176px;
    }
  }

  input::placeholder {
    color: var(--c-silver);
  }
</style>

<div class="input-wrapper">
  <label for={id}>{label}</label>
  <input {type} {placeholder} {id} />
</div>
