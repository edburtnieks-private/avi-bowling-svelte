<script>
  import MinusIcon from '../MinusIcon/index.svelte';

  export let disabled = false;
</script>

<style>
  div {
    position: relative;
  }

  .vertical-line {
    position: absolute;
    top: 0;
    transform: rotate(90deg);
  }
</style>

<div>
  <MinusIcon {disabled} />

  <div class="vertical-line">
    <MinusIcon {disabled} />
  </div>
</div>
