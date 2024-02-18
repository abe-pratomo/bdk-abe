name1 = document.getElementById("name1");
name2 = document.getElementById("name2");

function output()
{
  let x = Math.random();
  if (x%2 == 0)
  {
    alert(name1 + " dan " + name2 + " cocok!");
    return
  }
  else
  {
    alert(name1 + " dan " + name2 + " tidak cocok :')");
    return
  }
}
