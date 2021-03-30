var url = new URL(window.location.href);
var searchParams = url.search.substring(1);
var urlSearchParams = new URLSearchParams(searchParams);

var types = {
  "p": {
    name: "Scratch Project",
    url: "https://scratch.mit.edu/projects/"
  },
  "u": {
    name: "Scratch User",
    url: "https://scratch.mit.edu/users/"
  }
};

var type = urlSearchParams.get("t")
var ugcD = urlSearchParams.get("d")
if (types[type] && ugcD) {
  var data = types[type]

  if (data.url) {
    window.location.replace(`${data.url}${ugcD}`)
  }
}
