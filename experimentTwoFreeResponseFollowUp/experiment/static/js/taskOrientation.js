/***********************
 * List 1: Orientation *
 ***********************/

// Initalize psiturk object
const psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

const orientationExp = function () {
  //record the condition
  psiTurk.recordTrialData({
    condition: condition,
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

  /******************************************
   * Constructing Critical Trials
   *****************************************/

  /*******
   * Set Size 3
   */

  const constructSet3Trials = function (
    positionT,
    shapeT,
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet3Trials = function (n) {
    // ZERO DISTRACTOR
    const angles = ["horizontal", "vertical"];
    const positions = ["one", "two", "three"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet3Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must be same as other surrounding

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must be same as other surrounding

          "setSize3",
          "distractors0",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet3Trials(
          positions[positionsRand[0]], //position unique
          shapes[shapesRand[0]], //shape unique
          angles[anglesRand[0]], //must be unique

          positions[positionsRand[1]], // position unique
          shapes[shapesRand[1]], //shape unique
          angles[anglesRand[0]], //one of the angles matches target

          positions[positionsRand[2]], //position unique
          shapes[shapesRand[2]], // shape unique
          angles[anglesRand[1]], //must be same as other surroundings

          "setSize3",
          "distractors1",
          "orientationRedundant",
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
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet6Trials = function (n) {
    const angles = ["horizontal", "vertical"];
    const positions = ["one", "two", "three", "four", "five", "six"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ZERO DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors0",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors1",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // TWO DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors2",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // THREE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors3",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // FOUR DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet6Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors4",
          "orientationRedundant",
          "crit"
        )
      );
    }
  };

  const constructSet9Trials = function (
    positionT,
    shapeT,
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    position6,
    shape6,
    angle6,

    position7,
    shape7,
    angle7,

    position8,
    shape8,
    angle8,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));
    angles.push(_.shuffle(angle6));
    angles.push(_.shuffle(angle7));
    angles.push(_.shuffle(angle8));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      positions[6],
      shapes[6],
      angles[6],

      positions[7],
      shapes[7],
      angles[7],

      positions[8],
      shapes[8],
      angles[8],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet9Trials = function (n) {
    // no distractors
    const angles = ["horizontal", "vertical"];
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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors0",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // ONE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors1",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // TWO DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors2",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // THREE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors3",
          "orientationRedundant",
          "crit"
        )
      );
    }

    // FOUR DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet9Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors4",
          "orientationRedundant",
          "crit"
        )
      );
    }
  };

  const constructSet16Trials = function (
    positionT,
    shapeT,
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    position6,
    shape6,
    angle6,

    position7,
    shape7,
    angle7,

    position8,
    shape8,
    angle8,

    position9,
    shape9,
    angle9,

    position10,
    shape10,
    angle10,

    position11,
    shape11,
    angle11,

    position12,
    shape12,
    angle12,

    position13,
    shape13,
    angle13,

    position14,
    shape14,
    angle14,

    position15,
    shape15,
    angle15,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));
    angles.push(_.shuffle(angle6));
    angles.push(_.shuffle(angle7));
    angles.push(_.shuffle(angle8));
    angles.push(_.shuffle(angle9));
    angles.push(_.shuffle(angle10));
    angles.push(_.shuffle(angle11));
    angles.push(_.shuffle(angle12));
    angles.push(_.shuffle(angle13));
    angles.push(_.shuffle(angle14));
    angles.push(_.shuffle(angle15));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      positions[6],
      shapes[6],
      angles[6],

      positions[7],
      shapes[7],
      angles[7],

      positions[8],
      shapes[8],
      angles[8],

      positions[9],
      shapes[9],
      angles[9],

      positions[10],
      shapes[10],
      angles[10],

      positions[11],
      shapes[11],
      angles[11],

      positions[12],
      shapes[12],
      angles[12],

      positions[13],
      shapes[13],
      angles[13],

      positions[14],
      shapes[14],
      angles[14],

      positions[15],
      shapes[15],
      angles[15],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet16Trials = function (n) {
    // no distractors
    const angles = ["horizontal", "vertical"];

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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
      const anglesRand = _.shuffle([0, 1]);

      crits.push(
        constructSet16Trials(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

    positions.push(_.shuffle(positionT));
    positions.push(_.shuffle(position1));
    positions.push(_.shuffle(position2));

    shapes.push(_.shuffle(shapeT));
    shapes.push(_.shuffle(shape1));
    shapes.push(_.shuffle(shape2));

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet3Fillers = function (n) {
    // ZERO ORIENT DISTRACTOR, ONE SHAPE MATCH: SHAPE + ORIENT REQUIRED
    const angles = ["horizontal", "vertical"];
    const positions = ["one", "two", "three"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE ORIENT DISTRACTOR, ONE SHAPE DISTRACTOR (BOTH REQUIRED)

    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet3Fillers(
          positions[positionsRand[0]], //position unique
          shapes[shapesRand[0]], //shape unique
          angles[anglesRand[0]], //must be unique

          positions[positionsRand[1]], // position unique
          shapes[shapesRand[1]], //shape unique
          angles[anglesRand[0]], //one of the angles matches target

          positions[positionsRand[2]], //position unique
          shapes[shapesRand[0]], // shape unique
          angles[anglesRand[1]], //must be same as other surroundings

          "setSize3",
          "distractors1",
          "orientationRedundant",
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
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet6Fillers = function (n) {
    const angles = ["horizontal", "vertical"];
    const positions = ["one", "two", "three", "four", "five", "six"];
    const shapes = ["circle", "square", "pentagon", "hexagon"];

    // ONE ORIENT DISTRACTOR, FOUR SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors1",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // TWO ORIENT DISTRACTOR, THREE SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize6",
          "distractors2",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // THREE DISTRACTOR, TWO SHAPE MATCH
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors3",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // FOUR DISTRACTOR, ONE SHAPE MATCH (BOTH REQUIRED)
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet6Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]],

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize6",
          "distractors4",
          "orientationRedundant",
          "filler"
        )
      );
    }
  };

  const constructSet9Fillers = function (
    positionT,
    shapeT,
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    position6,
    shape6,
    angle6,

    position7,
    shape7,
    angle7,

    position8,
    shape8,
    angle8,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));
    angles.push(_.shuffle(angle6));
    angles.push(_.shuffle(angle7));
    angles.push(_.shuffle(angle8));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      positions[6],
      shapes[6],
      angles[6],

      positions[7],
      shapes[7],
      angles[7],

      positions[8],
      shapes[8],
      angles[8],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet9Fillers = function (n) {
    const angles = ["horizontal", "vertical"];
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

    // ONE ORIENT DISTRACTOR, FOUR SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize9",
          "distractors1",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // TWO ORIENT DISTRACTOR, THREE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors2",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // THREE ORIENT DISTRACTOR, TWO SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors3",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // FOUR ORIENT DISTRACTOR, ONE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet9Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique unless distractors present

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          "setSize9",
          "distractors4",
          "orientationRedundant",
          "filler"
        )
      );
    }
  };

  const constructSet16Fillers = function (
    positionT,
    shapeT,
    angleT,

    position1,
    shape1,
    angle1,

    position2,
    shape2,
    angle2,

    position3,
    shape3,
    angle3,

    position4,
    shape4,
    angle4,

    position5,
    shape5,
    angle5,

    position6,
    shape6,
    angle6,

    position7,
    shape7,
    angle7,

    position8,
    shape8,
    angle8,

    position9,
    shape9,
    angle9,

    position10,
    shape10,
    angle10,

    position11,
    shape11,
    angle11,

    position12,
    shape12,
    angle12,

    position13,
    shape13,
    angle13,

    position14,
    shape14,
    angle14,

    position15,
    shape15,
    angle15,

    setSize,
    distractors,
    redundantAttribute,
    trialType
  ) {
    let positions = [];
    let shapes = [];
    let angles = [];

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

    angles.push(_.shuffle(angleT));
    angles.push(_.shuffle(angle1));
    angles.push(_.shuffle(angle2));
    angles.push(_.shuffle(angle3));
    angles.push(_.shuffle(angle4));
    angles.push(_.shuffle(angle5));
    angles.push(_.shuffle(angle6));
    angles.push(_.shuffle(angle7));
    angles.push(_.shuffle(angle8));
    angles.push(_.shuffle(angle9));
    angles.push(_.shuffle(angle10));
    angles.push(_.shuffle(angle11));
    angles.push(_.shuffle(angle12));
    angles.push(_.shuffle(angle13));
    angles.push(_.shuffle(angle14));
    angles.push(_.shuffle(angle15));

    return [
      positions[0], //target
      shapes[0], // target
      angles[0], //target

      positions[1],
      shapes[1],
      angles[1],

      positions[2],
      shapes[2],
      angles[2],

      positions[3],
      shapes[3],
      angles[3],

      positions[4],
      shapes[4],
      angles[4],

      positions[5],
      shapes[5],
      angles[5],

      positions[6],
      shapes[6],
      angles[6],

      positions[7],
      shapes[7],
      angles[7],

      positions[8],
      shapes[8],
      angles[8],

      positions[9],
      shapes[9],
      angles[9],

      positions[10],
      shapes[10],
      angles[10],

      positions[11],
      shapes[11],
      angles[11],

      positions[12],
      shapes[12],
      angles[12],

      positions[13],
      shapes[13],
      angles[13],

      positions[14],
      shapes[14],
      angles[14],

      positions[15],
      shapes[15],
      angles[15],

      setSize,
      distractors,
      redundantAttribute,
      trialType,
    ];
  };

  const populateSet16Fillers = function (n) {
    // no distractors
    const angles = ["horizontal", "vertical"];

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

    // ONE ORIENT DISTRACTOR, 4 SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // TWO ORIENT DISTRACTOR, THREE SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // THREE ORIENT DISTRACTORS, TWO SHAPE DISTRACTORS
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
          "filler"
        )
      );
    }

    // FOUR ORIENT DISTRACTORS, ONE SHAPE DISTRACTOR
    for (let i = 0; i < n; i++) {
      const positionsRand = _.shuffle([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]);
      const shapesRand = _.shuffle([0, 1, 2, 3]);
      const anglesRand = _.shuffle([0, 1]);

      fillers.push(
        constructSet16Fillers(
          //target
          positions[positionsRand[0]], // must be unique
          shapes[shapesRand[0]], //must be unique
          angles[anglesRand[0]], //must be unique

          //surround
          positions[positionsRand[1]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[2]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[3]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[4]], // must be unique
          shapes[shapesRand[0]], // need not be unique, but must differ from target
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[5]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[6]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[7]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[8]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[9]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[10]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[11]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[12]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[13]], // must be unique
          shapes[shapesRand[1]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[14]], // must be unique
          shapes[shapesRand[2]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[0]], //must differ from target and match all surroundings

          // surround
          positions[positionsRand[15]], // must be unique
          shapes[shapesRand[3]], // need not be unique, but must differ from target. If end -> back to start
          angles[anglesRand[1]], //must differ from target and match all surroundings

          "setSize16",
          "distractors0",
          "orientationRedundant",
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
    let response2Correct = 0;
    let response3Correct = 0;
    let response4Correct = 0;
    let response5Correct = 0;

    /*Question 2*/
    const question2Incorrect = function () {
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

    const question2Correct = function () {
      response2Correct++; // increment the response count

      d3.select("#query").style("display", "block");

      d3.select("#query").style("color", "green").text("Correct :)");

      setTimeout(() => {
        d3.select("#query").style("display", "none");
      }, 900);

      setTimeout(() => {
        d3.select("#question2").style("display", "none");
      }, 900);
    };

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
      if (
        response2Correct > 0 &&
        response3Correct > 0 &&
        response4Correct > 0 &&
        response5Correct > 0
      ) {
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

    $(".q2button1").on("click", question2Incorrect);
    $(".q2button2").on("click", question2Correct);

    $(".q3button1").on("click", question3Incorrect);
    $(".q3button2").on("click", question3Incorrect);
    $(".q3button3").on("click", question3Correct);

    $(".q4button1").on("click", question4Incorrect);
    $(".q4button2").on("click", question4Correct);

    $(".q5button1").on("click", question5Correct);
    $(".q5button2").on("click", question5Incorrect);

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
          targetAngle: currentTrial[2],
          entireTrial: currentTrial,
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
          targetAngle: currentTrial[2],
          entireTrial: currentTrial,
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
          targetAngle: currentTrial[2],
          entireTrial: currentTrial,
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
          targetAngle: currentTrial[2],
          entireTrial: currentTrial,
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

      //d3.select("#" + currentTrial[0]).classed("border", true);

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

      // tally
      d3.select("#tally").style("display", "block");

      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      $(document).on("click", ".submit-button", function () {
        set3ResponseHandler(currentTrial);
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

      // tally
      d3.select("#tally").style("display", "block");

      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      $(document).on("click", ".submit-button", function () {
        set6ResponseHandler(currentTrial);
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

      // tally
      d3.select("#tally").style("display", "block");

      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      $(document).on("click", ".submit-button", function () {
        set9ResponseHandler(currentTrial);
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

      // tally
      d3.select("#tally").style("display", "block");

      d3.select("#tally").text(`Trial ${47 - trials.length} / 47`);

      // Unbind any previous click event listeners
      $(document).off("click", ".submit-button");

      $(document).on("click", ".submit-button", function () {
        set16ResponseHandler(currentTrial);
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
