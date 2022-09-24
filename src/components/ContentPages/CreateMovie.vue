<template>
    <div class="content_container">
        <form action="" class="createMove flex_space_between">
            <div class="formData">
                <label for="">Name : </label>
                <input type="text" v-model="CreateMoveData.name" placeholder="Name of the movie">
            </div>
            <div class="formData">
                <label for="">Description : </label>
                <input type="text" v-model="CreateMoveData.description" placeholder="Description of the movie">
            </div>
            <div class="formData">
                <label for="">Img : </label>
                <input type="file" v-on="{ change: [uploadImg] }">
                <div class="uploadedImg mt-2" v-if="movieImgUrl !== ''">
                    <img :src="movieImgUrl" alt="">
                </div>
            </div>
            <div class="formData">
                <label for="">Category : </label>
                <select v-model="CreateMoveData.category_id">
                    <option value="" disabled selected> Category </option>
                    <option :value="movieName.id" v-for="movieName in moviesNames" :key="movieName.id"> {{movieName.name}} </option>
                </select>
            </div>

            <!-- errors -->
            <div class="errors alert alert-danger" role="alert" v-if="ErrorCheck == true">
                <p v-for="(error, index) in errors" :key="index"> {{error[0]}} </p>
            </div>
            <div class="form_action">
                <button v-if="formType == 'create'" @click.prevent="CreateMovie"> Save </button>
                <button v-if="formType == 'update'" @click.prevent="updateMovie"> update </button>
            </div>
        </form>
    </div>    
</template>
<script>
import Request from '../../services/Request';

export default {
    name: 'CreateMovie',
    data(){
        return{
            moviesNames: [],
            movieID: '',
            CreateMoveData: {
                name: '',
                description: '',
                image: '',
                category_id: '',
            },
            movieImgUrl: '',
            errors: '',
            ErrorCheck: false,
            formType: 'create'
        }
    },
    mounted(){
        this.formType = localStorage.getItem('formType')
        if(this.formType == 'update'){
            this.getMovieData();
        }
        this.moviesFilter();
    },
    methods: {
        // update the movie
        updateMovie(){
            const formData = new FormData();
                formData.append('name', this.CreateMoveData.name);
                formData.append('description', this.CreateMoveData.description);
                formData.append('image', this.CreateMoveData.image);
                formData.append('category_id', this.CreateMoveData.category_id);
                formData.append('_method', 'put');
            Request.put('movies', formData)
            .then( res => {
                if(Request.statusIsSuccess(res) && Request.responseIsSuccess(res)){
                    this.$router.push('/Home')
                } else if(Request.isFailed(res)){
                    this.errors = res.data.messege
                    this.ErrorCheck = true
                }
            }).catch(error => alert(error))
        },

        // get movie data for update
        getMovieData(){
            Request.getBYID('movies', localStorage.getItem('movieEditID')).then(res => {
                if(res.status == 200 || res.status == 201){
                    this.CreateMoveData.name = res.data.message.name
                    this.CreateMoveData.description = res.data.message.description
                    this.CreateMoveData.image = res.data.message.image
                    this.CreateMoveData.category_id = res.data.message.category_id
                    this.movieImgUrl = res.data.message.category_id
                }
            });
        },

        // Create data
        CreateMovie(){
            const formData = new FormData();
            formData.append('name', this.CreateMoveData.name);
            formData.append('description', this.CreateMoveData.description);
            formData.append('image', this.CreateMoveData.image);
            formData.append('category_id', this.CreateMoveData.category_id);
            
            Request.post('movies', formData)
            .then(res => {
                if(Request.statusIsSuccess(res) && Request.responseIsSuccess(res)){
                    this.$router.push('/Home')
                } else if (Request.isFailed(res)){
                    this.errors = res.data.message
                    this.ErrorCheck = true
                }
            })
        },

        // upload img
        uploadImg(e) {
            this.CreateMoveData.image = e.target.files[0];
            this.movieImgUrl = URL.createObjectURL(e.target.files[0]);
        },

        // filters by category
        moviesFilter(){
            Request.get('category').then(res => {
                if(res.status == 200 || res.status == 201){
                    this.moviesNames = res.data.message;
                }
            });
        },
    }
    
    
}
</script>
<style lang="scss" scoped>
.createMove{
    box-shadow: 0 0 10px #DDD;
    border-radius: 10px;
    padding: 40px 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    .formData{
        width: 45%;
        margin-bottom: 20px;
        @media(max-width: 992px) {
            width: 100%;
        }
        label{
            display: block;
            font-size: 20px;
            margin-bottom: 16px;
        }
        input,
        select{
            display: block;
            width: 100%;
            border: 1px solid #70707080;
            color: #70707080;
            padding: 20px 10px;
            border-radius: 8px;
        }
        
    }
    .form_action{
        width: 100%;
        margin: 40px 0 0 0;
        button{
            background-color: #D3AC67;
            color: #FFF;
            width: 216px;
            border-radius: 8px;
            text-align: center;
            padding: 10px 0;
            border: 0;
            font-size: 16px;
            font-weight: 600;
            margin: auto;
            display: block;
        }
    }
    .uploadedImg{
        width: 100px;
        height: 100px;
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
    .errors{
        width: 100%;
    }
}
</style>