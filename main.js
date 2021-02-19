function moreThan5(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}

function isNewTopScore(score1, score2) {
  if (score1 > score2) {
    return true;
  } else {
    return false;
  }
}

function isInDanger(grade) {
  if (grade <= 71 && grade >= 60) {
    return true;
  } else {
    return false;
  }
}

function isCoasting(grade) {
  if (grade <= 83 && grade >= 72) {
    return true;
  } else {
    return false;
  }
}

function isSucceeding(grade) {
  if (grade >= 84 && grade <= 92) {
    return true;
  } else {
    return false;
  }
}

function isFailing(grade) {
  if (grade < 60) {
    return true;
  } else {
    return false;
  }
}

function isAcing(grade) {
  if (grade > 92) {
    return true;
  } else {
    return false;
  }
}

function isStudent(string) {
  if (string === "student") {
    return true;
  } else {
    return false;
  }
}

function isTeacher(string) {
  if (string === "teacher") {
    return true;
  } else {
    return false;
  }
}

function isAdmin(string) {
  if (string === "admin") {
    return true;
  } else {
    return false;
  }
}

function isElementary(string) {
  if (string === "elementary") {
    return true;
  } else {
    return false;
  }
}

function areDifferentPeople(name1, name2) {
  if (name1 !== name2) {
    return true;
  } else {
    return false;
  }
}

function isMiddleSchoolTeacher(role, level) {
  if (role === "teacher" && level >= 6 && level <= 8) {
    return true;
  } else {
    return false;
  }
}

function notAnElementarySchoolAdministrator(schoolLevel, role) {
  if (schoolLevel !== "elementary" || role !== "admin") {
    return true;
  } else {
    return false;
  }
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/

if (typeof moreThan5 === "undefined") {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === "undefined") {
  isNewTopScore = undefined;
}

if (typeof isInDanger === "undefined") {
  isInDanger = undefined;
}

if (typeof isCoasting === "undefined") {
  isCoasting = undefined;
}

if (typeof isSucceeding === "undefined") {
  isSucceeding = undefined;
}

if (typeof isFailing === "undefined") {
  isFailing = undefined;
}

if (typeof isAcing === "undefined") {
  isAcing = undefined;
}

if (typeof isStudent === "undefined") {
  isStudent = undefined;
}

if (typeof isTeacher === "undefined") {
  isTeacher = undefined;
}

if (typeof isAdmin === "undefined") {
  isAdmin = undefined;
}

if (typeof isElementary === "undefined") {
  isElementary = undefined;
}

if (typeof areDifferentPeople === "undefined") {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === "undefined") {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === "undefined") {
  isMiddleSchoolTeacher = undefined;
}

module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
};
