<template>
  <div class="soportetcnico-container">
    <div class="soportetcnico-soportetcnico">
      <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">Resolveremos su problema a la brevedad.</slot>
              </div>

              <button
                class="text-xs-center"
                @click="cerrarPopup"
              >OK</button>
            </div>
          </div>
        </div>
      <img
        src="/playground_assets/24c44126-5b25-4ea8-bd80-7e1d53e533ac-h0yn.svg"
        alt="Rectangle2810331"
        class="soportetcnico-rectangle28"
      />
      <img
        src="/playground_assets/eec03324-c500-42df-a9f9-feaf3a07c346-is7s-200h.png"
        alt="logoProyecto210332"
        class="soportetcnico-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/a4d89d62-46f3-45ea-b7ed-e92835cc2bc6-juq-200h.png"
        alt="pudufoni110333"
        class="soportetcnico-pudufoni1"
      />
      <img
        src="/playground_assets/25fce1e3-dbfb-4ffa-8227-fd6eaa538e94-i3yu-200h.png"
        alt="imagen20220421172719085previewrev1110334"
        class="soportetcnico-imagen20220421172719085previewrev11"
        v-on:click="cuenta"
      />
      <span class="soportetcnico-text">Tu cuenta</span>
      <span class="soportetcnico-text1">Crear Sala</span>
      <span class="soportetcnico-text2">Contacto</span>
      <img
        src="/playground_assets/c2b30271-a28d-4826-b824-084df60cd6ec-i5bs-200h.png"
        alt="imagen20220421185711919previewrev2110338"
        class="soportetcnico-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/dfb710fc-f11b-4a3d-8c22-16f3d9ce62a4-pcqb-200h.png"
        alt="imagen20220421190215610previewrev1110339"
        class="soportetcnico-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
      <span class="soportetcnico-text3">Explícanos tu problema</span>
      
      <textarea v-model="mensaje" placeholder=""  class="soportetcnico-rectangle36" />

      <span class="soportetcnico-text4">Enviar</span>
      /**boton */
      <img
        src="/playground_assets/54260bcf-8376-4259-8615-274d663b7b85-xg2.svg"
        alt="Rectangle3910349"
        class="soportetcnico-rectangle39"
      />
      <button v-on:click="enviar" class="soportetcnico-rectangle39"> <span class="soportetcnico-text5">Enviar</span>  </button>

      
      <img
        src="/playground_assets/501fc299-b916-4711-9f1f-c5b806ddf4a5-iokc-300h.png"
        alt="imagen20220503205833960previewrev1110351"
        class="soportetcnico-imagen20220503205833960previewrev11"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Soportetcnico',
  data() {
    return {
      show:false,
      mensaje:''
      }
  },
  methods: {
    inicio() {
      this.$router.push("/inicio")
    },
    enviar() {
      if (this.mensaje!=''){
        this.show=true
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
.soportetcnico-container {
  min-height: 100vh;
}
.soportetcnico-soportetcnico {
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
.soportetcnico-rectangle28 {
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
.soportetcnico-logo-proyecto2 {
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
.soportetcnico-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.soportetcnico-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.soportetcnico-text {
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
.soportetcnico-text1 {
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
.soportetcnico-text2 {
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
.soportetcnico-imagen20220421185711919previewrev21 {
  top: 0px;
  left: 1325px;
  width: 75px;
  height: 65px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.soportetcnico-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.soportetcnico-text3 {
  top: 173px;
  left: 80px;
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
.soportetcnico-rectangle36 {
  top: 283px;
  left: 482px;
  width: 870px;
  height: 362px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 1);
}
.soportetcnico-text4 {
  top: 681px;
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
.soportetcnico-rectangle39 {
  top: 671px;
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
.soportetcnico-text5 {
  top: 681px;
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
.soportetcnico-imagen20220503205833960previewrev11 {
  top: 322px;
  left: 37px;
  width: 490px;
  height: 283px;
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
