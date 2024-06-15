<template>
  <v-app-bar
    class="px-2"
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="80"
  >
    <v-btn variant="text" class="mr-3" elevation="1" small>
      <v-icon icon="mdi-menu"> </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      title="dashboard"
    />

    <v-spacer />

    <v-text-field
      placeholder="Search task here..."
      rounded
      hide-details
      variant="outlined"
      density="compact"
    >
      <v-icon class="mr-2" icon="mdi-magnify"></v-icon
    ></v-text-field>

    <div class="mx-2" />

    <v-btn rounded class="ml-2" min-width="0">
      <v-icon icon="mdi-tune-variant" />
    </v-btn>

    <v-btn rounded class="ml-2" min-width="0">
      <v-badge dot>
        <v-icon icon="mdi-bell-outline"></v-icon>
      </v-badge>
    </v-btn>

    <v-avatar
      class="ml-4 mr-2"
      min-width="0"
      variant="outlined"
      size="small"
      image="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
    ></v-avatar>
  </v-app-bar>
</template>

<script setup></script>
