<template>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" v-for="(hd,index) in head" :key="index">{{ hd }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,i) in body" :key="i">
              <template v-for="(td,key) in data">
                <th scope="row" :key="key" v-if="td.th">
                    {{ td.text }}
                </th>
                <td :key="key" v-else>
                    {{ td.text }}
                    <button v-for="(action, a_key) in td.actions" :class="'btn btn-'+action.type" :key="a_key">
                        <i :class="'ti-'+action.icon"></i>
                        {{ action.text }}
                    </button>
                </td>
              </template>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
    name: "StockTable",
    props: ['head','body']
}
</script>