<!-- wip -->
<template>
  <div class="ui-panel" :class="{ error }">
    <div v-if="slots.header" class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error?: boolean
}>()

const slots = defineSlots<{
  default(): any
  header?(): any
}>()
</script>

<style scoped lang="postcss">
.ui-panel {
  max-height: calc(100dvh - 5.5rem);
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  border-inline-start: 0.1rem solid var(--color-neutral-border);
  background-color: var(--color-neutral-background-secondary);

  .header {
    border-bottom: 0.1rem solid var(--color-neutral-border);
    background-color: var(--color-neutral-background-primary);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.6rem;
    padding: 0.4rem 1.6rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.8rem;
  }

  &.error {
    background-color: var(--color-danger-background-selected);

    .content {
      padding-top: 15rem;
    }
  }
}
</style>
