<template lang="pug">
    #user
        h1| User Center
        el-card(:body-style="{ padding: '0px' }" v-if="account")
        img(:src="avatarUrl" class="image")
        div(style="padding: 14px;")
            span|账户 {{ address }}
            div(class="bottom clearfix")
            time.time|{{ currentDate }}
            el-button(type="text" class="button" @click="changeAvatar")|更新头像
</template>

<script>
export default {
  computed: {
    account () {
      return this.$store.state.account
    },
    address () {
      return this.$store.state.account.account
    },
    signature () {
      return this.$store.state.account.signature
    },
    avatarUrl () {
      let address = this.address.toLowerCase()
      const url =
        'https://s3-ap-northeast-1.amazonaws.com/dravatar.frankwei.xyz/'
      return `${url}${address}`
    }
  },
  created () {
    if (this.$store.state.account.signature === undefined) {
      this.$store.dispatch('fetchAccount')
    }
    // this.$store.dispatch("fetchAccount")
  },
  methods: {
    changeAvatar () {
      this.$router.push({ name: 'Avatar' })
    }
  }
}
</script>
