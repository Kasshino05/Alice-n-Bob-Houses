// //TIP With Search Everywhere, you can find any action, file, or symbol in your project. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/>, type in <b>terminal</b>, and press <shortcut actionId="EditorEnter"/>. Then run <shortcut raw="npm run dev"/> in the terminal and click the link in its output to open the app in the browser.
// export function setupCounter(element)
//   //TIP Try <shortcut actionId="GotoDeclaration"/> on <shortcut raw="counter"/> to see its usages. You can also use this shortcut to jump to a declaration – try it on <shortcut raw="counter"/> on line 13.
//   let counter = 0;

//   const adjustCounterValue = value => {
//     if (value >= 100) return value - 100;
//     if (value <= -100) return value + 100;
//     return value;
//   };

//   const setCounter = value => {
//     counter = adjustCounterValue(value);
//     //TIP WebStorm has lots of inspections to help you catch issues in your project. It also has quick fixes to help you resolve them. Press <shortcut actionId="ShowIntentionActions"/> on <shortcut raw="text"/> and choose <b>Inline variable</b> to clean up the redundant code.
//     const text = `${counter}`;
//     element.innerHTML = text;
//   };

//   document.getElementById('increaseByOne').addEventListener('click', () => setCounter(counter + 1));
//   document.getElementById('decreaseByOne').addEventListener('click', () => setCounter(counter - 1));
//   document.getElementById('increaseByTwo').addEventListener('click', () => setCounter(counter + 2));
//   //TIP In the app running in the browser, you’ll find that clicking <b>-2</b> doesn't work. To fix that, rewrite it using the code from lines 19 - 21 as examples of the logic.
//   document.getElementById('decreaseByTwo')

//   //TIP Let’s see how to review and commit your changes. Press <shortcut actionId="GotoAction"/> and look for <b>commit</b>. Try checking the diff for a file – double-click main.js to do that.
//   setCounter(0);

// //TIP To find text strings in your project, you can use the <shortcut actionId="FindInPath"/> shortcut. Press it and type in <b>counter</b> – you’ll get all matches in one place.
// setupCounter(document.getElementById('counter-value'));

// //TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.

// ==========================================
// ALICE & BOB HOUSES - PROPERTY MODAL LOGIC
// ==========================================

// Hardcoded property details data
const properties = {
  'yellow-house': {
    title: 'Yellow Sunshine Villa',
    address: 'Sunshine Way 12',
    description:
      'A cozy yellow family home featuring a large garden, modern kitchen, and energy-efficient solar panels.',
    size: '145 m²',
    price: '$350,000',
    mapBbox: '11.3300,55.3900,11.3700,55.4100'
  },
  'green-house': {
    title: 'Green Eco Cottage',
    address: 'Forest Lane 8',
    description:
      'A peaceful green estate surrounded by nature. Features 4 bedrooms, timber finishes, and proximity to local schools.',
    size: '180 m²',
    price: '$420,000',
    mapBbox: '12.5500,55.6700,12.5900,55.6900'
  },
};

// Open property modal
window.openModal = function (propertyKey) {
  const property = properties[propertyKey];
  if (!property) return;

  document.getElementById('modal-title').innerText = property.title;
  document.getElementById('modal-address').innerText =
    property.address + ' • ' + property.size + ' • ' + property.price;
  document.getElementById('modal-description').innerText = property.description;

  // Update map source inside the modal
  const mapElement = document.getElementById('modal-map');
  if (mapElement && property.mapBbox) {
    mapElement.src = `https://www.openstreetmap.org/export/embed.html?bbox=${property.mapBbox}&layer=mapnik`;
  }

  document.getElementById('details-modal').style.display = 'flex';
};

// Close modal
window.closeModal = function () {
  document.getElementById('details-modal').style.display = 'none';
};

// Close modal when clicking outside the content box
window.onclick = function (event) {
  const modal = document.getElementById('details-modal');
  if (event.target === modal) {
    closeModal();
  }
};