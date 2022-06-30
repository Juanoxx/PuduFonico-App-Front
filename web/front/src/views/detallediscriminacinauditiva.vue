<template>
  <div class="detallediscriminacinauditiva-container">
    <div class="detallediscriminacinauditiva-detallediscriminacinauditiva">
      <img
        src="/playground_assets/69cf3185-2867-455a-bc7f-159d803bb86b-8dds.svg"
        alt="Rectangle28124586"
        class="detallediscriminacinauditiva-rectangle28"
      />
      <img
        src="/playground_assets/1d333787-fa9d-4582-b71e-413e9227251d-2bkk-200h.png"
        alt="logoProyecto2124587"
        class="detallediscriminacinauditiva-logo-proyecto2"
        v-on:click="inicio"
      />
      <img
        src="/playground_assets/c16dfbc6-da8c-499b-9bbf-4fe204174226-g1q7-200h.png"
        alt="pudufoni1124588"
        class="detallediscriminacinauditiva-pudufoni1"
      />
      <img
        src="/playground_assets/f60c55bd-a3a9-4b90-a879-4d0cc8e72f40-e9kg-200h.png"
        alt="imagen20220421172719085previewrev11124589"
        class="detallediscriminacinauditiva-imagen20220421172719085previewrev11"
        v-on:click="cuenta"
      />
      <span class="detallediscriminacinauditiva-text">Tu cuenta</span>
      <span class="detallediscriminacinauditiva-text01">Crear Sala</span>
      <span class="detallediscriminacinauditiva-text02">Contacto</span>
      <img
        src="/playground_assets/a32a5136-8bd9-4345-a60e-1989d8656d0f-pdop-200w.png"
        alt="imagen20220421185711919previewrev21124593"
        class="detallediscriminacinauditiva-imagen20220421185711919previewrev21"
        v-on:click="crearCVP"
      />
      <img
        src="/playground_assets/288c37d5-3494-42c9-8018-e93d1dceaff5-gcvw-200h.png"
        alt="imagen20220421190215610previewrev11124594"
        class="detallediscriminacinauditiva-imagen20220421190215610previewrev11"
        v-on:click="contacto"
      />
      <span class="detallediscriminacinauditiva-text03">
        Habilidad:
      </span>
      <span class="detallediscriminacinauditiva-text04">
        Juegos habilitados
        <span v-html="raw8nm7"></span>
      </span>
      <span class="detallediscriminacinauditiva-text05">
        Descripción Juego: {{game}}
      </span>
      <img
        src="/playground_assets/296e53aa-51a6-406d-8ecd-67510b58e6e1-nob.svg"
        alt="Rectangle44124598"
        class="detallediscriminacinauditiva-rectangle44"
      />
      <img
        src="/playground_assets/60c6266c-c8f8-4236-b633-d205d122290a-l8o.svg"
        alt="Rectangle62124599"
        class="detallediscriminacinauditiva-rectangle62"
      />
      <div class="detallediscriminacinauditiva-rectangle61"> 
        <span class="detallediscriminacinauditiva-text06">/{{this.$route.params.fonema}}/</span>
      </div>
      <span class="detallediscriminacinauditiva-text07" v-on:click="preview(1)">Juego 1</span>
      <span class="detallediscriminacinauditiva-text31" v-on:click="preview(5)">Juego 5</span>
      <span class="detallediscriminacinauditiva-text34" v-on:click="preview(4)">Juego 4</span>
      <span class="detallediscriminacinauditiva-text37" v-on:click="preview(3)">Juego 3</span>
      <span class="detallediscriminacinauditiva-text40" v-on:click="preview(2)">Juego 2</span>
      
      /**primero */
      <img v-if="games[0].sel"
        alt="Ellipse2124638"
        src="/playground_assets/74b837df-ab10-4a03-b2f1-c07d1a400d8b-wo15.svg"
        class="detallediscriminacinauditiva-svg"
        v-on:click="seleccion(0)"
      />
      <img v-else
        alt="Ellipse2124638"
        src="/playground_assets/90e2b3f9-1073-4e30-b2cd-e2d217d0adb3-0ptb.svg"
        class="detallediscriminacinauditiva-svg"
        v-on:click="seleccion(0)"
      />
      /**tercero */
      <img v-if="games[2].sel"
        alt="Ellipse2124638"
        src="/playground_assets/74b837df-ab10-4a03-b2f1-c07d1a400d8b-wo15.svg"
        class="detallediscriminacinauditiva-svg01"
        v-on:click="seleccion(2)"
      />
      <img v-else
        alt="Ellipse2124638"
        src="/playground_assets/90e2b3f9-1073-4e30-b2cd-e2d217d0adb3-0ptb.svg"
        class="detallediscriminacinauditiva-svg01"
        v-on:click="seleccion(2)"
      />
      /**segundo */
      <img v-if="games[1].sel"
        alt="Ellipse2124638"
        src="/playground_assets/74b837df-ab10-4a03-b2f1-c07d1a400d8b-wo15.svg"
        class="detallediscriminacinauditiva-svg02"
        v-on:click="seleccion(1)"
      />
      <img v-else
        alt="Ellipse2124638"
        src="/playground_assets/90e2b3f9-1073-4e30-b2cd-e2d217d0adb3-0ptb.svg"
        class="detallediscriminacinauditiva-svg02"
        v-on:click="seleccion(1)"
      />
      /**cuarto */
      <img v-if="games[3].sel"
        alt="Ellipse2124638"
        src="/playground_assets/74b837df-ab10-4a03-b2f1-c07d1a400d8b-wo15.svg"
        class="detallediscriminacinauditiva-svg03"
        v-on:click="seleccion(3)"
      />
      <img v-else
        alt="Ellipse2124638"
        src="/playground_assets/90e2b3f9-1073-4e30-b2cd-e2d217d0adb3-0ptb.svg"
        class="detallediscriminacinauditiva-svg03"
        v-on:click="seleccion(3)"
      />
      /**quinto */
      <img v-if="games[4].sel"
        alt="Ellipse2124638"
        src="/playground_assets/74b837df-ab10-4a03-b2f1-c07d1a400d8b-wo15.svg"
        class="detallediscriminacinauditiva-svg05"
        v-on:click="seleccion(4)"
      />
      <img v-else
        alt="Ellipse2124638"
        src="/playground_assets/90e2b3f9-1073-4e30-b2cd-e2d217d0adb3-0ptb.svg"
        class="detallediscriminacinauditiva-svg05"
        v-on:click="seleccion(4)"
      />
      <div v-if="game==1">
        <img
          src="/playground_assets/1.png"
          alt="imagen20220505022046212previewrev11124674"
          class="detallediscriminacinauditiva-imagen20220505022046212previewrev11"
        />
      </div>
      <div v-if="game==2" >
        <img
          src="/playground_assets/2.png"
          alt="imagen20220505022046212previewrev11124674"
          class="detallediscriminacinauditiva-imagen20220505022046212previewrev11"
        />
      </div>
      <div v-if="game==3">
        <img
          src="/playground_assets/3.png"
          alt="imagen20220505022046212previewrev11124674"
          class="detallediscriminacinauditiva-imagen20220505022046212previewrev11"
        />
      </div>
      <div v-if="game==4">
        <img
          src="/playground_assets/4.png"
          alt="imagen20220505022046212previewrev11124674"
          class="detallediscriminacinauditiva-imagen20220505022046212previewrev11"
        />
      </div>
      <div v-if="game==5">
        <img
          src="/playground_assets/5.png"
          alt="imagen20220505022046212previewrev11124674"
          class="detallediscriminacinauditiva-imagen20220505022046212previewrev11"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detallediscriminacinauditiva',

  data() {
    return {
      raw8nm7: ' ',
      game:'',
      games:[{id:'',sel:false},{id:'',sel:false},{id:'',sel:false},{id:'',sel:false},{id:'',sel:false}]
    }
  },

  methods:{
    async getGames(){
      let response = await axios.get('http://localhost:5000/api/cvp/'+this.$route.params.id+'/getActs?skill='+this.$route.params.fonema);
      let temp = response.data;
      console.log(temp)
      for(var i=0;i<temp.length;i++){
        console.log(i,this.games,((temp[i].id-4)%5),temp[i].id)
        this.games[((temp[i].id-4)%5)].sel=temp[i].selected
        this.games[((temp[i].id-4)%5)].id=temp[i].id
      }
      console.log(this.games)
    },
    preview(img){
      this.game=img
    },
    async seleccion(indice){
      if(this.games[indice].sel){
        console.log('http://localhost:5000/api/act_sel/sp/delete?cvp_id='+this.$route.params.id+'&act_id='+this.games[indice].id)
        let response = await axios.delete('http://localhost:5000/api/act_sel/sp/delete?cvp_id='+this.$route.params.id+'&act_id='+this.games[indice].id);
        this.games[indice].sel=false
        console.log({cvp_id:this.$route.params.id,act_id:this.games[indice].id})
      }
      else{
        console.log(indice,this.games,'mira aqui primero')
        console.log({cvp_id:this.$route.params.id,act_id:this.games[indice].id,level:this.$route.params.nivel},'mira aqui')
        let response = await axios.post('http://localhost:5000/api/act_sel/',{cvp_id:this.$route.params.id,act_id:this.games[indice].id,level:this.$route.params.nivel});
        this.games[indice].sel=true
      }
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
    inicio() {
      this.$router.push("/inicio")
    },
  },
  created: async function(){
    this.getGames()
  }
}
</script>

