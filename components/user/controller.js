const store = require("./store");
const moment = require("moment");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const addUser = (email, password) => {
  if (!email || !password) {
    console.log("No hay email o password");
    return Promise.reject("Datos incorrectos");
  }
  const user = {
    email: email,
    password: password,
    creado: moment().format("DD-MM-YYYY"),
  };
  return store.add(user);
};

const sendCode = (email) => {
  if (!email) {
    console.log("No hay email");
    return Promise.reject("Datos incorrectos");
  }

  codigoRegistro = crypto.randomBytes(4).toString("hex");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "medina2.ariana9@gmail.com",
      pass: process.env.EMAIL,
    },
  });

  const mailOptions = {
    from: "medina2.ariana9@gmail.com",
    to: email,
    subject: "[Casu] Código de registro",
    html: `<p>Tu código de registro es: <strong>${codigoRegistro}</strong></p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico", error);
        reject(error);
      } else {
        console.log("Correo electrónico enviado con éxito");
        resolve();
      }
    });
  });
};

const verifyCode = (email, codigoIngresado) => {
  if (!email || !codigoIngresado) {
    console.log("No hay email o código");
    return Promise.reject("Datos incorrectos");
  }

  return new Promise((resolve, reject) => {
    if (codigoRegistro !== codigoIngresado) {
      // Utilizar la variable global para comparar el código ingresado
      console.error("Código inválido");
      reject("Código inválido");
    } else {
      console.log("Código válido");
      resolve("Código válido");
    }
  });
};

const userExist = async (email) => {
  if (!email) {
    console.log("No hay email");
    return Promise.reject("No hay email");
  }
  const exist = await store.emailExists(email);
  if (exist) {
    console.log(exist, email)
    return Promise.reject("El email ya está registrado");
  } else {
    return Promise.resolve("Puedes continuar");
  }
};

module.exports = {
  addUser,
  sendCode,
  verifyCode,
  userExist,
};
