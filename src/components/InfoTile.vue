<template>
    <div class="tile-block mt-4 animated flipInX">
        <i class="display-3 tile-icon" :class="'ti-' + tileIcon"></i>
        <div class="tile-content">
        <h4>{{ $ln.get(title) }}</h4>
        <p>
            <strong class="text-success">{{ $ln.convertNumber(total) }}</strong>
            <small> {{ $ln.get(subOfTotal) }}</small>
        </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoTile",
    props: ['title','total','subOfTotal','tileIcon']
}
</script>
