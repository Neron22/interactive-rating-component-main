const rating = document.querySelectorAll("li");
const submit = document.querySelector(".cta");

console.log(submit);

for (var i = 0 ; i < rating.length; i++) {
  rating[i].addEventListener('click', (e) => {
    if (document.querySelector('.card-ratings li.active') !== null) {
      document.querySelector('.card-ratings li.active').classList.remove('active');
    }
    // document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
  });
}

submit.addEventListener("click", (e) => {
  if (document.querySelector('.card-ratings li.active') !== null) {
    document.querySelector(".hidden").classList.remove('hidden');
    document.querySelector("span").textContent = document.querySelector('.card-ratings li.active').textContent;
  }
  else {
    document.querySelector(".hidden2").classList.remove('hidden2');
  }
})
