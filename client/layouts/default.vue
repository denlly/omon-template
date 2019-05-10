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
						<img
							v-show="!shrink"
							src="../assets/images/logo.png"
							key="max-logo"
						/>
						<img
							v-show="shrink"
							src="../assets/images/logo-mini.svg"
							key="min-logo"
						/>
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
							<i
								class="fas fa-chevron-circle-left"
								style="font-size: 24px;"
							></i>
						</Button>
					</div>
					<div class="header-middle-con">
						<div class="main-button-group">
							<main-top-nav></main-top-nav>
						</div>
						<!-- <div class="main-breadcrumb">
								<breadcrumb-nav
									:currentPath="currentPath"
								></breadcrumb-nav>
							</div> -->
					</div>
					<div class="header-avatar-con">
						<!-- <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen> -->
						<!-- <lock-screen></lock-screen> -->
						<message-tip :unread="mesCount"></message-tip>
						<!-- <theme-switch></theme-switch> -->
						<div class="user-dropdown-menu-con">
							<Row
								type="flex"
								justify="end"
								align="middle"
								class="user-dropdown-innercon"
							>
								<Dropdown
									transfer
									trigger="hover"
									@on-click="handleClickUserDropdown"
								>
									<Avatar
										:src="avatarPath"
										style="background: #619fe7;margin-left: 10px; background: url('https://robohash.org/Sebastien_Thorsby') no-repeat center center; background-size: cover;"
									></Avatar>
									<a href="javascript:void(0)">
										<span class="main-user-name">
											{{ userName }}
										</span>
									</a>
									<DropdownMenu slot="list">
										<DropdownItem name="ownSpace">
											个人中心
										</DropdownItem>
										<DropdownItem name="loginout" divided>
											退出登录
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
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
import MainTopNav from "@/components/shards/main-top-nav.vue";
// import shrinkableMenu from '@/components/main-components/shrinkable-menu/shrinkable-menu.vue'
// import tagsPageOpened from '@/components/main-components/tags-page-opened.vue'
// import breadcrumbNav from '@/components/main-components/breadcrumb-nav.vue'
// import lockScreen from '@/components/main-components/lockscreen/lockscreen.vue'
import MessageTip from "@/components/shards/message-tip.vue";
// import themeSwitch from '@/components/main-components/theme-switch/theme-switch.vue'
// import util from '@/libs/util.js'
// import FullScreen from '@/components/shards/full-screen.vue'

@Component({
	components: {
		MainTopNav,
		// FullScreen,
		MessageTip
	}
})
export default class extends Vue {
	shrink: boolean = false;
	userName: string = "";
	isFullScreen: boolean = false;
	openedSubmenuArr: any = this.$store.state.app.openedSubmenuArr;

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
	get avatarPath() {
		return this.$store.state.app.avatarImgPath;
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
	async asyncData({ $axios, store, self, error }): Promise<any> {
		this.init();
	}
	init() {
		debugger;
		//[TODO: Data from backend]
		this.$store.commit("setAccordion", true);
		this.userName = "Haha Denlly"; //
		let messageCount = 3;
		this.messageCount = messageCount.toString();
		this.$store.commit("setMessageCount", 3);
	}
	link() {
		this.$router.push({
			name: "other"
		});
	}
	// toggle left MenuBar
	toggleClick() {
		this.shrink = !this.shrink;
	}
	// handler of Avatar Dropdown
	async handleClickUserDropdown(name) {
		if (name === "ownSpace") {
			util.openNewPage(this, "ownspace_index");
			this.$router.push({
				name: "ownspace_index"
			});
		} else if (name === "loginout") {
			// 退出登录
			let req = await axios.get("/api/logout");
			if (req.data.data.code !== 0) {
				let msg = req.data.data.message || "退出失败";
				this.$Message.error({
					content: msg,
					duration: 2,
					closable: true
				});
				return false;
			}
			this.$Message.success("退出成功");
			this.$store.commit("LOGOUT");
			//window.location.href = 'login'
			this.$store.dispatch("LOGOUT").then(() =>
				this.$router.go({
					path: "login"
				})
			);
		}
	}
	handleSubmenuChange(val) {
		// console.log(val)
	}
	beforePush(name) {
		if (name === "index") {
			return false;
		} else {
			return true;
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/layouts/default.scss";
@import "@/assets/styles/layouts/main.scss";
</style>