<template>
  <div id="app">
    <Navbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
#app {
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
}

main section {
  position: absolute;
  height: 100vh;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}

#app:before {
  z-index: 9;
  height: 200%;
  width: 200%;
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  pointer-events: none;
  background-position: 50%;
  background-image: url('/noise.png');
  animation: noise 1s steps(2) infinite;
}

@keyframes noise {
  0% {
    transform: translate3d(0, 9rem, 0);
  }

  10% {
    transform: translate3d(-1rem, -4rem, 0);
  }

  20% {
    transform: translate3d(-8rem, 2rem, 0);
  }

  30% {
    transform: translate3d(9rem, -9rem, 0);
  }

  40% {
    transform: translate3d(-2rem, 7rem, 0);
  }

  50% {
    transform: translate3d(-9rem, -4rem, 0);
  }

  60% {
    transform: translate3d(2rem, 6rem, 0);
  }

  70% {
    transform: translate3d(7rem, -8rem, 0);
  }

  80% {
    transform: translate3d(-9rem, 1rem, 0);
  }

  90% {
    transform: translate3d(6rem, -5rem, 0);
  }

  to {
    transform: translate3d(-7rem, 0, 0);
  }
}

@font-face {
  font-family: 'Hanson';
  src: url('/font/Hanson-Bold.otf') format('opentype'),
    url('/font/Hanson-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Quentin';
  src: url('/font/Quentin.otf') format('opentype');
}

$heightNavBar: 8vh;

@media (max-width: 700px) {
  // general
  body .contact,
  body .home-content,
  body .bio {
    padding: 0;
  }

  #app {
    overflow: hidden;
  }

  section.home .home-content,
  section.contact,
  section.bio {
    height: 100vh - $heightNavBar;
  }

  // contact mobile part
  body .contact {
    .contact-container {
      p.contact-title {
        font-size: 10vw;

        > .h {
          margin: -3.5vw 0 0;
          line-height: 10vw;

          .get {
            margin: -2vw -4vw 0 0;
            font-size: 14vw;
            line-height: 14vw;
          }
        }
      }

      p.contact-description {
        margin: 3.6vw 0 0 0;

        > .h {
          font-size: 2.2vw;
        }
      }

      p.contact-link {
        margin: 2vw 0 0 0;

        > .h {
          font-size: 2vw;
        }
      }
    }
  }

  // bio mobile part
  body .bio {
    .bio-container {
      flex-flow: column nowrap;
      .bio-aside {
        margin: -100px 3vw 0 3vw;
        order: 1;
        p.bio-title {
          font-size: 10vw;
          > .h {
            margin: -3.7vw 0 0;
            line-height: 10vw;

            .iam {
              font-size: 14vw;
              line-height: 14vw;
            }
          }
        }

        p.bio-description {
          margin: 4vw 0 0 0;
          font-size: 3vw;

          > .h {
            margin: -0.4vw 0 0;
            line-height: 3.6vw;
          }
        }
      }

      .bio-image {
        flex: 2;
      }
    }
  }

  // navigation mobile part
  nav.nav-container {
    position: absolute;
    height: $heightNavBar;
    width: 100vw;
    background: black;
    bottom: 0;
    padding: 0;
    display: flex;
    align-items: center;

    .nav-list {
      width: 100%;
      justify-content: space-around;

      li {
        margin-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-link {
          color: #e8e6de;
          font-size: 2.8333333333333334vw;
        }
        .nav-link:after,
        .nav-link.nuxt-link-exact-active:after,
        .nav-link:hover:after {
          background: #e8e6de;
        }
      }

      li:last-child {
        margin-left: 0;
      }
    }
  }
}
</style>
