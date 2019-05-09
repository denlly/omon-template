<template>
    <nav class="main_top_nav">
        <ul class="main_top_nav-list">
            <li class="main_top_nav-item" v-for="nav in navlist">
                <a class="main_top_nav-link" v-text="nav.title" @click="doClick(nav)"></a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Prop
    } from "nuxt-property-decorator";
    import consola from "consola";
    @Component({
        components: {}
    })
    export default class extends Vue {
        navlist: [] = [{
            title: "站点",
            name: "website",
        }, {
            title: "应用",
            name: "website",
        }, {
            title: "会员",
            name: "member",
        }, {
            title: "订单",
            name: "order",
        }, {
            title: "控制面板",
            name: "dashboard",
        }, ];
    
        doClick(nav) {
            consola.info(nav.title, nav.name);
        }
    }
</script>

<style lang="scss">
    @import './main-top-nav.scss';
</style>