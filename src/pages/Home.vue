<template>
  <div class="home mb-2">
    <div class="row">
      <div class="col-sm-3" v-for="(tile,index) in tiles" :key="lang+index">
        <InfoTile :title="tile.title" :total="tile.total" :subOfTotal="tile.subOfTotal" :tileIcon="tile.icon" />
      </div>
    </div>

    <Chart :data1="chartData.data1" :data2="chartData.data2" />

  </div>
</template>

<script>
// @ is an alias to /src
import Chart from "../components/Chart";
import InfoTile from "../components/InfoTile";
import {mapGetters} from "vuex";

export default {
  name: "home",
  data(){
    return {
      tiles: [
        {
          title: 'totalSell',
          total: 512,
          subOfTotal: 'vehicle',
          icon: "shopping-cart-full"
        },
        {
          title: 'totalDue',
          total: '52,500',
          subOfTotal: 'tk',
          icon: "dropbox-alt"
        },
        {
          title: 'totalStuff',
          total: 5,
          subOfTotal: 'persons',
          icon: "joomla"
        },
        {
          title: 'totalStock',
          total: 50,
          subOfTotal: 'vehicle',
          icon: "package"
        }
      ],
      chartData:{
        data1: [50, 55, 80, 62, 54, 50, 69, 65, 70, 72, 68, 65],
        data2: [41, 55, 45, 46, 44, 33, 50, 49, 44, 45, 44, 46]
      }
    }
  },
  components: { Chart, InfoTile },
  computed: {
    ...mapGetters({lang: 'getLang'})
  },
  methods: {
    setTiles(bol = false){
      // this.$set('tiles', test)
    // this.tiles = [...test]
    }
  },
  mounted(){
    
  }
};
</script>
