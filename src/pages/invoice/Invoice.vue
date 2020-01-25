<template>
  <div class="invoice">
    <div class="tile-block mt-4 clearfix">
      <h1 class="float-left">Invoice</h1>
      <div class="btn-group float-right btn-group-sm mt-2" role="group" aria-label="invoice type">
        <button type="button" @click="invoice_type = 'sell'" :class="['btn border-right-success',invoice_type === 'sell' ? 'btn-secondary':'btn-light']">Sell Invoice</button>
        <button type="button" @click="invoice_type = 'due'" :class="['btn border-right-success',invoice_type === 'due' ? 'btn-secondary':'btn-light']">Due Payment Invoice</button>
        <button type="button" @click="invoice_type = 'stock'" :class="['btn',invoice_type === 'stock' ? 'btn-secondary':'btn-light']">Stock Invoice</button>
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
              <tr v-for="(data,i) in invoices" :key="i">
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
export default {
  name: "Invoice",
  data(){
    return {
      invoice_type: 'sell',
      invoices: []
    }
  }
};
</script>
