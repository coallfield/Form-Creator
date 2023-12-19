<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'NavButton'
}
</script>

<style scoped>
.btn {
    background: none;
    border: none;
    font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.btn:focus {
    color: #3EA748;
}
</style>