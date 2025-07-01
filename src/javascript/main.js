"use strict";

// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const removeEl = (el) => el.remove();

const selfDefstructingBtn = document.querySelector("#danger__btn");
selfDefstructingBtn.addEventListener("click", () =>
  removeEl(selfDefstructingBtn)
);

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

const imageTaskContainer = document.querySelector(".task__two");
const imageEl = document.createElement("img");
imageEl.classList.add("task__two--img");
imageEl.src =
  "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";

imageTaskContainer.appendChild(imageEl);

//  3. html-ში შექმენით <section id="characters-list"></section> & 4
//  // 4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
//  // 4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით).

const charactersList = document.querySelector("#characters-list");

function renderCharactersCards() {
  const charactersCard = characters
    // 4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.
    .map((character) => {
      return `<div class="characters__list--card">
    <div class="character__card--left">
          <div class="charcter__card-info">
            <h3 class="character__name">${character.first_name} ${character.last_name}</h3>
             <p class="character__house">House: ${character.house}</p>
          </div>
          <div class="character__card--btns">
            <button class="info__btn">Info</button>
            <button class="delete__btn">Delete</button>
          </div>
        </div>

    <div class="character__card--img">
      <img src="${character.image}" alt="${character.name}" class="character__img"/>
    </div>
  </div>`;
    })
    .join("");
  //  4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section id="characters-list"></section>.

  charactersList.innerHTML = charactersCard;
}

renderCharactersCards();

// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, მე-4 დავალებზე მუშაობისას დანარჩენ დეტალებთან ერთად უნდა დაემატოს ეს ღილაკები), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)
// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების (append)-ის შემდეგ

const deleteBtns = document.querySelectorAll(".delete__btn");
const infoBtns = document.querySelectorAll(".info__btn");
const characterCards = document.querySelectorAll(".characters__list--card");
const overlay = document.querySelector(".overlay");
let characterCardsLength = characterCards.length;

deleteBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    removeEl(characterCards[index]);
    characterCardsLength--;
    if (characterCardsLength === 0) {
      charactersList.innerHTML = `<h2 class="no__characters">No characters available</h2>`;
    }
  });
});
