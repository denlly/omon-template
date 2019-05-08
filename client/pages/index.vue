<template>
	<section>
		<h1 class="header">Nuxt TypeScript Starter {{ $t("links.home") }}</h1>
		<div class="cards">
			<Card
				v-for="person in memberData"
				:key="person.id"
				:person="person"
			></Card>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Person } from "~/types";
import Card from "~/components/card.vue";
import { IMemberService, MemberService } from "~/services";
import { injectable, inject } from "inversify";
import { Inject } from "../core";
import { container } from "../services/container";
@Component({
	components: {
		Card
	}
})
@injectable()
export default class extends Vue {
	public memberData: number[] = null;
	@inject("IMemberService")
	private memberService: MemberService;

	public async asyncData({ store, self, error }): Promise<any> {
		try {
			debugger;
			let member = new MemberService();

			// let memb = container.get<IMemberService>("MemberService");
			// let ms = store.state.container.get<IMemberService>("IMemberService");
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
