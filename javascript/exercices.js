const anagrammes = (stringA, stringB) => {
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */




    // fonction qui met dans l'ordre alphabetique
    

        const regex =  /([A-ZA-z])\w+/g;
        const motA = stringA.split("").sort().join("").toLowerCase().match((regex) || []).join("");
        const motB = stringB.split("").sort().join("").toLowerCase().match((regex) || []).join("");
    return motA === motB;


};


class Stack {
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */

 constructor() {
  this.tab=[];
  // this.ind=indexOf(this.tab);
 }

 push(value) {
  this.tab[this.tab.length] = value;
 }

pop() {
  
  const a=this.tab[this.tab.length-1];
  this.tab.length = this.tab.length-1;
  return a;

}

peek() {
    return this.tab[this.tab.length - 1]; 
}

};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

// for (var fizzBuzz = 1; n <= 100; n++) {
//     var message = ""; // Message à afficher, initialement vide
//     if (n % 3 === 0) {
//         // Nombre divisible par 3 : on ajoute "Fizz" au message
//         message += 'Fizz';
//     }
//     if (n % 5 === 0) {
//         // Nombre divisible par 5 : on ajoute "Buzz" au message
//         message += 'Buzz';
//     }
//     if (message === "") {
//         // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
//         // le message affiché sera le nombre
//         message = n;
//     }
//     console.log(message);
// }

for (var i=1; i <= n; i++)
{
    if (i % 15 == 0)
        console.log("fizzbuzz");
    else if (i % 3 == 0)
        console.log("fizz");
    else if (i % 5 == 0)
        console.log("buzz");
    else
        console.log(i);
}

};

const spirale = (n) => {
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
 
 
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;


};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
 


// vérification horizontal





// vérification vertical 



// vérification diagonal
 
 
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
