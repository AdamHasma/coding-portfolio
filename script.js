let contentArray = [];

$.ajax({
  method: 'GET',
  url: 'http://localhost:1337/Homepage',
  success: function(response) {
    const titleContainer = document.getElementById('title-container');
    let title = `<h1 class="title">${response.Headline}</h1>`;
    titleContainer.innerHTML = title;
  }
})

$.ajax({
  type: "GET",
  url: "http://localhost:1337/portfolios",
  success: function(response) {
    contentArray = response;
    showContent(contentArray);
    console.log(contentArray);
  }
});



function showContent(obj) {
  const root = $('#root')[0];
  for (var i = 0; i < contentArray.length; i++) {
    let obj = contentArray[i];
    console.log(obj.Cover);
    let content = `
      <div class="content-container">
        <a target="_blank" rel="noopener noreferrer" id="link" href="${obj.Link}">
          <h2 id="project-title">${obj.Headline}</h2>
          <img id="cover-image" src="http://localhost:1337${obj.Cover[0].url}" alt="">
        </a>
      </div>`
    root.innerHTML += content;
  };
}
