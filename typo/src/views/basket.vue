<template>
 <div>
     <navbar />
     <hr>
     <div class="basket-wrapper">
         <div class="basket-content">
             <h3>Ваша корзина пуста</h3>
             <br>
             Оформленные заказы можно посмотреть и отредактировать в <a href="#">личном кабинете</a>
         </div>
     </div>
     <hr>
     <myfooter />
 </div>
</template>

<script>
    import navbar from "@/components/navbar";
    import myfooter from "@/components/myfooter";

export default {
    name: 'basket',
    components: {
        navbar,
        myfooter
    }
}
</script>
