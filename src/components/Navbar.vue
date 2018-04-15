<template lang="pug">
el-menu.menu(router, :default-active="$route.path", :default-openeds="['/']", mode="horizontal")
  el-menu-item(index="/")
    span(slot="title")
      | Dravatar
  el-menu-item(index="/my")
    span(slot="title")
      | 我的 Dravatar
  el-menu-item(index="/upload")
    span(slot="title")
      | 更新 Dravatar
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  height 100%
</style>
