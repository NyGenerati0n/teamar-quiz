const color = "#fd652d";

const CLASS = {
  HIDE: "hidden",
}
const ELEMENTS = {
  LEFTY: $("#lefty"),
  RIGHTY: $("#righty"),
  START_WRAPPER: $(".swrapper"),
  START_BUTTON: $("#startbutton"),
  QUESTION_WRAPPER: $(".qwrapper"),
  RESULT_WRAPPER: $(".rwrapper"),
  RESET_BUTTON: $("#reset"),
  ROLE_NAMES: $(".rolename"),
  ROLE_DESCRIPTIONS: $(".role-description"),
  DOCUMENT: $(document),
}

ELEMENTS.DOCUMENT.on("click", e => hideRoleDescription(e));
ELEMENTS.ROLE_NAMES.on("click", (e) => showRoleDescription(e));
hideElement(ELEMENTS.ROLE_DESCRIPTIONS);

ELEMENTS.LEFTY.on("click", () => handleClick("left"));
ELEMENTS.RIGHTY.on("click", () => handleClick("right"));
ELEMENTS.START_BUTTON.on("click", () => startQuestions());
ELEMENTS.RESET_BUTTON.on("click", () => resetQuiz());

const maxResRole = 6; // The amount of questions that each role is included in (The maximum score you can get on a role)
const json = {
  track1: [
    {
      lquestion: "Alla personligheter intresserar mig",
      rquestion: "Jag ger mig inte förrän jobbet är gjort",
      ltype: "coach",
      rtype: "crew",
    },
    {
      lquestion: "Jag gillar att träffa nya människor",
      rquestion: "Jag gillar att jobba behind the scenes",
      ltype: "coach",
      rtype: "crew",
    },
    {
      lquestion: "Jag är bra på att se utvecklingspotential i andra",
      rquestion: "Jag är bra på att se utvecklingspotential i praktiska saker",
      ltype: "coach",
      rtype: "crew",
    },
    {
      lquestion: "Jag tycker om att hjälpa andra att lösa problem",
      rquestion: "Att skapa något från scratch taggar mig",
      ltype: "coach",
      rtype: "content",
    },
    {
      lquestion: "Jag är ofta den som startar en konversation",
      rquestion: "Jag uttrycker mig helst genom text eller bild",
      ltype: "coach",
      rtype: "content",
    },
    {
      lquestion: "Jag vill resa och upptäcka nya ställen",
      rquestion: "Jag gillar tanken av att jobba på ett kontor",
      ltype: "coach",
      rtype: "content",
    },
    {
      lquestion: "Eventproduktion intresserar mig",
      rquestion: "Kommunikation intresserar mig",
      ltype: "crew",
      rtype: "content",
    },
    {
      lquestion: "Jag uppskattar ett välproducerat evenemang",
      rquestion: "Jag uppskattar en genomtänkt produkt, hemsida eller film",
      ltype: "crew",
      rtype: "content",
    },
    {
      lquestion: "Jag gillar att lösa problem",
      rquestion: "Jag gillar att komma på nya idéer",
      ltype: "crew",
      rtype: "content",
    },
  ],
  track2: [
    {
      lquestion:
        "Jag uppskattar mer en hemsidas smarta funktioner än snygga design",
      rquestion:
        "Jag uppskattar mer en hemsidas snygga design än smarta funktioner",
      ltype: "webbutvecklare",
      rtype: "grafisk designer",
    },
    {
      lquestion: "Jag kan identifiera mig som en “datornörd”",
      rquestion: "Jag kan identifiera mig med ordet “kontrollfreak”",
      ltype: "webbutvecklare",
      rtype: "planner",
    },
    {
      lquestion: "Bygga upp något från scratch taggar mig",
      rquestion: "Att med få ord säga mycket är en kul utmaning",
      ltype: "webbutvecklare",
      rtype: "copywriter",
    },
    {
      lquestion: "Appbygge fascinerar mig",
      rquestion: "Tiden springer lätt iväg då jag sitter på Youtube",
      ltype: "webbutvecklare",
      rtype: "filmskapare",
    },
    {
      lquestion: "HTML är mitt modersmål",
      rquestion: "Folk blir glada av att prata i telefon med mig",
      ltype: "webbutvecklare",
      rtype: "fundraiser",
    },
    {
      lquestion: "Jag illustrerar gärna, antingen för hand eller i datorn",
      rquestion: "Jag gillar att researcha",
      ltype: "grafisk designer",
      rtype: "planner",
    },
    {
      lquestion: "Jag uttrycker mig helst i bild",
      rquestion: "Jag uttrycker mig helst i text",
      ltype: "grafisk designer",
      rtype: "copywriter",
    },
    {
      lquestion: "Jag behärskar program som Photoshop och InDesign",
      rquestion: "Jag ser möjligheter istället för problem",
      ltype: "grafisk designer",
      rtype: "fundraiser",
    },
    {
      lquestion: "Jag gillar att tänka utanför ramarna",
      rquestion: "Jag behärskar filmredigeringsprogram",
      ltype: "grafisk designer",
      rtype: "filmskapare",
    },
    {
      lquestion: "Att skriva Att göra-listor är vardagsmat för mig",
      rquestion: "Jag är intresserad av ord och formuleringar",
      ltype: "planner",
      rtype: "copywriter",
    },
    {
      lquestion: "Jag kallas ofta för driven",
      rquestion: "Jag står hellre bakom kameran än framför",
      ltype: "planner",
      rtype: "filmskapare",
    },
    {
      lquestion: "Jag kan se både detaljer och helheten i saker",
      rquestion: "Jag triggas av siffermål",
      ltype: "planner",
      rtype: "fundraiser",
    },
    {
      lquestion: "Jag gillar att skriva både långa och korta texter",
      rquestion: "Jag gillar att få andra att haka på en idé",
      ltype: "copywriter",
      rtype: "fundraiser",
    },
    {
      lquestion: "Jag hade helst vunnit en Oscar för “Best writing”",
      rquestion: "Jag hade helst vunnit en Oscar för “Best picture”",
      ltype: "copywriter",
      rtype: "filmskapare",
    },
    {
      lquestion: "Det bästa sättet att berätta en story är genom film",
      rquestion: "Jag ger mig inte förrän jobbet är gjort",
      ltype: "filmskapare",
      rtype: "fundraiser",
    },
  ],
};

