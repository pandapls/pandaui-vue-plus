<template>
  <div>
    <div class="row">
      <panda-button>普通按钮</panda-button>
      <panda-button type="primary">primary 按钮</panda-button>
      <panda-button type="success">success 按钮</panda-button>
      <panda-button type="info">info 按钮</panda-button>
      <panda-button type="danger">danger 按钮</panda-button>
      <panda-button type="warning">warning 按钮</panda-button>
    </div>
    <div class="row">
      <panda-button plain>普通按钮</panda-button>
      <panda-button plain type="primary">primary 按钮</panda-button>
      <panda-button plain type="success">success 按钮</panda-button>
      <panda-button plain type="info">info 按钮</panda-button>
      <panda-button plain type="danger">danger 按钮</panda-button>
      <panda-button plain type="warning">warning 按钮</panda-button>
    </div>
    <div class="row">
      <panda-button round>普通按钮</panda-button>
      <panda-button round type="primary">primary 按钮</panda-button>
      <panda-button round type="success">success 按钮</panda-button>
      <panda-button round type="info">info 按钮</panda-button>
      <panda-button round type="danger">danger 按钮</panda-button>
      <panda-button round type="warning">warning 按钮</panda-button>
    </div>
    <div class="row">
      <panda-button circle>普</panda-button>
      <panda-button circle type="primary">你</panda-button>
      <panda-button circle type="success">好</panda-button>
      <panda-button circle type="info">再</panda-button>
      <panda-button circle type="danger">吗</panda-button>
      <panda-button circle type="warning">哈</panda-button>
    </div>

    <div class="row">
      <panda-button disabled>普通按钮</panda-button>
      <panda-button disabled type="primary">primary 按钮</panda-button>
      <panda-button disabled type="success">success 按钮</panda-button>
      <panda-button disabled type="info">info 按钮</panda-button>
      <panda-button disabled type="danger">danger 按钮</panda-button>
      <panda-button disabled type="warning">warning 按钮</panda-button>
    </div>
    <div class="row">
      <panda-button icon="milk-tea" />
      <panda-button icon="camera" type="primary">照相机</panda-button>
      <panda-button icon="wind-power" circle type="success"></panda-button>
      <panda-button icon="orange" type="info"></panda-button>
      <panda-button icon="goblet" type="danger"></panda-button>
      <panda-button icon="cloudy" type="info"></panda-button>
      <panda-button icon="milk-tea" type="warning">奶茶</panda-button>
    </div>
    <!-- 测试事件 -->
    <div class="row">
      <panda-button type="primary" plain @click="handleClick('test', $event)">click</panda-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = (name, e) => {
  console.log(name, e, '--')
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
