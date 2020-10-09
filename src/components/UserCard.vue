<template>
    <div class="user-card">
        <h1>Научу зарабатывать от 200 000 тг в час</h1>
        <div class="main-information">
            <img src="../assets/1.jpg" alt="" width="500">
            <div class="info">
                <h2>
                    {{ getAuthFullName }}
                </h2>
                <strong>Бизнес коуч</strong>
                <ul>
                    <li>Учу людей</li>
                    <li>Не знаю что такое</li>
                    <li>Пообещалб что поборюсь</li>
                </ul>
            </div>
        </div>
        <p>участников: {{users.length}}</p>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{`${index + 1} ${getFullName(user)}`}}
            </li>
        </ul>
        <div>
            <button type="button" @click="currentPage--">prev</button>
            <button type="button" 
                v-for="page in pages" 
                :key="page"
                @click="currentPage = page">{{page}}</button>
            <button type="button" @click="currentPage++">next</button>
        </div>
        <p>Страница {{ currentPage }} из {{ pages }}</p>
        <input type="text" @input="searchText = $event.target.value">
        <p>Всего имен: {{names.length}}, совпадений: {{getFiltredNames.length}}</p>
        <ul>
            <li v-for="(name, index) in getFiltredNames"
                :key="index">{{ name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'UserCard',
    data(){
        return{
            fname:'Zhansultan',
            sname:'Shagdatuly',
            lname:'Tileubayev',
            users:[
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                },
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                },
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                }
            ],
            pages:3,
            currentPage:1,
            searchText:'',
            names:['Zhansultan', 'Duman', 'Asan', 'Ruslan']
        }
    },
    computed:{
        getAuthFullName(){
            return `${this.fname} ${this.sname} ${this.lname}`.toUpperCase()
        },
        getFiltredNames(){
            return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    methods:{
        getFullName(user){
            return `${user.fname} ${user.sname} ${user.lname}`.toUpperCase()
        },
        loadUsers(page){
            console.log(page)
        }

    },
    watch:{
        currentPage(page){
            this.loadUsers(page)
        }
    }
}
</script>

<style scoped>
    .main-information{
        display: flex;
    }
    .main-information img{
            margin-right: 22px;
        }
</style>