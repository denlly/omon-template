<template>
	<Breadcrumb separator=">">
		<Icon type="md-return-left" />返回上一页
		<BreadcrumbItem to="/home"
			><Icon type="ios-home-outline"></Icon>主页</BreadcrumbItem
		>
		<BreadcrumbItem
			v-for="item in currentPath"
			:href="item.path"
			:key="item.name"
			>{{ itemTitle(item) }}</BreadcrumbItem
		>
	</Breadcrumb>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component({
	name: "breadcrumb-nav",
	components: {}
})
export default class extends Vue {
	@Prop({
		type: Array
	})
	readonly currentPath!: [];
	itemTitle(item) {
		if (typeof item.title === "object") {
			return this.$t(item.title.i18n);
		} else {
			return item.title;
		}
	}
}
</script>
 <style lang="scss">
.main-breadcrumb {
	border-bottom: 1px solid #eee;
}
</style>