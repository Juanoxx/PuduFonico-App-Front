<template>
  <div class="recomendaciones-container">
    <div class="recomendaciones-recomendaciones">
      <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">¡Muchas gracias por su aporte!</slot>
              </div>

              <button
                class="text-xs-center"
                @click="cerrarPopup"
              >OK</button>
            </div>
          </div>
        </div>
      <img
        src="/playground_assets/8e9e162d-bb8c-4713-b579-4bcf4b37b369-qsqm.svg"
        alt="Rectangle2810354"
        class="recomendaciones-rectangle28"
      />
      <img
        src="/playground_assets/f2903373-ab88-4899-9725-5fd13a34b27b-2tfa-200h.png"
        alt="logoProyecto210355"
        class="recomendaciones-logo-proyecto2"
        v-on:click="inicio"

      />
      <img
        src="/playground_assets/c0ce4bbc-14e8-4fe0-a227-563034f166e1-dwf-200h.png"
        alt="pudufoni110356"
        class="recomendaciones-pudufoni1"
      />
      <img
        src="/playground_assets/94112f9e-accd-4074-a96c-dd51ffe812b6-pc8q-200h.png"
        alt="imagen20220421172719085previewrev1110357"
        class="recomendaciones-imagen20220421172719085previewrev11"
        v-on:click="cuenta"
      />
      <span class="recomendaciones-text">Tu cuenta</span>
      <span class="recomendaciones-text1">Crear Sala</span>
      <span class="recomendaciones-text2">Contacto</span>
      <img
        src="/playground_assets/c5c0b873-a18d-4bd7-914b-eee764604f24-gyks-200h.png"
        alt="imagen20220421185711919previewrev2110361"
        class="recomendaciones-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/8a9a24d8-d30c-4bc2-916e-9e095d0c68c5-x5tw-200h.png"
        alt="imagen20220421190215610previewrev1110362"
        class="recomendaciones-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
      <span class="recomendaciones-text3">¿Recomendaciones o consejos?</span>
      <span class="recomendaciones-text4">Califica nuestra aplicación</span>
      /**recomendaciones */
      
      <textarea v-model="mensaje" placeholder=""  class="recomendaciones-rectangle36" />

      <span class="recomendaciones-text5">Enviar</span>
      /**boton */
      
      <button v-on:click="enviar" class="recomendaciones-rectangle39"> <span class="recomendaciones-text6">Enviar</span>  </button>

      
      <img
        src="/playground_assets/e8171c8a-d24e-43b5-9b04-2bfbffc6618c-tbyp-500h.png"
        alt="imagen20220503214338237previewrev1110590"
        class="recomendaciones-imagen20220503214338237previewrev11"
      />
      <img
        src="/playground_assets/3e33246a-0aae-4cab-8451-2d4dce1d98cf-lgqo.svg"
        alt="Rectangle4310381"
        class="recomendaciones-rectangle43"
      />
      <star-rating v-model:rating='stars' class="recomendaciones-imagen20220503214539754previewrev11"></star-rating>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Recomendaciones',
  components: {
  StarRating
  },
  data() {
    return {
      stars:0,
      show:false,
      mensaje:''
      }
  },
  methods: {
    inicio() {
      this.$router.push("/inicio")
    },
    enviar() {
      if(this.mensaje!=''){
        this.show=true
        this.stars=0
        this.mensaje=''
      }
    },
    cerrarPopup(){
      this.show=false
    },
    cuenta(){
      this.$router.push("/perfil")
    },
    contacto(){
      this.$router.push("/contacto")
    },
    crearCVP(){
      this.$router.push("/creacionCVP")
    },
  },
}
</script>

<style scoped>
.recomendaciones-container {
  min-height: 100vh;
}
.recomendaciones-recomendaciones {
  width: 1512px;
  height: 982px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1512px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}
.recomendaciones-rectangle28 {
  top: 0px;
  left: 0px;
  width: 1512px;
  height: 96px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  background-image: linear-gradient(180deg, rgba(124, 209, 184, 1) 0%, rgba(124, 209, 184, 0) 100%);
}
.recomendaciones-logo-proyecto2 {
  top: 0px;
  left: 726px;
  width: 61px;
  height: 57px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  border-radius: 77px;
}
.recomendaciones-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.recomendaciones-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.recomendaciones-text {
  top: 70px;
  left: 1417px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-text1 {
  top: 70px;
  left: 1321px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-text2 {
  top: 68px;
  left: 1225px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-imagen20220421185711919previewrev21 {
  top: 0px;
  left: 1325px;
  width: 75px;
  height: 65px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.recomendaciones-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.recomendaciones-text3 {
  top: 439px;
  left: 489px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-text4 {
  top: 162px;
  left: 514px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-rectangle36 {
  display:block;
  top: 491px;
  left: 490px;
  width: 871px;
  height: 362px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 1);
}
.recomendaciones-text5 {
  top: 887px;
  left: 1204px;
  color: rgba(1, 73, 4, 1);
  width: 69px;
  height: auto;
  position: absolute;
  font-size: 22px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-rectangle39 {
  top: 877px;
  left: 1115px;
  width: 248px;
  height: 40px;
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
.recomendaciones-text6 {
  top: 887px;
  left: 1204px;
  color: rgba(1, 73, 4, 1);
  width: 69px;
  height: auto;
  font-size: 22px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.recomendaciones-imagen20220503214338237previewrev11 {
  top: 117px;
  left: 25px;
  width: 500px;
  height: 500px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.recomendaciones-rectangle43 {
  top: 227px;
  left: 514px;
  width: 452px;
  height: 64px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(232, 255, 248, 1);
}
.recomendaciones-imagen20220503214539754previewrev11 {
  top: 169px;
  left: 590px;
  width: 300px;
  height: 180px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
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
