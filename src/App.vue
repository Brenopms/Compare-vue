<template class="has-navbar-fixed-top">
  <div id="app">
    <div class="navbar has-shadow is-fixed-top">
      <div class="container">
        <div class="navbar-start">
          <router-link to = '/'  class="navbar-item">MyCompany</router-link>
        </div>

        <span class="navbar-toggle" v-on:click="toggleNavbar" v-bind:class = "{'isActive': isActive}">
          <span></span>
          <span></span>
          <span></span>
        </span>



        <div class="navbar-end navbar-menu " v-bind:class = "{'isActive': isActive}">

          <router-link to="/"  class="navbar-item r-item">Home</router-link>
          <router-link to="contact"  class="navbar-item r-item">Contact</router-link>
          <router-link to="about" class="navbar-item r-item">About</router-link>
          <router-link to="faq"  class="navbar-item r-item">FAQ</router-link>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
    <router-view></router-view>

  <footer class="footer is-primary is-bold">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p>Isso é um Footer onde é possível colocar coisas</p>
        </div>
        <div class="column has-text-right">
          <a href="https://www.facebook.com/brenopms" class="icon"><i class="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/brenopms/" class="icon"><i class="fa fa-linkedin"></i></a>
          <a href="https://github.com/Brenopms" class="icon"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return{
      isActive: false
    }
  },
methods: {
  toggleNavbar: function(){
    this.isActive = !this.isActive;
    }
  }
}



</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'



.navbar
  background-color: #383838
  a:hover
    background-color: transparent
    color:#00DCB4

.navbar-start a
  color: white

.navbar-end a 
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
a.r-item:hover
  background-color: transparent
  color: #00DCB4

footer
  background-color:$primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 40px
    font-size: 30px;

  .icon:hover
    color: #3C7FE1
// a.r-item
//   color:#C1C1C1
//   padding: 0.5rem 1.75rem
//   +mobile
//     color: gray
//     &:hover
//       background-color: #F1F1F1



</style>
