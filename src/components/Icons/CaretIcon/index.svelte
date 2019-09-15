<script>
  export let isActive;
</script>

<style>
  .caret-icon {
    height: 12px;
    position: relative;
    width: 12px;
  }

  .left,
  .right {
    background-color: var(--c-blue);
    display: inline-block;
    height: 1px;
    position: absolute;
    top: 50%;
    transition: transform 0.2s ease;
    width: 7px;
  }

  .left {
    left: 0;
    transform: rotate(45deg);
  }

  .right {
    right: 0;
    transform: rotate(-45deg);
  }

  .active .left {
    transform: rotate(-45deg);
  }

  .active .right {
    transform: rotate(45deg);
  }
</style>

<div class="caret-icon" class:active={isActive}>
  <div class="left" />
  <div class="right" />
</div>
