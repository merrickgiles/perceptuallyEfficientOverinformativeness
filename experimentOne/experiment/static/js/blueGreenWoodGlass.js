/****************************
 * Blue-Green || Wood-Glass *
 ****************************/

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var BlueGreen_WoodGlass = function () {
  // Note that 'Cardboard' on the continuum will be labelled as wood. This makes it simpler - as bats in real life vary in these materials.

  //record the condition - this way we can initialise variables as wood/metal, while knowing the continuum.
  psiTurk.recordTrialData({
    condition: condition,
  });

  // All pages to be loaded
  var pages = [
    "instructions/instruct-ready.html",
    "instructions/instruct_color-env.html",
    "instructions/instruct_color-cat.html",
    "instructions/instruct_material-env.html",
    "instructions/instruct_material-cat.html",
    "instructions/instruct_main.html",
    "instructions/ready_page.html",
    "stage_audio-check.html",
    "stage_BG_category-environment.html",
    "stage_material_category-environment.html",
    "stage_colorcategory.html",
    "stage_materialcategory.html",
    "stage_ralphBG.html",
    "stage_comprehensionBG.html", 
    "stage.html",
    "postquestionnaire.html",
  ];

  // In javascript, defining a function as `async` makes it return  a `Promise`
  // that will "resolve" when the function completes. Below, `init` is assigned to be the
  // *returned value* of immediately executing an anonymous async function.
  // This is done by wrapping the async function in parentheses, and following the
  // parentheses-wrapped function with `()`.
  // Therefore, the code within the arrow function (the code within the curly brackets) immediately
  // begins to execute when `init is defined. In the example, the `init` function only
  // calls `psiTurk.preloadPages()` -- which, as of psiTurk 3, itself returns a Promise.
  //

  const init = (async () => {
    await psiTurk.preloadPages(pages);
  })();

  //Load Instruction Pages
  var beginInstructionPages = [
    // add as a list as many pages as you like
    "instructions/instruct-ready.html",
  ];
  var colorEnvInstuctionPages = ["instructions/instruct_color-env.html"];
  var colorCatInstructionPages = ["instructions/instruct_color-cat.html"];
  var materialEnvInstructionPages = ["instructions/instruct_material-env.html"];
  var materialCatInstructionPages = ["instructions/instruct_material-cat.html"];
  var mainTaskInstructionPages = ["instructions/instruct_main.html"];
  var ReadyPage = ["instructions/ready_page.html"]; 

  // Load sounds with Howler.js
  // Sound file-names are reversed - we are setting variable names to be in correct order.
  // We are also renaming the files to metal-wood, as opposed to glass wood. This is to reflect the participants belief about what the material is - despite the material being different on the original continuum.

  var metal_wood_00 = new Howl({
    src: ["/static/stimuli/audio/synth/wood_glass_00-40.mp3"],
    preload: true,
  });

  var metal_wood_01 = new Howl({
    src: [
      "/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_05-40.mp3",
    ],
    preload: true,
  });

  var metal_wood_02 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_10-40.mp3"],
    preload: true,
  });

  var metal_wood_03 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_25-40.mp3"],
    preload: true,
  });

  var metal_wood_04 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_61-40.mp3"],
    preload: true,
  });

  var metal_wood_05 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_74-40.mp3"],
    preload: true,
  });

  var metal_wood_06 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_81-40.mp3"],
    preload: true,
  });

  var metal_wood_07 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_92-40.mp3"],
    preload: true,
  });

  var metal_wood_08 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_96-40.mp3"],
    preload: true,
  });

  var metal_wood_09 = new Howl({
    src: ["/static/stimuli/audio/materialContinuums/mp3Files/wood_glass_99-40.mp3"],
    preload: true,
  });

  // Initialising necessary variables
  var wood_high = [];
  var wood_low = [];
  var metal_high = [];
  var metal_low = [];

  var blue_high = [];
  var blue_low = [];
  var green_high = [];
  var green_low = [];

  var trials = [];
  var fillers = [];
  var missing = [];

  // Setting up color arrays

  //  Every second color is skipped - derived a continuum of 100 colors, and skipping every second color to arrive at 50 equally spaced steps.

  var blueGreen = [
    ["stim", "#4fc0f8", "blue_green_0"],
    //["stim", "#4fc1f7", "blue_green_1"],
    ["stim", "#50c2f7", "blue_green_2"],
    //["stim", "#50c3f6", "blue_green_3"],
    ["stim", "#50c4f6", "blue_green_4"],
    //["stim", "#51c6f5", "blue_green_5"],
    ["stim", "#51c7f5", "blue_green_6"],
    //  ["stim", "#51c8f4", "blue_green_7"],
    ["stim", "#51c9f4", "blue_green_8"],
    //  ["stim", "#52caf3", "blue_green_9"],
    ["stim", "#52cbf3", "blue_green_10"],
    //  ["stim", "#52ccf2", "blue_green_11"],
    ["stim", "#52cef1", "blue_green_12"],
    //  ["stim", "#52cff1", "blue_green_13"],
    ["stim", "#53d0f0", "blue_green_14"],
    //  ["stim", "#53d1f0", "blue_green_15"],
    ["stim", "#53d2ef", "blue_green_16"],
    //  ["stim", "#53d3ef", "blue_green_17"],
    ["stim", "#53d4ee", "blue_green_18"],
    //  ["stim", "#53d6ee", "blue_green_19"],
    ["stim", "#53d7ed", "blue_green_20"],
    //  ["stim", "#53d8ec", "blue_green_21"],
    ["stim", "#53d9ec", "blue_green_22"],
    //  ["stim", "#54daeb", "blue_green_23"],
    ["stim", "#54dbeb", "blue_green_24"],
    //  ["stim", "#54dcea", "blue_green_25"],
    ["stim", "#54ddea", "blue_green_26"],
    //  ["stim", "#53dfe9", "blue_green_27"],
    ["stim", "#53e0e9", "blue_green_28"],
    //  ["stim", "#53e1e8", "blue_green_29"],
    ["stim", "#53e2e7", "blue_green_30"],
    //  ["stim", "#53e3e7", "blue_green_31"],
    ["stim", "#53e4e6", "blue_green_32"],
    //  ["stim", "#53e6e6", "blue_green_33"],
    ["stim", "#53e7e5", "blue_green_34"],
    //  ["stim", "#53e8e4", "blue_green_35"],
    ["stim", "#53e9e4", "blue_green_36"],
    //  ["stim", "#52eae3", "blue_green_37"],
    ["stim", "#52ebe3", "blue_green_38"],
    //  ["stim", "#52ece2", "blue_green_39"],
    ["stim", "#52eee1", "blue_green_40"],
    //  ["stim", "#52efe1", "blue_green_41"],
    ["stim", "#51f0e0", "blue_green_42"],
    //  ["stim", "#51f1e0", "blue_green_43"],
    ["stim", "#51f2df", "blue_green_44"],
    //  ["stim", "#50f3de", "blue_green_45"],
    ["stim", "#50f5de", "blue_green_46"],
    //  ["stim", "#50f6dd", "blue_green_47"],
    ["stim", "#4ff7dd", "blue_green_48"],
    //  ["stim", "#4ff8dc", "blue_green_49"],
    ["stim", "#4ff8dc", "blue_green_50"],
    //  ["stim", "#4ff8da", "blue_green_51"],
    ["stim", "#50f8d9", "blue_green_52"],
    //  ["stim", "#50f8d7", "blue_green_53"],
    ["stim", "#50f8d5", "blue_green_54"],
    //  ["stim", "#51f8d4", "blue_green_55"],
    ["stim", "#51f8d2", "blue_green_56"],
    //  ["stim", "#51f8d0", "blue_green_57"],
    ["stim", "#51f8ce", "blue_green_58"],
    //  ["stim", "#52f8cd", "blue_green_59"],
    ["stim", "#52f8cb", "blue_green_60"],
    //  ["stim", "#52f8c9", "blue_green_61"],
    ["stim", "#52f8c8", "blue_green_62"],
    //  ["stim", "#52f8c6", "blue_green_63"],
    ["stim", "#53f8c4", "blue_green_64"],
    //  ["stim", "#53f8c3", "blue_green_65"],
    ["stim", "#53f8c1", "blue_green_66"],
    //  ["stim", "#53f8bf", "blue_green_67"],
    ["stim", "#53f8bd", "blue_green_68"],
    //  ["stim", "#53f8bc", "blue_green_69"],
    ["stim", "#53f8ba", "blue_green_70"],
    //  ["stim", "#53f8b8", "blue_green_71"],
    ["stim", "#53f8b7", "blue_green_72"],
    //  ["stim", "#53f8b5", "blue_green_73"],
    ["stim", "#53f8b3", "blue_green_74"],
    //  ["stim", "#53f8b1", "blue_green_75"],
    ["stim", "#53f8b0", "blue_green_76"],
    //  ["stim", "#53f8ae", "blue_green_77"],
    ["stim", "#53f8ac", "blue_green_78"],
    //  ["stim", "#53f8aa", "blue_green_79"],
    ["stim", "#53f8a9", "blue_green_80"],
    //  ["stim", "#53f8a7", "blue_green_81"],
    ["stim", "#53f8a5", "blue_green_82"],
    //  ["stim", "#53f8a4", "blue_green_83"],
    ["stim", "#53f8a2", "blue_green_84"],
    //  ["stim", "#52f8a0", "blue_green_85"],
    ["stim", "#52f89e", "blue_green_86"],
    //  ["stim", "#52f89d", "blue_green_87"],
    ["stim", "#52f89b", "blue_green_88"],
    //  ["stim", "#52f899", "blue_green_89"],
    ["stim", "#51f897", "blue_green_90"],
    //  ["stim", "#51f895", "blue_green_91"],
    ["stim", "#51f894", "blue_green_92"],
    //  ["stim", "#51f892", "blue_green_93"],
    ["stim", "#51f890", "blue_green_94"],
    //  ["stim", "#50f88e", "blue_green_95"],
    ["stim", "#50f88c", "blue_green_96"],
    //  ["stim", "#50f88b", "blue_green_97"],
    ["stim", "#4ff889", "blue_green_98"],
    //  ["stim", "#4ff887", "blue_green_99"],
  ];

  var greenBlue = [
    //["stim", "#4ff887", "blue_green_99"],
    ["stim", "#4ff889", "blue_green_98"],
    //["stim", "#50f88b", "blue_green_97"],
    ["stim", "#50f88c", "blue_green_96"],
    //["stim", "#50f88e", "blue_green_95"],
    ["stim", "#51f890", "blue_green_94"],
    //["stim", "#51f892", "blue_green_93"],
    ["stim", "#51f894", "blue_green_92"],
    //["stim", "#51f895", "blue_green_91"],
    ["stim", "#51f897", "blue_green_90"],
    //["stim", "#52f899", "blue_green_89"],
    ["stim", "#52f89b", "blue_green_88"],
    //["stim", "#52f89d", "blue_green_87"],
    ["stim", "#52f89e", "blue_green_86"],
    //["stim", "#52f8a0", "blue_green_85"],
    ["stim", "#53f8a2", "blue_green_84"],
    //["stim", "#53f8a4", "blue_green_83"],
    ["stim", "#53f8a5", "blue_green_82"],
    //["stim", "#53f8a7", "blue_green_81"],
    ["stim", "#53f8a9", "blue_green_80"],
    //["stim", "#53f8aa", "blue_green_79"],
    ["stim", "#53f8ac", "blue_green_78"],
    //["stim", "#53f8ae", "blue_green_77"],
    ["stim", "#53f8b0", "blue_green_76"],
    //["stim", "#53f8b1", "blue_green_75"],
    ["stim", "#53f8b3", "blue_green_74"],
    //["stim", "#53f8b5", "blue_green_73"],
    ["stim", "#53f8b7", "blue_green_72"],
    //["stim", "#53f8b8", "blue_green_71"],
    ["stim", "#53f8ba", "blue_green_70"],
    //["stim", "#53f8bc", "blue_green_69"],
    ["stim", "#53f8bd", "blue_green_68"],
    //["stim", "#53f8bf", "blue_green_67"],
    ["stim", "#53f8c1", "blue_green_66"],
    //["stim", "#53f8c3", "blue_green_65"],
    ["stim", "#53f8c4", "blue_green_64"],
    //["stim", "#52f8c6", "blue_green_63"],
    ["stim", "#52f8c8", "blue_green_62"],
    //["stim", "#52f8c9", "blue_green_61"],
    ["stim", "#52f8cb", "blue_green_60"],
    //["stim", "#52f8cd", "blue_green_59"],
    ["stim", "#51f8ce", "blue_green_58"],
    //["stim", "#51f8d0", "blue_green_57"],
    ["stim", "#51f8d2", "blue_green_56"],
    //["stim", "#51f8d4", "blue_green_55"],
    ["stim", "#50f8d5", "blue_green_54"],
    //["stim", "#50f8d7", "blue_green_53"],
    ["stim", "#50f8d9", "blue_green_52"],
    //["stim", "#4ff8da", "blue_green_51"],
    ["stim", "#4ff8dc", "blue_green_50"],
    //["stim", "#4ff8dc", "blue_green_49"],
    ["stim", "#4ff7dd", "blue_green_48"],
    //["stim", "#50f6dd", "blue_green_47"],
    ["stim", "#50f5de", "blue_green_46"],
    //["stim", "#50f3de", "blue_green_45"],
    ["stim", "#51f2df", "blue_green_44"],
    //["stim", "#51f1e0", "blue_green_43"],
    ["stim", "#51f0e0", "blue_green_42"],
    //["stim", "#52efe1", "blue_green_41"],
    ["stim", "#52eee1", "blue_green_40"],
    //["stim", "#52ece2", "blue_green_39"],
    ["stim", "#52ebe3", "blue_green_38"],
    //["stim", "#52eae3", "blue_green_37"],
    ["stim", "#53e9e4", "blue_green_36"],
    //["stim", "#53e8e4", "blue_green_35"],
    ["stim", "#53e7e5", "blue_green_34"],
    //["stim", "#53e6e6", "blue_green_33"],
    ["stim", "#53e4e6", "blue_green_32"],
    //["stim", "#53e3e7", "blue_green_31"],
    ["stim", "#53e2e7", "blue_green_30"],
    //["stim", "#53e1e8", "blue_green_29"],
    ["stim", "#53e0e9", "blue_green_28"],
    //["stim", "#53dfe9", "blue_green_27"],
    ["stim", "#54ddea", "blue_green_26"],
    //["stim", "#54dcea", "blue_green_25"],
    ["stim", "#54dbeb", "blue_green_24"],
    //["stim", "#54daeb", "blue_green_23"],
    ["stim", "#53d9ec", "blue_green_22"],
    //["stim", "#53d8ec", "blue_green_21"],
    ["stim", "#53d7ed", "blue_green_20"],
    //["stim", "#53d6ee", "blue_green_19"],
    ["stim", "#53d4ee", "blue_green_18"],
    //["stim", "#53d3ef", "blue_green_17"],
    ["stim", "#53d2ef", "blue_green_16"],
    //["stim", "#53d1f0", "blue_green_15"],
    ["stim", "#53d0f0", "blue_green_14"],
    //["stim", "#52cff1", "blue_green_13"],
    ["stim", "#52cef1", "blue_green_12"],
    //["stim", "#52ccf2", "blue_green_11"],
    ["stim", "#52cbf3", "blue_green_10"],
    //["stim", "#52caf3", "blue_green_9"],
    ["stim", "#51c9f4", "blue_green_8"],
    //["stim", "#51c8f4", "blue_green_7"],
    ["stim", "#51c7f5", "blue_green_6"],
    //["stim", "#51c6f5", "blue_green_5"],
    ["stim", "#50c4f6", "blue_green_4"],
    //["stim", "#50c3f6", "blue_green_3"],
    ["stim", "#50c2f7", "blue_green_2"],
    //["stim", "#4fc1f7", "blue_green_1"],
    ["stim", "#4fc0f8", "blue_green_0"],
  ];

  // Setting up sound arrays

  var metalWood = [
    ["metal_wood_00", "metal_wood"],
    ["metal_wood_01", "metal_wood"],
    ["metal_wood_02", "metal_wood"],
    ["metal_wood_03", "metal_wood"],
    ["metal_wood_04", "metal_wood"],
    ["metal_wood_05", "metal_wood"],
    ["metal_wood_06", "metal_wood"],
    ["metal_wood_07", "metal_wood"],
    ["metal_wood_08", "metal_wood"],
    ["metal_wood_09", "metal_wood"],
  ];

  var woodMetal = [
    ["metal_wood_09", "metal_wood"],
    ["metal_wood_08", "metal_wood"],
    ["metal_wood_07", "metal_wood"],
    ["metal_wood_06", "metal_wood"],
    ["metal_wood_05", "metal_wood"],
    ["metal_wood_04", "metal_wood"],
    ["metal_wood_03", "metal_wood"],
    ["metal_wood_02", "metal_wood"],
    ["metal_wood_01", "metal_wood"],
    ["metal_wood_00", "metal_wood"],
  ];

  // Setting up a function to play the sounds in the global scope so we can continually call this function

  var play_sound = function (sound) {
    if (sound === "metal_wood_00") {
      metal_wood_00.play();
    } else if (sound === "metal_wood_01") {
      metal_wood_01.play();
    } else if (sound === "metal_wood_02") {
      metal_wood_02.play();
    } else if (sound === "metal_wood_03") {
      metal_wood_03.play();
    } else if (sound === "metal_wood_04") {
      metal_wood_04.play();
    } else if (sound === "metal_wood_05") {
      metal_wood_05.play();
    } else if (sound === "metal_wood_06") {
      metal_wood_06.play();
    } else if (sound === "metal_wood_07") {
      metal_wood_07.play();
    } else if (sound === "metal_wood_08") {
      metal_wood_08.play();
    } else if (sound === "metal_wood_09") {
      metal_wood_09.play();
    }
    {
    }
  };

   /**************
   * AUDIOCHECK *
   **************/

   var audioCheck = function () {
    //initialise variable with password for the audiocheck using Howler.js
    var audioPassword = new Howl({
      src: ["static/stimuli/audio/Koala_Password.mp3"],
      preload: true,
    });

    listening = true;

    var response = "";

    //process responses by checkoing what's in the input box

    var response_handler = function (e) {
      if (!listening) return;

      response = document.getElementById("user-input").value;

      var evaluateResponse = function () {
        if (
          response === "koala" ||
          response === "Koala" ||
          response === "KOALA"
        ) {
          finish();
        } else {
          alert(
            "Password was incorrect. Try again. Type the word with no capital letters, and no punctuation."
          );
        }
      };

      if (response.length > 0) {
        evaluateResponse();
      }
    };

    //finish function, which moves to the environment instructions - not to be confused with the endExperiment function.
    var finish = function () {
      $("body").unbind("keydown", response_handler); // Unbind the keydown event handler
      //currentview = new showMaterialEnvironmentInstructions(); 
      currentview = new showMaterialEnvironmentInstructions(); 
    };

    //Function the experiment, takes user to questionnaire.
    var endExperiment = function () {
      $("body").unbind("keydown", response_handler); // Unbind the keydown event handler
      currentview = new Questionnaire(false); // Switch to a questionnaire view
    };

    //set the simple function to play the password using Howler.js
    var playPassword = function () {
      audioPassword.play();
    };

    // play the password if they click the play button
    $(document).ready(function () {
      $(document).on("click", ".play-button", playPassword);
    });

    // Bind the 'response_handler' function to the click event of elements with class "submit-button"
    $(document).ready(function () {
      $(document).on("click", ".submit-button", response_handler);
    });

    //finish button to end the wholeexperiment
    $(document).ready(function () {
      $(document).on("click", ".finish-button", endExperiment);
    });

    //load in the html
    psiTurk.showPage("stage_audio-check.html");
  };

  /****************************************
   * VIEWING CATEGORY EXEMPLARS: MATERIAL *
   ****************************************/

  //Again, a dynamic environment for the experimentee to familiarise themselves with the category exemplars.

  var materialCategoryEnvironment = function () {
    var listening = true;

    var responseCountM = 0; 
    var responseCountW = 0; 

    var response_handler = function (e) {
      if (!listening) return;

      var keyCode = e.keyCode,
        response;

      switch (keyCode) {
        case 77:
          // "M"
          response = "metal";
          break;

        case 87:
          // "W"
          response = "wood";
          break;

        default:
          response = "";
          break;
      }

      switch (response) {
        case "metal":
          play_sound("metal_wood_00");
          responseCountM++
          break;

        case "wood":
          play_sound("metal_wood_09");
          responseCountW++
          break;

        default:
          response = "";
          break;
      }

      if (responseCountM > 4 && responseCountW > 4) { 
        finish();
      } 
    };

    // Load the html snippet into the body.
    psiTurk.showPage("stage_material_category-environment.html");

    // Register the response handler for key down events.
    $("body").focus().keydown(response_handler);

    var finish = function () {
      $("body").unbind("keydown", response_handler);
      currentview = new showMaterialCatInstructions(); // Move to the following stage
    };

    //move to next phase if they proceed
    //$("#proceed-button").click(finish);
  };

  /**********************
   * MATERIAL STAIRCASE *
   **********************/

  //I will not make comments throughout in this function, as the logic is exactly analogous as the colour staircase.

  var materialStaircase = function () {
    var listening = false;

    var dims = ["metal", "wood"];
    var dimIndex = [0, 1];
    var materialArrays = [metalWood, woodMetal];
    var currentSteps = [0, 0];
    var stairHistories = [[], []];
    var lastStepDirections = ["", ""];
    var reversalCounts = [0, 0];
    var completedDimensions = [false, false];
    var consecutiveCorrects = [0, 0];
    var consecutiveIncorrects = [0, 0];
    var nResponses = [0, 0];
    var min = 0;
    var max = 9;

    var currentDimIndex = 0;

    var i;
    var currentDimIndex;
    var materialArray;
    var currentStep;
    var currentDim;

    var presentStim = function () {
      var shuffledDimIndex = _.shuffle(dimIndex);
      i = shuffledDimIndex[0];
      currentDimIndex = dimIndex[i];
      currentDim = dims[currentDimIndex];
      materialArray = materialArrays[i];
      currentStep = currentSteps[i];

      if (completedDimensions[i] === false) {
        showNextMaterial(materialArray[currentStep][0]);
      } else if (completedDimensions[i] === true) {
        dimEmpty();
      }
    };

    var moveUp = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 1, max);
      lastStepDirections[i] = "up";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var moveDown = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 1, min);
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var response_handler = function (e) {
      if (!listening) return;

      var keyCode = e.keyCode,
        response;

      switch (keyCode) {
        case 77: //"M"
          response = "metal";
          break;

        case 87: //"W"
          response = "wood";
          break;

        default:
          response = "";
          break;
      }

      if (response.length > 0) {
        listening = false;

        psiTurk.recordTrialData({
          phase: "materialStaircase",
          dimension: currentDim,
          step: currentStep,
          sound: materialArray[currentStep[0]],
          response: response,
        });
      }

      var processResponse = function () {
        if (response === currentDim) {
          consecutiveCorrects[i]++;
          consecutiveIncorrects = 0;
          checkReversal();
          if (consecutiveCorrects[i] >= 2) {
            moveUp();
            consecutiveCorrects[i] = 0;
          } else {
            next();
          }
        } else if (response != currentDim && response != "") {
          consecutiveCorrects[i] = 0;
          consecutiveIncorrects[i]++;
          checkReversal();
          moveDown();
        } else {
        }
      };

      var checkReversal = function () {
        if (lastStepDirections[i] === "up" && response != currentDim) {
          reversalCounts[i]++;
        } else if (
          lastStepDirections[i] === "down" &&
          response === currentDim
        ) {
          reversalCounts[i]++;
        } else {
        }
      };

      switch (response) {
        case "metal":
          if (reversalCounts[i] === 0 && currentDim === response && currentStep < 2) {
            metal_high.push(materialArray[currentStep][0]);
          } else if (reversalCounts[i] >= 5 && currentDim === response) {
            metal_low.push(materialArray[currentStep][0]);
            completedDimensions[i] = true;
          } else {
          }
          break;

        case "wood":
          if (reversalCounts[i] === 0 && currentDim === response && currentStep < 2) {
            wood_high.push(materialArray[currentStep][0]);
          } else if (reversalCounts[i] >= 5 && currentDim === response) {
            wood_low.push(materialArray[currentStep][0]);
            completedDimensions[i] = true;
          } else {
          }
          break;
      }

      if (
        response != currentDim &&
        currentStep === 0 &&
        consecutiveIncorrects[i] > 1
      ) {
        endExperiment();
      }

      processResponse();
    };

    var next = function () {
      if (completedDimensions[0] === true && completedDimensions[1] === true) {
        finish();
      } else if (
        (nResponses[i] >= 5 && currentStep === 0) ||
        (reversalCounts[i] === 0 && currentStep === 10)
      ) {
        endExperiment();
      } else {
        showCrosshairs();
      }
    };

    var dimEmpty = function () {
      removeSound(); // remove stims to show crosshairs.
      $("#crosshairs").show();
      setTimeout(() => {
        $("#crosshairs").hide();
        presentStim();
      }, 0); // Duration of crosshairs display
    };

    var showCrosshairs = function () {
      removeSound();
      $("#soundDisplay").show(); //shows 'Sound Incoming'
      $("#query").hide(); //hides key press instructions
      setTimeout(() => {
        $("#soundDisplay").hide();
        $("#query").show();
        presentStim();
      }, 300);
    };

    var removeSound = function () {
      d3.select("word").remove();
    };

    var showNextMaterial = function (sound) {
      listening = true;
      play_sound(sound);
      d3.select("#query").html(
        '<p id="prompt">Type "M" for metal, "W" for wood </p>'
      );
      $("#query").show();
    };

    var finish = function () {
      $("body").unbind("keydown", response_handler);
      currentview = new showColorEnvironmentInstructions();
    };

    var endExperiment = function () {
      $("body").unbind("keydown", response_handler); // Unbind the keydown event handler
      currentview = new Questionnaire(false); // Switch to a questionnaire view
    };

    showCrosshairs();

    $("body").focus().keydown(response_handler);

    psiTurk.showPage("stage_materialcategory.html");
  };

  /*************************************
   * VIEWING CATEGORY EXEMPLARS: COLOR *
   *************************************/

  // Providing a dynamic environment for the experimentee to familiarise themselves with the category exemplars.

  var colorCategoryEnvironment = function () {
    var listening = true;
    // gonna have to start with the SVG being hidden - then display only when key press: I think you can do this in the SVG actually. So remember to work that in.

    var responseCountB = 0;
    var responseCountG = 0;

    var response_handler = function (e) {
      if (!listening) return;

      var keyCode = e.keyCode,
        response;

      switch (keyCode) {
        case 66:
          // "B"
          response = "blue";
          break;

        case 71:
          // "G"
          response = "green";
          break;

        default:
          response = "";
          break;
      }

      switch (response) {
        case "green":
          showColor("#4ff887"); //centre green
          responseCountG++;
          break;

        case "blue":
          showColor("#4fc0f8"); // centre blue
          responseCountB++; 
          break;

        default:
          response = "";
          break;
      }
      if (responseCountG > 1 && responseCountB > 1) { 
        finish();
      } 
    };

    //made three separate functions, why not.

    var showColor = function (color) {
      fill_colorStim(color);
      setTimeout(remove_colorStim, 1000);
    };

    var fill_colorStim = function (color) {
      d3.select("#colorRect").style("display", "block").style("fill", color);
    };

    var remove_colorStim = function () {
      //no need to put a parameter here. It removes anything.
      d3.select("#colorRect").style("display", "none");
    };

    var finish = function () {
      $("body").unbind("keydown", response_handler); // Unbind keys
      currentview = new showColorStaircaseInstructions(); // Move to the following stage
    };

    // Load the html snippet into the body.
    psiTurk.showPage("stage_BG_category-environment.html");

    // Register the response handler for key down events.
    $("body").focus().keydown(response_handler);

    // Begin by simply calling the removal function so the Rect SVG is hidden straight off the bat.
    remove_colorStim();
  };

  /*******************
   * COLOR STAIRCASE *
   *******************/

  var colorStaircase = function () {
    var listening = false;

    var dims = ["blue", "green"];
    var dimIndex = [0, 1];
    var colorArrays = [blueGreen, greenBlue];
    var currentSteps = [0, 0];
    var stairHistories = [[], []];
    var lastStepDirections = ["", ""];
    var reversalCounts = [0, 0];
    var completedDimensions = [false, false];
    var consecutiveCorrects = [0, 0];
    var consecutiveIncorrects = [0, 0];
    var nResponses = [0, 0];
    var min = 0;
    var max = 49;

    //We will use lastStepDirections and currentSteps to retrieve last stim presented ~~~ (currentSteps[i][1])

    var currentDimIndex = 0; //set to 0 to start with -- because of the shuffle, could be any out of dims.

    //set up variables to carry through the whole scope of colorStaircase
    var i;
    var currentDimIndex;
    var colorArray;
    var currentStep; //push response into the last responses straight away.
    //lastResponses[i].push(response);
    var currentDim;

    var presentStim = function () {
      var shuffledDimIndex = _.shuffle(dimIndex);
      i = shuffledDimIndex[0]; //set i to the position of 0 (which will vary randomly due to shuffle).
      //then use i to track t    if (reversalCounts === 0) he current position for the variables as follows:
      currentDimIndex = dimIndex[i];
      currentDim = dims[currentDimIndex];
      colorArray = colorArrays[i];
      currentStep = currentSteps[i];

      if (completedDimensions[i] === false) {
        showNextColor(colorArray[currentStep][1]); // show the color hex associated with the array and step.
      } else if (completedDimensions[i] === true) {
        dimEmpty(); //show crosshairs (0ms to prevent delay) and loop through again. continue looping until you find a false one.
      }
    };

    var moveUp = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 1, max); //move up 1 step in array (without exceeding max).
      lastStepDirections[i] = "up"; //set last step direction.
      stairHistories[i].push(currentSteps[i]); //push the step into the history.
      next(); // run the next stim.""
    };

    var moveDown = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 1, min); //move down 1 step drom to (without exceeding min).
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var moveUp2 = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 2, max); //move up 1 step in array (without exceeding max).
      lastStepDirections[i] = "up"; //set last step direction.
      stairHistories[i].push(currentSteps[i]); //push the step into the history.
      next(); // run the next stim.""
    };

    var moveDown2 = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 2, min); //move down 1 step drom to (without exceeding min).
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var moveUp3 = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 3, max); //move up 1 step in array (without exceeding max).
      lastStepDirections[i] = "up"; //set last step direction.
      stairHistories[i].push(currentSteps[i]); //push the step into the history.
      next(); // run the next stim.""
    };

    var moveDown3 = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 3, min); //move down 1 step drom to (without exceeding min).
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var moveUp4 = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 4, max); //move up 1 step in array (without exceeding max).
      lastStepDirections[i] = "up"; //set last step direction.
      stairHistories[i].push(currentSteps[i]); //push the step into the history.
      next(); // run the next stim.""
    };

    var moveDown4 = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 4, min); //move down 1 step drom to (without exceeding min).
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var moveUp5 = function () {
      currentSteps[i] = Math.min(currentSteps[i] + 5, max); //move up 1 step in array (without exceeding max).
      lastStepDirections[i] = "up"; //set last step direction.
      stairHistories[i].push(currentSteps[i]); //push the step into the history.
      next(); // run the next stim.""
    };

    var moveDown5 = function () {
      currentSteps[i] = Math.max(currentSteps[i] - 5, min); //move down 1 step drom to (without exceeding min).
      lastStepDirections[i] = "down";
      stairHistories[i].push(currentSteps[i]);
      next();
    };

    var response_handler = function (e) {
      if (!listening) return;

      var keyCode = e.keyCode,
        response;

      switch (keyCode) {
        case 71:
          // "G"
          response = "green";
          break;

        case 66:
          // "B"
          response = "blue";
          break;

        default:
          response = "";
          break;
      }

      //To make plots, we just need response and step.
      if (response.length > 0) {
        listening = false;

        psiTurk.recordTrialData({
          phase: "ColorStaircase",
          dimension: currentDim,
          step: currentStep,
          hex: colorArray[currentStep[1]],
          response: response,
        });

        //tracking nResponses in case we have to kick people out
        nResponses[i]++;
      }

      //This snippet implements the two up one down logic
      var processResponse = function () {
        if (response === currentDim) {
          //if response is the current dimension ('correct')
          consecutiveCorrects[i]++; //add one to consecutive.
          checkReversal(); //check whether there has been a reversal.
          if (consecutiveCorrects[i] === 2 && reversalCounts[i] === 0) {
            //if the response is the dimension twice in a row ('correct x2')
            moveUp5(); //and move up the staircase five places
            consecutiveCorrects[i] = 0;
          } else if (consecutiveCorrects[i] === 2 && reversalCounts[i] === 1) {
            moveUp4();
            consecutiveCorrects[i] = 0;
          } else if (consecutiveCorrects[i] === 2 && reversalCounts[i] === 2) {
            moveUp3();
            consecutiveCorrects[i] = 0;
          } else if (consecutiveCorrects[i] === 2 && reversalCounts[i] === 3) {
            moveUp2();
            consecutiveCorrects[i] = 0;
          } else if (consecutiveCorrects[i] === 2 && reversalCounts[i] === 4) {
            moveUp();
            consecutiveCorrects[i] = 0;
          } else {
            next(); //run another one
          }
        } else if (response != currentDim && response != "") {
          //response isn't current but also isn't default ""
          consecutiveCorrects[i] = 0; //set back to 0.
          consecutiveIncorrects[i]++; //add one to incorrect
          checkReversal(); //check whether there has been a reversal
          if (consecutiveCorrects[i] === 0 && reversalCounts[i] === 0) {
            moveDown5();
            consecutiveIncorrects[i] = 0;
          } else if (
            consecutiveIncorrects[i] === 1 &&
            reversalCounts[i] === 1
          ) {
            moveDown4();
            consecutiveIncorrects[i] = 0;
          } else if (
            consecutiveIncorrects[i] === 1 &&
            reversalCounts[i] === 2
          ) {
            moveDown3();
            consecutiveIncorrects[i] = 0;
          } else if (
            consecutiveIncorrects[i] === 1 &&
            reversalCounts[i] === 3
          ) {
            moveDown2();
            consecutiveIncorrects[i] = 0;
          } else if (
            consecutiveIncorrects[i] === 1 &&
            reversalCounts[i] === 4
          ) {
            moveDown();
            consecutiveIncorrects[i] = 0;
          } else {
            next();
          }
        } else {
        } // do nothing. Wait for next response. This will occur only if response === default.
      };

      //Reversal occurs when they move up they change direction going up or down the staircase
      // e.g. last response was 'red' going up, new response is 'blue' going back down - and the reverse case
      var checkReversal = function () {
        if (lastStepDirections[i] === "up" && response != currentDim) {
          reversalCounts[i]++;
        } else if (
          lastStepDirections[i] === "down" &&
          response === currentDim
        ) {
          reversalCounts[i]++;
        } else {
          //do nothing
        }
      };

      //The high/low push works well here. That way we can populate high and low using response trial by trial.
      switch (response) {
        case "blue":
          if (reversalCounts[i] === 0 && currentDim === response && currentStep < 2) {
            blue_high.push(colorArray[currentStep][1]);
          } else if (reversalCounts[i] >= 5 && currentDim === response) {
            blue_low.push(colorArray[currentStep][1]);
            completedDimensions[i] = true;
          } else {
          }
          break;

        case "green":
          if (reversalCounts[i] === 0 && currentDim === response && currentStep < 2) {
            green_high.push(colorArray[currentStep][1]);
          } else if (reversalCounts[i] >= 5 && currentDim === response) {
            green_low.push(colorArray[currentStep][1]);
            completedDimensions[i] = true;
          } else {
          }
          break;
      }

      if (
        response != currentDim &&
        currentStep === 0 &&
        consecutiveIncorrects[i] > 1
      ) {
        endExperiment();
      }

      processResponse(); //process response after checking all that

      //finish function - if all dimensions are completed.
    };

    //If every dimension is true, finish the task. Might have to place elsewhere.

    //Because it's more interpretable to have a function named 'next'.
    var next = function () {
      if (completedDimensions[0] === true && completedDimensions[1] === true) {
        finish();
      } else if (
        (nResponses[i] >= 5 && currentStep === 0) ||
        (reversalCounts[i] === 0 && currentStep === 49)
      ) {
        //checks if there's a bunch of responses and they can't seem to move up the staircase or no reversals and they finish the staircase. Number 49 will become 10 for auditory, as there are only 10 steps.
        endExperiment();
      } else {
        showCrosshairs();
      }
    };

    var showCrosshairs = function () {
      removeColor(); // remove stims to show crosshairs.
      $("#crosshairs").show();
      setTimeout(() => {
        $("#crosshairs").hide();
        presentStim();
      }, 200); // Duration of crosshairs display
    };

    var dimEmpty = function () {
      removeColor(); // remove stims to show crosshairs.
      $("#crosshairs").show();
      setTimeout(() => {
        $("#crosshairs").hide();
        presentStim();
      }, 0); // Duration of crosshairs display
    };

    var showNextColor = function (color) {
      listening = true;
      d3.select("#colorRect").style("display", "block").style("fill", color);
      d3.select("#query").style("display", "block");
      d3.select("#query").html(
        '<p id="prompt">Type "B" for blue, "G" for green</p>'
      );
    };

    var removeColor = function () {
      d3.select("#colorRect").style("display", "none");
      d3.select("#query").style("display", "none");
    };

    var finish = function () {
      $("body").unbind("keydown", response_handler);
      currentview = new showMainTaskInstructions();
    };

    var endExperiment = function () {
      $("body").unbind("keydown", response_handler); // Unbind the keydown event handler
      currentview = new Questionnaire(false); // Switch to a questionnaire view
    };

    next(); //begin the function by calling next

    // Register the response handler to handle key down events.
    $("body").focus().keydown(response_handler);

    // Load the html snippet into the body of the page
    psiTurk.showPage("stage_colorcategory.html");

    //this ensures the page is completely empty before any functions are called.
    d3.select("#colorRect").style("display", "none");
    d3.select("#query").style("display", "none");
    d3.select("#crosshairs").style("display", "none");
  };
  

  
  /*************
  * RALPH PAGE *
  **************/
  var RalphPage = function () { 

    // Load the html snippet into the body.
    psiTurk.showPage("stage_ralphBG.html");
    

    $(document).ready(function () {
      $(document).on("click", ".proceed-button", finish);
    });

    var finish = function () {
      currentview = new comprehensionPhase();
    };

  };


  /***********************
   * COMPREHENSION PHASE *
   ***********************/


    //These conditions are counterbalanced by hand. So notice the 7 targets go blue-green-blue-green-blue-green-blue and metal-wood-metal-wood-metal-wood. 
    //Just to ensure there are no weird learning associations formed. 
    //Additionally. There needed to be 7 trials to ensure we counter-balance appropriately. That way we swap between sound-color sufficient in terms of Ralph liking or not liking a description.
    // The order of the trials is stacked - After the bat position one and undermod demo - it goes sound-color-sound-color-sound-color, and filler-crit-filler-filler-crit-filler.

    var comprehensionPhase = function () {

      psiTurk.showPage("stage_comprehensionBG.html");

      d3.select("#stim1").style("display", "none");
      d3.select("#stim2").style("display", "none");
      d3.select("#stim3").style("display", "none");
      d3.select("#stim4").style("display", "none");
      d3.select("#stim5").style("display", "none");
      d3.select("#stim6").style("display", "none");

      d3.select("#targetIndicator1").style("display", "block").attr("x", 855).attr("y", 400);
      d3.select("#targetIndicator2").style("display", "block").attr("x", 855).attr("y", 400);
      d3.select("#targetIndicator3").style("display", "block").attr("x", 855).attr("y", 400);
      d3.select("#targetIndicator4").style("display", "block").attr("x", 855).attr("y", 400);
      d3.select("#targetIndicator5").style("display", "block").attr("x", 855).attr("y", 400);
      d3.select("#targetIndicator6").style("display", "block").attr("x", 855).attr("y", 400);

      //Filler. Sound Sufficient. Description: "the bat on the right". Ralph: No. I'm not in the same position as you.
      var trialOne = [
          blue_high[0], 
          wood_high[0], 
          blue_high[0], 
          wood_high[0],
          blue_high[0], // target
          metal_high[0], // target
          "thumbsDown",
      ];

      //Filler. Sound Sufficient. Description: "the metal bat". Correct answer: Ralph: Nice description. I found it very quickly. Good description.
      var trialTwo = [
        blue_high[0], 
        wood_high[0], 
        blue_high[0], 
        wood_high[0],
        blue_high[0], // target
        metal_high[0], // target
        "thumbsUp",
    ];

      //Filler. Sound sufficient. Description: "the green wood bat". Correct answer: No: Ralph: Shrug. Took me a second to find it. 
        var trialThree = [
          green_high[0], 
          metal_high[0], 
          green_high[0], 
          metal_high[0],
          green_high[0], // target
          wood_high[0], // target
          "shrug",
          ];

      //Critical. Base. Color Sufficient. Description: "the green and wooden bat" Correct Answer: Yes. Ralph: Nice description. I found it quickly.
      var trialFour = [
          blue_high[0], 
          metal_high[0], 
          blue_high[0], 
          wood_high[0],
          green_high[0], // target
          wood_high[0], // target
          "thumbsUp",
      ];

      //Filler. Sound Sufficient. Description: "the blue bat". Correct Answer: Yes. Ralph: Nice description. I found it quickly. 
      var trialFive = [
        green_high[0], 
        metal_high[0], 
        green_high[0], 
        metal_high[0],
        blue_high[0], // target
        metal_high[0], // target
        "thumbsUp", 
    ];

    //Critical. Sound Sufficient. Description: "the wood bat". Correct Answer: Yes. Ralph: Nice description. I found it quickly. 

      var trialSix = [
        green_high[0], 
        metal_high[0], 
        blue_high[0], 
        metal_high[0],
        green_high[0], // target
        wood_high[0], // target
        "thumbsUp", 
    ];
  

      /***************************************** Animation ***********************************************/
  
          // Define the starting and ending vertical positions for the circles' animation.
          // startY is set to a negative value equal to the viewport height to start the animation from above the viewport.
          const startY = -document.documentElement.clientHeight * 1.5;
          // endY is set to twice the viewport height to end the animation below the viewport.
          const endY = document.documentElement.clientHeight * 0.1;
  
          // Define the duration of each circle's falling animation in milliseconds.
          const duration = 1000; //
  
          // Calculate the total cycle time for all circles, which is the product of the number of circles and the duration of each animation.
          //const totalCycleTime = circles.length * duration;
  
          // Define the animate function that moves a circle element from startY to endY.
          function animate(element) {
          // Set the starting position of the circle to startY before the animation begins.
          element.setAttribute("y", startY);
  
          // Initialize a variable to track the start time of the animation.
          let startTime = null;
  
          // Define the step function to be executed for each frame of the animation.
          const step = (timestamp) => {
              // Set the startTime at the beginning of the animation.
              if (!startTime) startTime = timestamp;
  
              // Calculate the elapsed time since the animation started.
              const elapsedTime = timestamp - startTime;
              // Determine the progress of the animation as a fraction between 0 and 1.
              const progress = elapsedTime / duration;
  
              // Calculate the current vertical position of the circle based on the progress.
              const currentY = startY + (endY - startY) * progress;
              // Update the circle's position in the SVG.
              element.setAttribute("y", currentY);
  
              // If the animation is not yet complete, request the next animation frame.
              if (progress < 1) {
              requestAnimationFrame(step);
              }
          };
  
          // Start the animation by requesting the first animation frame.
          requestAnimationFrame(step);
          }
  
  
  
/**********************************************TRIAL ONE************************************************* */
  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialOne) {
              var trialPairs = [
              [trialOne[0], trialOne[1], 0],
              [trialOne[2], trialOne[3], 0],
              [trialOne[4], trialOne[5], 1],
              ];
              return trialPairs;
          };
  
  
      /****************************************** Presenting Stimuli *************************************************/
  
          var presentStimLeft1 = function (pres) {
              animate(document.getElementById("stim1"));
      
              d3.select("#stim1")
              .style("display", "block")
              .style("fill", pres[0])
              .attr("x", 0);
      
              if (pres[2] === 1) {
              d3.select("#targetIndicator1").style("display", "none").attr("x", 255);
              }
      
              setTimeout(function () {
              play_sound(pres[1]);
              }, 750); // timing of sound playing.
          };
      
          /*******************************************/
      
          var presentStimMid1 = function (pres) {
              animate(document.getElementById("stim1"));
      
              d3.select("#stim1")
              .style("display", "block")
              .style("fill", pres[0])
              .attr("x", 600);
      
              if (pres[2] === 1) {
              d3.select("#targetIndicator1").style("display", "none").attr("x", 855);
              }
      
              setTimeout(function () {
              play_sound(pres[1]);
              }, 750); // timing of sound playing.
          };
      
          /******************************************/
      
          var presentStimRight1 = function (pres) {
              animate(document.getElementById("stim1"));
      
              d3.select("#stim1")
              .style("display", "block")
              .style("fill", pres[0])
              .attr("x", 1200);
      
              if (pres[2] === 1) {
              d3.select("#targetIndicator1").style("display", "none").attr("x", 1455);
              }
      
              setTimeout(function () {
              play_sound(pres[1]);
              }, 750); // timing of sound playing.
          };
      
          /****************************************/
  
  
  
      /************************ Next Function ***********************/
  
      // The First Stim
  
      var response1 = 0; 

      //This ones not shuffled, because we want to do an orientation presentation. 
  
      var showStim1 = function (step) {
          if(step == 0) {
              step = step + 1;
                  trial = trialOne;
                      trialPairs = groupPairs(trial);
                              d3.select("#targetIndicator1").style("display", "none");
                                      presentStimLeft1(trialPairs[0]);
                                          setTimeout(function () {
                                              showStim1(step);
                                          }, 1500);
          } else if (step == 1) {
              step = step + 1;
                  presentStimMid1(trialPairs[1]);
                      setTimeout(function () {
                          showStim1(step);
                      }, 1500);
          } else if (step == 2) {
              step = step + 1;
                  presentStimRight1(trialPairs[2]);
                      setTimeout(function () {
                          showStim1(step);
                              d3.select("#stim1").style("display", "none");
                                  d3.select("#targetIndicator1").style("display", "block");
                      }, 1500); //after 2000ms, hide the bat and display the text-input.
          listening = true; // Enable response listening for the last trial.
          }
      }; 

      //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
      $(document).ready(function () {
        $(document).on("click", ".play-button1", function() {
            showStim1(0);
        });
    });
  
      var yesResponse1 = function () {
          d3.select("#feedback1")
          .style("color", "red")
          .text("Incorrect :( The bats are in a different position for Ralph and the speaker. A description of the location does not help! You'll need to click 'No' to proceed past this phase."); 
      }
  
      var noResponse1 = function () {
          d3.select("#feedback1")
          .style("color", "green")
          .text("Correct! The bats are in a different position for Ralph and the speaker. A description of the location does not help!");
          response1 = response1 + 1; //add 1 to response1.
      }
  
      $(".yes-button1").on("click", yesResponse1); 
  
      $(".no-button1").on("click", noResponse1);



        /**********************************************TRIAL TWO************************************************* */

  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialTwo) {
            var trialPairs = [
            [trialTwo[0], trialTwo[1], 0],
            [trialTwo[2], trialTwo[3], 0],
            [trialTwo[4], trialTwo[5], 1],
            ];
            return trialPairs;
        };

        var shufflePairs = function (trialPairs) {
          shuffledTrialPairs = _.shuffle(trialPairs);
          return shuffledTrialPairs;
        };


    /****************************************** Presenting Stimuli *************************************************/

        var presentStimLeft2 = function (pres) {
            animate(document.getElementById("stim2"));
    
            d3.select("#stim2")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 0);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator2").style("display", "none").attr("x", 255);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /*******************************************/
    
        var presentStimMid2 = function (pres) {
            animate(document.getElementById("stim2"));
    
            d3.select("#stim2")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 600);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator2").style("display", "none").attr("x", 855);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /******************************************/
    
        var presentStimRight2 = function (pres) {
            animate(document.getElementById("stim2"));
    
            d3.select("#stim2")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 1200);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator2").style("display", "none").attr("x", 1455);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /****************************************/



    /************************ Next Function ***********************/

    // The Second Stim

    var response2 = 0; 

    //This ones not shuffled, because we want to do an orientation presentation. 

    var showStim2 = function (step) {
        if(step == 0) {
            step = step + 1;
                trial = trialTwo;
                    trialPairs = groupPairs(trial);
                    shuffledStim = shufflePairs(trialPairs);
                            d3.select("#targetIndicator2").style("display", "none");
                                    presentStimLeft2(shuffledStim[0]);
                                        setTimeout(function () {
                                            showStim2(step);
                                        }, 1500);
        } else if (step == 1) {
            step = step + 1;
                presentStimMid2(shuffledStim[1]);
                    setTimeout(function () {
                        showStim2(step);
                    }, 1500);
        } else if (step == 2) {
            step = step + 1;
                presentStimRight2(shuffledStim[2]);
                    setTimeout(function () {
                        showStim2(step);
                            d3.select("#stim2").style("display", "none");
                                d3.select("#targetIndicator2").style("display", "block");
                    }, 1500); //after 2000ms, hide the bat and display the text-input.
        listening = true; // Enable response listening for the last trial.
        }
    }; 

    //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
    $(document).ready(function () {
      $(document).on("click", ".play-button2", function() {
          showStim2(0);
      });
  });

    var yesResponse2 = function () {
        d3.select("#feedback2")
        .style("color", "green")
        .text("Correct. Ralph found the bat quickly with this description."); 
            response2 = response2 + 1; //add 1 to response2.
    }

    
    var noResponse2 = function () {
        d3.select("#feedback2")
        .style("color", "red")
        .text("Incorrect :( Ralph found the bat quickly with this description.");
    }

    $(".yes-button2").on("click", yesResponse2); 

    $(".no-button2").on("click", noResponse2);








        /**********************************************TRIAL THREE************************************************* */

  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialThree) {
            var trialPairs = [
            [trialThree[0], trialThree[1], 0],
            [trialThree[2], trialThree[3], 0],
            [trialThree[4], trialThree[5], 1],
            ];
            return trialPairs;
        };

        var shufflePairs = function (trialPairs) {
          shuffledTrialPairs = _.shuffle(trialPairs);
    
          return shuffledTrialPairs;
        };


    /****************************************** Presenting Stimuli *************************************************/

        var presentStimLeft3 = function (pres) {
            animate(document.getElementById("stim3"));
    
            d3.select("#stim3")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 0);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator3").style("display", "none").attr("x", 255);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /*******************************************/
    
        var presentStimMid3 = function (pres) {
            animate(document.getElementById("stim3"));
    
            d3.select("#stim3")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 600);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator3").style("display", "none").attr("x", 855);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /******************************************/
    
        var presentStimRight3 = function (pres) {
            animate(document.getElementById("stim3"));
    
            d3.select("#stim3")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 1200);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator3").style("display", "none").attr("x", 1455);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /****************************************/



    /************************ Next Function ***********************/

    // The First Stim

    var response3 = 0; 

    //This ones not shuffled, because we want to do an orientation presentation. 

    var showStim3 = function (step) {
        if(step == 0) {
            step = step + 1;
                trial = trialThree;
                    trialPairs = groupPairs(trial);
                    shuffledStim = shufflePairs(trialPairs);
                            d3.select("#targetIndicator3").style("display", "none");
                                    presentStimLeft3(shuffledStim[0]);
                                        setTimeout(function () {
                                            showStim3(step);
                                        }, 1500);
        } else if (step == 1) {
            step = step + 1;
                presentStimMid3(shuffledStim[1]);
                    setTimeout(function () {
                        showStim3(step);
                    }, 1500);
        } else if (step == 2) {
            step = step + 1;
                presentStimRight3(shuffledStim[2]);
                    setTimeout(function () {
                        showStim3(step);
                            d3.select("#stim3").style("display", "none");
                                d3.select("#targetIndicator3").style("display", "block");
                    }, 1500); //after 2000ms, hide the bat and display the text-input.
        listening = true; // Enable response listening for the last trial.
        }
    }; 

    //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
    $(document).ready(function () {
      $(document).on("click", ".play-button3", function() {
          showStim3(0);
      });
  });

    var yesResponse3 = function () {
        d3.select("#feedback3")
        .style("color", "blue")
        .text("Meh. Ralph found the bat, but it took him a little long. You can move on to the next example."); 
            response3 = response3 + 1; //add 1 to response1.. 
    }

    var noResponse3 = function () {
        d3.select("#feedback3")
        .style("color", "blue")
        .text("Meh. Ralph found the bat, but it took him a little long. You can move on to the next example.");
          response3 = response3 + 1; //add 1 to response1.
    }

    $(".yes-button3").on("click", yesResponse3); 

    $(".no-button3").on("click", noResponse3);

  

