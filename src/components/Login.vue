<template lang="pug">
  #login
    i.el-icon-warning
    h1| Please Login with Web3 to manage your Dravatar
    h2| 请确保你的浏览器已经安装了 MetaMask 插件来访问
    //- el-button(type="primary" round @click="login")| 使用签名登录
    Sign(afterSign='User')
</template>

<script>
import Sign from './Sign'
export default {
  name: 'LoginView',
  components: {
    Sign
  },
  methods: {
    // dispatch (action) {
    //   return this.$store.dispatch(action)
    // },
    // login () {
    //   this.dispatch('fetchAccountDetail')
    //     .then(() => {
    //       this.$router.push({ name: 'User' })
    //     })
    //     .catch(() => {
    //       this.$notify.error({
    //         title: '登录错误',
    //         message: '请安装 MetaMask 插件'
    //       })
    //     })
    // }
  }
}
</script>

<style scoped>
i {
  font-size: 16rem;
  color: #ffec3d;
}
</style>
