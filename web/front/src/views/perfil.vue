<template>
  <div class="perfil-container">
    <div class="perfil-perfil">
      <img
        src="/playground_assets/5ba569b8-f611-4ec8-8594-d7096369a9eb-i9x.svg"
        alt="Rectangle286171"
        class="perfil-rectangle28"
      />
      <img
        src="/playground_assets/537a0a12-5a09-4afd-bb26-9b2352c387e9-v7xw-200h.png"
        alt="logoProyecto26172"
        class="perfil-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/f3060cc1-2c42-4b86-8259-6f7cd6ba0b98-luag-200h.png"
        alt="pudufoni16173"
        class="perfil-pudufoni1"
      />
      <img
        src="/playground_assets/4997a09d-773a-4815-b6b8-58bc7128e05d-a32x-200h.png"
        alt="imagen20220421172719085previewrev116174"
        class="perfil-imagen20220421172719085previewrev11"
      />
      <span class="perfil-text">Tu cuenta</span>
      <span class="perfil-text01">Crear Sala</span>
      <span class="perfil-text02">Contacto</span>
      <img
        src="/playground_assets/eeef37a5-d283-4faf-b068-beb63c86322c-ejv-200w.png"
        alt="imagen20220421185711919previewrev2161112"
        class="perfil-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/54330a62-4e6b-4080-a47c-6fab6910708b-3fdl-200h.png"
        alt="imagen20220421190215610previewrev1161113"
        class="perfil-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
      <img
        src="/playground_assets/2b52efd9-85e8-4f26-ace7-add35ac1da15-8c1p-300h.png"
        alt="imagen20220421193036317161114"
        class="perfil-imagen202204211930363171"
      />
      <img
        src="/playground_assets/ddee4a58-9dc7-43a2-afba-50a7d61011d3-cwve.svg"
        alt="Rectangle2561115"
        class="perfil-rectangle25"
      />
      <span class="perfil-text03">{{usuario.fname}}</span>
      <img
        src="/playground_assets/dd6299bd-a04e-4680-adfa-62634783e05b-i5so.svg"
        alt="Rectangle2961116"
        class="perfil-rectanglenuevo"
      />
      <img
        src="/playground_assets/dd6299bd-a04e-4680-adfa-62634783e05b-i5so.svg"
        alt="Rectangle2961116"
        class="perfil-rectangle29"
      />
      {{usuario}}
      <span class="perfil-text04">{{usuario.lnames}}</span>
      <span class="perfil-textnuevo">{{usuario.email}}</span>
      <span class="perfil-text05">Estadísticas generales</span>
      <button v-on:click="editar" class="perfil-rectangle281"> <span class="perfil-text06">Editar Perfil</span>  </button>
      
      <img
        src="/playground_assets/cb75f7b6-7f24-4a05-a1be-a4beadec4d2e-4h8k-500w.png"
        alt="image1263128"
        class="perfil-image12"
      />
      <img
        src="/playground_assets/4b746905-3d25-4a7b-90e8-deb73b8239e6-kwd5k-200h.png"
        alt="image1363130"
        class="perfil-image13"
      />
      <img
        src="/playground_assets/7a5f2171-744b-49f6-b0ae-3508b14c3c4a-e1r-300h.png"
        alt="image1463132"
        class="perfil-image14"
      />
      <button class="perfil-rectangle41"> <span class="perfil-text07">Pagar suscripción</span>  </button>
      
      <img
        src="/playground_assets/013bb60d-b558-4eaf-81e4-21e1d0c03978-0ymb.svg"
        alt="Rectangle4210380"
        class="perfil-rectangle42"
      />
      <span class="perfil-text08">Estado actual de suscripción.</span>
      <span class="perfil-text09">
        <span class="perfil-text10">
          Te quedan
          <span v-html="raww0h0"></span>
        </span>
        <span class="perfil-text11">5</span>
        <span class="perfil-text12">días para renovar tu suscripción.</span>
      </span>
      <span class="perfil-text13">Sin deuda Vigente</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Perfil',

  data() {
    return {
      raww0h0: ' ',
      usuario:{}
      }
  },

  methods: {
    inicio() {
      this.$router.push("/inicio")
    },
    editar() {
      this.$router.push("/editarCuenta")
    },
    async getusuario(){
      let response = await axios.get('http://localhost:5000/api/users/8');
      this.usuario = response.data[0];
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
  created: async function(){
    this.getusuario()
  }
}
</script>

<style scoped>
.perfil-container {
  min-height: 100vh;
}
.perfil-perfil {
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
.perfil-rectangle28 {
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
.perfil-logo-proyecto2 {
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
.perfil-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-text {
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
.perfil-text01 {
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
.perfil-text02 {
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
.perfil-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-imagen202204211930363171 {
  top: 120px;
  left: 114px;
  width: 200px;
  height: 277px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 100px;
}
.perfil-rectangle25 {
  top: 189px;
  left: 352px;
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
.perfil-rectanglenuevo {
  top: 365px;
  left: 352px;
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
.perfil-text03 {
  top: 207px;
  left: 468px;
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
.perfil-rectangle29 {
  top: 277px;
  left: 352px;
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
.perfil-text04 {
  top: 291px;
  left: 468px;
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
.perfil-textnuevo {
  top: 375px;
  left: 468px;
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
.perfil-text05 {
  top: 507px;
  left: 114px;
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
.perfil-rectangle281 {
  top: 421px;
  left: 106px;
  width: 215px;
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
.perfil-text06 {
  top: 431px;
  left: 150px;
  color: rgba(1, 73, 4, 1);
  width: 127px;
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
.perfil-image12 {
  top: 589px;
  left: 106px;
  width: 411px;
  height: 255px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-image13 {
  top: 686px;
  left: 589px;
  width: 421px;
  height: 158px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-image14 {
  top: 622px;
  left: 1082px;
  width: 339px;
  height: 222px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-rectangle41 {
  top: 431px;
  left: 427px;
  width: 299px;
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
.perfil-text07 {
  top: 375px;
  left: 480px;
  color: rgba(1, 73, 4, 1);
  width: 194px;
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
.perfil-rectangle42 {
  top: 167px;
  left: 953px;
  width: 484px;
  height: 324px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  background-image: linear-gradient(180deg, rgba(124, 209, 184, 1) 0%, rgba(186, 242, 226, 0.9479166865348816) 0%, rgba(233, 250, 245, 0.9831797480583191) 0%, rgba(243, 249, 252, 0.9962322115898132) 0%, rgba(166, 235, 219, 0.9975368976593018) 0%, rgba(156, 233, 215, 0.9976905584335327) 28%, rgba(120, 226, 199, 0.998308002948761) 57%, rgba(128, 228, 202, 0.9981744289398193) 75%, rgba(19, 208, 155, 1) 100%);
}
.perfil-text08 {
  top: 179px;
  left: 973px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.perfil-text09 {
  top: 350px;
  left: 962px;
  color: rgba(1, 73, 4, 1);
  width: 466px;
  height: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.perfil-text10 {
  color: rgba(1, 73, 4, 1);
  width: 466px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.perfil-text11 {
  color: rgba(255, 2, 2, 1);
  width: 466px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.perfil-text12 {
  color: rgba(1, 73, 4, 1);
  width: 466px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.perfil-text13 {
  top: 270px;
  left: 1091px;
  color: rgba(255, 2, 2, 1);
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
</style>
