<template>
  <div>
    <!-- 화면에 표시할 내용 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null // 결과 값을 저장할 변수 선언
    };
  },
  mounted() {
    // mounted 훅에서 결과 값을 계산하거나 초기화
    let a = !false;
    
   
    this.result =a; // 결과 값을 변수에 저장
    console.log('Result:', this.result); // 콘솔에 결과 값 출력

    


  }
}
</script>

<style>
/* 필요한 스타일을 작성합니다. */
</style>
