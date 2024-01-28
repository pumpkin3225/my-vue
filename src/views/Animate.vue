<template>
  <div class="container">
    <div class="sticky-notes">
      <div class="sticky-note" v-for="(note, index) in notes" :key="index" :style="{ transform: note.transform }">
        Slide me !
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: Array.from({ length: 3 }, () => ({ transform: 'translateY(0)' })),
    };
  },
  methods: {
    handleWheel(event) {
      const deltaY = event.deltaY;
      if (this.topNoteIndex >= 0 && this.topNoteIndex < this.notes.length) {
        if (deltaY > 0) {
          this.notes[this.topNoteIndex].transform = 'translateY(150px)';
          this.topNoteIndex--;
        } else if (deltaY < 0) {
          if (this.topNoteIndex < this.notes.length - 1) {
            this.topNoteIndex++;
            this.notes[this.topNoteIndex].transform = 'translateY(0)';
            this.notes[this.topNoteIndex].transform = 'rotate(2deg)';
          }
        }
      } else {
        if (deltaY < 0 ) {
          this.topNoteIndex++;
          this.notes[this.topNoteIndex].transform = 'translateY(0)';
          this.notes[this.topNoteIndex].transform = 'rotate(2deg)';
        }
      }
    },
  },
  mounted() {
    this.topNoteIndex = this.notes.length - 1;
    window.addEventListener('wheel', this.handleWheel);
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Gloria+Hallelujah);

body {
  background: #8d9690;
}

.sticky-note {
  width: 150px;
  height: 150px;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform-origin: bottom center;
  padding: 25px 25px 40px;
  margin: 0 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 20px 'Gloria Hallelujah', cursive;
}

.sticky-note:nth-child(1) {
  top: 0;
  left: 0;
  transform: rotate(-3deg);
  background-color: #21d2db;
}

.sticky-note:nth-child(2) {
  top: 20px;
  left: 20px;
  transform: rotate(2deg);
  background-color: #ffcc00;
}

.sticky-note:nth-child(3) {
  top: 40px;
  left: 40px;
  transform: rotate(-1deg);
  background-color: #db5621;
}

.sticky-note.slide {
  transform: translateY(100%) rotate(10deg);
  opacity: 0;
}
</style>
