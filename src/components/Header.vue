<template>
  <!-- Following Menu -->
    <!-- <div class="ui large top fixed hidden menu">
      <div class="ui container">
        <router-link v-for="link in links" class="item" :to="link.url">
           {{ link.title }}
        </router-link>
        <div class="right menu">
          <div class="item">
            <router-link class="ui button" to="/auth/login">Log in</router-link>
          </div>
          <div class="item">
            <router-link class="ui primary button" to="/auth/signup">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div> -->

    <div class="ui vertical masthead center aligned basic segment">
      <div class="ui container">
        <div class="ui large secondary main menu">
          <router-link v-for="link in links" class="item" :to="link.url" :key="link.title">
             {{ link.title }}
          </router-link>
          <div class="right item">
            <router-link class="ui button" to="/auth/login">Log in</router-link>
            <router-link class="ui primary button" to="/auth/signup">Sign Up</router-link>
          </div>
        </div>
      </div>
      <div v-if="masthead" class="ui text container">
        <h1 class="ui header title">
          STRONG <img class="logo" src="../assets/logo.svg"/> TOGETHER
        </h1>
        <div class="p-t-lg p-b-sm">
          <!-- Bragit : http://websemantics.github.io/bragit/ -->
          <a class="ui labeled button github-websemantics-strong-together-stars">
              <div class="ui bragit button"> <i class="star icon"></i> Stars </div>
              <div class="ui basic bragit left pointing label"> <i class="spinner loading icon"></i> </div>
          </a>&nbsp;&nbsp;&nbsp;
          <a class="ui labeled button github-websemantics-strong-together-forks">
              <div class="ui bragit button"> <i class="fork icon"></i> Forks </div>
              <div class="ui basic bragit left pointing label"> <i class="spinner loading icon"></i> </div>
          </a>&nbsp;&nbsp;&nbsp;
          <a class="ui bragit button github-websemantics-strong-together-download"> <i class="download icon"></i> Download </a>&nbsp;&nbsp;&nbsp;
          <a class="ui bragit button github-websemantics-strong-together-github"> <i class="github icon"></i> Github </a>
        </div>
        <h2 class="subtitle">Do whatever you want when you want to.</h2>
      </div>
    </div>
</template>
<script>
export default {
  name: 'header-component',
  props: ['masthead'],
  data () {
    return {
      links: [
        {
          title: 'Home',
          url: '/',
          active: true
        },
        {
          title: 'Missing',
          url: '/missing'
        }
      ]
    }
  }
}
</script>
