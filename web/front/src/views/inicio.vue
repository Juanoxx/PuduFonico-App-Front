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

      <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>



  /**----------------------------------- */





      
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
      kids: {id:"cvp-011"},
      kids: [{id:"01",nombre:"Benjamin"},{},{},{}],
      loading: false,
    selection: 1,
    }
  },
  methods: {
    inicio() {
      this.$router.push("/")
    },
    crearCVP(){
      this.$router.push("/creacionCVP")
    },
    cvp() {
      this.$router.push("/perfilcvp/1")
    },
    cuenta(){
      this.$router.push("/perfil")
    },
    contacto(){
      this.$router.push("/contacto")
    },
  },
}
</script>

<style >
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
