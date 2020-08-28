<script>
  import ContentEditable from 'nuxt-content-manager/src/content-editable.vue'

  export default {
    data: () => ({
      editable: false,
    }),
    components: {
      ContentEditable,
    },
  }
</script>

<template>
  <div>
      <i-switch v-model="editable">editable</i-switch>
      <span v-if="editable">editable</span>
      <hr/>
      <content-editable :editable="editable">
        foobar
      </content-editable>
  </div>
</template>

<style>
  [contenteditable] {
    outline: 0 solid transparent;
  }
</style>
