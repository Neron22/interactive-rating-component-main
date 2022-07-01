// sélection des variables
const rating = document.querySelectorAll("li");
const submit = document.querySelector(".cta");

console.log(submit);

// boucle for dans le tableau rating
for (var i = 0 ; i < rating.length; i++) {
  // au click sur l'un des éléments
  rating[i].addEventListener('click', (e) => {
    // s'il y a la classe active sur un élément
    if (document.querySelector('.card-ratings li.active') !== null) {
      // la retirer
      document.querySelector('.card-ratings li.active').classList.remove('active');
    }
    // et ajouter la classe active à l'élément cliqué
    e.target.classList.add('active')
  });
}

// au click sur le bouton submit
submit.addEventListener("click", (e) => {
  // s'il y a une classe active sur une des li
  if (document.querySelector('.card-ratings li.active') !== null) {
    // retirer la class hidden de la card de récap
    document.querySelector(".hidden").classList.remove('hidden');
    // ajouter le nombre sélectionné dans la card de récap
    document.querySelector("span").textContent = document.querySelector('.card-ratings li.active').textContent;
  }
  else {
    // sinon prévenir de sélectionner une note
    document.querySelector(".hidden2").classList.remove('hidden2');
  }
})
