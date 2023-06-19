const gentipElement = document.querySelector('.gentip');
const startButton = document.querySelector('#start-button');
const tips = [
  'Always have a plan B in case your strategy fails.',
  'Make sure to have a balance of monsters, spells, and traps in your deck.',
  'Keep an eye on your opponent\'s graveyard to anticipate their next move.',
  'Don\'t be afraid to take calculated risks.',
  'Use your resources wisely and don\'t waste them on unnecessary moves.',
  'Keep your deck consistent and avoid adding too many cards that don\'t fit your strategy.',
  'Don\'t get too attached to your cards, sometimes it\'s better to let them go for the greater good.',
  'Keep track of your life points and don\'t take unnecessary damage.',
  'Always read and understand the effects of your opponent\'s cards.',
  'Consider the timing of your moves and don\'t rush into things.',
  'Don\'t reveal too much information about your hand or strategy to your opponent.',
  'Use your side deck wisely and make sure to adapt to your opponent\'s strategy.',
  'Don\'t be afraid to experiment with new cards and strategies.',
  'Keep your mental game strong and don\'t let your emotions affect your gameplay.',
  'Stay focused and pay attention to the game state at all times.',
  'Be aware of the current meta and adjust your deck accordingly.',
  'Use your extra deck cards strategically and don\'t waste them on low-value moves.',
  'Don\'t underestimate the power of traps and spell cards, they can turn the tide of the game.',
  'Always have a backup plan in case your opponent disrupts your strategy.'
];

startButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  const randomTip = tips[randomIndex];
  gentipElement.textContent = randomTip;
  const audioArrSrc = [
    {src: 'kaiba.wav'},
    {src: 'yugi.wav'}
]
function getRandomInt() {
    return Math.floor(Math.random() * 2);
  }
  let index = getRandomInt()
const audio = new Audio()
audio.src = "start.wav"
audio.play()
setTimeout(() => {
audio.src = audioArrSrc[index].src;
audio.play()
}, 1500);

const yugi = document.querySelector(".yugi")

yugi.classList.add("fade-out")
const seto = document.querySelector(".seto")
seto.classList.add("fade-out")

const menu = document.querySelector(".menu-start");
setTimeout(() => {
menu.style.display = "none";
}, 1000); 
setTimeout(() => {
const blinkDiv = document.createElement("div");
blinkDiv.classList.add("blink-div");
document.body.appendChild(blinkDiv);

}, 1000);

setTimeout(() => {

const bgAudio = new Audio()
bgAudio.src="menu.wav"
bgAudio.play()
bgAudio.loop = true
document.body.style.backgroundColor ="white"
const loadingContainer = document.querySelector(".loading-container")
loadingContainer.style.display="flex"
}, 3000);


});

   