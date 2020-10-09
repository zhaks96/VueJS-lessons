<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" type="text" class="form-control" v-model.trim="form.login" />
      <!-- <p class="invalid-feedback">
          Ошибка!  is-invalid
      </p> -->
    </div>
    <div class="form-group">
      <label for="email">Почта:</label>
      <input
        id="email"
        type="email"
        class="form-control"
        v-model.trim="form.email"
      />
    </div>
    <div class="form-group">
      <label for="password">Пароль:</label>
      <input
        id="password"
        type="password"
        class="form-control"
        v-model.trim="form.password"
      />
    </div>
    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="form.country">
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="thems">Любимые темы:</label>
      <select id="thems" class="form-control" multiple v-model="form.favoriteThems">
        <option v-for="(them, index) in thems" :key="index" :value="them.value">
          {{ them.label }}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="notification"
        v-model="form.agreeWithSendEmail"
      />
      <label class="form-check-label" for="notification"
        >Уведомлять меня о новых курсах</label
      >
    </div>
    <div class="flex">
      <div class="form-check">
        <input
          type="radio"
          class="form-check-input"
          name="exampleRadios"
          v-model="form.gender"
          value="male"
          id="male"
          checked
        />
        <label class="form-check-label" for="male"> Мужчина </label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          class="form-check-input"
          name="exampleRadios"
          v-model="form.gender"
          value="female"
          id="female"
        />
        <label class="form-check-label" for="female"> Женщина </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'


export default {
  name: "FormVuelidate",
  data() {
    return {
      form: {
        login: "",
        email: "",
        password: "",
        country: "kz",
        favoriteThems: ["IT"],
        agreeWithSendEmail: false,
        gender: "male",
      },
      name:'',
      countries: [
        {
          label: "Қазақстан",
          value: "kz",
        },
        {
          label: "США",
          value: "usa",
        },
        {
          label: "Аргентина",
          value: "ag",
        },
      ],
      thems: [
        {
          label: "Технологии",
          value: "IT",
        },
        {
          label: "Языки",
          value: "lang",
        },
        {
          label: "Математика",
          value: "math",
        },
      ],
    };
  },
  validations: {
      form:{
          login:{
              required,
              minLength: minLength(5)
          },

      }
  }
};
</script>

<style lang="scss" scoped>
.sign-up {
  width: 400px;
  margin: 20px auto;
}
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>
