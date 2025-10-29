/***********************
 * List 1: orientation *
 ***********************/

// Initalize psiturk object
const psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

const orientationExp = function () {
  //record the condition
  psiTurk.recordTrialData({
    condition: "orientation",
  });

  const pages = [
    "instructions/readyBeginOrientation.html",

    "stages/compCheck/compCheckOrientation.html",

    "stages/orientationStages/setSize3.html",
    "stages/orientationStages/setSize6.html",
    "stages/orientationStages/setSize9.html",
    "stages/orientationStages/setSize16.html",

    "postquestionnaire.html",
  ];

  // preload pages
  const init = (async () => {
    await psiTurk.preloadPages(pages);
  })();

  // preload images
  function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
  }

  preload_image("static/stimuli/orientShapes/pentagonvertical.png");
  preload_image("static/stimuli/orientShapes/pentagonhorizontal.png");

  preload_image("static/stimuli/orientShapes/squarevertical.png");
  preload_image("static/stimuli/orientShapes/squarehorizontal.png");

  preload_image("static/stimuli/orientShapes/circlevertical.png");
  preload_image("static/stimuli/orientShapes/circlehorizontal.png");

  preload_image("static/stimuli/orientShapes/hexagonvertical.png");
  preload_image("static/stimuli/orientShapes/hexagonhorizontal.png");

  const beginInstructionPages = ["instructions/readyBeginOrientation.html"];

  listening = true;

  let crits = [];
  let fillers = [];
  let trials = [];

  let nTimesFailedComprehension = 0;

  const nouns = ["circle", "square", "pentagon", "hexagon"];

  /******************************************
   * Constructing Critical Trials
   *****************************************/

  /*******
   * Set Size 3
   */

  const constructSet3Trials = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet3Trials = function (n) {
    // ZERO DISTRACTOR
    const orients = ["horizontal", "vertical"];
    const positions = ["one", "two", "three"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet3Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must be same as other surrounding

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must be same as other surrounding

          "setSize3",
          "distractors0",
          "orientRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet3Trials(
          positions[positionsRand[0]], //position unique
          shapes[shapesRand[0]], //shape unique
          orients[orientsRand[0]], //must be unique

          positions[positionsRand[1]], // position unique
          shapes[shapesRand[1]], //shape unique
          orients[orientsRand[0]], //one of the orients matches target

          positions[positionsRand[2]], //position unique
          shapes[shapesRand[2]], // shape unique
          orients[orientsRand[1]], //must be same as other surroundings

          "setSize3",
          "distractors1",
          "orientRedundant",
          "crit"
        )
      );
    }
  };

  /*******
   * Set Size 6
   */
  const constructSet6Trials = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet6Trials = function (n) {
    const orients = ["horizontal", "vertical"];
    const positions = ["one", "two", "three", "four", "five", "six"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ZERO DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors0",
          "orientRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors1",
          "orientRedundant",
          "crit"
        )
      );
    }

    // TWO DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors2",
          "orientRedundant",
          "crit"
        )
      );
    }

    // THREE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors3",
          "orientRedundant",
          "crit"
        )
      );
    }

    // FOUR DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors4",
          "orientRedundant",
          "crit"
        )
      );
    }
  };

  const constructSet9Trials = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    position6,
    shape6,
    orient6,

    position7,
    shape7,
    orient7,

    position8,
    shape8,
    orient8,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));
    positions.push(_.shuffle(position6));
    positions.push(_.shuffle(position7));
    positions.push(_.shuffle(position8));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));
    shapes.push(_.shuffle(shape6));
    shapes.push(_.shuffle(shape7));
    shapes.push(_.shuffle(shape8));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));
    orients.push(_.shuffle(orient6));
    orients.push(_.shuffle(orient7));
    orients.push(_.shuffle(orient8));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      positions[6],
      shapes[6],
      orients[6],

      positions[7],
      shapes[7],
      orients[7],

      positions[8],
      shapes[8],
      orients[8],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet9Trials = function (n) {
    // no distractors
    const orients = ["horizontal", "vertical"];
    const positions = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ZERO DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors0",
          "orientRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors1",
          "orientRedundant",
          "crit"
        )
      );
    }

    // TWO DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors2",
          "orientRedundant",
          "crit"
        )
      );
    }

    // THREE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors3",
          "orientRedundant",
          "crit"
        )
      );
    }

    // FOUR DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors4",
          "orientRedundant",
          "crit"
        )
      );
    }
  };

  const constructSet16Trials = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    position6,
    shape6,
    orient6,

    position7,
    shape7,
    orient7,

    position8,
    shape8,
    orient8,

    position9,
    shape9,
    orient9,

    position10,
    shape10,
    orient10,

    position11,
    shape11,
    orient11,

    position12,
    shape12,
    orient12,

    position13,
    shape13,
    orient13,

    position14,
    shape14,
    orient14,

    position15,
    shape15,
    orient15,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));
    positions.push(_.shuffle(position6));
    positions.push(_.shuffle(position7));
    positions.push(_.shuffle(position8));
    positions.push(_.shuffle(position9));
    positions.push(_.shuffle(position10));
    positions.push(_.shuffle(position11));
    positions.push(_.shuffle(position12));
    positions.push(_.shuffle(position13));
    positions.push(_.shuffle(position14));
    positions.push(_.shuffle(position15));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));
    shapes.push(_.shuffle(shape6));
    shapes.push(_.shuffle(shape7));
    shapes.push(_.shuffle(shape8));
    shapes.push(_.shuffle(shape9));
    shapes.push(_.shuffle(shape10));
    shapes.push(_.shuffle(shape11));
    shapes.push(_.shuffle(shape12));
    shapes.push(_.shuffle(shape13));
    shapes.push(_.shuffle(shape14));
    shapes.push(_.shuffle(shape15));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));
    orients.push(_.shuffle(orient6));
    orients.push(_.shuffle(orient7));
    orients.push(_.shuffle(orient8));
    orients.push(_.shuffle(orient9));
    orients.push(_.shuffle(orient10));
    orients.push(_.shuffle(orient11));
    orients.push(_.shuffle(orient12));
    orients.push(_.shuffle(orient13));
    orients.push(_.shuffle(orient14));
    orients.push(_.shuffle(orient15));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      positions[6],
      shapes[6],
      orients[6],

      positions[7],
      shapes[7],
      orients[7],

      positions[8],
      shapes[8],
      orients[8],

      positions[9],
      shapes[9],
      orients[9],

      positions[10],
      shapes[10],
      orients[10],

      positions[11],
      shapes[11],
      orients[11],

      positions[12],
      shapes[12],
      orients[12],

      positions[13],
      shapes[13],
      orients[13],

      positions[14],
      shapes[14],
      orients[14],

      positions[15],
      shapes[15],
      orients[15],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet16Trials = function (n) {
    // no distractors
    const orients = ["horizontal", "vertical"];

    const positions = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
    ];

    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // 0 DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors1",
          "orientRedundant",
          "crit"
        )
      );
    }

    // TWO DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors2",
          "orientRedundant",
          "crit"
        )
      );
    }

    // THREE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors3",
          "orientRedundant",
          "crit"
        )
      );
    }

    // FOUR DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors4",
          "orientRedundant",
          "crit"
        )
      );
    }
  };

  /*****************************
   * Contructing Fillers
   ******************************/

  /*******
   * Set Size 3
   */

  const constructSet3Fillers = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet3Fillers = function (n) {
    // ZERO orient DISTRACTOR, ONE SHAPE MATCH: SHAPE + orient REQUIRED
    const orients = ["horizontal", "vertical"];
    const positions = ["one", "two", "three"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE orient DISTRACTOR, ONE SHAPE DISTRACTOR (BOTH REQUIRED)

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet3Fillers(
          positions[positionsRand[0]], //position unique
          shapes[shapesRand[0]], //shape unique
          orients[orientsRand[0]], //must be unique

          positions[positionsRand[1]], // position unique
          shapes[shapesRand[1]], //shape unique
          orients[orientsRand[0]], //one of the orients matches target

          positions[positionsRand[2]], //position unique
          shapes[shapesRand[0]], // shape unique
          orients[orientsRand[1]], //must be same as other surroundings

          "setSize3",
          "distractors1",
          "orientRedundant",
          "filler"
        )
      );
    }
  };

  /*******
   * Set Size 6
   */
  const constructSet6Fillers = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet6Fillers = function (n) {
    const orients = ["horizontal", "vertical"];
    const positions = ["one", "two", "three", "four", "five", "six"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE orient DISTRACTOR, FOUR SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors1",
          "orientRedundant",
          "filler"
        )
      );
    }

    // TWO orient DISTRACTOR, THREE SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors2",
          "orientRedundant",
          "filler"
        )
      );
    }

    // THREE DISTRACTOR, TWO SHAPE MATCH
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors3",
          "orientRedundant",
          "filler"
        )
      );
    }

    // FOUR DISTRACTOR, ONE SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]],

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors4",
          "orientRedundant",
          "filler"
        )
      );
    }
  };

  const constructSet9Fillers = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    position6,
    shape6,
    orient6,

    position7,
    shape7,
    orient7,

    position8,
    shape8,
    orient8,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));
    positions.push(_.shuffle(position6));
    positions.push(_.shuffle(position7));
    positions.push(_.shuffle(position8));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));
    shapes.push(_.shuffle(shape6));
    shapes.push(_.shuffle(shape7));
    shapes.push(_.shuffle(shape8));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));
    orients.push(_.shuffle(orient6));
    orients.push(_.shuffle(orient7));
    orients.push(_.shuffle(orient8));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      positions[6],
      shapes[6],
      orients[6],

      positions[7],
      shapes[7],
      orients[7],

      positions[8],
      shapes[8],
      orients[8],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet9Fillers = function (n) {
    const orients = ["horizontal", "vertical"];
    const positions = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE orient DISTRACTOR, FOUR SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors1",
          "orientRedundant",
          "filler"
        )
      );
    }

    // TWO orient DISTRACTOR, THREE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors2",
          "orientRedundant",
          "filler"
        )
      );
    }

    // THREE orient DISTRACTOR, TWO SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors3",
          "orientRedundant",
          "filler"
        )
      );
    }

    // FOUR orient DISTRACTOR, ONE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors4",
          "orientRedundant",
          "filler"
        )
      );
    }
  };

  const constructSet16Fillers = function (
    positionT,
    shapeT,
    orientT,

    position1,
    shape1,
    orient1,

    position2,
    shape2,
    orient2,

    position3,
    shape3,
    orient3,

    position4,
    shape4,
    orient4,

    position5,
    shape5,
    orient5,

    position6,
    shape6,
    orient6,

    position7,
    shape7,
    orient7,

    position8,
    shape8,
    orient8,

    position9,
    shape9,
    orient9,

    position10,
    shape10,
    orient10,

    position11,
    shape11,
    orient11,

    position12,
    shape12,
    orient12,

    position13,
    shape13,
    orient13,

    position14,
    shape14,
    orient14,

    position15,
    shape15,
    orient15,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let orients = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));
    positions.push(_.shuffle(position3));
    positions.push(_.shuffle(position4));
    positions.push(_.shuffle(position5));
    positions.push(_.shuffle(position6));
    positions.push(_.shuffle(position7));
    positions.push(_.shuffle(position8));
    positions.push(_.shuffle(position9));
    positions.push(_.shuffle(position10));
    positions.push(_.shuffle(position11));
    positions.push(_.shuffle(position12));
    positions.push(_.shuffle(position13));
    positions.push(_.shuffle(position14));
    positions.push(_.shuffle(position15));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));
    shapes.push(_.shuffle(shape3));
    shapes.push(_.shuffle(shape4));
    shapes.push(_.shuffle(shape5));
    shapes.push(_.shuffle(shape6));
    shapes.push(_.shuffle(shape7));
    shapes.push(_.shuffle(shape8));
    shapes.push(_.shuffle(shape9));
    shapes.push(_.shuffle(shape10));
    shapes.push(_.shuffle(shape11));
    shapes.push(_.shuffle(shape12));
    shapes.push(_.shuffle(shape13));
    shapes.push(_.shuffle(shape14));
    shapes.push(_.shuffle(shape15));

    orients.push(_.shuffle(orientT));
    orients.push(_.shuffle(orient1));
    orients.push(_.shuffle(orient2));
    orients.push(_.shuffle(orient3));
    orients.push(_.shuffle(orient4));
    orients.push(_.shuffle(orient5));
    orients.push(_.shuffle(orient6));
    orients.push(_.shuffle(orient7));
    orients.push(_.shuffle(orient8));
    orients.push(_.shuffle(orient9));
    orients.push(_.shuffle(orient10));
    orients.push(_.shuffle(orient11));
    orients.push(_.shuffle(orient12));
    orients.push(_.shuffle(orient13));
    orients.push(_.shuffle(orient14));
    orients.push(_.shuffle(orient15));

    return [
      positions[0], //target
      shapes[0], // target
      orients[0], //target

      positions[1],
      shapes[1],
      orients[1],

      positions[2],
      shapes[2],
      orients[2],

      positions[3],
      shapes[3],
      orients[3],

      positions[4],
      shapes[4],
      orients[4],

      positions[5],
      shapes[5],
      orients[5],

      positions[6],
      shapes[6],
      orients[6],

      positions[7],
      shapes[7],
      orients[7],

      positions[8],
      shapes[8],
      orients[8],

      positions[9],
      shapes[9],
      orients[9],

      positions[10],
      shapes[10],
      orients[10],

      positions[11],
      shapes[11],
      orients[11],

      positions[12],
      shapes[12],
      orients[12],

      positions[13],
      shapes[13],
      orients[13],

      positions[14],
      shapes[14],
      orients[14],

      positions[15],
      shapes[15],
      orients[15],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet16Fillers = function (n) {
    // no distractors
    const orients = ["horizontal", "vertical"];

    const positions = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
    ];

    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE orient DISTRACTOR, 4 SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientRedundant",
          "filler"
        )
      );
    }

    // TWO orient DISTRACTOR, THREE SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientRedundant",
          "filler"
        )
      );
    }

    // THREE orient DISTRACTORS, TWO SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientRedundant",
          "filler"
        )
      );
    }

    // FOUR orient DISTRACTORS, ONE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const orientsRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          orients[orientsRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          orients[orientsRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orienRedundant",
          "filler"
        )
      );
    }
  };

  // run it
  populateSet3Trials(2);
  populateSet6Trials(2);
  populateSet9Trials(2);
  populateSet16Trials(2);

  populateSet3Fillers(1);
  populateSet6Fillers(1);
  populateSet9Fillers(1);
  populateSet16Fillers(1);

  //concat trials and fillers
  trials = crits.concat(fillers);

  // shuffle crits
  trials = _.shuffle(trials);

  /**********************
   * Comprehension Check
   */
  const comprehensionCheck = function () {
    let response3Correct = 0;
    let response4Correct = 0;
    let response5Correct = 0;

    /*Question 3*/
    const question3Incorrect = function () {
      nTimesFailedComprehension++;

      if (nTimesFailedComprehension >= 3) {
        endExperiment();
      }

      // Unbind all event listeners to prevent conflicts
      $(document).off("click");

      d3.select("#query").style("display", "block");

      d3.select("#query")
        .style("color", "red")
        .text("Incorrect :( You will now have to start the questions over");

      setTimeout(() => {
        currentview = new comprehensionCheck();
      }, 1500);

      return;
    };

    const question3Correct = function () {
      response3Correct++; // increment the response count

      d3.select("#query").style("display", "block");

      d3.select("#query").style("color", "green").text("Correct :)");

      setTimeout(() => {
        d3.select("#query").style("display", "none");
      }, 900);

      setTimeout(() => {
        d3.select("#question3").style("display", "none");
      }, 900);
    };

    /*Question 4*/
    const question4Incorrect = function () {
      nTimesFailedComprehension++;

      if (nTimesFailedComprehension >= 3) {
        endExperiment();
      }

      // Unbind all event listeners to prevent conflicts
      $(document).off("click");

      d3.select("#query").style("display", "block");

      d3.select("#query")
        .style("color", "red")
        .text("Incorrect :( You will now have to start the questions over");

      setTimeout(() => {
        currentview = new comprehensionCheck();
      }, 1500);

      return;
    };

    const question4Correct = function () {
      response4Correct++; // increment the response count

      d3.select("#query").style("display", "block");

      d3.select("#query").style("color", "green").text("Correct :)");

      setTimeout(() => {
        d3.select("#query").style("display", "none");
      }, 900);

      setTimeout(() => {
        d3.select("#question4").style("display", "none");
      }, 900);
    };

    /*Question 5*/
    const question5Incorrect = function () {
      nTimesFailedComprehension++;

      if (nTimesFailedComprehension >= 3) {
        endExperiment();
      }

      // Unbind all event listeners to prevent conflicts
      $(document).off("click");

      d3.select("#query").style("display", "block");

      d3.select("#query")
        .style("color", "red")
        .text("Incorrect :( You will now have to start the questions over");

      setTimeout(() => {
        currentview = new comprehensionCheck();
      }, 1500);

      return;
    };

    const question5Correct = function () {
      response5Correct++; // increment the response count

      d3.select("#query").style("display", "block");

      d3.select("#query").style("color", "green").text("Correct :)");

      setTimeout(() => {
        d3.select("#query").style("display", "none");
      }, 900);

      setTimeout(() => {
        d3.select("#question5").style("display", "none");
      }, 900);
    };

    d3.select("#query").style("display", "hide");

    const endExperiment = function () {
      currentview = new Questionnaire(false);
    };

    var finish = function () {
      if (response3Correct > 0 && 
        response4Correct > 0 && 
        response5Correct > 0) {
        d3.select("#query").style("display", "block");

        d3.select("#query")
          .style("color", "black")
          .text("Well done. You will now begin the task.");

        setTimeout(function () {
          currentview = new task();
        }, 2000);
      }
    };

    psiTurk.showPage("stages/compCheck/compCheckOrientation.html");

    $(".q3button1").on("click", question3Incorrect);
    $(".q3button2").on("click", question3Incorrect);
    $(".q3button3").on("click", question3Correct);

    $(".q4button1").on("click", question4Incorrect);
    $(".q4button2").on("click", question4Correct);

    $(".q5button1").on("click", question5Incorrect);
    $(".q5button2").on("click", question5Correct);
    $(".q5button3").on("click", question5Incorrect);

    $(document).ready(function () {
      $(document).on("click", ".complete-button", finish);
    });
  };

  /***********
   * Task
   */

  const task = function () {
    let currentTrial = [];
    /*******
     * Presentation function
     */
    const next = function () {
      if (trials.length > 0) {
        listening = true; // Reset the listening flag

        currentTrial = trials.shift();

        if (currentTrial[9] == "setSize3") {
          setupHTMLSetSize3();
          setTimeout(function () {
            d3.select("#" + currentTrial[0]).classed("border", true);
          }, 800);
        } else if (currentTrial[18] == "setSize6") {
          setupHTMLSetSize6();
          setTimeout(function () {
            d3.select("#" + currentTrial[0]).classed("border", true);
          }, 800);
        } else if (currentTrial[27] == "setSize9") {
          setupHTMLSetSize9();
          setTimeout(function () {
            d3.select("#" + currentTrial[0]).classed("border", true);
          }, 800);
        } else if (currentTrial[48] == "setSize16") {
          setupHTMLSetSize16();
          setTimeout(function () {
            d3.select("#" + currentTrial[0]).classed("border", true);
          }, 800);
        }
      } else if (trials.length == 0) {
        finish();
        return;
      }
    };

    /******
     * handle responses
     */

    let set3ResponseHandler = function (currentTrial) {
      if (!listening) return;
      let response = document.getElementById("user-input").value;

      if (response.length > 0) {
        listening = false;

        // Record trial data using PsiTurk
        psiTurk.recordTrialData({
          setSize: currentTrial[9],
          nDistract: currentTrial[10],
          response: response, // user input.
          redundant: currentTrial[11],
          trialType: currentTrial[12],
          targetPosition: currentTrial[0],
          targetShape: currentTrial[1],
          targetOrient: currentTrial[2],
          fullTrial: currentTrial,
        });

        document.getElementById("user-input").value = ""; // Clear the input field

        setTimeout(function () {
          next();
        }, 200);
      }
    };

    let set6ResponseHandler = function (currentTrial) {
      if (!listening) return;
      let response = document.getElementById("user-input").value;

      if (response.length > 0) {
        listening = false;

        // Record trial data using PsiTurk
        psiTurk.recordTrialData({
          setSize: currentTrial[18],
          nDistract: currentTrial[19],
          response: response, // user input.
          redundant: currentTrial[20],
          trialType: currentTrial[21],
          targetPosition: currentTrial[0],
          targetShape: currentTrial[1],
          targetOrient: currentTrial[2],
          fullTrial: currentTrial,
        });

        document.getElementById("user-input").value = ""; // Clear the input field

        setTimeout(function () {
          next();
        }, 200);
      }
    };

    let set9ResponseHandler = function (currentTrial) {
      if (!listening) return;
      let response = document.getElementById("user-input").value;

      if (response.length > 0) {
        listening = false;

        // Record trial data using PsiTurk
        psiTurk.recordTrialData({
          setSize: currentTrial[27],
          nDistract: currentTrial[28],
          response: response, // user input.
          redundant: currentTrial[29],
          trialType: currentTrial[30],
          targetPosition: currentTrial[0],
          targetShape: currentTrial[1],
          targetOrient: currentTrial[2],
          fullTrial: currentTrial,
        });

        document.getElementById("user-input").value = ""; // Clear the input field

        setTimeout(function () {
          next();
        }, 200);
      }
    };

    let set16ResponseHandler = function (currentTrial) {
      if (!listening) return;
      let response = document.getElementById("user-input").value;

      if (response.length > 0) {
        listening = false;

        // Record trial data using PsiTurk
        psiTurk.recordTrialData({
          setSize: currentTrial[48],
          nDistract: currentTrial[49],
          response: response, // user input.
          redundant: currentTrial[50],
          trialType: currentTrial[51],
          targetPosition: currentTrial[0],
          targetShape: currentTrial[1],
          targetOrient: currentTrial[2],
          fullTrial: currentTrial,
        });

        document.getElementById("user-input").value = ""; // Clear the input field

        setTimeout(function () {
          next();
        }, 200);
      }
    };

    /*******
     * HTML set-up functions
     */

    // Set up Set Size 3
    const setupHTMLSetSize3 = function () {
      psiTurk.showPage("stages/orientationStages/setSize3.html");

      // First object (TARGET) -- always add border to target!
      d3.select("#" + currentTrial[0] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[1] +
          currentTrial[2] +
          ".png"
      );

      // Second object
      d3.select("#" + currentTrial[3] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[4] +
          currentTrial[5] +
          ".png"
      );

      // Third object
      d3.select("#" + currentTrial[6] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[7] +
          currentTrial[8] +
          ".png"
      );

      // Tally
      d3.select("#tally").style("display", "block");
      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      // Disable typing in the input field
      const inputField = document.getElementById("user-input");
      inputField.setAttribute("readonly", true);

      // Add event listeners to all buttons with the class "word-button"
      document.querySelectorAll(".word-button").forEach((button) => {
        button.addEventListener("click", function () {
          const word = this.getAttribute("data-word");
          const inputField = document.getElementById("user-input");

          if (word === "") {
            // If the button is the "Backspace" button, clear the input field
            inputField.value = "";
          } else {
            // Append the word to the input field
            if (inputField.value.length > 0) {
              inputField.value += " " + word;
            } else {
              inputField.value = word;
            }
          }
        });
      });

      // Add event listener for the submit button
      document
        .querySelector(".submit-button")
        .addEventListener("click", function () {
          const response = inputField.value;

          const containsValidNoun = nouns.some((noun) =>
            response.includes(noun)
          );

          if (response.length > 0 && containsValidNoun) {
            // Call the appropriate response handler
            set3ResponseHandler(currentTrial);
          } else {
            d3.select("#tally").text(
              "Mention the shape in your response to proceed."
            );
          }
        });
    };

    // Set up Set Size 6
    const setupHTMLSetSize6 = function () {
      psiTurk.showPage("stages/orientationStages/setSize6.html");

      // First object (TARGET) -- always add border to target!
      d3.select("#" + currentTrial[0] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[1] +
          currentTrial[2] +
          ".png"
      );
      // d3.select("#" + currentTrial[0]).classed("border", true);

      //second object
      d3.select("#" + currentTrial[3] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[4] +
          currentTrial[5] +
          ".png"
      );

      //third object
      d3.select("#" + currentTrial[6] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[7] +
          currentTrial[8] +
          ".png"
      );

      //fourth object
      d3.select("#" + currentTrial[9] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[10] +
          currentTrial[11] +
          ".png"
      );

      //fifth object
      d3.select("#" + currentTrial[12] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[13] +
          currentTrial[14] +
          ".png"
      );

      //sixth object
      d3.select("#" + currentTrial[15] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[16] +
          currentTrial[17] +
          ".png"
      );

      // Tally
      d3.select("#tally").style("display", "block");
      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      // Disable typing in the input field
      const inputField = document.getElementById("user-input");
      inputField.setAttribute("readonly", true);

      // Add event listeners to all buttons with the class "word-button"
      document.querySelectorAll(".word-button").forEach((button) => {
        button.addEventListener("click", function () {
          const word = this.getAttribute("data-word");
          const inputField = document.getElementById("user-input");

          if (word === "") {
            // If the button is the "Backspace" button, clear the input field
            inputField.value = "";
          } else {
            // Append the word to the input field
            if (inputField.value.length > 0) {
              inputField.value += " " + word;
            } else {
              inputField.value = word;
            }
          }
        });
      });

      // Add event listener for the submit button
      document
        .querySelector(".submit-button")
        .addEventListener("click", function () {
          const response = inputField.value;

          const containsValidNoun = nouns.some((noun) =>
            response.includes(noun)
          );

          if (response.length > 0 && containsValidNoun) {
            // Call the appropriate response handler
            set6ResponseHandler(currentTrial);
          } else {
            d3.select("#tally").text(
              "Mention the shape in your response to proceed."
            );
          }
        });
    };

    // Set up Set Size 9
    const setupHTMLSetSize9 = function () {
      psiTurk.showPage("stages/orientationStages/setSize9.html");

      // First object (TARGET) -- always add border to target!
      d3.select("#" + currentTrial[0] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[1] +
          currentTrial[2] +
          ".png"
      );

      // d3.select("#" + currentTrial[0]).classed("border", true);

      //second object
      d3.select("#" + currentTrial[3] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[4] +
          currentTrial[5] +
          ".png"
      );

      //third object
      d3.select("#" + currentTrial[6] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[7] +
          currentTrial[8] +
          ".png"
      );

      //fourth object
      d3.select("#" + currentTrial[9] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[10] +
          currentTrial[11] +
          ".png"
      );

      //fifth object
      d3.select("#" + currentTrial[12] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[13] +
          currentTrial[14] +
          ".png"
      );

      //sixth object
      d3.select("#" + currentTrial[15] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[16] +
          currentTrial[17] +
          ".png"
      );

      //seventh object
      d3.select("#" + currentTrial[18] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[19] +
          currentTrial[20] +
          ".png"
      );

      //eighth object
      d3.select("#" + currentTrial[21] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[22] +
          currentTrial[23] +
          ".png"
      );

      //nineth object
      d3.select("#" + currentTrial[24] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[25] +
          currentTrial[26] +
          ".png"
      );

      // Tally
      d3.select("#tally").style("display", "block");
      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      // Disable typing in the input field
      const inputField = document.getElementById("user-input");
      inputField.setAttribute("readonly", true);

      // Add event listeners to all buttons with the class "word-button"
      document.querySelectorAll(".word-button").forEach((button) => {
        button.addEventListener("click", function () {
          const word = this.getAttribute("data-word");
          const inputField = document.getElementById("user-input");

          if (word === "") {
            // If the button is the "Backspace" button, clear the input field
            inputField.value = "";
          } else {
            // Append the word to the input field
            if (inputField.value.length > 0) {
              inputField.value += " " + word;
            } else {
              inputField.value = word;
            }
          }
        });
      });

      // Add event listener for the submit button
      document
        .querySelector(".submit-button")
        .addEventListener("click", function () {
          const response = inputField.value;

          const containsValidNoun = nouns.some((noun) =>
            response.includes(noun)
          );

          if (response.length > 0 && containsValidNoun) {
            // Call the appropriate response handler
            set9ResponseHandler(currentTrial);
          } else {
            d3.select("#tally").text(
              "Mention the shape in your response to proceed."
            );
          }
        });
    };

    // Set up Set Size 16
    const setupHTMLSetSize16 = function () {
      psiTurk.showPage("stages/orientationStages/setSize16.html");

      // First object (TARGET) -- always add border to target!
      d3.select("#" + currentTrial[0] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[1] +
          currentTrial[2] +
          ".png"
      );

      // d3.select("#" + currentTrial[0]).classed("border", true);

      //second object
      d3.select("#" + currentTrial[3] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[4] +
          currentTrial[5] +
          ".png"
      );

      //third object
      d3.select("#" + currentTrial[6] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[7] +
          currentTrial[8] +
          ".png"
      );

      //fourth object
      d3.select("#" + currentTrial[9] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[10] +
          currentTrial[11] +
          ".png"
      );

      //fifth object
      d3.select("#" + currentTrial[12] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[13] +
          currentTrial[14] +
          ".png"
      );

      //sixth object
      d3.select("#" + currentTrial[15] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[16] +
          currentTrial[17] +
          ".png"
      );

      //seventh object
      d3.select("#" + currentTrial[18] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[19] +
          currentTrial[20] +
          ".png"
      );

      //eighth object
      d3.select("#" + currentTrial[21] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[22] +
          currentTrial[23] +
          ".png"
      );

      //nineth object
      d3.select("#" + currentTrial[24] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[25] +
          currentTrial[26] +
          ".png"
      );

      //tenth object
      d3.select("#" + currentTrial[27] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[28] +
          currentTrial[29] +
          ".png"
      );

      //eleventh object
      d3.select("#" + currentTrial[30] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[31] +
          currentTrial[32] +
          ".png"
      );

      //twelvth object
      d3.select("#" + currentTrial[33] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[34] +
          currentTrial[35] +
          ".png"
      );

      //thirteenth object
      d3.select("#" + currentTrial[36] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[37] +
          currentTrial[38] +
          ".png"
      );

      //fourteenth object
      d3.select("#" + currentTrial[39] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[40] +
          currentTrial[41] +
          ".png"
      );

      //fifteenth object
      d3.select("#" + currentTrial[42] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[43] +
          currentTrial[44] +
          ".png"
      );

      //sixteenth object
      d3.select("#" + currentTrial[45] + " img").attr(
        "src",
        "static/stimuli/orientShapes/" +
          currentTrial[46] +
          currentTrial[47] +
          ".png"
      );

      // Tally
      d3.select("#tally").style("display", "block");
      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      // Disable typing in the input field
      const inputField = document.getElementById("user-input");
      inputField.setAttribute("readonly", true);

      // Add event listeners to all buttons with the class "word-button"
      document.querySelectorAll(".word-button").forEach((button) => {
        button.addEventListener("click", function () {
          const word = this.getAttribute("data-word");
          const inputField = document.getElementById("user-input");

          if (word === "") {
            // If the button is the "Backspace" button, clear the input field
            inputField.value = "";
          } else {
            // Append the word to the input field
            if (inputField.value.length > 0) {
              inputField.value += " " + word;
            } else {
              inputField.value = word;
            }
          }
        });
      });

      // Add event listener for the submit button
      document
        .querySelector(".submit-button")
        .addEventListener("click", function () {
          const response = inputField.value;

          const containsValidNoun = nouns.some((noun) =>
            response.includes(noun)
          );

          if (response.length > 0 && containsValidNoun) {
            // Call the appropriate response handler
            set16ResponseHandler(currentTrial);
          } else {
            d3.select("#tally").text(
              "Mention the shape in your response to proceed."
            );
          }
        });
    };

    /*****
     * finish function
     */

    const finish = function () {
      $("body").unbind("keydown", set3ResponseHandler);
      $("body").unbind("keydown", set6ResponseHandler);
      $("body").unbind("keydown", set9ResponseHandler);
      $("body").unbind("keydown", set16ResponseHandler);
      currentview = new Questionnaire(true); // Switch to a questionnaire view
    };

    setTimeout(function () {
      next();
    }, 200);
  };

  /****************
   * Questionnaire *
   ****************/

  var Questionnaire = function (pass) {
    var error_message =
      "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

    record_responses = function () {
      psiTurk.recordTrialData({ phase: "postquestionnaire", status: "submit" });

      $("input").each(function (i, val) {
        psiTurk.recordTrialData(["JUNIPER", this.id, this.value]);
      });
      $("select").each(function (i, val) {
        psiTurk.recordTrialData(["JUNIPER", this.id, this.value]);
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
          "https://app.prolific.com/submissions/complete?cc=C119GP5U";
      } else {
        window.location =
          "https://app.prolific.com/submissions/complete?cc=C119GP5U";
      }
    };

    $("#next").click(function () {
      record_responses();
      //currentview = new Practice();
      psiTurk.saveData({
        success: function () {
          completeHIT();
          //psiTurk.completeHIT();
        },
        error: prompt_resubmit,
      });
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

  $(window).on("load", async () => {
    await init;
    psiTurk.doInstructions(
      beginInstructionPages, // a list of pages you want to display in sequence
      function () {
        comprehensionCheck();
      }
    );
  });
};

orientationExp();
