<template>
  <section class="work">
    <div class="work-content">
      <div class="container-title">
        <VueSlickCarousel ref="c1" v-bind="settingsC1">
          <div class="title" v-for="project in projects" :key="project.title">
            <h1>{{ project.title }}</h1>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="container-description">
        <VueSlickCarousel ref="c2" v-bind="settingsC2">
          <div
            class="description"
            v-for="project in projects"
            :key="project.title"
          >
            <h2>
              {{ project.description }}
            </h2>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="buttons-projects">
        <button @click="prev" class="prev">prev</button>
        <button @click="next" class="next">next</button>
      </div>
      <div class="container-preview">
        <div class="preview">
          <VueSlickCarousel ref="c3" v-bind="settingsC1">
            <div
              class="preview-image"
              v-for="project in projects"
              :key="project.title"
            >
              <h2>{{ project.movieUrl }}</h2>
              <!-- <img class="image" src="../assets/images/coming_soon.gif" alt="" /> -->
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { workEnter, workLeave } from '@/assets/js/transition/work.js'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import projects from '@/projects.json'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  transition: {
    name: 'slide-work',
    mode: '',
    css: false,
    enter(el, done) {
      workEnter(el, done)
    },
    leave(el, done) {
      workLeave(el, done)
    },
  },
  data() {
    return {
      projects: projects,
      c1: undefined,
      c2: undefined,
      c3: undefined,
      settingsC1: {
        dots: false,
        arrows: false,
        draggable: false,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsC2: {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
    }
  },
  methods: {
    next() {
      this.c1.next()
      this.c2.next()
      this.c3.next()
    },
    prev() {
      this.c1.prev()
      this.c2.prev()
      this.c3.prev()
    },
  },
  mounted() {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
    this.c3 = this.$refs.c3
  },
}
</script>

<style lang='scss'>
.work {
  background-color: rgb(232, 230, 222, 0);
  z-index: 9;
  .work-content {
    width: 100%;
    height: 100%;
    background-color: rgb(232, 230, 222, 0);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40% 60%;
    grid-template-areas:
      'title description'
      'preview preview';

    .buttons-projects {
      mix-blend-mode: difference;
      position: absolute;
      z-index: 9;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);

      button {
        z-index: 999;
        cursor: pointer;
        margin: 0 25px;
      }
    }

    .container-title {
      grid-area: title;
      background-color: #aeaba5;
      height: 100%;
      overflow: hidden;

      .title {
        width: 100%;
        height: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
    }

    .container-description {
      grid-area: description;
      background-color: #75736e;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .description {
        width: 100%;
        height: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
    }

    .container-preview {
      position: relative;
      grid-area: preview;
      height: 100%;
      overflow: hidden;

      .preview {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;

        .preview-image {
          position: relative;
          bottom: 0;
          background: black;
          width: 100%;
          height: 100% !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          flex-flow: column nowrap;
          color: white;

          .image {
            width: 100%;
          }
        }
      }
    }
  }
}

.slick-slider {
  height: 100% !important;
  .slick-list {
    height: 100% !important;
    .slick-track {
      height: 100% !important;
      .slick-slide {
        border: none !important;
        height: 100%;
        > div {
          height: 100%;
        }
      }
    }
  }
}
</style>