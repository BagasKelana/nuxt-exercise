<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="4"
        class="d-flex flex-column justify-center pa-2 ga-2"
      >
        <v-card
          class="d-flex flex-grow-1 align-center"
          variant="elevated"
          subtitle="The #1 Vue UI Library"
        >
          <template v-slot:prepend>
            <v-avatar size="60">
              <v-img
                alt="John"
                src="https://i.pinimg.com/originals/86/57/95/86579553a7478dbd6c225490af8fd10e.jpg"
              ></v-img>
            </v-avatar>
          </template>
          <template v-slot:title>
            <span class="font-weight-black">Testing Title</span>
          </template>
        </v-card>
        <v-card
          class="d-flex flex-grow-1 align-center"
          variant="elevated"
          subtitle="The #1 Vue UI Library"
        >
          <template v-slot:prepend>
            <v-avatar rounded="lg" size="60">
              <v-img
                alt="John"
                src="https://i.pinimg.com/originals/86/57/95/86579553a7478dbd6c225490af8fd10e.jpg"
              ></v-img>
            </v-avatar>
          </template>
          <template v-slot:title>
            <span class="font-weight-black">Testing Title</span>
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" class="d-flex flex-column justify-center pa-2">
        <v-card class="text-center flex-grow-1 pa-2">
          <v-card-subtitle class="headline">{{
            currentTime.date
          }}</v-card-subtitle>
          <v-card-title class="display-4 mb-4">{{
            currentTime.time
          }}</v-card-title>

          <v-img
            src="https://i.pinimg.com/originals/86/57/95/86579553a7478dbd6c225490af8fd10e.jpg"
            height="100"
            class="mb-4"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCurrentTime } from '../composables/useCurrentTime'

const { currentTime } = useCurrentTime()
</script>

<style scoped></style>
