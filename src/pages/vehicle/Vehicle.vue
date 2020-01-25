<template>
    <div class="vehicle">
        <div class="tile-block mt-4 clearfix">
            <h2 class="float-left">All Vehicles</h2>
            <div class="button-group float-right">
                <button class="btn btn-sm btn-outline-success float" @click="()=>$router.push({name:'CreateVehicle'})">
                    <i class="ti-plus"></i>
                    Add New
                </button>
            </div>
        </div>
        <div class="tile-block mt-4">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Model</th>
                        <th scope="col">Fuel System</th>
                        <th scope="col">cc</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,i) in vehicles" :key="i">
                        <th scope="row">
                            {{ i+1 }}
                        </th>
                        <td>
                            {{ data.model }}
                        </td>
                        <td>
                            {{ data.fuel_system }}
                        </td>
                        <td>
                            {{ data.pd }}
                        </td>
                        <td>
                            <button @click="deleteVehicle(i)" title="Delete" class="btn btn-sm btn-outline-danger rounded-circle">
                                <i class="ti-trash"></i>
                            </button>
                            <button @click="edit(i)" title="Edit" class="btn btn-sm btn-outline-success ml-2 rounded-circle">
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
    name: "Vehicles",
    data(){
        return {
            test: 'test',
            showModel: false,
        }
    },
    methods: {
        edit(index){
            this.$router.push({name: "EditVehicle",params:{id:index}});
        },
        deleteVehicle(index){
            this.$store.dispatch("DELETE_VEHICLE",index);
        }
    },
    computed: {
        ...mapGetters({vehicles: 'getAllVehicles'})
    }
}
</script>