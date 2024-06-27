<template>
  <header>
    <div class="step1">
      <div class="bottle1" :style="{ height: bottle1Height }">
        물병A
        <div>{{ bottle1Height }}</div>
      </div>
      <div class="bottle2" :style="{ height: bottle2Height }">
        물병B
        <div>{{ bottle2Height }}</div>
      </div>
      <div class="bottle3" :style="{ height: bottle3Height }">
        물병C
        {{ bottle3Height }}
      </div>
      <div class="bottle4" :style="{ height: bottle4Height }">
        물병D
        {{ bottle4Height }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      bottle1Height: "30",
      bottle2Height: "50",
      bottle3Height: "0",
      bottle4Height: "0",
    };
  },
  mounted() {
    this.bottle3Height = this.bottle1Height;
    this.bottle1Height = this.bottle2Height;
    this.bottle2Height = this.bottle3Height;
    this.bottle3Height = this.bottle4Height;

    console.log(this.bottle1Height, this.bottle2Height, this.bottle3Height);
  },
  methods: {},
};
</script>

<style>
.bottle1,
.bottle2,
.bottle3,
.bottle4 {
  width: 150px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 12px;
  position: relative;
  background: linear-gradient(white, #d3d3d3);
  margin-right: 20px;
}

.step1 {
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
}
</style>
