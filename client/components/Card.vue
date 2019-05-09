<template>
  <div class="card">
    <h2>{{person.first_name}} {{person.last_name}}</h2>
    <img :src="'https://robohash.org/' + person.first_name + '_' + person.last_name">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Person } from "~/types";

@Component({})
export default class Card extends Vue {
  @Prop() person!: Person;
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/components/card.scss";
</style>
