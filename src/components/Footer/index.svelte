<script>
  import Logo from '../Logo/index.svelte';
  import Navigation from '../Navigation/index.svelte';
</script>

<style>
  footer {
    background-color: var(--c-white);
    margin-top: auto;
  }

  .container {
    margin: var(--m-0) auto;
    max-width: var(--bp-desktop-xl);
    padding: var(--p-s) var(--p-mobile) var(--p-xxl);
  }

  @media (min-width: 480px) {
    .container {
      display: flex;
      justify-content: space-around;
    }
  }

  h3,
  .logo-wrapper {
    margin-bottom: var(--m-l);
  }

  .contact-information-wrapper {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 480px) {
    .contact-information-wrapper {
      display: block;
    }
  }

  address {
    display: grid;
    font-style: normal;
    grid-column-gap: 8px;
    grid-row-gap: 32px;
    grid-template-columns: auto 1fr;
  }

  @media (min-width: 480px) {
    address {
      margin-bottom: var(--m-m);
    }
  }

  .location-icon {
    justify-self: center;
  }

  .address-info:not(:last-of-type) {
    margin-bottom: var(--m-xxs);
  }

  .phone {
    color: var(--c-mine-shaft);
    display: inline-block;
    text-decoration: none;
  }

  .social-media-icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
  }

  @media (min-width: 480px) {
    .social-media-icon-wrapper {
      display: block;
      width: auto;
    }
  }

  .social-media-icon {
    display: block;
  }

  .social-media-icon img {
    width: 100%;
  }

  @media (min-width: 480px) {
    .social-media-icon {
      display: inline-block;
    }

    .social-media-icon:not(:last-of-type) {
      margin-right: var(--m-s);
    }
  }

  .navigation-wrapper {
    margin-top: 56px;
  }

  @media (min-width: 480px) {
    .navigation-wrapper {
      margin-top: var(--m-0);
    }
  }

  :global(.footer-navigation) {
    margin: var(--m-0);
  }
</style>

<footer>
  <div class="container">
    <div>
      <div class="logo-wrapper">
        <Logo />
      </div>

      <div class="contact-information-wrapper">
        <address>
          <img
            class="location-icon"
            src="./assets/icons/location-pin-icon.svg"
            alt="Location Pin" />

          <div>
            <div class="address-info">Spāres street 27</div>
            <div class="address-info">Riga, Latvia</div>
            <div class="address-info">LV-2222</div>
          </div>

          <img src="./assets/icons/phone-icon.svg" alt="Phone" />

          <a class="phone" href="tel:+37122222222">+371 22 222 222</a>
        </address>

        <div class="social-media-icon-wrapper">
          <a class="social-media-icon" href="/">
            <img src="./assets/icons/facebook-icon.svg" alt="Facebook" />
          </a>

          <a class="social-media-icon" href="/">
            <img src="./assets/icons/twitter-icon.svg" alt="Twitter" />
          </a>

          <a class="social-media-icon" href="/">
            <img src="./assets/icons/instagram-icon.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

    <div class="navigation-wrapper">
      <h3>Navigation</h3>

      <Navigation footer />
    </div>
  </div>
</footer>
