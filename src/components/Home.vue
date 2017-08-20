<template>
    <div class="pusher">
      <header-component masthead="true"></header-component>
      <div class="ui page grid basic segment">
        <div class="sixteen wide column">
          <div class="ui three column center aligned stackable divided grid">
            <div class="ui vertical stripe column">
              <h2 class="ui icon header">
                <i class="circular eye icon"></i>
                Vue.js 2
              </h2>
              <p>Reactive Components for Modern Web Interfaces.</p>
            </div>
            <div class="ui vertical stripe column">
              <h2 class="ui icon header">
                <i class="circular paint brush icon"></i>
                Semantic-UI
              </h2>
              <p>User Interface is the language of the web.</p>
            </div>
            <div class="ui vertical stripe column">
              <h2 class="ui icon header">
                <i class="circular lightning icon"></i>
                Spark
              </h2>
              <p>Forget all the boilerplate and start your next big idea.</p>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
</template>
<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import Bragit from 'bragit'

  export default {
    name: 'home',
    components: {
      'header-component': Header,
      'footer-component': Footer
    },
    mounted () {
      /* Re-init Bragit buttons */
      Bragit.init()
    }
  }
</script>
