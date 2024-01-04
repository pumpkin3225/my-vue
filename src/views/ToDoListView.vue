<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      addText: "",
      end: "",
      hideCompleted: false,
      todoArr: [
        {
          id: 1,
          todoText: "Sleep",
          flag: false,
          record: "2023-12-30",
          end: "2024-1-1",
          editIng: false,
          newToDo: "",
        },
      ],
    };
  },
  mounted() {
    const savedTodos = sessionStorage.getItem("todoList");
    if (savedTodos) {
      this.todoArr = JSON.parse(savedTodos);
    } else {
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
      const completedCount = this.todoArr.filter((todo) => todo.flag).length;
      const totalCount = this.todoArr.length;
      const percentage = (completedCount / totalCount) * 100 + "%";
      return percentage;
    },
  },
  methods: {
    addlist() {
      Swal.fire({
        title: "Create to-do items",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          if (!this.addText || !this.end)
            return Swal.fire({
              title: "Oops!",
              text: "Please enter correctly",
              icon: "error",
            });
            let time = new Date().toISOString().split("T");
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
            Swal.fire({
            title: "Sucess",
            icon: "success",
            });
        }
      });
    },
    removeTodo(todo) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.todoArr = this.todoArr.filter((t) => t !== todo);
          sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
    saveList() {
      sessionStorage.setItem("todoList", JSON.stringify(this.todoArr));
    },
    starEdit(todo) {
      todo.editIng = !todo.editIng;
      todo.newToDo = todo.todoText;
    },
    finishEditing(todo) {
      todo.editIng = !todo.editIng;
      todo.todoText = todo.newToDo;
      this.saveList();
    },
  },
};
</script>
<template>
  <main class="border-[gray] border-[1px] p-4">
    <h1>Todo List</h1>
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
      <input
        v-model="addText"
        type="text"
        class="text-[#C3CFD9] border-[gray] border-[1px] px-2 py-1 mr-[20px]"
      />
      <button
        @click="addlist()"
        type="button"
        class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1 mb-[10px]"
      >
        Add
      </button>
      <br />
      <span>End Time : </span
      ><input type="date" v-model="end" class="mr-[40px]" />
    </div>
    <div class="w-full h-[20px] bg-[#ccc] rounded-[3px]">
      <div
        class="h-[100%] bg-[#4caf50] progress"
        :style="{ width: progressBarWidth }"
      ></div>
    </div>
    <div class="border-[gray] border-[1px] p-1 overflow-y-scroll h-[500px]">
      <div class="w-full grid grid-cols-5 gap-4">
        <div>Done</div>
        <div class="grid grid-cols-subgrid">To do</div>
        <div>Record</div>
        <div>End</div>
        <div>Delete</div>
      </div>
      <div
        v-for="todo in hideTodos"
        :key="todo.id"
        class="w-full grid grid-cols-5 gap-4 bg-[#E9A2AD] border-[#D3455B] border-[1px] px-1 py-3 mb-2 flex justify-between h-[60px] items-center"
      >
        <div>
          <input
            v-model="todo.flag"
            type="checkbox"
            class="mr-[10px]"
            @change="saveList()"
          />
        </div>

        <div>
          <span
            v-if="!todo.editIng"
            @dblclick="starEdit(todo)"
            class="mr-[10px] w-100 mr-[20px]"
            :class="{ 'line-through': todo.flag }"
            >{{ todo.todoText }}</span
          >
          <input
            v-else
            v-model="todo.newToDo"
            @keydown.enter="$event.target.blur()"
            @blur="finishEditing(todo)"
            type="text"
            class="mr-[10px] w-100 mr-[20px]"
            :class="{ 'line-through': todo.flag }"
          />
        </div>

        <div>
          <span>{{ todo.record }}</span>
        </div>
        <div>
          <span>{{ todo.end }}</span>
        </div>
        <div>
          <button
            @click="removeTodo(todo)"
            type="button"
            class="text-[#D65065] bg-[white] border-[#E18190] border-[1px] rounded-md px-2 py-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="bg-[#8DD7CF] border-[#1AAE9F] border-[1px] p-2">
      <button
        @click="hideCompleted = !hideCompleted"
        type="button"
        class="add text-[#44BDB1] bg-[white] border-[#63C8BD] border-[1px] rounded-md px-4 py-1"
      >
        {{ hideCompleted ? "Show All" : "Hide Completed" }}
      </button>
    </div>
  </main>
  <footer></footer>
</template>
<style>
.progress {
  transition: width 0.3s ease-in-out;
}
</style>