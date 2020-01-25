<template>
    <div class="stock">
        <div class="tile-block mt-4">
            <div class="border-bottom border-warning clearfix">
                <h1 class="float-left">Current Stock</h1>
                <div class="float-right">
                    <router-link class="btn btn-sm btn-outline-success" to="/">
                        <i class="ti-plus"></i>
                        Add Stock
                    </router-link>
                </div>
            </div>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Model</th>
                        <th scope="col">cc</th>
                        <th scope="col">Created</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,i) in stocks" :key="i">
                        <th scope="row">
                            {{ i+1 }}
                        </th>
                        <td>
                            {{ data.model }}
                        </td>
                        <td>
                            {{ data.pd }}
                        </td>
                        <td>
                            {{ new Date().toDateString() }}
                        </td>
                        <td>
                            <button title="Delete" class="btn btn-sm btn-outline-danger rounded-circle">
                                <i class="ti-trash"></i>
                            </button>
                            <button title="Edit" class="btn btn-sm btn-outline-success ml-2 rounded-circle">
                                <i class="ti-marker-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "Sock",
    data(){
        return {
            tableData: {
                
                head: ['#','Item 1','item 2','Actions'],
                body: []
            }
        }
    },
    computed: {
        ...mapGetters({stocks: 'getStocks'})
    }
}
</script>