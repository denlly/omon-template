<template>
	<div id="app">
		<div class="main">
			<div
				class="sidebar-menu-con"
				:style="{
					width: shrink ? '80px' : '256px',
					overflow: shrink ? 'visible' : 'auto'
				}"
			>
				<shrinkable-menu
					:shrink="shrink"
					@on-change="handleSubmenuChange"
					:before-push="beforePush"
					:open-names="openedSubmenuArr"
					:theme="menuTheme"
					:accordion="accordion"
					:menu-list="menuList"
				>
					<div slot="top" class="logo-con">
						<!--[TODO: change svg logo] -->
						<!-- <img v-show="!shrink" src="../assets/images/logo.jpg" key="max-logo" />
              <img v-show="shrink" src="../assets/images/logo-min.jpg" key="min-logo" />-->
					</div>
				</shrinkable-menu>
			</div>

			<div
				class="main-header-con"
				:style="{ paddingLeft: shrink ? '80px' : '256px' }"
			>
				<div class="main-header">
					<div class="navicon-con">
						<Button
							:style="{
								transform:
									'rotateZ(' +
									(this.shrink ? '-90' : '0') +
									'deg)'
							}"
							type="text"
							@click="toggleClick"
						>
							<Icon type="navicon" size="32"></Icon>
						</Button>
					</div>
					<div class="header-middle-con">
						<div class="main-breadcrumb">
							<breadcrumb-nav
								:currentPath="currentPath"
							></breadcrumb-nav>
						</div>
					</div>
					<div class="header-avator-con">
						<full-screen
							v-model="isFullScreen"
							@on-change="fullscreenChange"
						></full-screen>
						<lock-screen></lock-screen>
						<message-tip v-model="mesCount"></message-tip>
						<theme-switch></theme-switch>
						<div class="user-dropdown-menu-con">
							<Row
								type="flex"
								justify="end"
								align="middle"
								class="user-dropdown-innercon"
							>
								<Dropdown
									transfer
									trigger="click"
									@on-click="handleClickUserDropdown"
								>
									<a href="javascript:void(0)">
										<span class="main-user-name">{{
											userName
										}}</span>
										<Icon type="arrow-down-b"></Icon>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem name="ownSpace"
											>个人中心</DropdownItem
										>
										<DropdownItem name="loginout" divided
											>退出登录</DropdownItem
										>
									</DropdownMenu>
								</Dropdown>
								<Avatar
									:src="avatorPath"
									style="background: #619fe7;margin-left: 10px;"
								></Avatar>
							</Row>
						</div>
					</div>
				</div>
				<div class="tags-con">
					<!-- <tags-page-opene>d :pageTagsList="pageTagsList"></tags-page-opened> -->
				</div>
			</div>
			<div
				class="single-page-con"
				:style="{ left: shrink ? '80px' : '256px' }"
			>
				<div class="single-page">
					<!-- nuxt -->
					<nuxt />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

// import shrinkableMenu from '@/components/main-components/shrinkable-menu/shrinkable-menu.vue'
// import tagsPageOpened from '@/components/main-components/tags-page-opened.vue'
// import breadcrumbNav from '@/components/main-components/breadcrumb-nav.vue'
// import lockScreen from '@/components/main-components/lockscreen/lockscreen.vue'
// import messageTip from '@/components/main-components/message-tip.vue'
// import themeSwitch from '@/components/main-components/theme-switch/theme-switch.vue'
// import util from '@/libs/util.js'
// import fullScreen from '../components/main-components/fullscreen.vue'

@Component({
	components: {}
})
export default class extends Vue {
	get menuList() {
		return this.$store.state.app.menuList;
	}
	get pageTagsList() {
		return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
	}
	get menuTheme() {
		return this.$store.state.app.menuTheme;
	}
	get currentPath() {
		return this.$store.state.app.currentPath; // 当前面包屑数组
	}
	get avatorPath() {
		return this.$store.state.app.avatorImgPath;
	}
	get cachePage() {
		return this.$store.state.app.cachePage;
	}
	get lang() {
		return this.$store.state.app.lang;
	}
	get mesCount() {
		return this.$store.state.app.messageCount;
	}
	get accordion() {
		return this.$store.state.app.accordion;
	}
}
</script>
<style lang="scss">
@import "@/assets/styles/layouts/default.scss";
@import "@/assets/styles/layouts/main.scss";
</style>