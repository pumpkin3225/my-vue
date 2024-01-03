<script>
export default {
  data() {
    return {
      addText:'',
      todoArr: [{id:1,todoText:"好想睡覺喔",flag:false}],
      hideCompleted: false
    };
  },
   mounted() {
        if (sessionStorage.getItem('todoList')) {
            this.todoArr = JSON.parse(sessionStorage.getItem('todoList'));
        }else{
            sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
        }
    },
  methods: {
    addlist(){
        if(!this.addText) return
        const listId = this.todoArr.length;
        this.todoArr.push({id:listId +1,todoText:this.addText,flag:false});
        this.addText='';
        sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    },
    computed:{
    },
  },
};
</script>
<template>
  <header></header>
  <main class="border-[gray] border-[1px] p-4">
    <h1>Todo List</h1>
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
      <input v-model="addText" type="text" class="text-[#C3CFD9] border-[gray] border-[1px] px-2 py-1 mr-[20px]" >
      <button @click="addlist()" type="button" class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1">Add</button>
    </div>
    <hr class="text-[#DFE6ED] my-2" >
    <div class="border-[gray] border-[1px] p-1 overflow-y-scroll h-[500px]">
      <div v-for="item in todoArr" :key="item.id" class="bg-[#E9A2AD] border-[#D3455B] border-[1px] px-1 py-3 mb-2">
        <input v-model="item.flag" type="checkbox" class="mr-[10px]">
        <span class="mr-[10px] w-100" :class="{ 'line-through': item.flag }">{{item.todoText}}</span>
        <button type="button" class="text-[#D65065] bg-[white] border-[#E18190] border-[1px] rounded-md px-2 py-1 ml">Delete</button>
      </div>
    </div>
    <hr>
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
        <button @click="hideCompleted = !hideCompleted" type="button" class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1">
        {{ hideCompleted ? 'Show All' : 'Hide Completed' }}
        </button>
    </div>
  </main>
  <footer></footer>
</template>
<style>
</style>