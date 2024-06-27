<template>
    <div>
      <h1>6-27일 숙제4</h1>
      <p>주어진 숫자가 소수이면 true 아니면 false를 출력하는
        프로그램을 짜시오.
      </p>
      <input
      type="number"
      v-model="userInput"
      @input="truefalse"
      placeholder="숫자를 입력하세요"
    />
    <p>{{ userInput }}의 결과값 : {{ result }}</p>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: 0,
        result: "",       
      };
    },
    methods: {
      truefalse() {
        let result = "" ;
        let Number = parseInt(this.userInput);
       if(Number ===1) {
       result="false";
        
       }
       if(Number <=3){
        this.result ="true";
        return;
        
       }
       for(let i = 2 ; i<= Number ; i++){
        if(Number% 2 ===0){
             result ="false";
        }else{
         result="true" ;
        }
       }
       this.result = result;
      }
    }
  }
  </script>
  
  <style>
    input {
     border-width:10px;
    }
  </style>
  