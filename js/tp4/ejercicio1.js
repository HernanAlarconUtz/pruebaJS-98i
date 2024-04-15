// - Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  marca: "Ford",
  modelo: "Focus",
  color: "Rojo",
  encendido: false,

  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      console.log(
        `El ${this.marca} ${this.modelo} color ${this.color} esta encendido`
      );
    } else {
      console.log("El auto ya esta encendido");
    }
  },

  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log(
        `El ${this.marca} ${this.modelo} color ${this.color} se apago`
      );
    } else {
      console.log("El auto ya esta apagado");
    }
  },
};

auto.encender();
auto.apagar();