<template>
    <div class="create">
        <div class="tile-block my-4">
            <h3 class="mb-3 border-bottom border-success">Edit Vehicle</h3>
            <form action="" class="form-group" v-if="id !== null">
                <h5 class="border-bottom border-warning pb-2">Engine</h5>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Model Name</div>
                    </div>
                    <input type="text" class="form-control" v-model="form.model" placeholder="Model Name" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Type</div>
                    </div>
                    <input type="text" class="form-control" v-model="form.type" placeholder="Type" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Piston Displacement</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.pd" placeholder="Piston Displacement" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Max Output</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.max_output" placeholder="Max Output" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Max Torque</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.max_torque" placeholder="Max Torque" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Fuel System</div>
                    </div>
                <input type="text" class="form-control" v-model="form.fuel_system" placeholder="Fuel System" />
                    
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Value Mechanism</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.value_mechanism" placeholder="Value Mechanism" />
                </div>

                <h5 class="border-bottom border-warning pb-2">Chassis</h5>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Transmission</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.transmission" placeholder="Transmission" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Suspension Front</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.suspension_front" placeholder="Suspension Front" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Suspension Rear</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.suspension_rear" placeholder="Suspension Rear" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Brakes Front Rear</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.bfr" placeholder="Brakes Front Rear" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Fuel Tank Cap</div>
                    </div>
                <input type="text" class="form-control" v-model="form.ftc" placeholder="Fuel Tank Cap" />
                    
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Tyres</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.tyres" placeholder="Tyres" />
                </div>
                    
                <h5 class="border-bottom border-warning pb-2">Dimension & Weight</h5>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Overall Length</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.ol" placeholder="Overall Length" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Overall Width</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.ow" placeholder="Overall Width" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Overall Hight</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.oh" placeholder="Overall Hight" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Kerb Weight</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.kw" placeholder="Kerb Weight" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Gross Vehicle Weight</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.gvw" placeholder="Gross Vehicle Weight" />
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Capcity</div>
                    </div>
                    
                <input type="text" class="form-control" v-model="form.capcity" placeholder="Capcity" />
                </div>


                <div class="mt-4 clearfix">
                    <button type="button" class="btn btn-outline-primary float-right" @click="update">
                        Update
                    </button>
                </div>
            </form>
            <div class="text-warning" v-else>
                <router-link class="btn btn-sm btn-primary" to="/vehicles">
                    <i class="ti-angle-left"></i>
                    Back
                </router-link>
                Please select a vehicle to edit...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditVehicle",
    data(){
        return {
            form: {},
            id: null
        }
    },
    methods: {
        update(){
            if(this.id !== null){
                this.$store.dispatch('EDIT_VEHICLE',{payload: this.form,id: this.id});
                this.$router.push('/vehicles');
            }
        }
    },
    mounted(){
        let id = this.$route.params.id;
        let vehicle = this.$store.getters.getVehicle(id);
        if(vehicle) {
            this.form = vehicle;
            this.id = id;
        }
    }
}
</script>