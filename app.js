// MAJOR VARIABLES
var tpg;
var mg;
var fg;

//PRELIM
function Compute() {
  var quiz1 = parseFloat(document.getElementById("Q1").value);

  var quiz2 = parseFloat(document.getElementById("Q2").value);

  var quiz3 = parseFloat(document.getElementById("Q3").value);

  var lab1 = parseFloat(document.getElementById("L1").value);

  var lab2 = parseFloat(document.getElementById("L2").value);

  var lab3 = parseFloat(document.getElementById("L3").value);

  var a1 = parseFloat(document.getElementById("A1").value);

  var a2 = parseFloat(document.getElementById("A2").value);

  // COMPUTATION ASSIGNMENT | LABORATORY | QUIZ
  var totalAss = (a1 + a2) / 2;
  console.log("Total Ass: " + totalAss);

  var totalQuiz = (quiz1 + quiz2 + quiz3) / 3;
  console.log("Total Quiz: " + totalQuiz);

  var totalLab = (lab1 + lab2 + lab3) / 3;
  console.log("Total Lab: " + totalLab);

  // CLASS STANDING
  var classStanding = totalAss * 0.2 + totalQuiz * 0.6 + totalLab * 0.2;
  console.log("ClassStanding = " + classStanding);

  // EXAM SCORE
  var pre = document.getElementById("PE").value;
  console.log(pre + " Exam");

  // PRELIM GRADE = (PRELIM * 50%) + (Class * 50%)
  pg = pre * 0.5 + classStanding * 0.5;

  document.getElementById("result").innerHTML = pg.toFixed(1);

  pg = localStorage.setItem(tpg, pg);
  console.log(localStorage);
}

// MIDTERM
function Calculate() {
  var quiz1 = parseFloat(document.getElementById("Q1").value);

  var quiz2 = parseFloat(document.getElementById("Q2").value);

  var quiz3 = parseFloat(document.getElementById("Q3").value);

  var lab1 = parseFloat(document.getElementById("L1").value);

  var lab2 = parseFloat(document.getElementById("L2").value);

  var lab3 = parseFloat(document.getElementById("L3").value);

  var a1 = parseFloat(document.getElementById("A1").value);

  var a2 = parseFloat(document.getElementById("A2").value);

  // COMPUTATION ASSIGNMENT | LABORATORY | QUIZ
  var totalAss = (a1 + a2) / 2;
  console.log("Total Ass: " + totalAss);

  var totalQuiz = (quiz1 + quiz2 + quiz3) / 3;
  console.log("Total Quiz: " + totalQuiz);

  var totalLab = (lab1 + lab2 + lab3) / 3;
  console.log("Total Lab: " + totalLab);

  // CLASS STANDING
  var classStanding = totalAss * 0.2 + totalQuiz * 0.6 + totalLab * 0.2;
  console.log("ClassStanding = " + classStanding);

  // EXAM SCORE
  var mid = document.getElementById("ME").value;
  console.log(mid * 0.5) + classStangin * 0.5;

  // PRELIM GRADE = (PRELIM * 50%) + (Class * 50%)
  var tmg = pre * 0.5 + classStanding * 0.5;

  // MIDTERM GRADE = (PRELIMS * 0.3) + (TMG*0.6)
  mg = 0.3 * pre + tmg * 0.6;

  document.getElementById("result").innerHTML = pg.toFixed(1);
}

//FINALS
function calc() {
  var quiz1 = parseFloat(document.getElementById("q1").value);

  var quiz2 = parseFloat(document.getElementById("Q2").value);

  var quiz3 = parseFloat(document.getElementById("Q3").value);

  var lab1 = parseFloat(document.getElementById("L1").value);

  var lab2 = parseFloat(document.getElementById("L2").value);

  var lab3 = parseFloat(document.getElementById("L3").value);

  var a1 = parseFloat(document.getElementById("A1").value);

  var a2 = parseFloat(document.getElementById("A2").value);

  // COMPUTATION ASSIGNMENT | LABORATORY | QUIZ
  var totalAss = (a1 + a2) / 2;
  console.log("Total Ass: " + totalAss);

  var totalQuiz = (quiz1 + quiz2 + quiz3) / 3;
  console.log("Total Quiz: " + totalQuiz);

  var totalLab = (lab1 + lab2 + lab3) / 3;
  console.log("Total Lab: " + totalLab);

  // CLASS STANDING
  var classStanding = totalAss * 0.2 + totalQuiz * 0.6 + totalLab * 0.2;
  console.log("ClassStanding = " + classStanding);

  // EXAM SCORE
  var fin = document.getElementById("FE").value;
  console.log(fin * 0.5) + classStanding * 0.5;

  // PRELIM GRADE = (PRELIM * 50%) + (Class * 50%)
  var tfg = fin * 0.5 + classStanding * 0.5;

  // FINAL GRADE = (MIDTERM GRADE * 0.3) + (TFG * 0.6)\
  fg = mid * 0.3 + tfg * 0.6;

  document.getElementById("result").innerHTML = fg.toFixed(1);
}

const btnMD = () => {
  document.getElementById("midterm").innerHTML = document.location.href =
    "FUNTILON_MAESTRO_VILLANIA_PS2B_MIDTERM.html";
};
