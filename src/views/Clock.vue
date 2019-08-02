<template>
    <div>
      <router-view />
        <ul>
          <li> <router-link :to="{name: 'list'}">个人留言</router-link></li>
          <li> <router-link :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>


<style scoped>
</style>
