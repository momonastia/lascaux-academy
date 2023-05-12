/* VARIABILI E COSTANTI */
const primoNumero: number = 3;
const secondoNumero: number = 5;

/* ARRAY & TUPLE */
const primoArray: string[] = ['parola', 'parola2', 'parola3'];
let primaTupla: [number, string, boolean] = [1, 'parola', false];

/* ENUM */
enum Abbigliamento {
  Maglietta = 'Maglietta',
  Pantalone = 'Pantalone',
  Cappello = 'Cappello',
  Sciarpa = 'Sciarpa',
}
let singoloCapoDiAbbigliamento: Abbigliamento = Abbigliamento.Cappello;

/* ANY */
let tipologiaAny: any = Abbigliamento.Cappello;

/* CAST */
function castDiValori(): void {
  let stringToNumber: number = Number('120'); // let stringToNumber: number = +"120";
  console.log(stringToNumber);
  console.log(typeof stringToNumber);
}

/* INTERFACCE */
interface Indirizzo {
  via?: string;
  paese?: string;
  cap: string;
}

interface Adulto extends Indirizzo {
  nome: string;
  cognome: string;
  eta: number;
  altezza?: number;
  readonly peso: number;
}
let paola: Adulto = { nome: 'Paola', eta: 25, cognome: 'Rossi', altezza: 171, peso: 70, cap: '67890' };
// Errore: paola.peso = 65;

/* CLASSI */
class Hobby {
  hobby?: string;
  frequenza?: number;
  costo?: number;

  constructor(hobbyInput: string) {
    this.hobby = hobbyInput;
    this.frequenza = 4;
    this.costo = 24;
  }
}

class Persona extends Hobby implements Adulto {
  public nome: string;
  public cognome: string;
  public eta: number;
  public altezza?: number;
  public peso: number;
  public residenza?: string;
  public cap: string;
  public readonly coloreOcchi: string;

  constructor(
    nomeInput: string,
    cognomeInput: string,
    pesoInput: number,
    capInput: string,
    hobbyInput: string,
    coloreOcchiInput: string,
    cognomeInputOpz2?: string,
    cognomeInputOpz3?: string
  ) {
    super(hobbyInput);
    this.nome = nomeInput;
    this.eta = 18; //Ogni volta che costruisco una classe Persona età sarà uguale a 18 per TUTTI!
    this.peso = pesoInput;
    this.cap = capInput;
    this.coloreOcchi = coloreOcchiInput;
    this.cognome = cognomeInput.concat(cognomeInputOpz2 ?? '', cognomeInputOpz3 ?? '');
  }
}

function stampaPersona() {
  let davide: Persona = new Persona('Davide', 'Rossi', 75, '93938', 'Atletica', 'Marroni');
  console.log(davide);
}

/* ESECUZIONI FUNZIONI */
stampaPersona();
