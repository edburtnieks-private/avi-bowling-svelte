<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home/index.svelte";
  import Gallery from "./pages/Gallery/index.svelte";
  import SpecialOffers from "./pages/SpecialOffers/index.svelte";
  import News from "./pages/News/index.svelte";
  import Contacts from "./pages/Contacts/index.svelte";
  import Styleguide from "./pages/Styleguide/index.svelte";
  import Header from "./components/Header/index.svelte";
  import Footer from "./components/Footer/index.svelte";

  export let url = "";
</script>

<Router {url}>
  <Header />

  <main>
    <Route path="styleguide" component={Styleguide} />
    <Route path="contacts" component={Contacts} />
    <Route path="news" component={News} />
    <Route path="special-offers" component={SpecialOffers} />
    <Route path="gallery" component={Gallery} />
    <Route path="/" component={Home} />
  </main>

  <Footer />
</Router>
