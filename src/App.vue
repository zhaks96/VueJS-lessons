<template>
<div id="app">
   <div v-if="isViewPreloader" class="preloader">
      <div class="preloader-5"></div>
    </div>
  <router-view v-else></router-view>
  <!-- <hr>
  <my-component></my-component>
  <hr>
  <user-card></user-card>
  <hr>
  <photo-redactor></photo-redactor>
  <hr>
  <product-list></product-list>
  <hr>
  <app-form-vuelidate></app-form-vuelidate>
  <hr>
  <user-page></user-page>
  <hr>
  <text-editor></text-editor> -->
</div>
</template>

<script>
// import MyComponent from './components/MyComponent'
// import UserCard from './components/UserCard'
// import PhotoRedactor from './components/PhotoRedactor'
// import ProductList from './components/product/ProductList'
// import FormVuelidate from './components/formVuelidate/FormVuelidate'
// import UserPage from './components/userPage/UserPage'
// import TextEditor from './components/textEditor/TextEditor'

export default {
  name: 'App',
  data(){
    return{
      isViewPreloader: true
    }
  },
  created(){
    setTimeout(() => {
      this.isViewPreloader = false
    }, 1500);
  }
  // components: {
  //   MyComponent,
  //   UserCard,
  //   PhotoRedactor,
  //   ProductList,
  //   appFormVuelidate: FormVuelidate,
  //   UserPage,
  //   TextEditor
  // }
}
</script>

<style scoped>
.preloader{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.preloader-5 {
    display: block;
    position: relative;
    width: 150px;
    height: 150px;
    margin: 30px auto;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #337AB7;
    animation: preloader-5-spin 2s linear infinite;
}
.preloader-5:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #BFE2FF;
    animation: preloader-5-spin 3s linear infinite;
}
.preloader-5:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #337AB7;
    animation: preloader-5-spin 1.5s linear infinite;
}
@keyframes preloader-5-spin {
    0%   {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
