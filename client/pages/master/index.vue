<template>
<div class="content-comtainer">
    <ButtonGroup size="large" shape="circle">
        <Button icon="ios-add-circle-outline">新增</Button>
        <Button icon="ios-checkbox-outline"  v-if="!isSelectedAll">全选</Button>
        <Button icon="ios-checkbox" v-else>取消</Button>
        <Button icon="ios-remove-circle-outline">删除</Button>
    </ButtonGroup>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component({
    components: {}
})
export default class extends Vue {
    @Prop({
        type: boolean,
        default: false,
    })
    readonly isSelectedAll: boolean = false;

    columns4: Array = [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Age',
            key: 'age'
        },
        {
            title: 'Address',
            key: 'address'
        }
    ];
    data1: Array = [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
    ];
}