/**********************************************TRIAL FOUR************************************************* */

  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialFour) {
            var trialPairs = [
            [trialFour[0], trialFour[1], 0],
            [trialFour[2], trialFour[3], 0],
            [trialFour[4], trialFour[5], 1],
            ];
            return trialPairs;
        };

        var shufflePairs = function (trialPairs) {
          shuffledTrialPairs = _.shuffle(trialPairs);
    
          return shuffledTrialPairs;
        };


    /****************************************** Presenting Stimuli *************************************************/

        var presentStimLeft4 = function (pres) {
            animate(document.getElementById("stim4"));
    
            d3.select("#stim4")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 0);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator4").style("display", "none").attr("x", 255);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /*******************************************/
    
        var presentStimMid4 = function (pres) {
            animate(document.getElementById("stim4"));
    
            d3.select("#stim4")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 600);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator4").style("display", "none").attr("x", 855);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /******************************************/
    
        var presentStimRight4 = function (pres) {
            animate(document.getElementById("stim4"));
    
            d3.select("#stim4")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 1200);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator4").style("display", "none").attr("x", 1455);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /****************************************/



    /************************ Next Function ***********************/

    // The First Stim

    var response4 = 0; 

    //This ones not shuffled, because we want to do an orientation presentation. 

    var showStim4 = function (step) {
        if(step == 0) {
            step = step + 1;
                trial = trialFour;
                    trialPairs = groupPairs(trial);
                    shuffledStim = shufflePairs(trialPairs);
                            d3.select("#targetIndicator4").style("display", "none");
                                    presentStimLeft4(shuffledStim[0]);
                                        setTimeout(function () {
                                            showStim4(step);
                                        }, 1500);
        } else if (step == 1) {
            step = step + 1;
                presentStimMid4(shuffledStim[1]);
                    setTimeout(function () {
                        showStim4(step);
                    }, 1500);
        } else if (step == 2) {
            step = step + 1;
                presentStimRight4(shuffledStim[2]);
                    setTimeout(function () {
                        showStim4(step);
                            d3.select("#stim4").style("display", "none");
                                d3.select("#targetIndicator4").style("display", "block");
                    }, 1500); //after 2000ms, hide the bat and display the text-input.
        listening = true; // Enable response listening for the last trial.
        }
    }; 

    //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
    $(document).ready(function () {
      $(document).on("click", ".play-button4", function() {
          showStim4(0);
      });
  });

    var yesResponse4 = function () {
        d3.select("#feedback4")
        .style("color", "green")
        .text("Correct! Ralph found the bat quickly with this description."); 
            response4 = response4 + 1; //add 1 to response1.
    }

    var noResponse4 = function () {
        d3.select("#feedback4")
        .style("color", "red")
        .text("Incorrect :( In fact, Ralph found the bat quickly with this descripton.");
    }

    $(".yes-button4").on("click", yesResponse4); 

    $(".no-button4").on("click", noResponse4);





  /**********************************************TRIAL FIVE************************************************* */

  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialFive) {
            var trialPairs = [
            [trialFive[0], trialFive[1], 0],
            [trialFive[2], trialFive[3], 0],
            [trialFive[4], trialFive[5], 1],
            ];
            return trialPairs;
        };

        var shufflePairs = function (trialPairs) {
          shuffledTrialPairs = _.shuffle(trialPairs);
    
          return shuffledTrialPairs;
        };


    /****************************************** Presenting Stimuli *************************************************/

        var presentStimLeft5 = function (pres) {
            animate(document.getElementById("stim5"));
    
            d3.select("#stim5")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 0);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator5").style("display", "none").attr("x", 255);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /*******************************************/
    
        var presentStimMid5 = function (pres) {
            animate(document.getElementById("stim5"));
    
            d3.select("#stim5")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 600);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator5").style("display", "none").attr("x", 855);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /******************************************/
    
        var presentStimRight5 = function (pres) {
            animate(document.getElementById("stim5"));
    
            d3.select("#stim5")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 1200);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator5").style("display", "none").attr("x", 1455);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /****************************************/



    /************************ Next Function ***********************/

    // The First Stim

    var response5 = 0; 

    //This ones not shuffled, because we want to do an orientation presentation. 

    var showStim5 = function (step) {
        if(step == 0) {
            step = step + 1;
                trial = trialFive;
                    trialPairs = groupPairs(trial);
                    shuffledStim = shufflePairs(trialPairs);
                            d3.select("#targetIndicator5").style("display", "none");
                                    presentStimLeft5(shuffledStim[0]);
                                        setTimeout(function () {
                                            showStim5(step);
                                        }, 1500);
        } else if (step == 1) {
            step = step + 1;
                presentStimMid5(shuffledStim[1]);
                    setTimeout(function () {
                        showStim5(step);
                    }, 1500);
        } else if (step == 2) {
            step = step + 1;
                presentStimRight5(shuffledStim[2]);
                    setTimeout(function () {
                        showStim5(step);
                            d3.select("#stim5").style("display", "none");
                                d3.select("#targetIndicator5").style("display", "block");
                    }, 1500); //after 2000ms, hide the bat and display the text-input.
        listening = true; // Enable response listening for the last trial.
        }
    }; 

    //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
    $(document).ready(function () {
      $(document).on("click", ".play-button5", function() {
          showStim5(0);
      });
  });

    var yesResponse5 = function () {
        d3.select("#feedback5")
        .style("color", "green")
        .text("Correct! Ralph found the bat quickly with this description."); 
            response5 = response5 + 1; //add 1 to response1.
    }

    var noResponse5 = function () {
        d3.select("#feedback5")
        .style("color", "red")
        .text("Incorrect :( Ralph found the bat quickly with this descripton.");
    }

    $(".yes-button5").on("click", yesResponse5); 

    $(".no-button5").on("click", noResponse5); 



 /**********************************************TRIAL SIX ************************************************* */

  
      /************************************** Sorting Stimuli ********************************************/
  
          //First, we're going to group items within trials into pairs. Note that we are not shuffling them this time - because we are eliciting a position description.
  
          //group into pairs
  
          var groupPairs = function (trialSix) {
            var trialPairs = [
            [trialSix[0], trialSix[1], 0],
            [trialSix[2], trialSix[3], 0],
            [trialSix[4], trialSix[5], 1],
            ];
            return trialPairs;
        };

        var shufflePairs = function (trialPairs) {
          shuffledTrialPairs = _.shuffle(trialPairs);
    
          return shuffledTrialPairs;
        };


    /****************************************** Presenting Stimuli *************************************************/

        var presentStimLeft6 = function (pres) {
            animate(document.getElementById("stim6"));
    
            d3.select("#stim6")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 0);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator6").style("display", "none").attr("x", 255);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /*******************************************/
    
        var presentStimMid6 = function (pres) {
            animate(document.getElementById("stim6"));
    
            d3.select("#stim6")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 600);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator6").style("display", "none").attr("x", 855);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /******************************************/
    
        var presentStimRight6 = function (pres) {
            animate(document.getElementById("stim6"));
    
            d3.select("#stim6")
            .style("display", "block")
            .style("fill", pres[0])
            .attr("x", 1200);
    
            if (pres[2] === 1) {
            d3.select("#targetIndicator6").style("display", "none").attr("x", 1455);
            }
    
            setTimeout(function () {
            play_sound(pres[1]);
            }, 750); // timing of sound playing.
        };
    
        /****************************************/



    /************************ Next Function ***********************/

    // The First Stim

    var response6 = 0; 

    //This ones not shuffled, because we want to do an orientation presentation. 

    var showStim6 = function (step) {
        if(step == 0) {
            step = step + 1;
                trial = trialSix;
                    trialPairs = groupPairs(trial);
                    shuffledStim = shufflePairs(trialPairs);
                            d3.select("#targetIndicator6").style("display", "none");
                                    presentStimLeft6(shuffledStim[0]);
                                        setTimeout(function () {
                                            showStim6(step);
                                        }, 1500);
        } else if (step == 1) {
            step = step + 1;
                presentStimMid6(shuffledStim[1]);
                    setTimeout(function () {
                      showStim6(step);
                    }, 1500);
        } else if (step == 2) {
            step = step + 1;
                presentStimRight6(shuffledStim[2]);
                    setTimeout(function () {
                        showStim6(step);
                            d3.select("#stim6").style("display", "none");
                                d3.select("#targetIndicator6").style("display", "block");
                    }, 1500); //after 2000ms, hide the bat and display the text-input.
        listening = true; // Enable response listening for the last trial.
        }
    }; 

    //call an anon function, otherwise it plays as soon as the page loads. This took me waaaayyyyyy too long to figure out. 
    $(document).ready(function () {
      $(document).on("click", ".play-button6", function() {
          showStim6(0);
      });
  });

    var yesResponse6 = function () {
        d3.select("#feedback6")
        .style("color", "green")
        .text("Correct! Ralph found the bat quickly with this description."); 
            response6 = response6 + 1; //add 1 to response.
    }

    var noResponse6 = function () {
        d3.select("#feedback6")
        .style("color", "red")
        .text("Incorrect :( Actually, Ralph found the bat quickly with this descripton.");
    }

    $(".yes-button6").on("click", yesResponse6); 

    $(".no-button6").on("click", noResponse6);



  $(document).ready(function () {
      $(document).on("click", ".complete-button", finish);
  });


