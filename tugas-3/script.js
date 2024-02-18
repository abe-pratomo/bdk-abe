function output() {
  let name1 = document.forms[0].name1.value;
  let name2 = document.forms[0].name2.value;

  let x = Math.floor(Math.random() * 1);
  if (x === 0) {
    document.getElementById("result").innerHTML = name1 + " dan " + name2 + " cocok!";
  } else {
    document.getElementById("result").innerHTML = name1 + " dan " + name2 + " tidak cocok :')";
  }
}
