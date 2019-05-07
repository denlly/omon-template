<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter {{$t('links.home')}}</h1>
    <div class="cards">
      <Card v-for="person in memberData" :key="person.id" :person="person"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Person } from "~/types";
import Card from "~/components/card.vue";
import { IMemberService, MemberService } from "~/services";

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  public memberData: number[] = null;
  // @Inject() memberService: IMemberService;d

  public async asyncData({ store, error }): Promise<{}> {
    try {
      debugger;
      let member = new MemberService();
      return {
        memberData: await member.get()
      };
    } catch (e) {
      error(e);
    }
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
