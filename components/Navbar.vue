<template>
  <nav class="nav-container">
    <ul class="nav-list">
      <li>
        <NuxtLink class="nav-link" to="/bio">BIO</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/work">WORK</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav-container {
  padding: 50px;
  width: 100%;
  position: absolute;
  z-index: 999;
  font-family: Hanson, sans-serif;

  .nav-list {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;

    > li {
      margin-left: 50px;
    }

    li:first-child {
      margin-left: 0;
    }

    li:last-child {
      margin-left: auto;
    }

    li {
      position: relative;

      a {
        text-decoration: none;
        color: black;
      }

      .nav-link:after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        border-radius: 50px;
        display: block;
        right: 0;
        background: black;
        transition: width 0.5s ease;
      }
      .nav-link.nuxt-link-exact-active:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 50px;
        display: block;
        right: 0;
        background: black;
        transition: none;
      }

      .nav-link:hover:after {
        width: 100%;
        left: 0;
        background: black;
      }
    }
  }
}

.nav-container.light {
  .nav-list {
    li {
      a {
        color: #e8e6de;
      }
      .nav-link:after,
      .nav-link.nuxt-link-exact-active:after,
      .nav-link:hover:after {
        background: #e8e6de;
      }
    }
  }
}

.nav-link {
  position: relative;
}
</style>
