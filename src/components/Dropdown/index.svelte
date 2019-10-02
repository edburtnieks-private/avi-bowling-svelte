<script>
  import DropdownToggle from "../DropdownToggle/index.svelte";
  import DropdownContent from "../DropdownContent/index.svelte";

  export let disabled = false;
  export let isContentVisible;
</script>

<DropdownToggle {disabled} on:toggleDropdown>
  <slot name="toggle" />
</DropdownToggle>

<DropdownContent {isContentVisible}>
  <slot name="content" />
</DropdownContent>
