<template>
  <section class="work">
    <div class="work-content">
      <div class="container-title">
        <VueSlickCarousel
          ref="c1"
          v-bind="settingsC1"
          @beforeChange="beforeChange"
          @afterChange="afterChange"
        >
          <div class="title" v-for="project in projects" :key="project.title">
            <h1>{{ project.title }}</h1>
          </div>
        </VueSlickCarousel>
        <div class="custom-num-slide">
          {{ currentSlide }}
        </div>
      </div>
      <div class="container-description">
        <VueSlickCarousel ref="c2" v-bind="settingsC2">
          <div
            class="description"
            v-for="project in projects"
            :key="project.title"
          >
            <p class="madeFor">
              Made for <strong>{{ project.for }}</strong>
            </p>
            <p>{{ project.description }}</p>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="buttons-projects">
        <i @click="prev" class="fas fa-arrow-left"></i>
        <i @click="next" class="fas fa-arrow-right"></i>
      </div>
      <div class="container-preview">
        <div class="preview">
          <VueSlickCarousel ref="c3" v-bind="settingsC3">
            <div
              class="preview-image"
              v-for="project in projects"
              :key="project.title"
            >
              <video
                v-if="project.movieUrl"
                autoplay
                loop
                width="250"
                class="video-preview"
              >
                <source
                  :src="require(`../assets/videos/${project.movieUrl}.mp4`)"
                  type="video/mp4"
                />

                Sorry, your browser doesn't support embedded videos.
              </video>
              <h2>{{ project.movieUrl }}</h2>
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
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'

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
      currentSlide: '01',
      settingsC1: {
        dots: false,
        arrows: false,
        draggable: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsC2: {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
      settingsC3: {
        dots: false,
        arrows: false,
        draggable: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    beforeChange(oldSlide, newSlide) {
      if (projects[oldSlide].movieUrl) {
        const oldContent = this.c3.$el.querySelector('.slick-current')
        const movie = oldContent.querySelector('video')
        if (movie) {
          movie.pause()
          movie.currentTime = 0
          console.log(movie.currentTime)
        }
      }
      const current = newSlide + 1
      current >= 10
        ? (this.currentSlide = '' + current)
        : (this.currentSlide = '0' + current)
    },
    afterChange(currentSlide) {
      if (projects[currentSlide].movieUrl) {
        const content = this.c3.$el.querySelector('.slick-current')
        const movie = content.querySelector('video')
        if (movie) {
          movie.play()
        }
      }
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

      i {
        z-index: 999;
        cursor: pointer;
        margin: 0 25px;
        color: white;
        font-size: 25px;
      }
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
      position: relative;

      .custom-num-slide {
        font-size: 50px;
        font-weight: 600;
        position: absolute;
        top: 0;
        left: 100%;
        transform: translateX(-100%);
      }

      .title {
        width: 100%;
        height: 100%;
        display: flex !important;
        justify-content: center;
        align-items: flex-end;
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
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 25px;
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
        background: black;

        .preview-image {
          position: relative;
          bottom: 0;
          width: 100%;
          height: 100% !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          flex-flow: column nowrap;
          color: white;

          .video-preview {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}

h1 {
  font-size: 30px;
  font-family: 'Hanson';
  text-transform: uppercase;
  margin-bottom: 10%;
  padding: 20px;
  text-align: center;
}
.description .madeFor {
  margin-bottom: 20px;
}
.description p {
  text-align: start;
  font-family: Arial, sans-serif;
  font-size: 17px;
  margin-bottom: 10%;
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
        opacity: 0;
        transition: opacity 0.7s ease-in;

        &.slick-current {
          opacity: 1;
        }
        > div {
          height: 100%;
        }
      }
    }
  }
}
</style>