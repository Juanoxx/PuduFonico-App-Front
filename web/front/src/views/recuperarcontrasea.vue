<template>

  <div class="recuperarcontrasea-container">
    <div class="recuperarcontrasea-recuperarcontrasea">
      <Transition name="modal">
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">Correo enviado a:</slot>
              </div>

              <div class="modal-body">
                <slot name="body">{{Email}}</slot>
              </div>

              <button
                class="text-xs-center"
                @click="cerrarPopup"
              >OK</button>
            </div>
          </div>
        </div>
      </Transition>
      <img
        src="/playground_assets/847b0e62-ab43-498a-b74c-e8eeb0174b67-h0td-300h.png"
        alt="logoProyecto2117326"
        class="recuperarcontrasea-logo-proyecto2"
        v-on:click="inicio"
      />
      <span class="recuperarcontrasea-text">¿Olvidaste tu contraseña?</span>
      
      <button v-on:click="recuperar" class="recuperarcontrasea-rectangle28"> <span class="recuperarcontrasea-text4">Ingresar</span>  </button>
      <input v-model="Email" placeholder="Email"  class="recuperarcontrasea-rectangle29" />
      <span class="recuperarcontrasea-text1">Email</span>
      <span v-on:click="inicio" class="recuperarcontrasea-text2">Volver</span>
      <span class="recuperarcontrasea-text3">
        No te preocupes. Escribe tu Email y te enviaremos las instrucciones para
        recuperarla.
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Recuperarcontrasea',
  data() {
    return {
      Email:'',
      show:false,
    }
  },
  methods: {
    cerrarPopup(){
      this.Email='',
      this.show=false
    },
    recuperar(){
      if (this.Email!=''){
        this.show=true
      }      
    },
    inicio() {
      this.$router.push("/")
    },
    registro() {
      this.$router.push("/creaciondecuenta")
    },
  },
}
</script>

<style scoped>
.recuperarcontrasea-container {
  min-height: 100vh;
}
.recuperarcontrasea-recuperarcontrasea {
  width: 1512px;
  height: 982px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1512px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  background-color: rgba(216, 248, 239, 1);
}
.recuperarcontrasea-logo-proyecto2 {
  top: 23px;
  left: 656px;
  width: 200px;
  height: 201px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  border-radius: 77px;
}
.recuperarcontrasea-text {
  top: 254px;
  left: 384px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 64px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recuperarcontrasea-rectangle28 {
  top: 641px;
  left: 516px;
  width: 498px;
  height: 48px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 46px;
  background-color: rgba(124, 209, 184, 1);
}
.recuperarcontrasea-rectangle29 {
  top: 548px;
  left: 373px;
  width: 699px;
  height: 44px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 66px;
  background-color: rgba(255, 255, 255, 1);
}
.recuperarcontrasea-text1 {
  top: 507px;
  left: 381px;
  color: rgba(1, 73, 4, 1);
  width: 835px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recuperarcontrasea-text2 {
  top: 726px;
  left: 712px;
  color: rgba(62, 142, 126, 1);
  width: 89px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recuperarcontrasea-text3 {
  top: 400px;
  left: 381px;
  color: rgba(1, 73, 4, 1);
  width: 835px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recuperarcontrasea-text4 {
  top: 653px;
  left: 631px;
  color: rgba(1, 73, 4, 1);
  width: 268px;
  height: auto;
  font-size: 22px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
