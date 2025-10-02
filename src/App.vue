<template>
  <nav>
    <router-link to="/">Tareas</router-link> |
    <router-link to="/agregar">Nueva tarea</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #213555;
}

nav {
  padding: 30px;
  background-color: #213555;
  margin-bottom: 24px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #FE0000;
  border-bottom: 2px solid #FE0000;
}

body{
  margin: 0;
}
</style>