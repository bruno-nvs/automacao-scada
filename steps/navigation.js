module.exports = {

  acessarAerogerador(I, parque, complexo, aero) {

    I.waitForText(parque, 20);

    I.click(parque);

    I.click(complexo);

    I.waitForText(aero, 10);

    I.click(aero);

  }

};