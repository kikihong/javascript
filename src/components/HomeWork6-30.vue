<template>
  <div>
    <h1>6-30일 숙제</h1>
    <p>
      주어진 숫자가 정답이면 true 아니면 false를 출력하는 프로그램을 짜시오.
    </p>
    <input
      type="text"
      v-model="updown"
      placeholder="up , down중에 하나가 나옵니다"
      readonly
    />
    <p>{{ updown }}</p>
    <input
      type="number"
      v-model="userInput"
      placeholder="숫자를 입력하세요"
      :disabled="gameOver"
      @focus="clearInput"
    />
    <p>남은 기회: {{ remainingAttempts }}</p>
    <button @click="truefalse" :disabled="gameOver">정답</button>
    <button @click="restartGame" v-show="gameOver">다시 시작</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p>입력한 숫자들: {{ previousGuesses.join(", ") }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updown: "",
      userInput: null,
      randomNumber: 0,
      remainingAttempts: 5,
      gameOver: false,
      errorMessage: "",
      previousGuesses: [],
    };
  },
  mounted() {
    this.generateRandomNumber();
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(this.randomNumber); // 디버깅을 위해 콘솔에 출력
    },
    truefalse() {
      if (this.userInput === null) return;

      if (this.remainingAttempts > 0 && !this.gameOver) {
        const userValue = parseInt(this.userInput);
        if (userValue < 1 || userValue > 100) {
          this.errorMessage = "1에서 100 사이의 숫자를 입력하세요.";
          return;
        }
        if (this.previousGuesses.includes(userValue)) {
          this.errorMessage = "이미 입력한 숫자입니다.";
          return;
        }
        this.errorMessage = "";
        this.previousGuesses.push(userValue);

        if (userValue === this.randomNumber) {
          this.updown = "정답! 축하합니다.";
          this.gameOver = true;
        } else {
          this.remainingAttempts--;
          if (userValue > this.randomNumber) {
            this.updown = "down";
          } else {
            this.updown = "up";
          }
          if (this.remainingAttempts === 0) {
            this.gameOver = true;
            this.updown = `기회를 모두 사용했습니다. 정답은 ${this.randomNumber}입니다.`;
          }
        }
      }
    },
    restartGame() {
      this.userInput = null;
      this.updown = "";
      this.remainingAttempts = 5;
      this.gameOver = false;
      this.errorMessage = "";
      this.previousGuesses = [];
      this.generateRandomNumber();
    },
    clearInput() {
      this.userInput = null;
    },
  },
};
</script>

<style>
input {
  border-width: 10px;
}
</style>
