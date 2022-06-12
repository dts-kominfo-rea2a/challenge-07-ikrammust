const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    // read data from promiseTheaterIXX
    let dataFilmIXX = await promiseTheaterIXX();
    // read data from promiseTheaterVGC
    let dataFilmVGC = await promiseTheaterVGC();

    // make it one array
    let allDataFilm = [...dataFilmIXX, ...dataFilmVGC];
    // counter for audience emotion
    let emosiCounter = 0;

    // calculate audience emotion
    allDataFilm.forEach((element) => {
      if(element.hasil === emosi) {
        emosiCounter++
      }
    });

    // return how much film that make audience angry or not
    return emosiCounter;
  } catch(err) {
    // if some error happens, throw that error.
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
