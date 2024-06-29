<template>
  <div>
    <h1>6월28일 과제 함수</h1>
    <p>4번은 입력한 값을 자동으로 계산하도록 만들었습니다</p>
    <input
      type="number"
      v-model="userInput"
      @input="AllSum"
      placeholder="숫자를 입력하세요"
    />
    <p>입력한 숫자{{ userInput }} 분류: {{ classification }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: 0,
      result: null, // 결과 값을 저장할 변수 선언
      classification: "",
    };
  },
//   mounted() {
//     function greet() {
//       console.log("안녕 내 이름은 제시카야");
//     }
//     function greet1(name) {
//       console.log(`안녕 내 이름은 ${name}야`);
//     }

//     // 함수 호출 예시

//     greet1("자바");

//     function meetAt(year, month, day) {
//       // 년도만 받은 경우
//       if (year && !month && !day) {
//         return `${year}년`;
//       }
//       // 년도와 월을 받은 경우
//       else if (year && month && !day) {
//         return `${year}년 ${month}월`;
//       }
//       // 년도, 월, 일을 모두 받은 경우
//       else if (year && month && day) {
//         return `${year}/${month}/${day}`;
//       }
//       function findSmallestElement(arr) {
//         if (arr.includes(0)) {
//           return 0;
//         }
//         let small = arr[0];

//         for (let i = 1; i < arr.length; i++) {
//           if (arr[i] < small) {
//             small = arr[i];
//           }
//         }

//         return small;
//       }
//     }
    
//   },
  methods:{
    classifyMoney(amount) {
          const denominations = [50000, 10000, 5000, 1000, 500, 100];
          const counts = {};

          denominations.forEach(denom => {
            counts[denom] = Math.floor(amount / denom);
            amount %= denom;
          });

          return counts;
        },
        AllSum() {
          let amount = parseInt(this.userInput);
          if (isNaN(amount) || amount <= 0) {
            this.classification = "유효한 숫자를 입력하세요.";
            return;
          }

          const counts = this.classifyMoney(amount);
          this.classification = `
            50000원: ${counts[50000]}장,
            10000원: ${counts[10000]}장,
            5000원: ${counts[5000]}장,
            1000원: ${counts[1000]}장,
            500원: ${counts[500]}개,
            100원: ${counts[100]}개
          `;
        }
      
      }
  
};
</script>

<style>
/* 필요한 스타일을 작성합니다. */
</style>
