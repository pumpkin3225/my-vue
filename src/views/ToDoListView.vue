<script>
export default {
  data() {
    return {
      addText: "",
      hideCompleted: false,
      record: "",
      end: "",
      todoArr: [
        { id: 1, todoText: "好想睡覺喔", flag: false, record: "", end: "" },
      ],
    };
  },
  mounted() {
    const savedTodos = sessionStorage.getItem("todoList");
    if (savedTodos) {
      this.todoArr = JSON.parse(savedTodos);
    } else {
      // 如果沒有儲存的數據，則預設保存初始數據
      sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    }
  },
  computed: {
    hideTodos() {
      return this.hideCompleted
        ? this.todoArr.filter((t) => !t.flag)
        : this.todoArr;
    },
     progressBarWidth() {
      const completedCount = this.todoArr.filter(todo => todo.flag).length;
      const totalCount = this.todoArr.length;
      const percentage = (completedCount / totalCount) * 100 + '%';
      return percentage;
    }
  },
  methods: {
    addlist() {
      let time = new Date().toISOString().split("T");
      if (!this.addText) return;
      const listId = this.todoArr.length;
      this.todoArr.push({
        id: listId + 1,
        todoText: this.addText,
        flag: false,
        record: time[0],
        end: this.end,
      });
      this.addText = "";
      sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    },
    removeTodo(todo) {
      this.todoArr = this.todoArr.filter((t) => t !== todo);
      sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    },
    saveList() {
      sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    },
  },
};
</script>
<template>
  <header></header>
  <main class="border-[gray] border-[1px] p-4">
    <h1>Todo List</h1>
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
      <input
        v-model="addText"
        type="text"
        class="text-[#C3CFD9] border-[gray] border-[1px] px-2 py-1 mr-[20px]"/>
      <button @click="addlist()" type="button" class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1 mb-[10px]">
        Add
      </button>
      <br />
      <span>Record : </span><input type="date" v-model="record" class="mr-[40px]" />
    </div>
    <div class="progress-bar"><div class="progress" :style="{ width: progressBarWidth }"></div>
    </div>
    <div class="border-[gray] border-[1px] p-1 overflow-y-scroll h-[500px]">
      <div v-for="todo in hideTodos" :key="todo.id" class="bg-[#E9A2AD] border-[#D3455B] border-[1px] px-1 py-3 mb-2 flex justify-between h-[60px] items-center">
        <input v-model="todo.flag" type="checkbox" class="mr-[10px]" @change="saveList()"/>
        <span class="mr-[10px] w-100 mr-[20px]" :class="{ 'line-through': todo.flag }" >{{ todo.todoText }}</span>
        <span>{{ todo.record }}</span>
        <span>{{ todo.end }}</span>
        <button v-show="!todo.flag" @click="removeTodo(todo)" type="button" class="text-[#D65065] bg-[white] border-[#E18190] border-[1px] rounded-md px-2 py-1">Delete
        </button>
      </div>
    </div>
    <hr />
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
      <button @click="hideCompleted = !hideCompleted" type="button" class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1">
        {{ hideCompleted ? "Show All" : "Hide Completed" }}
      </button>
    </div>
  </main>
  <footer></footer>
</template>
<style>
.progress-bar {
  width: 100%; 
  height: 20px; 
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>