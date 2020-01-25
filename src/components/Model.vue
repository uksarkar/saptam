<template>
    <div class="modal" :class="[show ? 'd-block fade show': '']" style="top: 32px;" tabindex="-1" role="dialog" @click="toggleModel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-dark">{{ title }}</h5>
                <button type="button" class="close" @click="toggleModel">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "Model",
    props: ['title','show'],
    methods: {
        toggleModel(){
            console.log($('.model'))
        }
    }
}
</script>