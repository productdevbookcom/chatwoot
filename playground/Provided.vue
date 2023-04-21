<script lang="ts" setup>
const message = useMessage()
const notification = useNotification()
const dialog = useDialog()
const loadingBar = useLoadingBar()
function cb1() {
  message.info('message')
}
function cb2() {
  notification.info({ title: 'notification' })
}
function cb3() {
  dialog.info({ title: 'dialog' })
}
function cb4() {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 1000)
}
</script>

<template>
  <NSpace>
    <NButton @click="cb1">
      useMessage
    </NButton>
    <NButton @click="cb2">
      useNotification
    </NButton>
    <NButton @click="cb3">
      useDialog
    </NButton>
    <NButton @click="cb4">
      useLoadingBar
    </NButton>
  </NSpace>
</template>
