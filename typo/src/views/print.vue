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
                            <option value="">
                                300 г/м² картон глянц.
                            </option>
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
                        <legend>Формат визитки</legend>
                        <select class="form-control" id="exampleFormControlSelect1" name="">
                            <option value="">90 х 50 мм</option>
                            <option value="">85 х 55 мм</option>
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
                <img src="img/bcatalogs.jpg"alt="">
            </div>
        </div>
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
    import navbar from "../components/navbar";
    import myfooter from "../components/myfooter";
    export default {
        name: "print",
        components: {
            navbar,
            myfooter
        }
    }
</script>

<style scoped>

</style>