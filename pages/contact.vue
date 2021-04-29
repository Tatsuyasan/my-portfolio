<template>
  <section class="contact">
    <div class="contact-container">
      <p class="contact-title">
        <span class="h"><span class="get">get</span> in</span>
        <span class="h">touch</span>
      </p>
      <p class="contact-description">
        <span class="h">BUSINESS INQUIRIES</span>
        <span class="h"
          ><a href="mailto:vincent.vermeersch2@gmail.com"
            >vincent.vermeersch2@gmail.com</a
          ></span
        >
        <span class="h">Available from February 2021</span>
      </p>
      <p class="contact-link">
        <span class="h"><a href="">instagram</a></span>
        <span class="h"><a href="">dribbble</a></span>
        <span class="h"
          ><a
            target="_blank"
            href="https://www.linkedin.com/in/vincent-vermeersch-6461b4195"
            >Linkedin</a
          ></span
        >
      </p>
    </div>
  </section>
</template>

<script>
import { contactEnter, contactLeave } from '@/assets/js/transition/contact.js'
import gsap from 'gsap'

export default {
  transition: {
    name: 'slide-contact',
    mode: '',
    css: false,
    enter(el, done) {
      contactEnter(el, done, this.$nuxt.context.from.name)
    },
    leave(el, done) {
      contactLeave(el, done, this.$nuxt.$route.name)
    },
  },
}
</script>

<style lang="scss">
.h {
  display: block;
  overflow: hidden;
  font-family: 'Hanson', sans-serif;
  text-align: end;
}

.contact {
  padding: 50px;
  background: black;
  color: #e8e6de;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: nowrap row;

  .contact-container {
    p.contact-title {
      letter-spacing: -0.025em;
      text-transform: uppercase;
      text-align: end;
      font-size: 5vw;

      > .h {
        display: block;
        overflow: hidden;
        font-family: 'Hanson', sans-serif;
        margin: -1.7vw 0 0;
        line-height: 5vw;

        .get {
          font-family: Quentin, sans-serif;
          text-transform: none;
          margin: -1vw -2vw 0 0;
          font-size: 6.979166666666667vw;
          line-height: 7vw;
        }
      }
    }

    p.contact-description {
      margin: 1.8229166666666667vw 0 0 0;

      > .h {
        font-family: Arial, sans-serif;
        font-size: 1.1458333333333333vw;

        a {
          color: #e8e6de;
        }
      }
    }

    p.contact-link {
      margin: 1.0416666666666667vw 0 0 0;
      text-transform: uppercase;

      > .h {
        font-size: 0.9375vw;

        a {
          text-decoration: none;
          color: #e8e6de;
        }
      }
    }
  }
}
</style>