<template>
  <div class="content-conteiner-pedido">
        <h1>Realizar pedido</h1>
        <form @submit.prevent="norecargar">
            <label>A nombre de: </label>
            <br>
            <input type="text" id="nombre" name="Nombre" placeholder="Nombre">

            <br>

            <label>Telefono: </label>
            <br>
            <input type="tel" id="telefono" name="telefono" placeholder="Numero de telefono">

            <br>

            <label>Correo electronico: </label>
            <br>
            <input type="email" id="correo" name="correo" placeholder="Correo electronico">

            <br>

            <label>Descripcion generel: </label>
            <br>
            <input type="text" id="descripcion" name="descripcion" placeholder="descripcion">

            <br>
            <label>Selecciona el sabor: </label>
            <br>
           <select name="tipos" id="tipos">
            <option>Dos pisos</option>
            <option>Normal</option>
        </select>

            <br>

            <label>Selecciona tipo de pastel</label>
            <br>
            
            <select name="adornos" id="adornos">
            <option>Pastel Chocolate $15.00</option>
            <option>Pastel Menta $15.00</option>
        </select>

            <br>




            <button @click = "enviar">Realizar pedido</button>
        </form>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
   
  },
  methods:{
      norecargar(){
      },

      enviar(){
        this.$store.commit("eNombre", document.getElementById("nombre").value)
        this.$store.commit("eTelefono", document.getElementById("telefono").value)
        this.$store.commit("eCorreo", document.getElementById("correo").value)
        this.$store.commit("eDescripcion", document.getElementById("descripcion").value)
        this.$store.commit("eAdornos", document.getElementById("adornos").value)
        this.$store.commit("eTipos", document.getElementById("tipos").value)
      }
  }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    min-height: 100%;
}

body {
    background: linear-gradient(#5826a8, #ca3455);
}

h1 {
    color: #438ecc;
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 20px;
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px;
    border-radius: 20px;
}

h2,
h3 {
    margin-bottom: 10px;
    margin-top: 20px;
}

button {
    width: 150px;
    height: 40px;
    background: linear-gradient(#500c70, #220763);
    border-radius: 20px;
    font-size: 16px;
    color: #f0f0f0;
    font-weight: bold;
}

input {
    width: 200px;
    height: 20px;
    border-radius: 20px;
    border: solid 1px rgb(11, 91, 165);
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 0;
}

select {
    width: 220px;
    height: 45px;
    border-radius: 20px;
    border: solid 1px rgb(11, 91, 165);
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 12px;
}

p,
dt,
li,
label {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 0px;
}

dd {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 30px;
}

p{
  color:#f7446b;
}

.info {
    font-size: 10px !important;
}

.content-conteiner {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 50px;
    background-color: rgb(230, 230, 230);
    border-radius: 20px;
}

.content-conteiner-pedido {
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 50px;
    background-color: rgb(230, 230, 230);
    border-radius: 20px;
}

</style>