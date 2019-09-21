<script>
  export let active = false;
  export let link = false;
  export let left = false;
  export let right = false;
  export let disabled = false;
</script>

<style>
  .icon {
    display: flex;
    justify-content: center;
  }

  .caret-icon {
    height: 12px;
    position: relative;
    width: 12px;
  }

  .left-part,
  .right-part {
    background-color: var(--c-mine-shaft);
    display: inline-block;
    height: 2px;
    position: absolute;
    top: 50%;
    transition: transform 0.2s ease;
    width: 7.75px;
  }

  .left-part {
    left: 0;
    transform: rotate(45deg);
  }

  .right-part {
    right: 0;
    transform: rotate(-45deg);
  }

  .active .left-part {
    transform: rotate(-45deg);
  }

  .active .right-part {
    transform: rotate(45deg);
  }

  .link .right-part,
  .link .left-part {
    background-color: var(--c-blue);
    height: 1px;
    width: 7px;
  }

  .left {
    transform: rotate(90deg);
  }

  .right {
    transform: rotate(-90deg);
  }

  .disabled .right-part,
  .disabled .left-part {
    background-color: var(--c-silver);
  }
</style>

<div class="icon">
  <div
    class="caret-icon"
    class:active
    class:link
    class:left
    class:right
    class:disabled>
    <div class="left-part" />
    <div class="right-part" />
  </div>
</div>
