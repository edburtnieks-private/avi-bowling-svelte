<script>
  import Button from "../Button/index.svelte";
  import LanguageSwitcher from "../LanguageSwitcher/index.svelte";
  import Navigation from "../Navigation/index.svelte";

  export let isOpen;
</script>

<style>
  @media (max-width: 1023px) {
    .content {
      background-color: var(--c-white);
      bottom: 0;
      box-shadow: var(--bs-navigation);
      padding: var(--p-l) var(--p-mobile) var(--p-0);
      position: absolute;
      right: -348px;
      top: 0;
      transition: transform 0.2s ease-in-out;
      width: 320px;
      z-index: var(--zi-navigation);
    }

    :global([data-show-navigation-content="true"]) {
      transform: translateX(-348px);
    }
  }

  @media (min-width: 1024px) {
    .content {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .right {
      align-items: center;
      display: flex;
    }
  }
</style>

<div class="content" data-show-navigation-content={isOpen}>
  <Navigation on:toggleNavigation />

  <div class="right">
    <Button buttonType="secondary">Make Reservation</Button>

    <LanguageSwitcher />
  </div>
</div>
