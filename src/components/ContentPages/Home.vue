<template>
    <div>
        <Alert 
            v-if="alertToggle == true"
            :acceptedDelete="acceptedDeleteMovie" 
            messege="Delete this movie ?"
        />
        <div class="content_container">
            <div class="filterSec">
                <select name="" id="" v-model="movieID" @change="filters" class="flex_all_center">
                    <option value="" disabled selected> Movie name </option>
                    <option :value="movieName.id" v-for="movieName in moviesNames" :key="movieName.id"> {{movieName.name}} </option>
                </select>
                <button @click="AddNewMovie" class="ceateMovie flex_all_center"> Create Movie </button>
            </div>
            <div v-if="loading == true">
                <div class="spiiner">
                    <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
                </div>
            </div>
            <div class="movies_container" v-if="moviesLoaded == true">
                <div class="category" v-for="movie in movies" :key="movie.id">
                    <div class="Movie flex">
                        <div class="movie_img">
                            <img :src="movie.image" alt="">
                        </div>
                        <div class="description">
                            <h3 class="movie_name"> {{movie.name}} </h3>
                            <p class="movie_description"> {{movie.description}} </p>
                        </div>
                        <h4 class="movie_date"> {{movie.updated_at}} </h4>
                    </div>
                    <div class="MovieAction flex">
                        <div class="edit flex_all_center" @click="() => editMovie(movie.id)">
                            <b-icon icon="pencil" class="icone"></b-icon>
                        </div>
                        <div class="delete flex_all_center" @click="() => deleteMovie(movie.id)">
                            X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from '../Global/Alert.vue';
import Request from "../../services/Request";

export default {
    name: 'Home',
    components : {Alert},
    data(){
        return{
            movies: [],
            moviesNames: [],
            movieID: '',
            loading: true,
            moviesLoaded: false,
            alertToggle: false,
            deleteID: '',
        }
    },
    mounted(){
        this.allMovies();
        this.moviesFilter();
    },
    methods: {
        // movies
        allMovies(){
           Request.get('movies').then(res => {
            if(Request.statusIsSuccess(res)){
                this.movies = res.data.message;
                this.loading = false;
                this.moviesLoaded = true;
            }})
        },

        // get the movies names
        moviesFilter(){
            Request.get('category')
            .then(res => {
                if(res.status == 200 || res.status == 201){
                    this.moviesNames = res.data.message;
                }
            });
        },

        // filter movie by the name
        filters(){
            Request.getBYID('moviesByCategory',  this.movieID)
            .then(res => {
                this.movies = res.data.message;
            });
        },

        // edit the movie
        editMovie(id){
            localStorage.setItem('movieEditID', id)
            localStorage.setItem('formType', 'update')
            this.$router.push('/CreateMovie')
        },

        // btn for add new movie
        AddNewMovie(){
            localStorage.setItem('formType', 'create');
            this.$router.push('/CreateMovie')
        },

        // confirm the delete
        deleteMovie(id){
            this.deleteID = id;
            this.alertToggle = true;
        },

        // delete the movie
        acceptedDeleteMovie(){
            console.log(this.deleteID)
            Request.delete('movies', this.deleteID)
            .then( res => {
                if(Request.statusIsSuccess(res)){
                    this.allMovies();
                }
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.category{
    width: 100%;
    position: relative;
    .Movie{
        box-shadow: 0 0 10px #DDD;
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 40px;
        position: relative;
        .movie_img{
            width: 100px;
            margin-right: 10px;
            overflow: hidden;
            img{
                width: 100%;
                object-fit: cover;
            }
        }
        .description{
            .movie_name{
                font-size: 18px;
                font-weight: 500;
                color: #000;
            }
            .movie_description{
                font-size: 16px;
                color: #000;
            }
            
        }
        .movie_date{
            font-size: 10px;
            color: #000000a1;
            position: absolute;
            bottom: 3px;
            right: 3px;
        }
    }
    .MovieAction{
        position: absolute;
        top: -20px;
        right: 5px;
        .delete,
        .edit{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 18px;
            font-weight: 600;
            color: #FFF;
            cursor: pointer;
            
        }
        .delete{
            background-color: red;
            margin-left: 10px;
        }
        .edit{
            background-color: #5F999B;
        }
    }
}
</style>