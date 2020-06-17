let sidebar = [["Home Profile"], ["Setting"], ["Logout"], ["Test"]];

for (var i = 0, l1 = sidebar.length; i < l1; i++) {
  for (var j = 0, l2 = sidebar[i].length; j < l2; j++) {
    let newP = document.createElement("p");
    let newH = document.createElement("hr");
    let teks = document.createTextNode(sidebar[i][j]);
    newH.appendChild(newP);
    newP.appendChild(teks);

    const article = document.getElementById("show");
    article.appendChild(newH);
  }
}
