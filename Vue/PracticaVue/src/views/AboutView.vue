<template>
<div class="content-conteiner-pedido">
        <h1>Nuevo pedido XD</h1>
        <form @submit.prevent="norecargar">
            <label>A nombre de: </label>
            <br>
            <p >{{$store.state.nombre}}</p>
            <br>

            <label>Telefono: </label>
            <br>
             <p >{{$store.state.telefono}}</p>

            <br>

            <label>Correo electronico: </label>
            <br>
             <p >{{$store.state.correo}}</p>

            <br>

            <label>Descripcion</label>
            <br>
             <p >{{$store.state.descripcion}}</p>

            <br>
            <label>Sabor: </label>
            <br>
             <p >{{$store.state.adornos}}</p>
            
  

            <br>

            <label>Tipo de pastel</label>
            <br>
             <p >{{$store.state.tipos}}</p>


            
        </form>
    </div>
</template>
