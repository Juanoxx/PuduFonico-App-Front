<template>
  <div class="inicio-container">
    <div class="inicio-inicio">
      <img
        src="/playground_assets/8b213653-5104-4845-ac92-b65df01aa14f-ro4l.svg"
        alt="Rectangle285516"
        class="inicio-rectangle28"
      />
      <img
        src="/playground_assets/34c5a135-bab0-4d95-ab28-662a7daee1b1-u54u-200h.png"
        alt="logoProyecto2543"
        class="inicio-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/f2b1cb06-9e57-4f4a-af10-9b9c94885482-flg4r-200h.png"
        alt="pudufoni15512"
        class="inicio-pudufoni1"
      />
      <img
        src="/playground_assets/3c8fa645-ec76-4c10-aa14-eab8f82018dd-w4s8-200h.png"
        alt="imagen20220421172719085previewrev115518"
        class="inicio-imagen20220421172719085previewrev11"
        v-on:click="cuenta"
      />
      <span class="inicio-text">Tu cuenta</span>
      <span class="inicio-text01">Crear Sala</span>
      <span class="inicio-text02">Contacto</span>
      /**--------------------------- */

      



  /**----------------------------------- */





      <img src alt="Rectangle295821" class="inicio-rectangle29" />
      
      <span class="inicio-textForID">{{ kids.id }}</span>
      <div class="test">
      <div v-for="kid in kids" v-bind:key="kid.id" >
        <v-row>
          <span  v-on:click="cvp(kid.id)">CVP-{{ kid.id }}</span>
        </v-row>
      </div>
      </div>

      <div class="test2">
      <div v-for="kid in kids" v-bind:key="kid.id" >
        <v-row>
          <span  >{{ kid.p_fname }}</span>
        </v-row>
      </div>
      </div>

      <div class="test3">
      <div v-for="kid in kids" v-bind:key="kid.id" >
        <v-row>
          <span  >{{ kid.p_lname1 }}</span>
        </v-row>
      </div>
      </div>

      <div class="test4">
      <div v-for="kid in kids" v-bind:key="kid.id" >
        <v-row>
          <span  >{{ kid.p_lname2 }}</span>
        </v-row>
      </div>
      </div>
      <span class="inicio-text18">Consultas virtuales personalizadas (CVP)</span>
      
      
      <span class="inicio-text21">
        Nombres
        <span v-html="rawtk5n"></span>
      </span>
      <span class="inicio-text21-2">
        Apellido Paterno
        <span v-html="rawtk5n"></span>
      </span>
      <span class="inicio-text21-3">
        Apellido Materno
        <span v-html="rawtk5n"></span>
      </span>
      
      /**crear sala */
      <img
        src="/playground_assets/c08e773f-8e07-42ad-bd0f-ee2c1eb6678a-baagq-200w.png"
        alt="imagen20220421185711919previewrev216066"
        class="inicio-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/c1e1267c-6730-4997-8c4e-7c76b6971daa-c98r-200h.png"
        alt="imagen20220421190215610previewrev116068"
        class="inicio-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Inicio',

  data() {
    return {
      raw1vzm: ' ',
      raw5x46: ' ',
      raws7fg: ' ',
      rawluq7: ' ',
      raw8lay: ' ',
      raw7q5q: ' ',
      rawj69u: ' ',
      rawtk5n: ' ',
      rawpgcu: ' ',
      raw5dmj: ' ',
      raws67h: ' ',
      kids: {},
      loading: false,
      selection: 1,
      c:0,
    }
  },
  methods: {
    inicio() {
      this.$router.push("/")
    },
    crearCVP(){
      this.$router.push("/creacionCVP")
    },
    cvp(id) {
      this.$router.push("/perfilcvp/"+id)
    },
    cuenta(){
      this.$router.push("/perfil")
    },
    contacto(){
      this.$router.push("/contacto")
    },
    async getCVP(){
      let response = await axios.get('http://localhost:5000/api/cvp/');
      this.kids = response.data;
    },  
  },  
  created: async function(){
    this.getCVP()
  },
}
</script>