// Variable declarations!
var positions = {
  track1: {
    coach: 0,
    crew: 0,
    content: 0,
  },
};


var firstQuestion = false;
var currentQuestion = 0;
var track = "track1";
var link = "https://www.nygeneration.se/teama";
var questions = shuffleQuestions(json[track]);

var currentOpenDescription = null;
var roleDescriptionLastChange = Date.now();
var roleDescriptionCooldown = 300; // In miliseconds


// Functions
function hideElement(jqEl) {
  jqEl.addClass(CLASS.HIDE);
}

function showElement(jqEl) {
  jqEl.removeClass(CLASS.HIDE);
}

function showRoleDescription(e) {
  if(currentOpenDescription) return;
  if(Date.now() < roleDescriptionLastChange + roleDescriptionCooldown)
    return;

  console.log("show")

  const sourceEl = e.originalEvent.srcElement;
  const descriptionEl = $(sourceEl.parentNode).find(".role-description")[0];
  console.log(sourceEl, descriptionEl);

  showElement($(descriptionEl))
  setTimeout(() => {
    descriptionEl.style.opacity = 1;
  }, 0)

  
  currentOpenDescription = descriptionEl;
  roleDescriptionLastChange = Date.now();
}


function hideRoleDescription(e) {
  if(!currentOpenDescription) return;
  if(Date.now() < roleDescriptionLastChange + roleDescriptionCooldown) return;
  
  
  const sourceEl = e.originalEvent.srcElement;
  console.log(ELEMENTS.ROLE_DESCRIPTIONS, sourceEl)
  console.log(ELEMENTS.ROLE_DESCRIPTIONS.has(sourceEl))

  if(ELEMENTS.ROLE_DESCRIPTIONS.has(sourceEl).length) {
    console.log("click on description, not closing")
    return;
  }

  console.log("hide")


  currentOpenDescription.style.opacity = 0;
  setTimeout(() => {
    hideElement($(currentOpenDescription));
    currentOpenDescription = null;
    console.log("display: none")

  }, roleDescriptionCooldown);
  roleDescriptionLastChange = Date.now();
}

// Handle clicking on the answered questions
function handleClick(box) {
  if (box == "left") positions[track][questions[currentQuestion]["ltype"]]++;
  else positions[track][questions[currentQuestion]["rtype"]]++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    ELEMENTS.LEFTY.html(questions[currentQuestion]["lquestion"]);
    ELEMENTS.RIGHTY.html(questions[currentQuestion]["rquestion"]);
  } else {
    showResults();
  }

  console.log(positions);
}


function showResults() {
  // Hide question stuff
  hideElement(ELEMENTS.QUESTION_WRAPPER);
  showElement(ELEMENTS.RESULT_WRAPPER);

  // Generate the divs
  for (var key in positions[track]) {
    if (key == "undefined") continue;

    let el = $(`#roleresult-${key}`);
    // el.css("width", 90 * positions[track][key] + "px");
    el.css("width", Math.round(positions[track][key] / maxResRole * 100) + "%");

    console.log(key, positions[track][key], 90 * positions[track][key]);
  }
}

// Function to reset and
function resetQuiz() {
  //$(".generated").css("display", "none");
  console.log("RESET");
  $(".generated").remove();
  hideElement(ELEMENTS.RESULT_WRAPPER);

  showElement(ELEMENTS.START_WRAPPER);
  for(let key in positions[track]) {
    if (key == "undefined") continue;

    positions[track][key] = 0;
  }

  firstQuestion = false;
  currentQuestion = 0;
  track = "track1";
  link = "https://www.nygeneration.se/teama";
  questions = shuffleQuestions(json[track]);

  // startQuestions();
}

// Setup the environment for a question session
function startQuestions() {
  console.log("In startQuestions");
  hideElement(ELEMENTS.START_WRAPPER);

  // firstQuestion = true;
  // var firstQL = "Vilken(Turné)";
  // var firstQR = "Roll?(In-House)";

  showElement(ELEMENTS.QUESTION_WRAPPER);

  ELEMENTS.LEFTY.html(questions[currentQuestion]["lquestion"]);
  ELEMENTS.RIGHTY.html(questions[currentQuestion]["rquestion"]);
}

// Shuffle the given questions (of a track)
function shuffleQuestions(original) {
  var copy = original.slice();
  for (var i = 0; i < copy.length; i++) {
    var random = Math.round(Math.random() * (original.length - 1));
    var temp = copy[i];
    copy[i] = copy[random];
    copy[random] = temp;
  }
  return copy;
}