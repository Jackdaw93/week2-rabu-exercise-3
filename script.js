let sidebar = [["Home"], ["Setting"], ["Logout"], ["Profile"]];

let sidebarHeader = document.getElementById("show");

for (let i = 0, l1 = sidebar.length; i < l1; i++) {
  for (let j = 0, l2 = sidebar[i].length; j < l2; j++) {
    let newP = document.createElement("p");
    let teks = document.createTextNode(sidebar[i][j]);

    newP.appendChild(teks);
    sidebarHeader.appendChild(newP);

    const article = document.getElementById("show");
    article.appendChild(newP);
  }
  let hr = document.createElement("hr");
  sidebarHeader.appendChild(hr);
}
