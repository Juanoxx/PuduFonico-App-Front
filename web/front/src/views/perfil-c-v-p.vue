<template>
  <div class="perfil-c-v-p-container">
    <div class="perfil-c-v-p-perfil-c-v-p">
      <img
        src="/playground_assets/19d69b10-5510-4f08-b44f-e9d7f67a02bd-jhwg.svg"
        alt="Rectangle2811546"
        class="perfil-c-v-p-rectangle28"
      />
      <img
        src="/playground_assets/a0c75347-6d1a-4d8c-942d-2f8ef70f1aef-wli9-200h.png"
        alt="logoProyecto211547"
        class="perfil-c-v-p-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/f28906dc-0367-4120-9bce-d81fdb74262e-kxfn-200h.png"
        alt="pudufoni111548"
        class="perfil-c-v-p-pudufoni1"
      />
      <img
        src="/playground_assets/533c6f3f-10a0-47b5-8ff3-8a9f5880ec2b-vynj-200h.png"
        alt="imagen20220421172719085previewrev1111549"
        class="perfil-c-v-p-imagen20220421172719085previewrev11"
        v-on:click="cuenta"
      />
      <span class="perfil-c-v-p-text">Tu cuenta</span>
      <span class="perfil-c-v-p-text01">Crear Sala</span>
      <span class="perfil-c-v-p-text02">Contacto</span>
      <img
        src="/playground_assets/4e1c6468-ff93-4883-b456-ef1029082e58-uhy8-200w.png"
        alt="imagen20220421185711919previewrev2111587"
        class="perfil-c-v-p-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/e91449e6-56bd-43c5-af20-4f36a440ad84-ximj-200h.png"
        alt="imagen20220421190215610previewrev1111588"
        class="perfil-c-v-p-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
      <span class="perfil-c-v-p-text03">
        Nombre y Apellido
        <span v-html="raw25eq"></span>
      </span>
      <span class="perfil-c-v-p-text04">Código</span>
      <span class="perfil-c-v-p-text05">Fonemas y juegos actuales</span>
      
      <span class="perfil-c-v-p-text09">Habilidades seleccionables</span>
      <img
        src="/playground_assets/eb9672da-84d8-40e2-823b-5fd89c8e3f0c-pepa.svg"
        alt="Rectangle3211589"
        class="perfil-c-v-p-rectangle32"
      />
      <img
        src="/playground_assets/a327a473-4be3-463f-b6a8-dbd42569cb74-p0k.svg"
        alt="Rectangle791563"
        class="perfil-c-v-p-rectangle79"
      />
      <span class="perfil-c-v-p-text10">{{cvp[0].p_fname }} {{cvp[0].p_lname1 }} {{cvp[0].p_lname2 }}</span>
      <span class="perfil-c-v-p-text11">{{cvp[0].access_code }} </span>
      

      <div class="perfil-c-v-p-FOR">
        <div v-for="t in niveles" v-bind:key="t.id">
        <span v-if="AN[t.id-1]" class="perfil-c-v-p-elegido" v-on:click="asignarNivel(t.id)">Nivel {{t.id}}</span>
        <span v-else class="perfil-c-v-p-text06" v-on:click="asignarNivel(t.id)">Nivel {{t.id}}</span>

          <div v-if="comprobar(t.id,'r')">
            <div class="perfil-c-v-p-rectangle51" v-on:click="detalle('r',t.id)"> 
              <span class="perfil-c-v-p-text12">/r/</span>
            </div>
          </div>
          <div v-if="comprobar(t.id,'d')">
            <div class="perfil-c-v-p-rectangle58" v-on:click="detalle('d',t.id)"> 
                <span class="perfil-c-v-p-text24">/d/</span> 
            </div>  
          </div>
          <div v-if="comprobar(t.id,'rr')" >
            <div class="perfil-c-v-p-cuadrado1" style="center" v-on:click="detalle('rr',t.id)">
              <span class="perfil-c-v-p-text19">/rr/</span>
            </div>
          </div>
          <div class="perfil-c-v-p-cuadrado2" style="center">
          </div>
          <div class="perfil-c-v-p-cuadrado3" style="center">
          </div>
        </div>
      </div>
      <img
        src="/playground_assets/79f71622-fff8-4397-b4b4-e3e8e4f6386e-f7ox.svg"
        alt="Rectangle59115117"
        class="perfil-c-v-p-rectangle59"
      />
      <div class="perfil-c-v-p-rectangle61" v-on:click="asignarFonema('r')">
        <span class="perfil-c-v-p-text13">/r/</span>

      </div>
      <div class="perfil-c-v-p-rectangle62" v-on:click="asignarFonema('rr')">
        <span class="perfil-c-v-p-text14">/rr/</span>
      </div>
      <div class="perfil-c-v-p-rectangle63" v-on:click="asignarFonema('d')"> 
        <span class="perfil-c-v-p-text15">/d/</span>
      </div>
      
      
      
      
      

      /**+ */
      <img
        src="/playground_assets/ebe7df7e-2e93-4115-b0a4-4e7f8b450f93-mdiu-200h.png"
        alt="imagen20220505003133506previewrev11123475"
        class="perfil-c-v-p-imagen20220505003133506previewrev11"
        v-on:click="añadirNivel()"
      />
      <span class="perfil-c-v-p-textoAdd">Nuevo nivel</span>
      
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PerfilCVP',

  data() {
    return {
      raw25eq: ' ',
      raw0vro: ' ',
      raw2np9: ' ',
      raw7ggs: ' ',
      cvp:{},
      niveles:[],
      max:0,
      temp:{},
      prueba:[{id:1},{id:2}],
      AN:[],
    }
  },

  methods: {
    inicio() {
      this.$router.push("/inicio")
    },
    detalle(fonema,id) {
      this.$router.push('/'+this.$route.params.id+'/'+fonema+'/'+id+'/detalleJuegos')
    },
    async getCVP(){
      let response = await axios.get('http://localhost:5000/api/cvp/'+this.$route.params.id);
      this.cvp = response.data;
    },
    comprobar(id,hab){
      if(this.niveles[id-1].habilidades.indexOf(hab)==-1){
        return false
      }
      return true
    },
    añadirNivel(){
      if(this.niveles.length==0){
        this.niveles.push({id:this.niveles.length+1,habilidades:[]})
        return 0
      }
      console.log(this.niveles[this.niveles.length-1], this.niveles[this.niveles.length-1].habilidades, this.niveles.length-1, 'debug')
      if(this.niveles[this.niveles.length-1].habilidades.length!=0){
        this.niveles.push({id:this.niveles.length+1,habilidades:[]})
      }
    },
    asignarNivel(indice){
      this.AN=[]
      for(var i=0; i<this.max;i++){
        this.AN.push(false)
      }
      this.AN[indice-1]=true
      console.log(this.AN)
    },
    async asignarFonema(fonema){
      let nivel=this.AN.indexOf(true)+1
      console.log({skill:fonema,level:nivel},'debug')
      if(nivel==-1){
        return false
      }
      for(var i=0;i<nivel-1;i++){
        if(this.niveles[i].habilidades.length==1){
          if(this.niveles[i].habilidades.indexOf(fonema)!=-1){
            return false
          }
           
        }
      }
      let response = await axios.post('http://localhost:5000/api/cvp/'+this.$route.params.id+'/addSkill',{skill:fonema,level:nivel});
      console.log(response.data)
      this.niveles=[]
      this.getNiveles()
    },
    async getNiveles(){

      let response = await axios.get('http://localhost:5000/api/cvp/'+this.$route.params.id+'/skills');
      this.temp = response.data;
      let c= this.temp.length
      for(var i=0; i < c;  i++){
        if (this.max<this.temp[i].max){
          this.max=this.temp[i].max
        }
      }
      for(var i=0; i<this.max;i++){
        this.niveles.push({id:i+1,habilidades:[]})
      }
      for(var i=0;i<this.temp.length;i++){
          this.niveles[this.temp[i].max-1].habilidades.push(this.temp[i].skill)
      }
      console.log(this.niveles)
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
    this.getCVP()
    this.getNiveles()

  },
}
</script>

