<template>
    <div class="container">
      <h1>Todo List</h1>
      <p>오늘의 할일 저장</p>
      <div class="input-area">
        <input
          type="text"
          v-model="userInput"
          placeholder="할일을 입력하세요"
        />
        <button @click="addTodo">추가</button>
      </div>
      <div class="menu">
        <button @click="selectedMenu = '모두'" :class="{ active: selectedMenu === '모두' }">모두</button>
        <button @click="selectedMenu = '진행 중'" :class="{ active: selectedMenu === '진행 중' }">진행 중</button>
        <button @click="selectedMenu = '끝남'" :class="{ active: selectedMenu === '끝남' }">끝남</button>
      </div>
      <div class="task-area">
        <div v-if="selectedMenu === '모두'">
          <h2>모두</h2>
          <div v-for="(item, index) in todos" :key="index" class="task">
            <span>{{ item.text }}</span>
            <button @click="toggleStatus(index)">
              {{ item.status === '진행 중' ? '끝남으로 이동' : '진행 중으로 이동' }}
            </button>
          </div>
        </div>
        <div v-if="selectedMenu === '진행 중'">
          <h2>진행 중</h2>
          <div v-for="(item, index) in inProgressTodos" :key="index" class="task">
            <span>{{ item.text }}</span>
            <button @click="toggleStatus(index, 'inProgress')">끝남으로 이동</button>
          </div>
        </div>
        <div v-if="selectedMenu === '끝남'">
          <h2>끝남</h2>
          <div v-for="(item, index) in doneTodos" :key="index" class="task">
            <span>{{ item.text }}</span>
            <button @click="toggleStatus(index, 'done')">진행 중으로 이동</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: "",
        todos: [
          // 예시 데이터
          { text: "할일 1", status: "진행 중" },
          { text: "할일 2", status: "끝남" },
        ],
        selectedMenu: "모두",
      };
    },
    computed: {
      inProgressTodos() {
        return this.todos.filter(todo => todo.status === "진행 중");
      },
      doneTodos() {
        return this.todos.filter(todo => todo.status === "끝남");
      },
    },
    methods: {
      addTodo() {
        if (this.userInput.trim() === "") return;
        this.todos.push({ text: this.userInput, status: "진행 중" });
        this.userInput = "";
      },
      toggleStatus(index, listType = 'all') {
        let todo;
        if (listType === 'inProgress') {
          todo = this.inProgressTodos[index];
        } else if (listType === 'done') {
          todo = this.doneTodos[index];
        } else {
          todo = this.todos[index];
        }
        todo.status = todo.status === "진행 중" ? "끝남" : "진행 중";
      },
    },
  };
  </script>
  
  <style>
  .container {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  
  .input-area {
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    margin-left: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .menu {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .menu button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .menu button.active {
    background-color: #007bff;
    color: white;
  }
  
  .task-area {
    margin-top: 20px;
  }
  
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .task span {
    flex-grow: 1;
  }
  </style>
  