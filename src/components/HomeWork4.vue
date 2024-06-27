<template>
  <div>
    <h1>6-27일 숙제2</h1>
    <p>홀수만 합하도록 만들었습니다</p>
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
       if(i%2 !==0){
        sum+=i;
       }
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
