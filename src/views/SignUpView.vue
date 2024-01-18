<template>
  <form action="">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" />
    </div>
    <button>login</button>
  </form>
  <input v-model="memId" placeholder="ID를 입력하세요">
  <p>memId </p>
  <input v-model="memPw" placeholder="password를 입력하세요">
  <p>memPw</p>
</template>

<script>
export default {

}
</script>

<style>

</style>