<style>
  div {
    transform: rotate(45deg);
  }

  div::before,
  div::after {
    background-color: var(--c-mine-shaft);
    content: '';
    display: block;
    height: 2px;
    width: 16px;
  }

  div::after {
    transform: rotate(90deg) translateX(-2px);
  }
</style>

<div />
