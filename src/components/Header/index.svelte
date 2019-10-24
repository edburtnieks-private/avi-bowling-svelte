<script>
  import Logo from '../Logo/index.svelte';
  import NavigationToggle from '../NavigationToggle/index.svelte';
  import HeaderContent from '../HeaderContent/index.svelte';

  let isOpen = false;

  const toggleNavigation = () => {
    isOpen = !isOpen;
  };
</script>

<style>
  header {
    background-color: var(--c-white);
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: var(--m-0) auto;
    max-width: var(--bp-desktop-xl);
    padding: var(--p-xxs) var(--p-mobile);
  }

  @media (min-width: 1024px) {
    div {
      padding: var(--p-s) var(--p-mobile);
    }
  }
</style>

<header>
  <div>
    <a href="/">
      <Logo />
    </a>

    <NavigationToggle on:toggleNavigation={toggleNavigation} {isOpen} />

    <HeaderContent on:toggleNavigation={toggleNavigation} {isOpen} />
  </div>
</header>
