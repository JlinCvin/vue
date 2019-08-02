<template>
    <div>
        <router-view />
        <ul>
          <li><router-link to="/add">添加留言</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style scoped>

</style>
