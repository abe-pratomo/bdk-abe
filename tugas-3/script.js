function output() {
  let name1 = document.forms[0].name1.value;
  let name2 = document.forms[0].name2.value;

  let x = Math.random();
  if (x % 2 === 0) {
    document.getElementById("result").innerHTML = name1 + " dan " + name2 + " cocok!";
  } else {
    document.getElementById("result").innerHTML = name1 + " dan " + name2 + " tidak cocok :')";
  }
}
