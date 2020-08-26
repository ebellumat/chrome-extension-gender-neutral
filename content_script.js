const pronouns = {
  todes: ['todos', 'todas'],
  elu: ['ele', 'ela'],
  elus: ['eles', 'elas'],
  delus: ['deles', 'delas'],
  delu: ['dele', 'dela'],
  aquelu: ['aquele', 'aquela'],
  aquelus: ['aqueles', 'aquelas'],
  amigues: ['amigos', 'amigas'],
  amigue: ['amigo', 'amiga'],
  nelu: ['nele', 'nela'],
  nelus: ['neles', 'nelas'],

  //adjetivos
  //a
  amades: ['amados'],
  atrasade: ['atrasado', 'atrasada'],
  atrasades: ['atrasados', 'atrasadas'],
  arrombade: ['arrombado', 'arrombada'],
  arrombades: ['arrombados', 'arrombadas'],
  //b
  bonite: ['bonito', 'bonita'],
  bonites: ['bonitos', 'bonitas'],
  brasileire: ['brasileiro', 'brasileira'],
  brasileires: ['brasileiros', 'brasileiras'],
  //g
  guerreire: ['guerreiro', 'guerreira'],
  guerreires: ['guerreiros', 'guerreiras'],

  cunhade: ['cunhado', 'cunhada'],
  cunhades: ['cunhados', 'cunhadas'],

  //l
  linde: ['lindo', 'linda'],
  lindes: ['lindos', 'lindas'],

}

var oldLocation = location.href;

const changePronouns = () => {
  if (location.href.includes('google.com')) return;
  var innerHtml = document.body.innerHTML;

  Object.keys(pronouns).forEach(key => {
    var newExp = new RegExp("\\b(?:" + pronouns[key].join("|") + ")\\b", "gi");

    $('body :not(script)').contents().filter(function() {
        return this.nodeType === 3;
      }).replaceWith(function() {
          return this.nodeValue.replace(newExp, key);
      });
    });
}

setInterval(function() {
  if(location.href != oldLocation) {
       // do your action
       oldLocation = location.href
       setTimeout(() => {
         changePronouns();
       });
  }
}, 1000); // check every second

window.addEventListener('popstate', function (event) {
  setTimeout(() => {
    changePronouns();
  });
});

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      changePronouns();
    });

    setTimeout(() => {
      changePronouns();
    }, 1500);

    setTimeout(() => {
      changePronouns();
    }, 5000);
  }
};
