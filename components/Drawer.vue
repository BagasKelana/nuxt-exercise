<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    mobile-break-point="960"
    app
    width="260"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const items = [
  {
    icon: 'mdi-view-dashboard',
    title: 'dashboard',
    to: '/',
  },
  {
    icon: 'mdi-account',
    title: 'user',
    to: '/pages/user',
  },
  {
    title: 'rtables',
    icon: 'mdi-clipboard-outline',
    to: '/tables/regular-tables',
  },
  {
    title: 'typography',
    icon: 'mdi-format-font',
    to: '/components/typography',
  },
  {
    title: 'icons',
    icon: 'mdi-chart-bubble',
    to: '/components/icons',
  },
  {
    title: 'google',
    icon: 'mdi-map-marker',
    to: '/maps/google-maps',
  },
  {
    title: 'notifications',
    icon: 'mdi-bell',
    to: '/components/notifications',
  },
]
</script>

<style lang="sass"></style>
