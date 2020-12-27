<template>
  <main class="bg-gray-100">
    <px-header :links="links" />
    <router-view
      class="container px-5 sm:px-20 py-10 :px-20 flex justify-center bg-white shadow-xs"
    />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: 'App',

  components: {
    PxHeader
  },

  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'xrp' } }
        }
      ]
    }
  }
}
</script>