<style scoped>
.detallediscriminacinauditiva-container {
  min-height: 100vh;
}
.detallediscriminacinauditiva-detallediscriminacinauditiva {
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
.detallediscriminacinauditiva-rectangle28 {
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
.detallediscriminacinauditiva-logo-proyecto2 {
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
.detallediscriminacinauditiva-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.detallediscriminacinauditiva-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.detallediscriminacinauditiva-text {
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
.detallediscriminacinauditiva-text01 {
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
.detallediscriminacinauditiva-text02 {
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
.detallediscriminacinauditiva-imagen20220421185711919previewrev21 {
  top: 3px;
  left: 1325px;
  width: 60px;
  height: 62px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.detallediscriminacinauditiva-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.detallediscriminacinauditiva-text03 {
  top: 253px;
  left: 39px;
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
.detallediscriminacinauditiva-text04 {
  top: 331px;
  left: 46px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 28px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text05 {
  top: 162px;
  left: 1110px;
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
.detallediscriminacinauditiva-rectangle44 {
  top: 379px;
  left: 39px;
  width: 500px;
  height: 180px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.detallediscriminacinauditiva-rectangle62 {
  top: 227px;
  left: 1050px;
  width: 450px;
  height: 392px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(124, 209, 184, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(230, 255, 247, 1);
}
.detallediscriminacinauditiva-rectangle61 {
  top: 238px;
  left: 200px;
  width: 65px;
  height: 65px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(169, 209, 255, 1);
}
.detallediscriminacinauditiva-text06 {
  top: 250px;
  left: 437px;
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
  top: 30%;
  left: 30%;
}
.detallediscriminacinauditiva-text07 {
  top: 424px;
  left: 71px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text08 {
  top: 590px;
  left: 71px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text09 {
  top: 507px;
  left: 76px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text10 {
  top: 426px;
  left: 921px;
  color: rgba(1, 73, 4, 1);
  width: 68px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text11 {
  top: 592px;
  left: 921px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text12 {
  top: 509px;
  left: 926px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text13 {
  top: 426px;
  left: 842px;
  color: rgba(1, 73, 4, 1);
  width: 63px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text14 {
  top: 592px;
  left: 842px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text15 {
  top: 509px;
  left: 847px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text16 {
  top: 426px;
  left: 763px;
  color: rgba(1, 73, 4, 1);
  width: 63px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text17 {
  top: 592px;
  left: 763px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text18 {
  top: 509px;
  left: 768px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text19 {
  top: 426px;
  left: 684px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text20 {
  top: 592px;
  left: 684px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text21 {
  top: 509px;
  left: 689px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text22 {
  top: 426px;
  left: 614px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text23 {
  top: 592px;
  left: 614px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text24 {
  top: 509px;
  left: 619px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text25 {
  top: 426px;
  left: 535px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text26 {
  top: 592px;
  left: 535px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text27 {
  top: 509px;
  left: 540px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text28 {
  top: 426px;
  left: 456px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text29 {
  top: 592px;
  left: 456px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text30 {
  top: 509px;
  left: 461px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text31 {
  top: 426px;
  left: 377px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text32 {
  top: 592px;
  left: 377px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text33 {
  top: 509px;
  left: 382px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text34 {
  top: 424px;
  left: 298px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text35 {
  top: 590px;
  left: 298px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text36 {
  top: 507px;
  left: 303px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text37 {
  top: 426px;
  left: 219px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text38 {
  top: 592px;
  left: 219px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text39 {
  top: 509px;
  left: 224px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text40 {
  top: 426px;
  left: 145px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text41 {
  top: 592px;
  left: 145px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-text42 {
  top: 509px;
  left: 150px;
  color: rgba(1, 73, 4, 1);
  width: 58px;
  height: auto;
  position: absolute;
  font-size: 13px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.detallediscriminacinauditiva-svg {
  top: 390px;
  left: 90px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg01 {
  top: 390px;
  left: 244px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg02 {
  top: 390px;
  left: 167px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg03 {
  top: 390px;
  left: 321px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg04 {
  top: 390px;
  left: 475px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg05 {
  top: 390px;
  left: 398px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg06 {
  top: 390px;
  left: 552px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg07 {
  top: 390px;
  left: 706px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg08 {
  top: 390px;
  left: 629px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg09 {
  top: 390px;
  left: 783px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg10 {
  top: 390px;
  left: 937px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg11 {
  top: 390px;
  left: 860px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg12 {
  top: 473px;
  left: 90px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg13 {
  top: 473px;
  left: 244px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg14 {
  top: 473px;
  left: 167px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg15 {
  top: 473px;
  left: 321px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg16 {
  top: 473px;
  left: 475px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg17 {
  top: 473px;
  left: 398px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg18 {
  top: 473px;
  left: 552px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg19 {
  top: 473px;
  left: 706px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg20 {
  top: 473px;
  left: 629px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg21 {
  top: 473px;
  left: 783px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg22 {
  top: 473px;
  left: 937px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg23 {
  top: 473px;
  left: 860px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg24 {
  top: 556px;
  left: 90px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg25 {
  top: 556px;
  left: 244px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg26 {
  top: 556px;
  left: 167px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg27 {
  top: 556px;
  left: 321px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg28 {
  top: 556px;
  left: 475px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg29 {
  top: 556px;
  left: 398px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg30 {
  top: 556px;
  left: 552px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg31 {
  top: 556px;
  left: 706px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg32 {
  top: 556px;
  left: 629px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg33 {
  top: 556px;
  left: 783px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg34 {
  top: 556px;
  left: 937px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-svg35 {
  top: 556px;
  left: 860px;
  width: 20;
  height: 20;
  position: absolute;
}
.detallediscriminacinauditiva-imagen20220505022046212previewrev11 {
  top: 268px;
  left: 1090px;
  width: 400px;
  height: 300px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
</style>
