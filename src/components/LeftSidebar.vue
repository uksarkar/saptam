<template>
  <aside class="col-sm-2 d-none d-sm-block">
    <div class="no-scroll">
      <InfoTile v-for="(list,index) in lists" :key="lang+index" :active="list.active" :title="list.title" :to="list.to" :icon="list.icon" />
    </div>
  </aside>
</template>

<script>
import InfoTile from './IconTile';
import $ from "jquery";
import {mapGetters} from 'vuex';

export default {
  name: "LeftSideBar",
  components: {InfoTile},
  data() {
    return {
      test: 'hello'
    };
  },
  computed: {
    ...mapGetters({ leftList: 'getLeftMenuItems', lang: 'getLang'}),
    lists: {
           get(){
             return this.leftList
           },
           set(newList){
             return newList
           } 
        }
  },
  methods: {
    runLeftSideAnimation() {
      let elements = $("div.no-scroll>.tile");
      let aniTime = 100;
      elements.each((i, el) => {
        setTimeout(() => {
          this.animateElement(el);
        }, aniTime);
        aniTime += 50;
      });
    },

    animateElement(el) {
      $(el)
        .removeClass("invisible")
        .addClass("slideInLeft");
    },
  },
  mounted() {
    setTimeout(()=>this.runLeftSideAnimation(),250)
    this.$store.commit('SET_ROUTE',this.$route.path);
  },
  watch: {
    $route (from, to){
      this.$store.commit('SET_ROUTE',this.$route.path);
    },
    'lang': function() {
      setTimeout(()=>this.runLeftSideAnimation(),250);
    }
  }
};
</script>
