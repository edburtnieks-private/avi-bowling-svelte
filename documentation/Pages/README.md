# Project documentation, Structure, Guidelines

## Pages

### Structure

Pages are located in [src/pages](../../src/pages) directory

Each newly created page should live in a separate directory (e.g. [/src/pages/Home](../../src/pages/Home)) inside `index.svelte` file

### Naming

Page directory name should be in `PascalCase` (e.g. `SpecialOffers`)

### Adding new page

After adding page component inside [src/App.svelte](../../src/App.svelte) file add page route by following existing examples

```html
<Route path="styleguide" component={Styleguide} />
```

See [svelte-routing](https://github.com/EmilTholin/svelte-routing) documentation

---

[Assets](../Assets)

[Components](../Components)

[Styling](../Styling)
