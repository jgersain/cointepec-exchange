<template>
  <header class="shadow w-screen bg-red-900">
    <nav>
      <nav class="container flex items-center justify-between flex-wrap bg-red-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <router-link
            class="font-semibold text-xl tracking-tight"
            :to="{ name: 'home' }"
          >
            COINtepec
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm">
            <router-link
              class="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
              v-for="link in links"
              :key="link.title"
              :to="link.to"
            >
              {{ link.title }}
            </router-link>
          </div>
        </div>
        <div class="lg:flex">
          <div class="text-sm">
            <router-link
              class="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
              :to="{ name: 'about' }"
            >
              Más
            </router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',

  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
