<template>
  <section class="home">
    <div class="home-content">
      <p class="home-title">
        <span class="h">developer</span>
        <span class="h">based <span class="in">in</span></span>
        <span class="h">lille.</span>
      </p>
    </div>
  </section>
</template>

<script>
import { homeLeave, homeEnter } from '@/assets/js/transition/index.js'

export default {
  transition: {
    name: 'slide-home',
    mode: '',
    css: false,
    enter(el, done) {
      homeEnter(el, done, this.$nuxt.context.from.name)
    },
    leave(el, done) {
      homeLeave(el, done, this.$nuxt.$route.name)
    },
  },
}
</script>

<style lang="scss">
.home {
  background: #e8e6de;
  .home-content {
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    p.home-title {
      letter-spacing: -0.025em;
      text-transform: uppercase;
      font-size: 11.4vw;
      > .h {
        display: block;
        font-family: Hanson, sans-serif;
        margin: -3vw 0 0;
        line-height: 11.4vw;
        .in {
          font-family: Quentin, sans-serif;
          text-transform: none;
          font-size: 14vw;
          line-height: 2.5vw;
          margin-right: 1.2vw;
        }
      }
    }
  }
}
</style>
