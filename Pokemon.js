/* Egy Pokemon-nak van neve tartozik hozzá egy kép */

export default class Pokemon {
  /* privát adattagok létrehozása */
  #nev = "";
  #kep = "";
  #mondat = "";

  constructor(nev, kep, szuloElem) {
    /* this mindig a konkrét objektumpéldányra mutat az EGO */
    this.#nev = nev;
    this.#kep = kep;
    this.#mondat = "Jó estét!";
    this.szuloElem = szuloElem;

    /*  */
    this.#megjelenit();
  }

  #megjelenit() {
    let txt = `<div class="poki">
        <h3>${this.#nev}</h3>
        <img src="${this.#kep}" alt="${this.#nev}">
    </div>`;

    this.szuloElem.append(txt);
  }

  /* getter a névre */
  get nev() {
    return this.#nev;
  }

  /* mondat átírására setter-t használunk */

  set mondat(szoveg) {
    /* kiszűrjük a csúnya szavakat */
    this.#mondat = szoveg;
  }

  beszel() {
    console.log(this.#mondat);
  }
}
