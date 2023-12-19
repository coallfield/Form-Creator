<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
button {
    margin-top: 20px;
    display: flex;
    width: 160px;
    height: 50px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--primary_color, #3EA748);
    border: none;
    color: white;
    font-family: Cera Pro;
}

</style>