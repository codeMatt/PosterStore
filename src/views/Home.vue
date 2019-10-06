<template>
  <div class="home">
    <PosterStore></PosterStore>
  </div>
</template>

<script>
// @ is an alias to /src
import PosterStore from '@/components/PosterStore.vue';

export default {
  name: 'home',
  components: {
    PosterStore
  }
}
</script>
