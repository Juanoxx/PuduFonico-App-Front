<template>
  <div class="contacto-v2-container">
    <div class="contacto-v2-contacto-v2">
      <img
        src="/playground_assets/a100627e-c49c-45ec-825e-0889e96ab94e-h1y7.svg"
        alt="Rectangle281023"
        class="contacto-v2-rectangle28"
      />
      <img
        src="/playground_assets/0c4309da-851f-48ab-8d81-b01cd065148f-ooae-200h.png"
        alt="logoProyecto21024"
        class="contacto-v2-logo-proyecto2"
      />
      <img
        src="/playground_assets/8fb9847c-cc6e-4fda-ac2c-ec85f2407485-8ypr-200h.png"
        alt="pudufoni11025"
        class="contacto-v2-pudufoni1"
      />
      <img
        src="/playground_assets/b15682ae-d9dc-4630-bab0-1a79b2dec6da-txcp-200h.png"
        alt="imagen20220421172719085previewrev111026"
        class="contacto-v2-imagen20220421172719085previewrev11"
      />
      <span class="contacto-v2-text">Tu cuenta</span>
      <span class="contacto-v2-text1">Crear Sala</span>
      <span class="contacto-v2-text2">Contacto</span>
      <img
        src="/playground_assets/c99c6829-ec6b-458e-8bd1-9b4d4be4f84c-qyxu-200h.png"
        alt="imagen20220421185711919previewrev2110210"
        class="contacto-v2-imagen20220421185711919previewrev21"
      />
      <img
        src="/playground_assets/8cc537e2-9f42-400c-9534-753f7bf3a244-24z4-200h.png"
        alt="imagen20220421190215610previewrev1110211"
        class="contacto-v2-imagen20220421190215610previewrev11"
      />
      <span class="contacto-v2-text3">¿En qué podemos ayudarte?</span>
      <button v-on:click="soporte" class="contacto-v2-rectangle25"> <span class="contacto-v2-text4">Soporte técnico</span>  </button>
      <button v-on:click="recomendaciones" class="contacto-v2-rectangle29"> <span class="contacto-v2-text5">Recomendaciones</span>  </button>

      
      
      
      <img
        src="/playground_assets/a3a16cc9-cf1e-4daa-97d5-08d5042facf6-n3j-400h.png"
        alt="imagen20220503210118146previewrev1110352"
        class="contacto-v2-imagen20220503210118146previewrev11"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoV2',
  methods: {
    soporte() {
      this.$router.push("/soporteTecnico")
    },
    recomendaciones() {
      this.$router.push("/recomendaciones")
    },
  },
}
</script>

<style scoped>
.contacto-v2-container {
  min-height: 100vh;
}
.contacto-v2-contacto-v2 {
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
.contacto-v2-rectangle28 {
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
.contacto-v2-logo-proyecto2 {
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
.contacto-v2-pudufoni1 {
  top: 57px;
  left: 695px;
  width: 122px;
  height: 22px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.contacto-v2-imagen20220421172719085previewrev11 {
  top: 5px;
  left: 1428px;
  width: 54px;
  height: 52px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.contacto-v2-text {
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
.contacto-v2-text1 {
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
.contacto-v2-text2 {
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
.contacto-v2-imagen20220421185711919previewrev21 {
  top: 0px;
  left: 1325px;
  width: 75px;
  height: 65px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.contacto-v2-imagen20220421190215610previewrev11 {
  top: -4px;
  left: 1225px;
  width: 70px;
  height: 70px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.contacto-v2-text3 {
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
.contacto-v2-rectangle25 {
  top: 289px;
  left: 487px;
  width: 713px;
  height: 50px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 66px;
  background-color: rgba(196, 255, 237, 1);
}
.contacto-v2-rectangle29 {
  top: 428px;
  left: 487px;
  width: 713px;
  height: 50px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 66px;
  background-color: rgba(192, 255, 236, 1);
}
.contacto-v2-text4 {
  top: 301px;
  left: 746px;
  color: rgba(1, 73, 4, 1);
  width: 195px;
  height: auto;
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
.contacto-v2-text5 {
  top: 440px;
  left: 730px;
  color: rgba(1, 73, 4, 1);
  width: 227px;
  height: auto;
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
.contacto-v2-imagen20220503210118146previewrev11 {
  top: 230px;
  left: 90px;
  width: 360px;
  height: 360px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
</style>
