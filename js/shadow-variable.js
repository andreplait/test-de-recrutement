const articleList = []; // In a real app this list would be full of articles.
var kudos = 5; //L'utilisation de let est plus safe

function calculateTotalKudos(articles) {
  var kudos = 0;
  // pas de vérification si l'article a des kudos, risque de plantage si aucun
  for (let article of articles) {
    kudos += article.kudos;
  }
  
  return kudos;
}

document.write(`
  <p>Maximum kudos you can give to an article: ${kudos}</p>
  <p>Total Kudos already given across all articles: ${calculateTotalKudos(articleList)}</p>
`);
