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
                    <label>Плотность бумаги</label>
                    <select v-model="selectedpaper"
                            class="form-control"
                             id="exampleFormControlSelect1" name="">
                        <option disabled value="">Выберете
                            один из вариантов</option>
                        <option :value="0">300 г/м² картон глянц .</option>
                    </select>
                </form>
            </div>
            <br>
            <div class="form">
                <form action="">
                    <label>Тираж</label>
                    <select v-model="selectedcirk"
                            class="form-control"
                            id="circ"
                             name="circ">
                        <option disabled value="">Выберете
                            один из вариантов</option>
                        <option id="cp1"  :value="500">100 шт .</option>
                        <option id="cp2" :value="650">200 шт .</option>
                        <option id="cp3" :value="750">500 шт.</option>
                        <option id="cp4" :value="1000">1 000 шт .</option>
                        <option id="cp5" :value="1300">2 000 шт .</option>
                        <option id="cp6" :value="2000">3 000 шт .</option>
                        <option id="cp7" :value="2400">4 000 шт .</option>
                        <option id="cp8" :value="3100">5 000 шт.</option>
                        <option id="cp9" :value="3600">6 000 шт.</option>
                        <option id="cp10" :value="4500">8 000 шт.</option>
                        <option id="cp11" :value="5350">10 000 шт.</option>
                        <option id="cp12" :value="9900">20 000 шт .</option>
                    </select>
                </form>
            </div>
        </div>
        <div class="form-group2">
            <div class="form">
                <form action="">
                    <label>Формат визитки</label>
                    <select class="form-control" name=""
                            v-model="selected">
                        <option disabled selected value=""
                        >Выберете один из
                            вариантов</option>
                        <option :value="0" >90 х 50 мм</option>
                        <option :value="0">85 х 55 мм</option>
                    </select>
                </form>
            </div>
            <br>
            <div class="form">
                <form action="">
                    <label>Полноцветная печать</label>
                    <select
                            v-model="selectedcolorprint"
                            class="form-control"
                            name=""
                            id="">
                        <option disabled value="" >Выберете
                            один из вариантов</option>
                        <option  :value="1">С двух сторон
                        </option>
                        <option :value="0">С одной стороны</option>
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
        <div class="output-wrapper" style="display: flex; height:
        50px; margin-left: 25px; margin-top:60px;" v-if="totalcost
        !== '000'">
            <div class="alert alert-success" id="costOutput" role="alert" style="height: 50px !important; width: 700px" >
                Стоимость заказа: {{ totalcost }}
            </div>
            <div class="button" style="padding: 0 !important;
            height: 75px">
                <button class="btn btn-info" style="height: 50px">
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
    export default {
        name: 'calc-cards',
        data: () => {
               return  {
                   defaultcost: 500,
                   selected: +'',
                   selectedcirk: +'500',
                   selectedpaper: +'',
                   selectedcolorprint: +'0',

               }
        },
        watch: {
            selectedcolorprint() {
                console.log('Hello');
                let opt = document.getElementById('cp1');
                opt.setAttribute('value', '2');
                console.log(opt.getAttribute('value'));
                let opt2 = document.getElementById('cp4');
                opt2.setAttribute('value', '5000');
                console.log(opt2.value)
            },
            selectedcirk() {
                let opp = document.getElementById('cp3');
                console.log(opp.value)
            }
        },
        computed: {
            totalcost: function () {
                return this.selectedcirk +
                    this.selected + this.selectedpaper +
                    this.selectedcolorprint
            },

        },
        methods: {

        }


    }


        /*const elCp1 =  document.getElementById('cp1');
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
    let compCost  = '544';
    document.getElementById('costOutput').innerHTML =  document.getElementById('costOutput').innerHTML + compCost.toString() +'&#8381';
        */

</script>

<style scoped>

</style>


