<template>
    <div class="pusher">
      <header-component></header-component>
      <div class="ui page grid basic segment">
        <router-view></router-view>
      </div>
      <footer-component></footer-component>
    </div>
</template>
<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'

  export default {
    name: 'auth',
    components: {
      'header-component': Header,
      'footer-component': Footer
    }
  }
</script>
