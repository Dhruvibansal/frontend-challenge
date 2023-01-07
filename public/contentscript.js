console.log('Contentscript injected');

// let element = ...;

// ...

// const parentElement = document.querySelector(
//   '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
// );

const getBudgetElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3)>p:nth-child(3)',
);

const getParentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
);

let isDisplayBlocked = false;
getParentElement.style.display = 'inline';
getParentElement.style.marginRight='25%';

var button = document.createElement('button');
button.setAttribute('id', 'budget-to-beat-btn');
let getBudgetElements = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3)>p:nth-child(6)',
  );
const myFunction = () => {
  if (!isDisplayBlocked) {
    
    let para = document.createElement('p');
    para.innerHTML = `Global climate change refers to the rise of earth's temperature, caused by human factors. It originates from the greenhouse effect of certain gases in our atmosphere like carbon dioxide (CO<sub>2</sub>) or methane (CH<sub>4</sub>) that block the escaping heat. The concentration of these gases has risen dramatically by human impact since the mid of the 20<sup>th</sup> century, with the burning of fossil fuels (oil and gas) and deforestation being main causes of this rise. The observed and expected effects include more and longer periods of draught, wildfires and an increased number of extreme weather events.<br/>
    <br/>Mitigation – reducing climate change – involves reducing the flow of heat-trapping greenhouse gases into the atmosphere, either by reducing sources of these gases (for example, the burning of fossil fuels for electricity, heat, or transport) or enhancing the \"sinks\" that accumulate and store these gases (such as the oceans, forests, and soil). The goal of mitigation is to avoid significant human interference with Earth's climate, \"stabilize greenhouse gas levels in a time frame sufficient to allow ecosystems to adapt naturally to climate change, ensure that food production is not threatened, and to enable economic development to proceed in a sustainable manner\" (from the 2014 report on Mitigation of Climate Change from the United Nations Intergovernmental Panel on Climate Change, page 4).<br/>
    <br/> es gibt keine Beschreibung in Repository drei(3)`;
    getBudgetElements.after(para);
  }
  isDisplayBlocked = true
};
button.innerHTML = `Budget-to-Beat: ${getBudgetElement.firstChild.nodeValue}`;
button.style.background='#2256C0';
button.style.color='white';
button.style.borderRadius='2%';
button.style.height='40px';
button.style.padding='0 15px 0 15px';
button.style.fontSize='medium';
button.style.fontWeight='600';
button.style.border='none';
button.onclick = function () {
  myFunction();
};
getParentElement.after(button);
