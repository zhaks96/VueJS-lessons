<template>
<div id="app">
  <my-component></my-component>
  <hr>
  <user-card></user-card>
  <hr>
  <photo-redactor></photo-redactor>
  <hr>
  <product-list></product-list>
  <hr>
  <app-form-vuelidate></app-form-vuelidate>
</div>
</template>

<script>
import MyComponent from './components/MyComponent'
import UserCard from './components/UserCard'
import PhotoRedactor from './components/PhotoRedactor'
import ProductList from './components/product/ProductList'
import FormVuelidate from './components/formVuelidate/FormVuelidate'

export default {
  name: 'App',
  components: {
    MyComponent,
    UserCard,
    PhotoRedactor,
    ProductList,
    appFormVuelidate: FormVuelidate
  }
}
</script>

<style>

</style>
