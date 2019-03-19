<template>
  <div>
    <navbar/>
    <div class="container">
      Hello!
    </div>
  </div>
</template>

<script>
import Navbar from '@/main/components/common/Navbar';

export default {
  name: 'home',
  components: { Navbar }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 0;
}
</style>
