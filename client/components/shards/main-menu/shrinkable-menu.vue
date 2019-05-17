<template>
	<div :style="{ background: bgColor }" class="ivu-shrinkable-menu">
		<slot name="top"></slot>
		<sidebar-menu
			v-show="!shrink"
			:menu-theme="theme"
			:menu-list="menuList"
			:open-names="openNames"
			:accordion="accordion"
			@on-change="handleChange"
		></sidebar-menu>
		<sidebar-menu-shrink
			v-show="shrink"
			:menu-theme="theme"
			:menu-list="menuList"
			:iconColor="shrinkIconColor"
			@on-change="handleChange"
		></sidebar-menu-shrink>
	</div>
</template>

<style lang="scss">
@import "./sidebar-menu.scss";
</style>



<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import sidebarMenu from "./sidebar-menu.vue";
import sidebarMenuShrink from "./sidebar-menu-shrink.vue";

@Component({
	components: {
		sidebarMenu,
		sidebarMenuShrink
	}
})
export default class ShrinkableMenu extends Vue {
	@Prop({
		type: Boolean,
		default: false
	})
	readonly shrink!: boolean;

	@Prop({
		type: Array,
		required: true
	})
	menuList!: [];

	@Prop({
		type: String,
		default: "dark"
	})
	readonly theme!: "dark" | "light";
	@Prop({
		type: Function
	})
	beforePush!: Function;

	@Prop({
		type: Array
	})
	readonly openNames!: [];

	@Prop({
		type: Boolean,
		default: false
	})
	readonly accordion!: [];

	get bgColor() {
		return this.theme === "dark" ? "#495060" : "#fff";
	}
	get shrinkIconColor() {
		return this.theme === "dark" ? "#fff" : "#495060";
	}

	handleChange(name: any) {
		let willpush = true;
		if (this.beforePush !== undefined) {
			if (!this.beforePush(name)) {
				willpush = false;
			}
		}
		if (willpush) {
			this.$router.push({
				name: name
			});
		}
		this.$emit("on-change", name);
	}
}
</script>