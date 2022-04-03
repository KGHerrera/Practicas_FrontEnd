import { createStore } from 'vuex'

export default createStore({
    state: {
        nombre: "",
        telefono: "",
        correo: "",
        descripcion: "",
        adornos: "",
        tipos: "",
        total: 0
    },
    getters: {},
    mutations: {
        eNombre(state, nombre) {
            state.nombre = nombre
        },
        eTelefono(state, telefono) {
            state.telefono = telefono
        },
        eCorreo(state, correo) {
            state.correo = correo
        },
        eDescripcion(state, descripcion) {
            state.descripcion = descripcion
        },
        eAdornos(state, adornos) {
            state.adornos = adornos
        },
        eTipos(state, tipos) {
            state.tipos = tipos
        }
    },
    actions: {},
    modules: {}
})