<style scoped>
.test{
    top: 221px;
    left: 77px;
    position: absolute;
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
.test2{
    top: 221px;
    left: 314px;
    position: absolute;
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
.test3{
    top: 221px;
    left: 600px;
    position: absolute;
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

.test4{
    top: 221px;
    left: 900px;
    position: absolute;
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
.inicio-container {
  min-height: 100vh;
}
.inicio-inicio {
  width: 1552px;
  height: 992px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1512px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 41px;
  background-color: rgba(216, 248, 239, 1);
}
.inicio-rectangle28 {
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
.inicio-logo-proyecto2 {
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
.inicio-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-text {
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
.inicio-text01 {
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
.inicio-text02 {
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
.inicio-rectangle29 {
  top: 109px;
  left: 1986px;
  width: 1381px;
  height: 865px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  background-image: linear-gradient(180deg, rgba(199, 253, 243, 1) 0%, rgba(199, 253, 243, 0.02604166604578495) 100%, rgba(199, 253, 243, 0) 100%);
}
.inicio-text03 {
  top: 563px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text03-2 {
  top: 563px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text03-3 {
  top: 563px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text04 {
  top: 449px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text04-2 {
  top: 449px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text04-3 {
  top: 449px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text05 {
  top: 487px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text05-2 {
  top: 487px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text05-3 {
  top: 487px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text06 {
  top: 525px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text06-2 {
  top: 525px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text06-3 {
  top: 525px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text07 {
  top: 411px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text07-2 {
  top: 411px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text07-3 {
  top: 411px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text08 {
  top: 373px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text08-2 {
  top: 373px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text08-3 {
  top: 373px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text09 {
  top: 335px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text09-3 {
  top: 335px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text09-2 {
  top: 335px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text10 {
  top: 563px;
  left: 77px;
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
.inicio-textForID {
  left: 77px;
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
.inicio-text11 {
  top: 525px;
  left: 77px;
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
.inicio-text12 {
  top: 449px;
  left: 78px;
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
.inicio-text13 {
  top: 411px;
  left: 77px;
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
.inicio-text14 {
  top: 373px;
  left: 77px;
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
.inicio-text15 {
  top: 297px;
  left: 77px;
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
.inicio-text16 {
  top: 335px;
  left: 77px;
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
.inicio-text17 {
  top: 259px;
  left: 77px;
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
.inicio-text18 {
  top: 131px;
  left: 77px;
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
.inicio-text19 {
  top: 221px;
  left: 77px;
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
.inicio-text20 {
  top: 487px;
  left: 77px;
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
.inicio-text21 {
  top: 183px;
  left: 314px;
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
.inicio-text21-2 {
  top: 183px;
  left: 600px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.inicio-text21-3 {
  top: 183px;
  left: 900px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.inicio-text21-4 {
  top: 183px;
  left: 1150px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: normal;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.inicio-text22 {
  top: 221px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text22-2 {
  top: 221px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text23 {
  top: 259px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text23-2 {
  top: 259px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text23-3 {
  top: 259px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text22-3 {
  top: 221px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text24 {
  top: 297px;
  left: 314px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text24-2 {
  top: 297px;
  left: 600px;
  color: rgba(0, 0, 0, 1);
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
.inicio-text24-3 {
  top: 297px;
  left: 900px;
  color: rgba(0, 0, 0, 1);
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
.inicio-image1 {
  top: 228px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image6 {
  top: 228px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image8 {
  top: 448px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image2 {
  top: 259px;
  left: 1266px;
  width: 21px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image11 {
  top: 565px;
  left: 1266px;
  width: 21px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image10 {
  top: 527px;
  left: 1265px;
  width: 21px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image3 {
  top: 293px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image7 {
  top: 407px;
  left: 1265px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image4 {
  top: 335px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image5 {
  top: 369px;
  left: 1266px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-image9 {
  top: 486px;
  left: 1265px;
  width: 22px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.inicio-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
</style>
