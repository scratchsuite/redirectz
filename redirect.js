var url = new URL(window.location.href);
var searchParams = url.search.substring(1);
var urlSearchParams = new URLSearchParams(searchParams);

var types = {
  // -- Scratch -- MAIN endpoints
  "p": {
    name: "Scratch Project",
    url: "https://scratch.mit.edu/projects/"
  },
  "u": {
    name: "Scratch User",
    url: "https://scratch.mit.edu/users/"
  },
  "dt": { // DT = Discussion Topic
    name: "Forum Topic on Scratch",
    url: "https://scratch.mit.edu/discuss/topic/"
  },
  "dp": { // DP = Discussion Post
    name: "Forum Post on Scratch",
    url: "https://scratch.mit.edu/discuss/post/"
  },
  
  
  // -- UGC - Custom Endpoints
    // OCULAR - ocular.jeffalo.net, created by Jeffalo
  "ot": {
    name: "Ocular Topic",
    url: "https://ocular.jeffalo.net/topic/"
  },
  "op": {
    name: "Ocular Post",
    url: "https://ocular.jeffalo.net/post/"
  },
  "ou": {
    name: "Ocular User",
    url: "https://ocular.jeffalo.net/user/"
  },
  
   // SHEFWERLD - shefwerld.rirurin.com, created by CatsUnited
  
  "su": {
    name: "Shefwerld Forum Leaderboards - User Stats",
    url: "https://shefwerld.rirurin.com/post/user?user="
  },
  "sl": {
    name: "Shefwerld Forum Leaderboards - Leaderboards",
    url: "https://shefwerld.rirurin.com/post/?category="
  },
  
  // -- SMD - Custom Endpoints
  
  "tw": {
    name: "TurboWarp Project",
    url: "https://turbowarp.org/"
  },
  "fp": {
    name: "Forkphorus Project",
    url: "https://forkphorus.github.io/#"
  },
  "ep": {
    name: "E羊icques Project",
    url: "https://sheeptester.github.io/scratch-gui/#"
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
