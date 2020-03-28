<template>
  <div class="navbar">
    <nav class="nav-extended teal darken-1 z-depth-3">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">LOGO</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html"> <i class="large material-icons" style="font-size: 3em; text-align: center;">account_box</i>Личный кабинет</a></li>
          <li><router-link to='/basket'> <i class="large material-icons" style="font-size: 3em; text-align: center;">shopping_cart</i> Корзина</router-link></li>
          <li><a href="collapsible.html"><i class="large material-icons" style="font-size: 3em; text-align: center;">transfer_within_a_station</i>Выйти</a></li>
        </ul>
        <div class="phonewrap">
          <div class="phone"><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
          <div class="contacts"><a href="/contacts">Контакты</a></div>
        </div>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"><router-link class="active" to="/cards">Визитки</router-link></li>
          <li class="tab"><router-link class="active" to="/booklets">Буклеты</router-link></li>
          <li class="tab"><router-link class="active" to="/print">Цифровая печать</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
