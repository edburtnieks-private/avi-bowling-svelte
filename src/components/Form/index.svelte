<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Button/index.svelte";

  const dispatch = createEventDispatcher();

  export let submitButtonText = "Submit";
</script>

<form on:submit|preventDefault={() => dispatch('handleSubmit')}>
  <slot />

  <Button type="submit">{submitButtonText}</Button>
</form>
