<template>
  <div>
    <h1>6-27일 숙제1</h1>
    <p>원하는 숫자를 입력하면 1부터 입력한 숫자까지 더해서 계산하도록 만들었습니다</p>
    <input type="number" v-model="userInput" @input="AllSum" placeholder="숫자를 입력하세요">
    <p>1부터 {{ userInput }}까지의 합: {{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: 0,
      sum: 0       
    };
  },
  methods: {
    AllSum() {
      let sum = 0;
      let number = parseInt(this.userInput);
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      this.sum = sum;
    }
  }
}
</script>

<style>
  input {
   border-width:10px;
  }
</style>
