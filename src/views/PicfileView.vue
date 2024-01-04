<script>
import Swal from "sweetalert2";
export default {
data(){
  return{
    picFile: '',
    filePic: '',
    imageFile: [],
  }
},
methods:{
  uploadPic(event){
    this.picFile = event.target.files[0];
    console.log(this.picFile);
    if(this.picFile){
      const reader = new FileReader();
      reader.readAsDataURL(this.picFile);
      reader.onload = (e) =>{
        console.log(e);
        this.filePic = e.target.result;
        this.imageFile.push({
          name: this.picFile.name,
          path: this.filePic,
        });
        console.log(this.imageFile);
        this.resetValues();
      }
    }
    
  },
  submit() {
      if (this.imageFile.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Please select an image',
          text: 'You cannot submit without selecting an image'
        });
        return;
      }
      sessionStorage.setItem('picFile', JSON.stringify(this.imageFile));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
      });
      this.resetValues();
    },
    resetValues() {
    this.picFile = '';
    this.filePic = '';
  },

},
};
</script>

<template>
<input type="file" accept=".jpg,.png" @change="uploadPic">
<button type="button" @click="submit()">Upload photos</button>
<img :src="filePic" alt="">

</template>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }
}
</style>
