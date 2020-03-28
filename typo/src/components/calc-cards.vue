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
                    <select class="form-control" id="circ" name="circ">
                        <option id="cp1" value="" data-cp1="0">100 шт.</option>
                        <option id="cp2" value="" data-cp2="76">200 шт.</option>
                        <option id="cp3" value="" data-cp3="">500 шт.</option>
                        <option id="cp4" value="" data-cp4="4">1 000 шт.</option>
                        <option id="cp5" value=""  data-cp5="">2 000 шт.</option>
                        <option id="cp6" value="" data-cp6="">3 000 шт.</option>
                        <option id="cp7" value="" data-cp7="">4 000 шт.</option>
                        <option id="cp8" value="" data-cp8="8">5 000 шт.</option>
                        <option id="cp9" value="" data-cp9="">6 000 шт.</option>
                        <option id="cp10" value="" data-cp10="">8 000 шт.</option>
                        <option id="cp11" value="" data-cp11="">10 000 шт.</option>
                        <option id="cp12" value="" data-cp12="">20 000 шт.</option>
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
        <div class="form-check">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Послепечатная обработка</label>
            </div>
        </div>
        <br>
        <div class="output-wrapper" style="display: flex; height: 50px; margin-left: 25px; margin-top:60px; ">
            <div class="alert alert-success" id="costOutput" role="alert" style="height: 50px !important; width: 700px" >
                Стоимость заказа:
            </div>
            <div class="button" style="padding: 0 !important; height: 75px">
                <button class="btn btn-info" style="height: 50px" >
                    в корзину
                </button>
            </div>
        </div>
        <br>
        <br>
        <myfooter />
    </div>
</template>

<script>

        const elCp1 =  document.getElementById('cp1');
        cp1 = elCp1.dataset.cp1;
        const elCp2 = document.getElementById('cp2');
        cp2 = elCp2.dataset.cp2;
        const elCp3 = document.getElementById('cp3');
        cp3 = elCp3.dataset.cp3;
        const elCp4 = document.getElementById('cp4');
        cp4 = elCp4.dataset.cp4;
        const elCp5 = document.getElementById('cp5');
        cp5 = elCp5.dataset.cp5;
        const elCp6 = document.getElementById('cp6');
        cp6 = elCp6.dataset.cp6;
        const elCp7 = document.getElementById('cp7');
        cp7 = elCp7.dataset.cp7;
        const elCp8 = document.getElementById('cp8');
        cp8 = elCp8.dataset.cp8;
        const elCp9 = document.getElementById('cp9');
        cp9 = elCp9.dataset.cp9;
        const elCp10 = document.getElementById('cp10');
        cp10 = elCp10.dataset.cp10;
        const elCp11 = document.getElementById('cp11');
        cp11 = elCp11.dataset.cp11;
        const elCp12 = document.getElementById('cp12');
        cp12 = elCp12.dataset.cp12;



    let compCost  = '544';
    document.getElementById('costOutput').innerHTML =  document.getElementById('costOutput').innerHTML + compCost.toString() +'&#8381';





</script>

<style scoped>

</style>