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
</script>

<Router>
  <Header />

  <Route path="/" component={Home} />
  <Route path="gallery" component={Gallery} />
  <Route path="special-offers" component={SpecialOffers} />
  <Route path="news" component={News} />
  <Route path="contacts" component={Contacts} />
  <Route path="styleguide" component={Styleguide} />

  <Footer />
</Router>
