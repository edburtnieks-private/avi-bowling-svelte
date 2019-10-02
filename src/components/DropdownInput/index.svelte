<script>
  import Input from "../Inputs/Input/index.svelte";
  import DropdownContent from "../DropdownContent/index.svelte";

  export let id;
  export let label;
  export let value;
  export let isContentVisible;
  export let disabled = false;
</script>

<Input
  {id}
  {label}
  {value}
  isDropdown
  isDropdownContentVisible={isContentVisible}
  {disabled}
  on:toggleDropdown>

  <div slot="dropdown-content">
    <DropdownContent {isContentVisible}>
      <slot name="content" />
    </DropdownContent>
  </div>
</Input>
