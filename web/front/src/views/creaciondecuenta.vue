<template>
  <div class="creacindecuenta-container">
    <div class="creacindecuenta-creacindecuenta">
      <img
        src="/playground_assets/e60bdd26-70fa-437b-b1f4-d635b4f53116-1zov-300h.png"
        alt="logoProyecto2117290"
        class="creacindecuenta-logo-proyecto2"
      />
      <span class="creacindecuenta-text">Crear cuenta</span>
      
      <input v-model="correo" placeholder="Correo"  class="creacindecuenta-rectangle25" />
      <input v-model="contraseña" placeholder="Contraseña" type="password" class="creacindecuenta-rectangle26" />
      
      <img src alt="Rectangle28117295" class="creacindecuenta-rectangle28" />
      <span class="creacindecuenta-text1">Correo</span>
      <span class="creacindecuenta-text2">Contraseña</span>
      <input v-model="conf" placeholder="Confirmar contraseña" type="password" class="creacindecuenta-rectangle31" />
      
      <span class="creacindecuenta-text3">Confirma contraseña</span>
      <img
        src="/playground_assets/fa9be79f-2d54-4217-9ea0-1fad83c55d08-xu5.svg"
        alt="Rectangle32117308"
        class="creacindecuenta-rectangle32"
      />
      <span class="creacindecuenta-text4">
        Certificado que acredite condición de fonoaudiólogo
      </span>
      <input v-model="nombres" placeholder="Nombres"  class="creacindecuenta-rectangle29" />
      
      <input v-model="apellidos" placeholder="Apellidos"  class="creacindecuenta-rectangle30" />
      <span class="creacindecuenta-text5">Nombres</span>
      <span class="creacindecuenta-text6">Apellidos</span>
      <div v-if="!image" class="creacindecuenta-rectangle32">
        <h2>Certificado de Fonoaudiología</h2>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else class="creacindecuenta-rectangle32">
        <v-row>{{image}}</v-row>
        <v-row><button @click="removeImage">Eliminar archivo</button></v-row>
      </div>
      <button v-on:click="registro" class="creacindecuenta-rectangle291"> <span class="creacindecuenta-text7">Crear cuenta</span>  </button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Creacindecuenta',
  data() {
    return {
      correo: '',
      contraseña:'',
      conf:'',
      nombres:'',
      apellidos:'',
      image:'',
    }
  },
  methods: {
    Ingreso() {
      this.$router.push("/inicio")
    },
    registro() {
      this.$router.push("/")
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.image=files[0].name
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  },
}
</script>

<style scoped>
.creacindecuenta-container {
  min-height: 100vh;
}
.creacindecuenta-creacindecuenta {
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
.creacindecuenta-logo-proyecto2 {
  top: 23px;
  left: 656px;
  width: 200px;
  height: 201px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  border-radius: 77px;
}
.creacindecuenta-text {
  top: 254px;
  left: 574px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 64px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-rectangle25 {
  top: 534px;
  left: 403px;
  width: 699px;
  height: 35px;
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
.creacindecuenta-rectangle26 {
  top: 618px;
  left: 403px;
  width: 699px;
  height: 35px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 46px;
  background-color: rgba(255, 255, 255, 1);
}
.creacindecuenta-rectangle28 {
  top: 2344px;
  left: 560px;
  width: 498px;
  height: 48px;
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
.creacindecuenta-text1 {
  top: 510px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 122px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
.creacindecuenta-text2 {
  top: 593px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 205px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-rectangle31 {
  top: 702px;
  left: 403px;
  width: 699px;
  height: 35px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 46px;
  background-color: rgba(255, 255, 255, 1);
}
.creacindecuenta-text3 {
  top: 677px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 320px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-rectangle32 {
  top: 804px;
  left: 403px;
  width: 699px;
  height: 103px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 46px;
  background-color: rgba(255, 255, 255, 1);
}
.creacindecuenta-text4 {
  top: 757px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 810px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-rectangle29 {
  top: 367px;
  left: 403px;
  width: 699px;
  height: 35px;
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
.creacindecuenta-rectangle30 {
  top: 451px;
  left: 403px;
  width: 699px;
  height: 35px;
  position: absolute;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  box-sizing: border-box;
  object-fit: cover;
  border-color: rgba(1, 73, 4, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 46px;
  background-color: rgba(255, 255, 255, 1);
}
.creacindecuenta-text5 {
  top: 343px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 159px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-text6 {
  top: 426px;
  left: 403px;
  color: rgba(1, 73, 4, 1);
  width: 205px;
  height: auto;
  position: absolute;
  font-size: 26px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.creacindecuenta-image17 {
  top: 826px;
  left: 737px;
  width: 70px;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
}
.creacindecuenta-rectangle291 {
  top: 927px;
  left: 542px;
  width: 420px;
  height: 48px;
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
.creacindecuenta-text7 {
  top: 939px;
  left: 676px;
  color: rgba(1, 73, 4, 1);
  width: 160px;
  height: auto;
  font-size: 22px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Archivo;
  font-weight: 700px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
</style>
