# Project documentation, Structure, Guidelines

## Components

### Structure

Components are located in [src/components](../../src/components) directory

Each newly created component should live in a separate directory (e.g. [/src/components/ReservationForm](../../src/components/ReservationForm)) inside `index.svelte` file

If component is used only once, it can live under main component following rest of component guidelines and structure ([see LaneButton component structure](../../src/components/ReservationForm/LaneButton))

If it makes sense to group related components together, each new component should live in separate directory nested under the main one and follow rest of component guidelines and structure ([see Icons component structure](../../src/components/Icons))

### Naming

Component directory name should be in `PascalCase` (e.g. `ReservationForm`)

---

[Assets](../Assets)
[Pages](../Pages)
[Styling](../Styling)
