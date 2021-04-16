var respWhatisNetflix = document.getElementById("respWhatisNetflix");
var masWhatisNetflix = document.getElementById("masWhatisNetflix");

var howMuch = document.getElementById("howMuch");
var respHowMuch = document.getElementById("respHowMuch");

var whereCan = document.getElementById("whereCan");
var respWhereCan = document.getElementById("respWhereCan");

var cancel = document.getElementById("cancel");
var respCancel = document.getElementById("respCancel");

var whatCan = document.getElementById("whatCan");
var respWhatCan = document.getElementById("respWhatCan");

masWhatisNetflix.addEventListener("click", () => {
  if (respWhatisNetflix.innerHTML === "") {
    respWhatisNetflix.innerHTML =
      '<div class="col-12 border-top"> <h4 class="float-start p-3 p-md-5 parrafoQuestions"> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br><br> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week! </h4> </div>';
  } else {
    respWhatisNetflix.innerHTML = "";
  }
});

howMuch.addEventListener("click", () => {
  if (respHowMuch.innerHTML === "") {
    respHowMuch.innerHTML =
      '<div class="col-12 border-top"><h4 class="float-start p-3 p-md-5 parrafoQuestions">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from MXN139 to MXN266 a month. No extra costs, no contracts.</h4></div>';
  } else {
    respHowMuch.innerHTML = "";
  }
});

whereCan.addEventListener("click", () => {
  if (respWhereCan.innerHTML === "") {
    respWhereCan.innerHTML =
      '<div class="col-12 border-top"> <h4 class="float-start p-3 p-md-5 parrafoQuestions">Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br><br> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere. </h4> </div>';
  } else {
    respWhereCan.innerHTML = "";
  }
});

cancel.addEventListener("click", () => {
  if (respCancel.innerHTML === "") {
    respCancel.innerHTML =
      '<div class="col-12 border-top"> <h4 class="float-start p-3 p-md-5 parrafoQuestions">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h4> </div>';
  } else {
    respCancel.innerHTML = "";
  }
});

whatCan.addEventListener("click", () => {
  if (respWhatCan.innerHTML === "") {
    respWhatCan.innerHTML =
      '<div class="col-12 border-top"> <h4 class="float-start p-3 p-md-5 parrafoQuestions">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want</h4> </div> ';
  } else {
    respWhatCan.innerHTML = "";
  }
});
