<template>
  <button
    @click="manageClick"
    class="bg-transparent hover:bg-red-700 text-red-800 font-semibold hover:text-white py-2 px-2 border border-red-800 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#9b2c2c'" :size="8" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    manageClick() {
      this.$emit('click')
    }
  }
}
</script>
