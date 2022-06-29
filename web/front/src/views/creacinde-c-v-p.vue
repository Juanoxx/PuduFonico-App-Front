<template>
  <div class="creacinde-c-v-p-container">
    <div class="creacinde-c-v-p-creacinde-c-v-p">
      <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">{{mensaje}}</slot>
              </div>
              <div v-if="fail">
                <button
                  class="text-xs-center"
                  @click="cerrarPopup"
                >OK</button>
              </div>
              <div v-else>
                <button
                  class="text-xs-center"
                  @click="cerrarPopupFail"
                >OK</button>
              </div>
            </div>
          </div>
        </div>
      <img
        src="/playground_assets/eb83ba95-28ce-4717-b975-4edbc01b017d-6ms9.svg"
        alt="Rectangle2865185"
        class="creacinde-c-v-p-rectangle28"
      />
      <img
        src="/playground_assets/45156348-e093-4aff-9a56-0440f8bafad5-919-200h.png"
        alt="logoProyecto265186"
        class="creacinde-c-v-p-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/e7b4046c-fcff-4458-8d32-d9b4c2be0f1a-398o-200h.png"
        alt="pudufoni165187"
        class="creacinde-c-v-p-pudufoni1"
      />
      <img
        src="/playground_assets/ee088c3f-f14f-4d5a-834e-17a9b67ae32a-dru-200h.png"
        alt="imagen20220421172719085previewrev1165188"
        class="creacinde-c-v-p-imagen20220421172719085previewrev11"
      />
      <span class="creacinde-c-v-p-text">Tu cuenta</span>
      <span class="creacinde-c-v-p-text01">Crear Sala</span>
      <span class="creacinde-c-v-p-text02">Contacto</span>
      <img
        src="/playground_assets/4f928aed-fbc8-49c4-808a-4edc10440413-c5ph-200h.png"
        alt="imagen20220421185711919previewrev2165192"
        class="creacinde-c-v-p-imagen20220421185711919previewrev21"
      />
      <img
        src="/playground_assets/1a16acc0-b147-44f8-8156-f8e6155a017b-hgpf-200h.png"
        alt="imagen20220421190215610previewrev1165193"
        class="creacinde-c-v-p-imagen20220421190215610previewrev11"
      />
      <span class="creacinde-c-v-p-text03">
        Crear una nueva consulta virtual personalizada(CVP)
      </span>
      <input v-model="CVP.p_fname" placeholder=""  class="creacinde-c-v-p-rectangle32" />

      <span class="creacinde-c-v-p-text04">Nombres</span>
      <span class="creacinde-c-v-p-text05">Apellido paterno</span>
      
      <input v-model="CVP.p_lname1" placeholder=""  class="creacinde-c-v-p-rectangle33" />
      <span class="creacinde-c-v-p-text06">Apellido materno</span>
      
      <input v-model="CVP.p_lname2" placeholder=""  class="creacinde-c-v-p-rectangle34" />

      <button v-on:click="crear" class="creacinde-c-v-p-rectangle30"> <span class="creacinde-c-v-p-text08">Crear</span>  </button>

      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreacindeCVP',
  data() {
    return {
      CVP:{p_fname:'',p_lname1:'',p_lname2:'',user_id:1},
      counter:1,
      show:false,
      mensaje:'',
      fail:false
    }
  },
  methods: {
    inicio() {
      this.$router.push("/")
    },
    async crear(){
      if(this.CVP.p_name!='' && this.CVP.p_lname1!='' && this.CVP.p_lname2!=''){
        try
        {
            let response= await axios.post('http://localhost:5000/api/cvp/',this.CVP)
            console.log('response', response.data);
            this.mensaje='CVP creada exitosamente'
            this.show=true
            this.fail=false
        }
        catch(error){
          console.log(error)
          this.mensaje='Ocurrio un error'
          this.show=true
          this.fail=true
        }
        
      }
    },
    cerrarPopupFail(){
       this.show=false
       this.CVP={p_name:'',p_lname1:'',p_lname2:'',user_id:1}
    },
    cerrarPopup(){
       this.$router.push("/inicio")
    }
  },
}
</script>

<style scoped>
.creacinde-c-v-p-container {
  min-height: 100vh;
}
.creacinde-c-v-p-creacinde-c-v-p {
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
.creacinde-c-v-p-rectangle28 {
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
.creacinde-c-v-p-logo-proyecto2 {
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
.creacinde-c-v-p-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.creacinde-c-v-p-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.creacinde-c-v-p-text {
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
.creacinde-c-v-p-text01 {
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
.creacinde-c-v-p-text02 {
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
.creacinde-c-v-p-imagen20220421185711919previewrev21 {
  top: 0px;
  left: 1325px;
  width: 75px;
  height: 65px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.creacinde-c-v-p-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.creacinde-c-v-p-text03 {
  top: 173px;
  left: 80px;
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
.creacinde-c-v-p-rectangle32 {
  top: 253px;
  left: 310px;
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
.creacinde-c-v-p-text04 {
  top: 265px;
  left: 80px;
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
.creacinde-c-v-p-text05 {
  top: 345px;
  left: 80px;
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
.creacinde-c-v-p-rectangle33 {
  top: 341px;
  left: 310px;
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
.creacinde-c-v-p-text06 {
  top: 439px;
  left: 80px;
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
.creacinde-c-v-p-text07 {
  top: 542px;
  left: 67px;
  color: rgba(1, 73, 4, 1);
  width: 237px;
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
.creacinde-c-v-p-rectangle34 {
  top: 435px;
  left: 310px;
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
.creacinde-c-v-p-rectangle30 {
  top: 525px;
  left: 593px;
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
.creacinde-c-v-p-text08 {
  top: 861px;
  left: 707px;
  color: rgba(1, 73, 4, 1);
  width: 73px;
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
.creacinde-c-v-p-rectangle35 {
  top: 587px;
  left: 265px;
  width: 921px;
  height: 256px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(62, 142, 126, 1);
  border-style: solid;
  border-width: 1px;
  background-image: linear-gradient(180deg, rgba(202, 255, 239, 1) 0%, rgba(202, 255, 239, 0.828125) 0%, rgba(202, 255, 239, 0.8109534978866577) 87%, rgba(202, 255, 239, 0) 100%);
}
.creacinde-c-v-p-svg {
  top: 615px;
  left: 327px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg01 {
  top: 622px;
  left: 632px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg02 {
  top: 655px;
  left: 327px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg03 {
  top: 661px;
  left: 632px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg04 {
  top: 695px;
  left: 327px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg05 {
  top: 701px;
  left: 632px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg06 {
  top: 741px;
  left: 632px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg07 {
  top: 781px;
  left: 632px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg08 {
  top: 775px;
  left: 327px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-svg09 {
  top: 735px;
  left: 327px;
  width: 20;
  height: 20;
  position: absolute;
}
.creacinde-c-v-p-text09 {
  top: 608px;
  left: 364px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text10 {
  top: 615px;
  left: 669px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text11 {
  top: 654px;
  left: 669px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text12 {
  top: 693px;
  left: 669px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text13 {
  top: 733px;
  left: 669px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text14 {
  top: 772px;
  left: 670px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text15 {
  top: 648px;
  left: 364px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text16 {
  top: 687px;
  left: 364px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text17 {
  top: 727px;
  left: 364px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
.creacinde-c-v-p-text18 {
  top: 767px;
  left: 364px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
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