//finish function (finally)
    var finish = function () { 
      if (response1 > 0 && response2 >= 0 && response3 >= 0 && response4 >= 0 && response5 >= 0 && response6 >= 0) {
          currentview = new showReadyPage();
      } else {
          alert("At least one of the answers remains incorrect. You'll need to click the correct answers on all the examples to proceed.")
      }
  };
}; 



  /***************************
   * DESCRIPTION TASK - MAIN *
   ***************************/

  var DescriptionTask = function () {
    var listening = false;

    var thumbsDownCount = 0; 

    //finish function to end the experiment

    var finish = function () {
      $("body").unbind("keydown", response_handler); // Unbind the keydown event handler
      currentview = new Questionnaire(true); // Switch to a questionnaire view
    };

    /******************************** Populating the Filler fillers **********************************/

    var make_filler = function (
      color1,
      color2,
      colorT,
      sound1,
      sound2,
      soundT,
      sufficient, //so this indicates whether the sufficient dimension is colour or sound.
      discriminability,
      relevancy,
      trialType //fillers are always discriminable and relevant - so we don't need to code for that.
    ) {
      var colors = [];
      var sounds = [];
      //var order = _.shuffle([0, 1, 2]); // just randomises the numbers.

      colors.push(_.shuffle(color1)[0]);
      colors.push(_.shuffle(color2)[0]);
      colors.push(_.shuffle(colorT)[0]);

      sounds.push(_.shuffle(sound1)[0]);
      sounds.push(_.shuffle(sound2)[0]);
      sounds.push(_.shuffle(soundT)[0]);

      // [First, Second, Third, Fourth Object, Sufficient Dimension (Color/Sound), Target discriminability (high/low), Target_color, Target_sound]

      return [
        colors[0],
        sounds[0],
        colors[1],
        sounds[1],
        colors[2],
        sounds[2],
        sufficient,
        discriminability,
        relevancy,
        trialType,
        colors[2],
        sounds[2],
      ];
    };

    var make_fillers = function (n) {
      // so the next chunk goes through each dimension/condition one at a time.

      /********************MATERIAL**********************/

      //In the material trial, the material is always sufficient, while color is never sufficient.

      /*
       ******* METAL
       */

      if (metal_high.length > 0 && metal_low.length > 0) {
        var sounds = [wood_high]; //fill with high elements of all other stims.
        var colors = [blue_high, green_high]; // take four high different colours (colour sufficient)

        // MATERIAL SUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          fillers.push(
            make_filler(
              colors[corder[0]],
              colors[corder[0]],
              colors[corder[0]], //colour non-unique and identical
              sounds[sorder[0]],
              sounds[sorder[0]],
              metal_high, // sound unique and clearly discriminable
              "sound", //sound sufficient
              "high", // always high discriminability in fillers
              "relevant", //always relevent in fillers
              "filler", //indicating that this is a filler trial
            )
          );
        }
      } else {
        missing.push("M");
      } //could put logic here that pushes missing and then moves on to the next dimension, until it reaches one where there is both high and low.

      /*
       ******** WOOD
       */

      if (wood_high.length > 0 && wood_low.length > 0) {
        var sounds = [metal_high]; //fill with high elements of all other stims.
        var colors = [blue_high, green_high]; // take four high different colours (colour sufficient)

        //SOUND SUFFICIENT, COLOUR INSUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          fillers.push(
            make_filler(
              colors[corder[0]],
              colors[corder[0]],
              colors[corder[0]], //colour non-unique and identical
              sounds[sorder[0]],
              sounds[sorder[0]],
              wood_high, // sound unique and discriminable
              "sound", //sound sufficient
              "high", // always high discriminability in fillers
              "relevant", //always relevent in fillers
              "filler", //indicating that this is a filler trial
            )
          );
        }
      } else {
        missing.push("W");
      } //could put logic here that pushes missing and then moves on to the next dimension, until it reaches one where there is both high and low.

      /********************COLOR**********************/

      /*
       ******** green
       */

      if (green_low.length > 0 && green_high.length > 0) {
        var sounds = [wood_high, metal_high];
        var colors = [blue_high];

        //COLOR SUFFICIENT, SOUND INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          fillers.push(
            make_filler(
              colors[corder[0]],
              colors[corder[0]],
              green_high, // color unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              sounds[sorder[0]], //sound non-unique and identical
              "color", //color sufficient
              "high", // always high discriminability in fillers
              "relevant", //always relevent in fillers
              "filler", //indicating that this is a filler trial
            )
          );
        }
      } else {
        missing.push("G");
      }

      /*
       ******** blue
       */

      if (blue_low.length > 0 && blue_high.length > 0) {
        var sounds = [wood_high, metal_high];
        var colors = [green_high];

        //COLOR SUFFICIENT, SOUND INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          fillers.push(
            make_filler(
              colors[corder[0]],
              colors[corder[0]],
              blue_high, // color unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              sounds[sorder[0]], //sound non-unique and identical
              "color", //color sufficient
              "high", // always high discriminability in fillers
              "relevant", //always relevent in fillers
              "filler", //indicating that this is a filler trial
            )
          );
        }
      } else {
        missing.push("B");
      }
    };

    make_fillers(3); // Creating 3 of each filler.

    fillers = _.shuffle(fillers);

    /******************************** Populating the Critical Trials ********************************* */

    //We're presenting three stims, but we have four colours and sounds - from the unique continuums. I am going to shuffle all four of the stims, then select out three of the shuffled colors to build the trials. I've commented where/how I've done this in the function. It's very simple - I've just pushed everything except the stim in position 0 (which varies randomly due to the shuffling)

    var make_trial = function (
      color1,
      color2,
      colorT,
      sound1,
      sound2,
      soundT,
      sufficient, //so this indicates whether the sufficient dimension is colour or sound.
      discriminability, // and this indicates whether the target dimension in high/low.
      relevancy, // whether the discriminability manipulation is relevant to identifying the target.
      trialType
    ) {
      var colors = [];
      var sounds = [];
     // var order = _.shuffle([0, 1, 2]); // just randomises the numbers.

      colors.push(_.shuffle(color1)[0]);
      colors.push(_.shuffle(color2)[0]);
      colors.push(_.shuffle(colorT)[0]);

      sounds.push(_.shuffle(sound1)[0]);
      sounds.push(_.shuffle(sound2)[0]);
      sounds.push(_.shuffle(soundT)[0]);

      // [First, Second, Third, Fourth Object, Sufficient Dimension (Color/Sound), Target discriminability (high/low), Target_color, Target_sound]

      return [
        colors[0],
        sounds[0],
        colors[1],
        sounds[1],
        colors[2],
        sounds[2],
        sufficient,
        discriminability,
        relevancy,
        trialType,
        colors[2],
        sounds[2],
      ];
    };

    var make_trials = function (n) {
      // so the next chunk goes through each dimension/condition one at a time.

      /********************MATERIAL**********************/

      /*
       ******* METAL
       */

      if (metal_high.length > 0 && metal_low.length > 0) {
        var sounds = [wood_high]; //fill with high elements of all other stims.
        var colors = [blue_high, green_high]; // take four high different colours (colour sufficient)

        //COLOUR SUFFICIENT, SOUND INSUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              colors[corder[1]], //target color unique
              sounds[sorder[0]],
              metal_high,
              metal_low, //non-unique sound.
              "color", // color sufficient
              "low", //low target
              "irrelevant",
              "critical"
            )
          );
        }

        //SOUND SUFFICIENT, COLOUR INSUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[1]],
              colors[corder[1]], //colour non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              metal_high, // sound unique
              "sound", //sound sufficient
              "high", //high target
              "base",
              "critical"
            )
          );

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[1]],
              colors[corder[1]], //colour non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              metal_low, //sound unique
              "sound", //sound sufficient
              "low", //low target
              "relevant",
              "critical"
            )
          );
        }
      } else {
        missing.push("M");
      } //could put logic here that pushes missing and then moves on to the next dimension, until it reaches one where there is both high and low.

      /*
       ******** WOOD
       */

      if (wood_high.length > 0 && wood_low.length > 0) {
        var sounds = [metal_high]; //fill with high elements of all other stims.
        var colors = [blue_high, green_high]; // take four high different colours (colour sufficient)

        //COLOUR SUFFICIENT, SOUND INSUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              colors[corder[1]], //target color unique
              sounds[sorder[0]],
              wood_high,
              wood_low, //non-unique sound.
              "color", // color sufficient
              "low", //low target
              "irrelevant", // discriminability manipulation not necessary to establish reference: irrelevant.
              "critical"
            )
          );
        }

        //SOUND SUFFICIENT, COLOUR INSUFFICIENT
        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0]);
          corder = _.shuffle([0, 1]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[1]],
              colors[corder[1]], //colour non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              wood_high, // sound unique
              "sound", //sound sufficient
              "high", //high target
              "base", // no discriminability manipulation
              "critical"
            )
          );
          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[1]],
              colors[corder[1]], //colour non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              wood_low, //sound unique
              "sound", //sound sufficient
              "low", //low target
              "relevant",
              "critical"
            )
          );
        }
      } else {
        missing.push("W");
      } //could put logic here that pushes missing and then moves on to the next dimension, until it reaches one where there is both high and low.

      /********************COLOR**********************/

      /*
       ******** green
       */

      if (green_low.length > 0 && green_high.length > 0) {
        var sounds = [wood_high, metal_high];
        var colors = [blue_high];

        //COLOR SUFFICIENT, SOUND INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              green_high, // color unique
              sounds[sorder[0]],
              sounds[sorder[1]],
              sounds[sorder[1]], //sound non-unique
              "color", //color sufficient
              "high", //color high
              "base",
              "critical"
            )
          );

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              green_low, //color unique (low)
              sounds[sorder[0]],
              sounds[sorder[1]],
              sounds[sorder[1]], // sound non-unique
              "color", // color sufficient
              "low", //color low
              "relevant",
              "critical"
            )
          );
        }

        //SOUND SUFFICIENT, COLOUR INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          trials.push(
            make_trial(
              colors[corder[0]],
              green_high,
              green_low, // color non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              sounds[sorder[1]], // sound unique
              "sound",
              "low",
              "irrelevant",
              "critical"
            )
          );
        }
      } else {
        missing.push("G");
      }

      /*
       ******** blue
       */

      if (blue_low.length > 0 && blue_high.length > 0) {
        var sounds = [wood_high, metal_high];
        var colors = [green_high];

        //COLOR SUFFICIENT, SOUND INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              blue_high, // color unique
              sounds[sorder[0]],
              sounds[sorder[1]],
              sounds[sorder[1]], //sound non-unique
              "color", //color sufficient
              "high", //color high
              "base",
              "critical"
            )
          );

          trials.push(
            make_trial(
              colors[corder[0]],
              colors[corder[0]],
              blue_low, //color unique (low)
              sounds[sorder[0]],
              sounds[sorder[1]],
              sounds[sorder[1]], // sound non-unique
              "color", // color sufficient
              "low", //color low
              "relevant",
              "critical"
            )
          );
        }

        //SOUND SUFFICIENT, COLOUR INSUFFICIENT

        for (let i = 0; i < n; i++) {
          sorder = _.shuffle([0, 1]);
          corder = _.shuffle([0]);

          trials.push(
            make_trial(
              colors[corder[0]],
              blue_high,
              blue_low, // color non-unique
              sounds[sorder[0]],
              sounds[sorder[0]],
              sounds[sorder[1]], // sound unique
              "sound",
              "low",
              "irrelevant",
              "critical"
            )
          );
        }
      } else {
        missing.push("B");
      }
    };

    make_trials(4); //so each person runs through it twice

    var first = fillers.shift(); 

    var last = fillers.pop(); 

    trials = trials.concat(fillers); 

    trials = _.shuffle(trials); 

    var start = [first, last];   // this actually runs the color one first, then the sounds. 

    trials = start.concat(trials); 

    /***************************************** Animation ***********************************************/

    // Define the starting and ending vertical positions for the circles' animation.
    // startY is set to a negative value equal to the viewport height to start the animation from above the viewport.
    const startY = -document.documentElement.clientHeight * 1.5;
    // endY is set to twice the viewport height to end the animation below the viewport.
    const endY = document.documentElement.clientHeight * 0.1;

    // Define the duration of each circle's falling animation in milliseconds.
    const duration = 1000; //

    // Calculate the total cycle time for all circles, which is the product of the number of circles and the duration of each animation.
    //const totalCycleTime = circles.length * duration;

    // Define the animate function that moves a circle element from startY to endY.
    function animate(element) {
      // Set the starting position of the circle to startY before the animation begins.
      element.setAttribute("y", startY);

      // Initialize a variable to track the start time of the animation.
      let startTime = null;

      // Define the step function to be executed for each frame of the animation.
      const step = (timestamp) => {
        // Set the startTime at the beginning of the animation.
        if (!startTime) startTime = timestamp;

        // Calculate the elapsed time since the animation started.
        const elapsedTime = timestamp - startTime;
        // Determine the progress of the animation as a fraction between 0 and 1.
        const progress = elapsedTime / duration;

        // Calculate the current vertical position of the circle based on the progress.
        const currentY = startY + (endY - startY) * progress;
        // Update the circle's position in the SVG.
        element.setAttribute("y", currentY);

        // If the animation is not yet complete, request the next animation frame.
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      // Start the animation by requesting the first animation frame.
      requestAnimationFrame(step);
    }

    /************************************** Sorting Stimuli ********************************************/

    //First, we're going to group items within trials into pairs, then shuffle them.

    //group into pairs

    var groupPairs = function (trials) {
      var trialPairs = [
        [trials[0], trials[1], 0],
        [trials[2], trials[3], 0],
        [trials[4], trials[5], 1],
      ];
      return trialPairs;
    };

    //Now shuffle them:

    var shufflePairs = function (trialPairs) {
      shuffledTrialPairs = _.shuffle(trialPairs);

      return shuffledTrialPairs;
    };


    /****************************************** Presenting Stimuli *************************************************/

    var presentStimLeft = function (pres) {
      animate(document.getElementById("stim"));

      d3.select("#stim")
        .style("display", "block")
        .style("fill", pres[0])
        .attr("x", 0);

      if (pres[2] === 1) {
        d3.select("#targetIndicator").style("display", "none").attr("x", 255);
      }

      setTimeout(function () {
        play_sound(pres[1]);
      }, 750); // timing of sound playing.
    };

    /*******************************************/

    var presentStimMid = function (pres) {
      animate(document.getElementById("stim"));

      d3.select("#stim")
        .style("display", "block")
        .style("fill", pres[0])
        .attr("x", 600);

      if (pres[2] === 1) {
        d3.select("#targetIndicator").style("display", "none").attr("x", 855);
      }

      setTimeout(function () {
        play_sound(pres[1]);
      }, 750); // timing of sound playing.
    };

    /******************************************/

    var presentStimRight = function (pres) {
      animate(document.getElementById("stim"));

      d3.select("#stim")
        .style("display", "block")
        .style("fill", pres[0])
        .attr("x", 1200);

      if (pres[2] === 1) {
        d3.select("#targetIndicator").style("display", "none").attr("x", 1455);
      }

      setTimeout(function () {
        play_sound(pres[1]);
      }, 750); // timing of sound playing.
    };

    /****************************************/

    //setting up variables for the midway point for break.

    var nTrials;
    var breakTaken = false;

    //Define nTrials for subsequent use
    var nTrials = trials.length;

    var next = function (step) {
      d3.select("#feedback").text("");
      if ((trials.length === 0 && step == 0) || (thumbsDownCount > 9)) {
        finish();

        //if we're half way through and we haven't taken a break
      } else if (trials.length === Math.floor(nTrials / 2) && !breakTaken) {
        //Take a break and set that we have
        breakTaken = true;
        showBreakScreen();

      } else if (step == 0) {
        step = step + 1;
        trial = trials.shift();
        trialPairs = groupPairs(trial);
        shuffledStim = shufflePairs(trialPairs);

        d3.select("#targetIndicator").style("display", "none");
        d3.select("#text_input").style("display", "none");

        presentStimLeft(shuffledStim[0]);

        setTimeout(function () {
          next(step);
        }, 2500);
      } else if (step == 1) {
        step = step + 1;


        presentStimMid(shuffledStim[1]);

        setTimeout(function () {
          next(step);
        }, 2500);
      } else if (step == 2) {
        step = step + 1;

        presentStimRight(shuffledStim[2]);

        setTimeout(function () {
          next(step);
          d3.select("#stim").style("display", "none");
          d3.select("#targetIndicator").style("display", "block");
          d3.select("#text_input").style("display", "block");
        }, 2500); //after 2000ms, hide the bat and display the text-input.

        listening = true; // Enable response listening for the last trial.
      }
    };

    // Define a function 'response_handler' to process responses
    var response_handler = function (e) {
      if (!listening) return; // Exit if not ready to listen for responses

      // Get the value from the input field with id "user-input"
      var response = document.getElementById("user-input").value;

      if (response.length > 0) {
        // Proceed if there is a response
        listening = false; // Stop listening for further input

        // Record trial data using PsiTurk
        psiTurk.recordTrialData({
          phase: "description",
          response: response, // user input.
          target: trialPairs[2], // this contains the last one in trial pairs - which is the target.
          sufficient: trial[6],
          discriminability: trial[7],
          relevance: trial[8],
          trial: trial[9],
          fullTrial: trialPairs, //this contains the whole trial before it gets shuffled.
        });

        document.getElementById("user-input").value = ""; // Clear the input field
        
        feedback(response);
        setTimeout(function(){ next(0); }, 500);
      }
    };


    var thumbs_up = function(){
      d3.select("#feedback").text("👍"); 
    };

    d3.select("body")
    .insert("div", ":first-child")
    .attr("id", "break-screen")
    .html(
      "<h2>Time for a break!</h2><p>You're exactly halfway through this final phase of the experiment. You will likely finish in a little under ten minutes. Please take a break now if you would like</p><button id='continue-btn'>Continue</button>"
    );

    var thumbs_down = function(){
      d3.select("#feedback").text("👎"); 
      thumbsDownCount++; 
    };

    var shrug = function(){
        d3.select("#feedback").text("¯\\_(ツ)_/¯");
    };


    var feedback = function(response){
        if(trial[9]=='critical'){ // If it's critical
            if(trial[6]=='color'){  // If Color sufficient
                if( blue_low.includes(trialPairs[2][0]) || blue_high.includes(trialPairs[2][0]) ){  // and target is blue
                    if(response.includes('blue' || 'Blue' || 'BLUE')){  // and they say blue, thumbs up
                        thumbs_up();
                    } else { // thumbs down
                        thumbs_down();
                    }
                } else { // if target green
                    if(response.includes('green' || 'GREEN' || 'Green')){ // and they respond green
                        thumbs_up();
                    } else {
                        thumbs_down();
                    }
                }
            } else { // So sound is sufficient
                if(wood_low.includes(trialPairs[2][1]) || wood_high.includes(trialPairs[2][1])){ // and target is wood
                    if(response.includes('wood' || 'Wood' || 'WOOD')){ // and they say wood
                        thumbs_up(); 
                    } else {
                        thumbs_down();
                    }
                } else { // if target is metal
                    if(response.includes('metal' || 'Metal' || 'METAL')){
                        thumbs_up();
                    } else {
                        thumbs_down();
                    }
                }
            }
        } else {
            over = response.includes('wood' || 'Wood' || 'WOOD') + response.includes('metal' || 'Metal' || 'METAL') + response.includes('blue' || 'Blue' || 'BLUE') + response.includes('green' || 'GREEN' || 'Green');
            if(over > 1){
                shrug();
            } else {
                if(trial[6]=='color'){  // If Color sufficient
                    if( blue_low.includes(trialPairs[2][0]) || blue_high.includes(trialPairs[2][0]) ){  // and target is blue
                        if(response.includes('blue' || 'BLUE' || 'Blue')){  // and they say blue, thumbs up
                            thumbs_up();
                        } else { // thumbs down
                            thumbs_down();
                        }
                    } else { // if target green
                        if(response.includes('green' || 'GREEN' || 'Green')){ // and they respond green
                            thumbs_up();
                        } else {
                            thumbs_down();
                        }
                    }
                } else { // So sound is sufficient
                    if(wood_low.includes(trialPairs[2][1]) || wood_high.includes(trialPairs[2][1])){ // and target is wood
                        if(response.includes('wood' || 'Wood' || 'WOOD')){ // and they say wood
                            thumbs_up(); 
                        } else {
                            thumbs_down();
                        }
                    } else { // if target is metal
                        if(response.includes('metal' || 'Metal' || 'METAL')){
                            thumbs_up();
                        } else {
                            thumbs_down();
                        }
                    }
                }
            }
        }
    };

    var showBreakScreen = function () {
      // Hide experiment elements - we can still leave the stuff at the top of the page, that's fine I guess.
      d3.select("#stim").style("display", "none");
      d3.select("#targetIndicator").style("display", "none");
      d3.select("#text_input").style("display", "none");

      //show break message
      d3.select("body")
        .insert("div", ":first-child")
        .attr("id", "break-screen")
        .html(
          "<h2>Time for a break!</h2><p>You're exactly halfway through this final phase of the experiment. You will likely finish in a little under eight minutes. Please take a break now if you would like</p><button id='continue-btn'>Continue</button>"
        );

      //and throw in an event listener for the continue button, which clears the screen and runs the next trial when clicked.
      d3.select("#continue-btn").on("click", function () {
        d3.select("#break-screen").remove();
        next(0); // Continue with the next trial
      });
    };

    // Load the HTML content for the experiment stage
    psiTurk.showPage("stage.html");

    // Bind the 'response_handler' function to the click event of elements with class "submit-button"
    $(".submit-button").on("click", response_handler);

    // Begin the test by calling the next function for the filler (filler appears first)
    next(0);
  };

  /****************
   * Questionnaire *
   ****************/

  var Questionnaire = function (pass) {
    var error_message =
      "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


      record_responses = function() {

        psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

        $('input').each( function(i, val) {
            psiTurk.recordTrialData(["JUNIPER",this.id, this.value]);
        });
        $('select').each( function(i, val) {
            psiTurk.recordTrialData(["JUNIPER",this.id, this.value]);        
        });

    };

        // Load the questionnaire snippet
        psiTurk.showPage("postquestionnaire.html");
        psiTurk.recordTrialData({ phase: "postquestionnaire", status: "begin" });


    completeHIT = function () {
      psiTurk.teardownTask();
      // save data one last time here?
      if (pass) {
        window.location =
          "https://app.prolific.com/submissions/complete?cc=CEMPBMPR";
      } else {
        window.location =
          "https://app.prolific.com/submissions/complete?cc=CKYON2LL";
      }
    };

    $("#next").click(function () {
      record_responses();
      //currentview = new Practice();
      psiTurk.saveData({
              success: function(){
                  completeHIT();
                  //psiTurk.completeHIT();
              }, 
              error: prompt_resubmit});
  });


    prompt_resubmit = function () {
      document.body.innerHTML = error_message;
      $("#resubmit").click(resubmit);
    };

    resubmit = function () {
      document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
      reprompt = setTimeout(prompt_resubmit, 10000);

      psiTurk.Data({
        success: function () {
          clearInterval(reprompt);
          //psiTurk.computeBonus("compute_bonus", function () {});
        },
        error: prompt_resubmit,
      });
    };
  };
















  

  // Task object to keep track of the current phase
  var currentview;

  /*******************
   * Run Task
   ******************/
  // In this example `task.js file, an anonymous async function is bound to `window.on('load')`.
  // The async function `await`s `init` before continuing with calling `psiturk.doInstructions()`.
  // This means that in `init`, you can `await` other Promise-returning code to resolve,
  // if you want it to resolve before your experiment calls `psiturk.doInstructions()`.

  // The reason that `await psiTurk.preloadPages()` is not put directly into the
  // function bound to `window.on('load')` is that this would mean that the pages
  // would not begin to preload until the window had finished loading -- an unnecessary delay.

  //Now let's load a bunch of instruction pages before and after each phase.

  $(window).on("load", async () => {
    await init;
    psiTurk.doInstructions(
      beginInstructionPages, // a list of pages you want to display in sequence
      function () {
        currentview = new audioCheck(); //audio check before anything else to avoid wasting peoples time.
      }
    );
  });

  function showColorEnvironmentInstructions() {
    psiTurk.doInstructions(
      colorEnvInstuctionPages, // a list of pages you want to display in sequence/
      function () {
        currentview = new colorCategoryEnvironment();
      }
    );
  }

  function showColorStaircaseInstructions() {
    psiTurk.doInstructions(
      colorCatInstructionPages, // a list of pages you want to display in sequence/
      function () {
        currentview = new colorStaircase();
      }
    );
  }

  function showMaterialEnvironmentInstructions() {
    psiTurk.doInstructions(
      materialEnvInstructionPages, // a list of pages you want to display in sequence/
      function () {
        currentview = new materialCategoryEnvironment();
      }
    );
  }

  function showMaterialCatInstructions() {
    psiTurk.doInstructions(
      materialCatInstructionPages, // a list of pages you want to display in sequence/
      function () {
        currentview = new materialStaircase();
      }
    );
  }

  function showMainTaskInstructions() {
    psiTurk.doInstructions(
      mainTaskInstructionPages, // a list of pages you want to display in sequence/
      function () {
        currentview = new RalphPage();
      }
    );
  }

  function showReadyPage() {
    psiTurk.doInstructions(
      ReadyPage, // a list of pages you want to display in sequence/
      function () {
        currentview = new DescriptionTask();
      }
    );
  }
};

//start running the experiment.
BlueGreen_WoodGlass();