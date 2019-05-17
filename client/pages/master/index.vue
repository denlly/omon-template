<template>
	<div class="content-comtainer">
		<ButtonGroup size="large" shape="circle">
			<Button icon="ios-add-circle-outline">新增</Button>
			<Button icon="ios-checkbox-outline" v-if="!isSelectedAll"
				>全选</Button
			>
			<Button icon="ios-checkbox" v-else>取消</Button>
			<Button icon="ios-remove-circle-outline">删除</Button>
		</ButtonGroup>
		<Table
			border
			ref="selection"
			:columns="table_columns"
			:data="master_data"
		></Table>
	</div>
</template>
<script lang="ts">
import {
	Component,
	Vue,
	Prop,
	Model,
	Getter,
	Inject,
	Provide
} from "nuxt-property-decorator";
import "reflect-metadata";
@Component({
	name: "master-index",
	layout: "default"
})
export default class MasterIndex extends Vue {
	title = "abc";
	@Prop({
		type: Boolean,
		default: false
	})
	readonly isSelectedAll: boolean = false;

	table_columns: Array<any> = [
		{
			type: "selection",
			width: 60,
			align: "center"
		},
		{
			title: "用户名",
			key: "account"
		},
		{
			title: "姓名",
			key: "name"
		},
		{
			title: "角色",
			key: "role_title"
		},
		{
			title: "电话",
			key: "phone"
		},
		{
			title: "添加时间",
			key: "created_at"
		},
		{
			title: "状态",
			key: "is_locked"
		},
		{
			title: "操作",
			key: "active",
			align: "center",
			render: (h: any, params: any) => {
				return h("div", [
					h(
						"Button",
						{
							props: {
								type: "primary",
								size: "small"
							},
							style: {
								marginRight: "5px"
							},
							on: {
								click: () => {
									// this.show(params.index);
								}
							}
						},
						"修改"
					)
				]);
			}
		}
	];
	master_data = [
		{
			uuid: "a7ce387b7768493fa6217955e2bcea40",
			account: "john_brown",
			name: "John Brown",
			role_title: "最高管理员",
			phone: "15000000000",
			created_at: "2016-10-03",
			is_locked: false
		},
		{
			uuid: "fd05a652549246ef89cb4e09dbbecdef",
			account: "jim_green",
			name: "Jim Green",
			role_title: "最高管理员",
			phone: "15000000000",
			created_at: "2016-10-03",
			is_locked: false
		},
		{
			uuid: "fd05a652549246ef89cb4e09dbbeddef",
			account: "joe_black",
			name: "Joe Black",
			role_title: "最高管理员",
			phone: "15000000000",
			created_at: "2016-10-03",
			is_locked: false
		},
		{
			uuid: "fd05a652549246ef89db4e09dbbeddef",
			account: "joe_snow",
			name: "Joe Black",
			role_title: "最高管理员",
			phone: "15000000000",
			created_at: "2016-10-03",
			is_locked: false
		}
	];
}
</script>