<style scoped>
.perfil-c-v-p-container {
  min-height: 100vh;
}
.perfil-c-v-p-perfil-c-v-p {
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
.perfil-c-v-p-rectangle28 {
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
.perfil-c-v-p-logo-proyecto2 {
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
.perfil-c-v-p-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-text {
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
.perfil-c-v-p-text01 {
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
.perfil-c-v-p-text02 {
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
.perfil-c-v-p-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-text03 {
  top: 198px;
  left: 106px;
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
.perfil-c-v-p-text04 {
  top: 318px;
  left: 106px;
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
.perfil-c-v-p-text05 {
  top: 447px;
  left: 106px;
  color: rgba(1, 73, 4, 1);
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
.perfil-c-v-p-text06 {
  left: -90px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position:absolute;
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
.perfil-c-v-p-elegido {
  left: -90px;
  color: rgb(66, 100, 67);
  height: auto;
  position:absolute;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  text-shadow: 2px 2px 5px #ffff00;

}
.perfil-c-v-p-text07 {
  top: 674px;
  left: 106px;
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
.perfil-c-v-p-text08 {
  top: 198px;
  left: 1072px;
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
.perfil-c-v-p-text09 {
  top: 358px;
  left: 1118px;
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
.perfil-c-v-p-rectangle32 {
  top: 239px;
  left: 106px;
  width: 681px;
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
.perfil-c-v-p-rectangle79 {
  top: 356px;
  left: 102px;
  width: 261px;
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
.perfil-c-v-p-text10 {
  top: 251px;
  left: 333px;
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
.perfil-c-v-p-text11 {
  top: 370px;
  left: 188px;
  color: rgba(1, 73, 4, 1);
  width: 201px;
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
.perfil-c-v-p-image12 {
  top: 245px;
  left: 1247px;
  width: 40px;
  height: 40px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-rectangle60 {
  left: 106px;
  width: 924px;
  height: 60px;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.perfil-c-v-p-cuadrado2{
  left: 106px;
  width: 924px;
  height: 60px;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.perfil-c-v-p-cuadrado3{
  left: 106px;
  width: 924px;
  height: 40px;
  border-width: 1px;
}
.perfil-c-v-p-rectangle59 {
  top: 397px;
  left: 1152px;
  width: 215px;
  height: 562px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.perfil-c-v-p-FOR {
  top: 542px;
  left: 106px;
  width: 924px;
  height:30px;
  position:absolute;
}
.perfil-c-v-p-rectangle45 {

  left: 200px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle61 {
  top: 418px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle62 {
  top: 512px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle63 {
  top: 606px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle64 {
  top: 700px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-rectangle65 {
  top: 794px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle66 {
  top: 888px;
  left: 1210px;
  width: 100px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(253, 255, 175, 1);
}
.perfil-c-v-p-rectangle51 {
  left: 100px;
  width: 60px;
  height: 60px;
  position:absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle54 {
  top: 566px;
  left: 787px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle55 {
  top: 566px;
  left: 681px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(253, 255, 175, 1);
}
.perfil-c-v-p-rectangle56 {
  top: 566px;
  left: 575px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle57 {
  top: 566px;
  left: 469px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-rectangle58 {
  left: 300px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-text12 {
  top: 578px;
  left: 162px;
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-text13 {
  top: 430px;
  left: 1238px;
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-text14 {
  top: 524px;
  left: 1238px;
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-text15 {
  top: 619px;
  left: 1238px;
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-text16 {
  top: 806px;
  left: 1238px;
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
.perfil-c-v-p-text17 {
  top: 901px;
  left: 1238px;
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
.perfil-c-v-p-text18 {
  top: 713px;
  left: 1238px;
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
.perfil-c-v-p-text19 {
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-text20 {
  top: 578px;
  left: 476px;
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
.perfil-c-v-p-text21 {
  top: 578px;
  left: 687px;
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
.perfil-c-v-p-text22 {
  top: 578px;
  left: 791px;
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
.perfil-c-v-p-text23 {
  top: 578px;
  left: 580px;
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
.perfil-c-v-p-text24 {
  top: 578px;
  left: 372px;
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
  left: 30%;
  top: 30%;
}
.perfil-c-v-p-rectangle67 {
  top: 719px;
  left: 102px;
  width: 924px;
  height: 99px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.perfil-c-v-p-rectangle68 {
  top: 743px;
  left: 147px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-rectangle69 {
  top: 743px;
  left: 253px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle70 {
  top: 743px;
  left: 783px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(253, 255, 175, 1);
}
.perfil-c-v-p-rectangle71 {
  top: 743px;
  left: 677px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-rectangle72 {
  top: 743px;
  left: 571px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(253, 255, 175, 1);
}
.perfil-c-v-p-rectangle73 {
  top: 743px;
  left: 465px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-rectangle74 {
  top: 743px;
  left: 359px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-text25 {
  top: 755px;
  left: 158px;
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
.perfil-c-v-p-text26 {
  top: 755px;
  left: 259px;
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
.perfil-c-v-p-text27 {
  top: 755px;
  left: 472px;
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
.perfil-c-v-p-text28 {
  top: 755px;
  left: 683px;
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
.perfil-c-v-p-text29 {
  top: 755px;
  left: 787px;
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
.perfil-c-v-p-text30 {
  top: 755px;
  left: 576px;
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
.perfil-c-v-p-text31 {
  top: 755px;
  left: 368px;
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
.perfil-c-v-p-image15 {
  top: 400px;
  left: 1327px;
  width: 30px;
  height: 36px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-image16 {
  top: 958.7611694335938px;
  left: 1361px;
  width: 30px;
  height: 36px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-imagen20220505003133506previewrev11 {
  top: 500px;
  left: 200px;
  width: 35px;
  height: 35px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.perfil-c-v-p-textoAdd {
  top: 500px;
  left: 0px;
  color: rgba(1, 73, 4, 1);
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
.perfil-c-v-p-rectangle75 {
  top: 743px;
  left: 891px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle76 {
  top: 385px;
  left: 970px;
  width: 25px;
  height: 25px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.perfil-c-v-p-rectangle77 {
  top: 425px;
  left: 970px;
  width: 25px;
  height: 25px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(253, 255, 175, 1);
}
.perfil-c-v-p-rectangle78 {
  top: 466px;
  left: 970px;
  width: 25px;
  height: 25px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 206, 206, 1);
}
.perfil-c-v-p-cuadrado1 {
  left: 200px;
  width: 60px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
  
}
.perfil-c-v-p-text32 {
  top: 755px;
  left: 894px;
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
.perfil-c-v-p-text33 {
  top: 395px;
  left: 674px;
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
.perfil-c-v-p-text34 {
  top: 469px;
  left: 674px;
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
.perfil-c-v-p-text35 {
  top: 430px;
  left: 672px;
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

</style>
