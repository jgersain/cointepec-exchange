<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="asset in assets"
        :key="asset.id"
      >
        <td>
          <img
            class="w-10 h-10" 
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" 
            alt="asset.name"
          >
        </td>
        <td># {{ asset.rank }}</td>
        <td>
          <router-link
            class="text-green-600 hover:underline"
            :to="{ name: 'coin-detail', params: { id: asset.id} }"
          >
            {{ asset.name }}
          </router-link>
          <small class="text-gray-500 ml-1">
            {{ asset.symbol }}
          </small>
        </td>
        <td>{{ asset.priceUsd | dollar }}</td>
        <td>{{ asset.marketCapUsd | dollar }}</td>
        <td
          :class="asset.changePercent24Hr.includes('-') ? 'text-red-600' : 'text-green-600'"
        >
          {{ asset.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button @click="goToDetail(asset.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from '@/components/PxButton'

export default {
  name: 'PxAssetsTable',

  components: {
    PxButton,
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    }
  },
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
