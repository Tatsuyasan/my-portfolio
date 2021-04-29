<template>
  <section class="bio">
    <div class="bio-container">
      <div class="bio-image"></div>
      <div class="bio-aside">
        <p class="bio-title">
          <span class="h"><span class="iam">I'm</span> vincent</span>
          <span class="h">vermeersch</span>
        </p>
        <p class="bio-description">
          <span class="h">French developer based in Lille.</span>
          <span class="h">I love building useful and creative interfaces.</span>
          <span class="h">I can speak many languages like,</span>
          <span class="h">HTML5, CSS, Javascript, PHP, Java Android.</span>
          <span class="h"
            >I can speak if needed with API and others back features.</span
          >
        </p>
      </div>
    </div>
    <div class="btn-project">
      <a class="btn-new-project" href="mailto:vincent.vermeersch2@gmail.com"
        >new project ?</a
      >
      <span class="animate-text">hire me - hire me - hire me - </span>
    </div>
  </section>
</template>

<script>
import { bioEnter, bioLeave } from '@/assets/js/transition/bio.js'
import charming from 'charming'
import { TweenLite } from 'gsap'

export default {
  transition: {
    name: 'slide-bio',
    mode: '',
    css: false,
    enter(el, done) {
      bioEnter(el, done, this.$nuxt.context.from.name)
    },
    leave(el, done) {
      bioLeave(el, done, this.$nuxt.$route.name)
    },
  },
  mounted() {
    const btn = document.querySelector('.btn-new-project')
    const animateText = document.querySelector('.animate-text')
    charming(animateText)

    btn.addEventListener('mouseover', (event) => {
      event.preventDefault()
      TweenLite.to(animateText, 0.5, { opacity: '1' })
    })
    btn.addEventListener('mouseleave', (event) => {
      event.preventDefault()
      TweenLite.to(animateText, 0.5, { opacity: '0' })
    })
  },
}
</script>


<style lang="scss">
.bio {
  background: black;
  color: #e8e6de;
  padding: 50px;

  .bio-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: nowrap row;

    .bio-aside {
      display: flex;
      flex-flow: nowrap column;
      flex: 1;
      order: -1;
      justify-content: center;
      margin-right: 4vw;
      text-align: end;

      p.bio-title {
        letter-spacing: -0.025em;
        text-transform: uppercase;
        font-size: 5vw;

        > .h {
          display: block;
          overflow: hidden;
          font-family: Hanson, sans-serif;
          margin: -2.1vw 0 0;
          line-height: 5vw;

          .iam {
            font-family: Quentin, sans-serif;
            text-transform: none;
            font-size: 6.979166666666667vw;
            line-height: 7vw;
          }
        }
      }

      p.bio-description {
        margin: 2vw 0 0 0;
        word-break: normal;
        letter-spacing: -0.025em;
        font-size: 1.5vw;

        > .h {
          display: block;
          overflow: hidden;
          font-family: Arial, sans-serif;
          margin: -0.2vw 0 0;
          line-height: 1.8vw;
        }
      }
    }

    .bio-image {
      flex: 1;
      width: 100%;
      height: 100%;
      background-image: url(https://images.unsplash.com/photo-1599057279782-74fea6167067?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
      background-size: cover;
      background-position: center;
    }
  }

  .btn-project {
    position: absolute;
    overflow: hidden;
    border-radius: 50%;
    bottom: 1.5625vw;
    right: 1.5625vw;
    width: 13.020833333333334vw;
    height: 13.020833333333334vw;

    .btn-new-project {
      position: absolute;
      width: 100%;
      height: 2.0833333333333335vw;
      line-height: 2.0833333333333335vw;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      font-size: 0.7291666666666666vw;
      font-family: Hanson, sans-serif;
      text-decoration: none;
      text-transform: uppercase;
      color: #e8e6de;
      z-index: 99;
    }

    .animate-text {
      opacity: 0;
      overflow: hidden;
      white-space: nowrap;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 13.020833333333334vw;
      height: 13.020833333333334vw;
      animation: rotating 10s linear infinite;

      @for $i from 1 through 30 {
        .char#{$i} {
          transform: translate(-50%, 0) rotate(($i * 12) + deg);
        }
      }

      span {
        font: 0.9375vw Hanson, sans-serif;
        text-transform: uppercase;
        text-align: center;
        height: 6.510416666666667vw;
        color: #e8e6de;
        position: absolute;
        width: 1.09375vw;
        top: 0;
        left: 50%;
        transform-origin: bottom center;
      }
    }
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>