<template>
    <div>
        <navbar />
        <br>
        <br>
        <br>
        <div class="choose_field" style="display: flex; justify-content: space-around">
            <div class="form-group1">
                <div class="form">
                    <form action="">
                        <legend>Плотность бумаги</legend>
                        <select class="form-control" id="exampleFormControlSelect1" name="">
                            <option value="">130 г/м² бумага глянц.</option>
                            <option value="">170 г/м² бумага глянц.</option>
                            <option value="">300 г/м² картон глянц.</option>
                        </select>
                    </form>
                </div>
                <br>
                <div class="form">
                    <form action="">
                        <legend>Тираж</legend>
                        <select class="form-control" id="exampleFormControlSelect1" name="">
                            <option value="">100 шт.</option>
                            <option value="">200 шт.</option>
                            <option value="">500 шт.</option>
                            <option value="">1 000 шт.</option>
                            <option value="">2 000 шт.</option>
                            <option value="">3 000 шт.</option>
                            <option value="">4 000 шт.</option>
                            <option value="">5 000 шт.</option>
                            <option value="">6 000 шт.</option>
                            <option value="">8 000 шт.</option>
                            <option value="">10 000 шт.</option>
                            <option value="">20 000 шт.</option>
                        </select>
                    </form>
                </div>
            </div>
            <div class="form-group2">
                <div class="form">
                    <form action="">
                        <legend>Формат буклета</legend>
                        <select class="form-control" id="exampleFormControlSelect1" name="">
                            <option value="">A5, 210×148 мм</option>
                            <option value="">A4, 297×210 мм</option>
                            <option value="">A3, 420×297 мм</option>
                            <option value="">210×200 мм</option>
                            <option value="">180×50 мм</option>
                        </select>
                    </form>
                </div>
                <br>
                <div class="form">
                    <form action="">
                        <legend>Полноцветная печать</legend>
                        <select class="form-control" name="" id="">
                            <option value="">С двух сторон </option>
                            <option value="">С одной стороны</option>
                        </select>
                    </form>
                </div>
            </div>
            <div class="form-image">
                <img src="img/bbooklets.jpg"alt="">
            </div>
        </div>
        <div class="form2" style="text-align: center">
            <form action="">
                <legend>Выберите вид фальцовки</legend>
                <select class="form-control" name="" id="">
                    <option value="">"Книжка" <span>(1 сложение)</span> </option>
                    <option value="">"Евробуклет" <span>(2 сложения)</span> </option>
                    <option value="">"Гармошка" <span>(2 сложения)</span> </option>
                    <option value="">"Дважды пополам" <span>(2 сложения)</span> </option>
                    <option value="">"Тетрадка" <span>(2 сложения)</span> </option>
                    <option value="">"Улитка" <span>(3 сложения)</span> </option>
                    <option value="">"Гармошка" <span>(3 сложения)</span> </option>
                    <option value="">"Окно" <span>(3 сложения)</span> </option>

                </select>
            </form>
        </div>
        <br>
        <br>
        <div class="form-check">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Послепечатная обработка</label>
            </div>
        </div>
        <br>
        <br>
        <p class="cost-p">Стоимость заказа</p>
        <div class="input-group mb-3">
            <input type="text" class="form-control"  placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" disabled>
            <div class="input-group-append">
                <button class="btn btn-info teal darken-1" type="button">В корзину</button>
            </div>
        </div>

        <myfooter />
    </div>
</template>

<script>
    import navbar from '@/components/navbar.vue'
    import myfooter from "@/components/myfooter.vue"
    export default {
        name: "booklets",
        components: {
            navbar,
            myfooter
        }
    }
</script>

<style scoped>

</style>