<template>
    <div class="container-calc">
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
                <img src="img/bcards.jpg"alt="">
            </div>
        </div>


    </div>
</template>

<script>
   /* export default {
        name: "typo-calc",

        data() {
            return {
        basicCost : 544
        } },
        computed: {
            cardCalc: function (basicCost) {

            }
        }
    }*/




</script>

<style scoped>

</style>