<template>
  <div class="login-container">
    <div class="login-login">
      <img
        src="/playground_assets/dff5c340-a5c8-4ceb-9813-9ec4f3161e7d-156s-600w.png"
        alt="logoProyecto21092"
        class="login-logo-proyecto2"
      />
      <span class="login-text">Inicio de sesión</span>
      <input v-model="suario" placeholder="Usuario"  class="login-rectangle25" />
      <input v-model="contraseña" placeholder="Contraseña"  class="login-rectangle26" type="password"/>
      <button v-on:click="counter += 1" class="login-rectangle27"> <span class="login-text03">Ingresar</span>  </button>
      <button v-on:click="counter += 1" class="login-rectangle28"> <span class="login-text08">Crear cuenta</span>  </button>
      {{counter}}
      <span class="login-text01">Usuario</span>
      <span class="login-text02">Contraseña</span>
      <span class="login-text04">
        <span>O</span>
        <br />
        <span></span>
      </span>
      
      <span class="login-text09">¿Olvidaste tu contraseña?</span>
      <div class="login-exporttocodeerrorsdeletemeanytime">
        <img
          src="/playground_assets/2027219e-e312-48c3-a5f5-b06410028f8d-iklg-1600w.png"
          alt="Loginneedstouseautolayoutorbearasterizedimage224479"
          class="login-loginneedstouseautolayoutorbearasterizedimage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      contraseña: '',
      cuenta: '',
      counter:1
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
}
.login-login {
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
.login-logo-proyecto2 {
  top: 152px;
  left: 97px;
  width: 588px;
  height: 592px;
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  border-color: transparent;
  border-radius: 77px;
}
.login-text {
  top: 264px;
  left: 823px;
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
.login-rectangle25 {
  top: 388px;
  left: 840px;
  width: 420px;
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
.login-rectangle26 {
  top: 492px;
  left: 840px;
  width: 420px;
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
.login-rectangle27 {
  top: 553px;
  left: 1108px;
  width: 152px;
  height: 36px;
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
.login-rectangle28 {
  top: 663px;
  left: 840px;
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
.login-text01 {
  top: 364px;
  left: 840px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
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
.login-text02 {
  top: 467px;
  left: 840px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
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
.login-text03 {
  top: 559px;
  left: 1141px;
  color: rgba(1, 73, 4, 1);
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
.login-text04 {
  top: 615px;
  left: 1032px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
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
.login-text08 {
  top: 675px;
  left: 974px;
  color: rgba(1, 73, 4, 1);
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
.login-text09 {
  top: 563px;
  left: 851px;
  color: rgba(1, 73, 4, 1);
  height: auto;
  position: absolute;
  font-size: 18px;
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
