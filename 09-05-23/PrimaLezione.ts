interface Regista {
  nomeRegista: string;
  cognomeRegista: string;
  premiRegista?: string;
}

interface Film extends Regista {
  readonly titolo: string;
  anno?: number;
}

let film1: Film = {
  titolo: 'Space oddisey',
  anno: 1980,
  nomeRegista: 'Stanley',
  cognomeRegista: 'Kubrik',
  premiRegista: 'Oskar',
};

class Protagonista {
  nomeProtagonista: string;
  cognomeProtagonista: string;

  constructor(nomeProtagonistaInput: string, cognomeProtagonistaInput: string) {
    this.nomeProtagonista = nomeProtagonistaInput;
    this.cognomeProtagonista = cognomeProtagonistaInput;
  }
}

enum Doppiatori {
  Manfredi = 'Manfredi',
  Mete = 'Mete',
  Fiorentini = 'Fiorentini',
}

class Commedia extends Protagonista implements Film {
  titolo: string;
  anno: number;
  nomeRegista: string;
  cognomeRegista: string;
  premiRegista: string;
  doppiatori: Doppiatori;

  constructor(
    titoloInput: string,
    annoInput: number,
    nomeProtagonistaInput: string,
    cognomeprotagonistaInput: string,
    nomeRegistaInput: string,
    cognomeRegistaInput: string,
    premiRegistaInput: string,
    doppiatoriInput: Doppiatori
  ) {
    super(nomeProtagonistaInput, cognomeprotagonistaInput);
    this.titolo = titoloInput;
    this.anno = annoInput;
    this.nomeRegista = nomeRegistaInput;
    this.cognomeRegista = cognomeRegistaInput;
    this.premiRegista = premiRegistaInput;
    this.doppiatori = doppiatoriInput;
  }
}

function stampaFilm() {
  let film1: Commedia = new Commedia(
    'La La Land',
    2016,
    'Ryan',
    'Goslyng',
    'Damien',
    'Chazelle',
    'Oskar',
    Doppiatori.Manfredi
  );
  console.log(film1);
}

stampaFilm();
