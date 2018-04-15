<template lang="pug">
  #avatar
    .not-sign(v-if="!signature")
      h2| 没有授权签名，请重新签名验证账户
      h4| 上传 Dravatar 需要提供签名来验证你的账户
      Sign()
    el-upload(
      v-if="signature"
      class="avatar-uploader"
      action='http://139.162.79.136:8000/updateAvatar/'
      drag
      :headers='headers'
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload")
      i.el-icon-upload
      .el-upload__text|将文件拖到此处，或点击上传
      .el-upload__tip(slot="tip")|只能上传jpg/png文件，且不超过500kb
  </div>
</template>

<script>
// import {  } from '@/api'
import Sign from './Sign'
export default {
  name: 'HelloWorld',
  components: {Sign},
  data () {
    return {}
  },
  computed: {
    account () {
      return this.$store.state.account
    },
    address () {
      return this.account['account']
    },
    signature () {
      return this.account['signature']
    },
    headers () {
      return { Authorization: `Bearer ${this.signature.result}` }
    }
  },
  created () {
    if (this.$store.state.account.signature === undefined) {
      this.$store.dispatch('fetchAccountDetail')
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res)
      setTimeout(() => {
        this.$message('头像修改成功 三分钟内生效')
        this.$router.push({ name: 'User' })
      }, 3000)
    },
    beforeAvatarUpload (file) {
      const isFileType = type => file.type === type
      const isJPG = isFileType('image/jpeg')
      const isPNG = isFileType('image/png')
      const isJPGOrPNG = isJPG || isPNG
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPGOrPNG) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPGOrPNG && isLt2M
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
