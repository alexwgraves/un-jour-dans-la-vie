const container = d3.select('.scroll');
const graphic = container.select('.scroll__graphic');
const caption = graphic.select('p');
const text = container.select('.scroll__text');
const step = text.selectAll('.step');

// variable for image captions
const captions = [
  "C'est une photo aérienne du 14e arrondissement, où j'habite.",
  "Voici le café où Leo et moi mangeons le petit déjeuner.",
  "Voici une station vélib' à Notre-Dame, qui est près de ma fac.",
  "C'est une photo de mon université, l'université Pierre-et-Marie-Curie.",
  "Voici l'affiche du film Samba. Il est la personne au coin droit de l'affiche.",
  "C'est la tapisserie qui s'appelle « mon seul désir » de La Dame à la licorne.",
  "Voici la nourriture que mes amis et moi avons mangé à Kapunka Panoramas.",
  "C'est le Club Raye dans la nuit.",
  "Voici une photo aérienne de Paris de nuit."
]

// instantiate the scrollama
const scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // add color to current step only
  step.classed('is-active', (d, i) => i === response.index);

  // update graphic based on step
  graphic.style('background',
    `linear-gradient(#000, transparent, transparent),
    url(./img/${response.index + 1}.jpg) no-repeat center`);
  graphic.style('background-size', 'cover');
  caption.text(captions[response.index]);
}

function setupStickyfill() {
  d3.selectAll('.sticky').each(() => Stickyfill.add(this));
}

function init() {
  setupStickyfill();

  scroller.setup({
    container: '.scroll',
    graphic: '.scroll__graphic',
    text: '.scroll__text',
    step: '.scroll__text .step',
    offset: 0.5,
    debug: false
  }).onStepEnter(handleStepEnter);
}

// kick things off
init();
