<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings"
              ><i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
              <img
                class="user-pic"
                src="https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=653929315,3234015182&amp;fm=74&amp;app=80&amp;f=JPEG&amp;size=f121,121?sec=1880279984&amp;t=a8cd1565c1eaa89b66a23dd887f15d95"
              />
              biguang
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 顶部导航栏 -->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- 子路由 -->

    <!-- foot -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- foot -->
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
};
</script>

<style>
</style>