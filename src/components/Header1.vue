<template>
 <div>
     <div class="he1">
         <div class="he2">
             <div class="he3 clearDiv">
                 <img src="../assets/img/logo.png" alt="">
             </div>
             <div class="he4 clearDiv">
                 <ul class="clearDiv">
                     <li>
                         <img src="../assets/img/login.png" alt="">
                         <a href="">王大锤</a>
                     </li>
                     <li>
                         <a href="">我的订单</a>
                     </li>
                     <li>
                         <a href="">我的收藏</a>
                     </li>
                     <li>
                         <a href="">退出</a>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
  
 }
</script>

<style lang="scss" scoped>
a{
    color:#fff;
}
.he1{
    background-color: #0764E9;
    // margin-bottom: 15px;
    height: 93px;
    .he2{
        width: 1200px;
        margin:0 auto;
        .he3{
            float:left;
            img{
                float:left;
                margin-top:18px;
            }
        }
        .he4{
            
            ul{
              float:left;  
              margin-left:690px;
              margin-top:30px;
              li{
                float:left; 
                margin-right: 20px; 
              }
            }
            
        }
    }
}
 
</style>
