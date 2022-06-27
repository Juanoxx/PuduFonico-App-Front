<template>
  <div class="editarperfil-container">
    <div class="editarperfil-editarperfil">
      <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">Datos cambiados exitosamente</slot>
              </div>

              <button
                class="text-xs-center"
                @click="cerrarPopup"
              >OK</button>
            </div>
          </div>
        </div>
      <img
        src="/playground_assets/5618cc77-3cf0-4cb0-9ba9-d95f11304922-5ogi.svg"
        alt="Rectangle2863134"
        class="editarperfil-rectangle28"
      />
      <img
        src="/playground_assets/f7cc77fa-3c65-4c2c-8f60-e26cb22f3a4d-p7si-200h.png"
        alt="logoProyecto263135"
        class="editarperfil-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/b750ee58-8260-40de-b0b2-07daaaffab95-3wag-200h.png"
        alt="pudufoni163136"
        class="editarperfil-pudufoni1"
      />
      <img
        src="/playground_assets/00af2c1f-fdc1-49b0-bf5f-236e9299922a-ftkt-200h.png"
        alt="imagen20220421172719085previewrev1163137"
        class="editarperfil-imagen20220421172719085previewrev11"
      />
      <span class="editarperfil-text">Tu cuenta</span>
      <span class="editarperfil-text01">Crear Sala</span>
      <span class="editarperfil-text02">Contacto</span>
      <img
        src="/playground_assets/6fd2edd3-a0dc-4856-aebb-bd6d151f4f46-bgts-200w.png"
        alt="imagen20220421185711919previewrev2163141"
        class="editarperfil-imagen20220421185711919previewrev21"
      />
      <img
        src="/playground_assets/17b833a6-2d82-4605-a31b-17fd938dc6bb-0ow-200h.png"
        alt="imagen20220421190215610previewrev1163142"
        class="editarperfil-imagen20220421190215610previewrev11"
      />
      <img
        src="/playground_assets/731c34f4-3016-4379-a521-666dd69e2d11-x0sj-200w.png"
        alt="imagen20220421193036317163143"
        class="editarperfil-imagen202204211930363171"
      />
      <input v-model="usuario.fname" placeholder="usuario.fname"  class="editarperfil-rectangle25"/>
      
      <span class="editarperfil-text04">Nombres</span>
      <span class="editarperfil-text05">Apellidos</span>
      <span class="editarperfil-textnuevo">Correo</span>
      <input v-model="usuario.lnames" placeholder="usuario.lnames"  class="editarperfil-rectangle29"/>
      <input v-model="usuario.email" placeholder="usuario.email"  class="editarperfil-rectanglenuevo"/>
      <button v-on:click="registro" class="editarperfil-rectangle281"> <span class="editarperfil-text07">Cambiar contraseña</span>  </button>
      <button v-on:click="editar" class="editarperfil-rectangle30"> <span class="editarperfil-text08">Enviar cambios</span>  </button>

      
      
      
      <span class="editarperfil-text09">Cambiar foto del perfil</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Editarperfil',
  data() {
    return {
      raww0h0: ' ',
      usuario:{},
      show:false
      }
  },

  methods: {
    inicio() {
      this.$router.push("/")
    },
    editar() {
      this.$router.push("/editarCuenta")
    },
    async getusuario(){
      let response = await axios.get('http://localhost:5000/api/users/1');
      this.usuario = response.data[0];
      console.log(this.usuario.lnames,'USUARIOOOO')
    },
    async editar(){
      let response = await axios.put('http://localhost:5000/api/users/1',this.usuario);
      console.log(response.data)
      this.show=true
    },
    cerrarPopup(){
      this.show=false
    }
  },
  created: async function(){
    this.getusuario()
  }
}

</script>

<style scoped>
.editarperfil-container {
  min-height: 100vh;
}
.editarperfil-editarperfil {
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
.editarperfil-rectangle28 {
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
.editarperfil-logo-proyecto2 {
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
.editarperfil-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.editarperfil-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.editarperfil-text {
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
.editarperfil-text01 {
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
.editarperfil-text02 {
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
.editarperfil-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.editarperfil-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.editarperfil-imagen202204211930363171 {
  top: 156px;
  left: 687px;
  width: 100px;
  height: 138px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 100px;
}
.editarperfil-rectangle25 {
  top: 377px;
  left: 513px;
  width: 468px;
  height: 50px;
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
.editarperfil-text03 {
  top: 391px;
  left: 647px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.editarperfil-text04 {
  top: 391px;
  left: 406px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.editarperfil-text05 {
  top: 440px;
  left: 406px;
  color: rgba(1, 73, 4, 1);
  width: 131px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.editarperfil-textnuevo {
  top: 490px;
  left: 406px;
  color: rgba(1, 73, 4, 1);
  width: 131px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.editarperfil-rectangle29 {
  top: 430px;
  left: 513px;
  width: 468px;
  height: 50px;
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
.editarperfil-rectanglenuevo {
  top: 485px;
  left: 513px;
  width: 468px;
  height: 50px;
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
.editarperfil-text06 {
  top: 479px;
  left: 629px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.editarperfil-rectangle281 {
  top: 579px;
  left: 464px;
  width: 266px;
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
.editarperfil-rectangle30 {
  top: 579px;
  left: 774px;
  width: 266px;
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
.editarperfil-text07 {
  top: 589px;
  left: 489px;
  color: rgba(1, 73, 4, 1);
  width: 254px;
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
.editarperfil-text08 {
  top: 588px;
  left: 822px;
  color: rgba(1, 73, 4, 1);
  width: 254px;
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
.editarperfil-text09 {
  top: 305px;
  left: 770px;
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
