<template>
  <div>
    <h1>6-27일 숙제3</h1>

    <input
      type="number"
      v-model="userInput"
      @input="Jjack"
      placeholder="숫자를 입력하세요"
    />
    <p>1부터 {{ userInput }}까지의 짝짝: {{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: 0,
      sum: "",
    };
  },
  methods: {
    Jjack() {
      let sum = "";
      let number = parseInt(this.userInput);
      for (let i = 1; i <= number; i++) {
        let num = i.toString();
        let count = 0;
        for (let j = 0; j < num.length; j++) {
          if (num[j] === "3") {
            count++;
          }
        }

        
        if (count > 0) {
          sum += "짝".repeat(count);
        } else {
          sum += i.toString();
        }

        
        if (i !== number) {
          sum += "\n";
        }
      }

      this.sum = sum;
    },
  },
};
</script>

<style>
input {
  border-width: 10px;
}
</style>
