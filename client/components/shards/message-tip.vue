<template>
	<div @click="showMessage" class="message-con">
		<Tooltip
			:content="unread > 0 ? '有' + unread + '条未读消息' : '无未读消息'"
			placement="bottom"
		>
			<Badge :count="unread" dot>
				<Icon type="ios-bell" :size="22"></Icon>
			</Badge>
		</Tooltip>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import util from "@/libs/util.ts";
@Component({
	name: "message-tip",
	props: {},
	components: {}
})
export default class extends Vue {
	@Prop({
		type: Number,
		default: 0
	})
	unread!: number;

	showMessage() {
		util.openNewPage(this, "message_index");
		this.$router.push({
			name: "message_index"
		});
	}
}
</script>
<style lang="scss">
// @import '@/assets/styles/';
</style>
