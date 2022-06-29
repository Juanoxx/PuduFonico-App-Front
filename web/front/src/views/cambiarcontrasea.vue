<template>
  <div class="cambiarcontrasea-container">
    <div class="cambiarcontrasea-cambiarcontrasea">
      <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">Datos cambiados exitosamente {{NewPass}}</slot>
              </div>

              <button
                class="text-xs-center"
                @click="cerrarPopup"
              >OK</button>
            </div>
          </div>
        </div>
      <img
        src="/playground_assets/f1c2b10f-017f-4983-87b6-c1fc9e365c07-xcv.svg"
        alt="Rectangle2864160"
        class="cambiarcontrasea-rectangle28"
      />
      <img
        src="/playground_assets/01a980f1-ed03-43a5-be4b-a961daa01f4c-ecn6-200h.png"
        alt="logoProyecto264161"
        class="cambiarcontrasea-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/59143728-e568-4258-a40a-7c9833d7afe4-dg4p-200h.png"
        alt="pudufoni164162"
        class="cambiarcontrasea-pudufoni1"
      />
      <img
        src="/playground_assets/a997d701-fa3c-4652-be67-62098e9912f0-lt8f-200h.png"
        alt="imagen20220421172719085previewrev1164163"
        class="cambiarcontrasea-imagen20220421172719085previewrev11"
      />
      <span class="cambiarcontrasea-text">Tu cuenta</span>
      <span class="cambiarcontrasea-text1">Crear Sala</span>
      <span class="cambiarcontrasea-text2">Contacto</span>
      <img
        src="/playground_assets/09c8a949-a365-4406-b639-26910a574af0-zbr-200w.png"
        alt="imagen20220421185711919previewrev2164167"
        class="cambiarcontrasea-imagen20220421185711919previewrev21"
      />
      <img
        src="/playground_assets/51cf285e-9b26-4be4-8edb-d0627841d74b-qvr8-200h.png"
        alt="imagen20220421190215610previewrev1164168"
        class="cambiarcontrasea-imagen20220421190215610previewrev11"
      />
      <img
        src="/playground_assets/082975c6-3a26-4c6b-872e-e49e69c62ac2-xjyo-200w.png"
        alt="imagen20220421193036317164169"
        class="cambiarcontrasea-imagen202204211930363171"
      />
      <input v-model="Passwords.antigua" placeholder="" type="password" class="cambiarcontrasea-rectangle25"/>

      <span class="cambiarcontrasea-text3">Contraseña antigua</span>
      <span class="cambiarcontrasea-text4">Contraseña nueva</span>
      
      <input v-model="Passwords.nueva" placeholder="" type="password" class="cambiarcontrasea-rectangle29"/>

      <span class="cambiarcontrasea-text5">Confirmar contraseña nueva</span>
      
      <input v-model="Passwords.confirmacion" placeholder="" type="password" class="cambiarcontrasea-rectangle31"/>
      <button v-on:click="editar" class="cambiarcontrasea-rectangle30"> <span class="cambiarcontrasea-text6">Enviar cambios</span>  </button>

      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Cambiarcontrasea',
  data() {
    return {
      raww0h0: ' ',
      usuario:{},
      show:false,
      Passwords:{antigua:'',nueva:'',confirmacion:''}
      }
  },
  methods: {
    inicio() {
      this.$router.push("/")
    },
    cambiarContraseña() {
      this.$router.push("/cambiarPass")
    },
    async getusuario(){
      let response = await axios.get('http://localhost:5000/api/users/8');
      this.usuario = response.data[0];
    },
    async editar(){
      if(this.Passwords.antigua==this.usuario.password){
        if(this.Passwords.nueva!=''){
          this.usuario.password=this.Passwords.nueva
          let response = await axios.put('http://localhost:5000/api/users/8',this.usuario);
          console.log(response.data)
          this.show=true
          this.Passwords={antigua:'',nueva:'',confirmacion:''}

        }
        else{
          console.log('error2')
        }
      }
      else{
        console.log('error 1',this.usuario.password)
      }
      console.log(this.Passwords)
      
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
.cambiarcontrasea-container {
  min-height: 100vh;
}
.cambiarcontrasea-cambiarcontrasea {
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
.cambiarcontrasea-rectangle28 {
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
.cambiarcontrasea-logo-proyecto2 {
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
.cambiarcontrasea-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.cambiarcontrasea-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.cambiarcontrasea-text {
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
.cambiarcontrasea-text1 {
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
.cambiarcontrasea-text2 {
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
.cambiarcontrasea-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.cambiarcontrasea-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.cambiarcontrasea-imagen202204211930363171 {
  top: 82px;
  left: 60px;
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
.cambiarcontrasea-rectangle25 {
  top: 215px;
  left: 439px;
  width: 907px;
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
.cambiarcontrasea-text3 {
  top: 227px;
  left: 209px;
  color: rgba(1, 73, 4, 1);
  width: 230px;
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
.cambiarcontrasea-text4 {
  top: 307px;
  left: 209px;
  color: rgba(1, 73, 4, 1);
  width: 230px;
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
.cambiarcontrasea-rectangle29 {
  top: 303px;
  left: 439px;
  width: 907px;
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
.cambiarcontrasea-text5 {
  top: 401px;
  left: 209px;
  color: rgba(1, 73, 4, 1);
  width: 218px;
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
.cambiarcontrasea-rectangle31 {
  top: 397px;
  left: 439px;
  width: 907px;
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
.cambiarcontrasea-rectangle30 {
  top: 514px;
  left: 636px;
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
.cambiarcontrasea-text6 {
  top: 523px;
  left: 684px;
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
