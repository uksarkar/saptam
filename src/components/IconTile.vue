<template>
    <div
    class="tile my-3 invisible animated"
    @click="goTo"
    >
        <span
            class="icon-block"
            :class="active ? 'icon-block-inset text-warning' : 'text-success'"
        >
            <span :class="'ti-' + icon"></span>
        </span>
        {{ $ln.get(title) }}
        <span class="ti-angle-right hoverToAnimate animated fadeInLeft"></span>
    </div>
</template>

<script>
export default {
    name: "IconTile",
    props: ['to','icon','active','title'],
    methods: {
        goTo(){
            if(this.to){
                this.$router.push(this.to).catch(err => { console.log(err) });
            }
        }
    }
}
</script>