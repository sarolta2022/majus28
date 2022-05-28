//import news from "./data/news.json";

//const newsHeader = document.querySelector(".news-header");
//const newsDate = document.querySelector(".news-date");
//const newsContent = document.querySelector(".news-content");
//const newsCategory = document.querySelector(".news-category");
//const newsImg = document.querySelector(".news-img");

const paraout = document.createElement("p");
paraout.innerHTML = "This is a paragraph from outside";
document.getElementById("for-script-out").appendChild(paraout);

const news = [
  {
    id: 1,
    date: "2022.04.08",
    title:
      "Az is rendelkezhet adója 1%-áról aki teljes adóvisszatérítésben részesült!",
    content:
      "Kérjük támogatóinkat, hogy május 20-ig rendelkezzenek adójuk 1%-áról! A felajánlás lehetősége abban az esetben is fennáll, ha Ön teljes adóvisszatérítésben részesült, ugyanis az 1%+1% állami támogatás formájában megilleti a civil szervezeteket és az egyházakat. Köszönjük, hogy adója 1%-ának felajánlásával Ön is támogatja a minőségi jezsuita nevelést és oktatást! Adószám: 18436501-1-05",
    category: "actual",
    pic: "/images/news/1szazalek.jpg",
  },
  {
    id: 2,
    date: "2022.04.27.",
    title: "Az igazgató atya üzenete a JEZSU-s szülőkhöz",
    content:
      "Tisztelt Szülők! Arra kérem Önöket, hogy ebben a levélben IDE KATTINTVA tekintsék át velem együtt az előttünk álló feladatokat, kihívásokat és együttműködési területeket.  Meggyőződésem, hogy a pedagógus, a szülő és a diák hármasának szoros együttműködésével tudjuk jól támogatni a gyerekeket, biztosítani az emberi és szakmai megújulást, azokat a feltételeket, amelyek érzelmi és fizikai biztonságot nyújtanak, valamint eredményes tanuláshoz vezetnek...",
    category: "actual",
    pic: "/images/news/ferencatya.jpg",
  },
  {
    id: 3,
    date: "2022.04.28.",
    title:
      "Kollégiumi ballagás - bensőséges ünnepléssel köszöntek el a végzős kollégisták",
    content:
      "Otthon, hétvégén két kistesót kell kerülgetned, hogy bejuss a fürdőszobába, ez hétközben inkább húsz Vagyis a kollégium olyan, mint a család, csak többen vagyunk. Ezért van külön kolis ballagás alig két nappal a rendes ballagás előtt, hogy el tudjunk köszönni a legidősebb testvérektől. Vidáman és meghatódva, majd 24 lány és 23 fiú végzős kollégista tett tanúságot, hogy bizony nagyon jó volt kolisnak lenni. Amikor kicsi ötödikesek voltunk, az első beköltözésünk napján eljöttek a szobánkba a nagyok, és bemutatkoztak nekünk. Befogadtak magatok közé, és ez nagyon megkönnyített számunkra minden napot. Ez a hagyomány továbbra is él. A szerda esténkénti “kolis mise”, ahol az imádságok, a szentségimádás, a zene, az énekek különösen gyönyörűek, ahol még azok is énekelnek, akik egyébként inkább csak tátognak. A kolis ballagás a végzősök számára az utolsó ilyen alkalom. A két végzős szónok nem győzte sorolni mindazt, amit a kollégiumi apáinktól és anyáinktól, vagyis nevelőiktől és a takarító néniktől kaptak. Az öregek bölcsességével bátorították a fiatalabb kollégistákat, hogy hálás szívvel fogadjanak mindent, még az elbeszélgetéseket és az egyéb nevelői intézkedéseket is melyek felsorolását rövid, de visszafojthatatlan derültség követte.",
    category: "college",
    pic: "/images/news/ballagas.jpg",
  },
  {
    id: 4,
    date: "2022.04.29",
    title: "Köszönet a véradóknak!",
    content:
      "Köszönjük a nagylelkű véradóknak, akik részt vettek hagyományos JEZSU-s véradáson. A végzős osztályok közötti versenyt (ki mozgósít több véradót) a 12.B és a 12.C osztály holtversenyben megnyerte. Az előre tervezett 15 főhöz képest 22-en jelentek meg. 11 személy első véradó volt. A 15 befejezett véradás összesen 45 élet megmentését jelenti! Hálásak vagyunk a Magyar Vöröskereszt munkatársainak, hogy évről-évre kivonulnak a JEZSU-ba, és végzős diákjaink életükben először hazai pályán adhatnak vért.",
    category: "event",
    pic: "/images/news/veradok.jpg",
  },
  {
    id: 5,
    date: "2022.04.25",
    title: "Kollégiumi nevelőnőt várunk a JEZSU-ba!",
    content:
      "Kollégiumi nevelő pedagógusnőt várunk a JEZSU Szent Erzsébet Leánykollégiumába. A részletes pályázati kiírás IDE KATTINTVA megtekinthető. Határidő május 27.",
    category: "career",
    pic: "/images/news/nevelo.jpg",
  },
];

const newsHeader = document.createElement("p");
newsHeader.innerHTML = news[0].title;
document.getElementById("news-header").appendChild(newsHeader);
const newsDate = document.createElement("p");
newsDate.innerHTML = news[0].date;
document.getElementById("news-date").appendChild(newsDate);
const newsContent = document.createElement("p");
newsContent.innerHTML = news[0].content;
document.getElementById("news-content").appendChild(newsContent);
const newsCategory = document.createElement("p");
newsCategory.innerHTML = news[0].category;
document.getElementById("news-category").appendChild(newsCategory);
const newsImg = document.createElement("img");
newsImg.innerHTML = news[0].pic;
document.getElementById("news-img").appendChild(newsImg);

/* const loadNews = () => {
  fetch("./data/news.json")
    .then((response) => response.json())
    .then(displayNews);
};

const displayNews = () => {
  console.log("hi there");
};

loadNews();
 */
