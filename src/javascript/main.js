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
// 3. html-ში შექმენით <section id="characters-list"></section>

// 4.
//  // 4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
//  // 4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით).
//  // 4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section id="characters-list"></section>.
//  //4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.

// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, მე-4 დავალებზე მუშაობისას დანარჩენ დეტალებთან ერთად უნდა დაემატოს ეს ღილაკები), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)
// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების (append)-ის შემდეგ
