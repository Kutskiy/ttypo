<template>
  <div>
  <navbar />
    <hr>
    <div class="content-wrap">
      <div class="choose">
          ВЫБЕРЕТЕ ТИП ПРОДУКЦИИ
        </div>
      <hr>
      <div class="content">
        <div class="cards hoverable"><router-link to="/cards"> <h4>Визитки</h4> <img src="/img/cards.jpg" alt=""> </router-link>
          <br>
          <span class="price"><a href="#">от</a></span>
          <span class="cost"><a href="#">1 000 &#8381</a></span>
          <br>
          <span class="value"> (за 1 000 шт.)</span>

        </div>

        <div class="booklets hoverable"><router-link to="/booklets"> <h4>Буклеты</h4> <img src="/img/booklets.jpg" alt=""></router-link>
          <div class="booklets-wrap"><a href="#">
            <br>
            <span class="price">от</span>
            <span class="cost">1 100 &#8381</span>
            <br>
            <span class="value">(за 1 000 шт.)</span>
          </a>
          </div>
        </div>

        <div class="print hoverable"><a href="#"> <h4>Цифровая печать</h4> <img src="/img/catalogs.jpg" alt="">
          <br>
          <span class="price">от</span>
          <span class="cost">1 200 &#8381</span>
          <br>
          <span class="value">(за 100 шт.)</span>
        </a>
        </div>
      </div>
      <hr>
    </div>
    <div class="video">
      <iframe width="100%" height="392" src="https://www.youtube.com/embed/oZzqYlx6qTE"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  <myfooter />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import myfooter from "@/components/myfooter.vue"
export default {
  name: 'Home',
  components: {
    navbar,
    myfooter
  }
}
/*$(document).ready(function(){
  alert(jQuery.fn.jquery);
});*/
</script>
