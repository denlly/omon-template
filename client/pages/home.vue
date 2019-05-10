<template>
    <div class="home-main">
        home-main
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    name: "home",
})
export default class extends Vue {
    home(){
        return {
            title: '首頁'
        }
    }
}
</script>
