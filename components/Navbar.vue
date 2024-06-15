<template>
  <v-app-bar
    class="px-2"
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
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

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <!-- <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title  />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu> -->

    <v-btn class="ml-2" min-width="0" to="">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup></script>
