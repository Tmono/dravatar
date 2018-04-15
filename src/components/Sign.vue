<template lang="pug">
      el-button(type="primary" round @click="login")| 使用签名登录
</template>

<script>
export default {
  name: 'Sign',
  props: ['afterSign'],
  methods: {
    dispatch (action) {
      return this.$store.dispatch(action)
    },
    login () {
      this.dispatch('fetchAccountDetail')
        .then(() => {
          if (this.afterSign !== undefined) {
            this.$router.push({ name: this.afterSign })
          }
        })
        .catch(() => {
          this.$notify.error({
            title: '登录错误',
            message: '请安装 MetaMask 插件'
          })
        })
    }
  }
}
</script>
