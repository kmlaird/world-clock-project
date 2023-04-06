let berlinElement = document.querySelector(`#berlin`);
let berlinDate = berlinElement.querySelector(`.date`);
let berlinTime = berlinElement.querySelector(`.time`);
let berlinTimeFormat = moment().tz(`Europe/Berlin`);
berlinDate.innerHTML = berlinTimeFormat.format(`MMMM Do, YYYY`);
berlinTime.innerHTML = berlinTimeFormat.format(`h:m:s [<small>]A[</small>]`);

let melbourneElement = document.querySelector(`#melbourne`);
let melbourneDate = melbourneElement.querySelector(`.date`);
let melbourneTime = melbourneElement.querySelector(`.time`);
let melbourneTimeFormat = moment().tz(`Australia/Melbourne`);
melbourneDate.innerHTML = melbourneTimeFormat.format(`MMMM Do, YYYY`);
melbourneTime.innerHTML = melbourneTimeFormat.format(
  `h:m:s [<small>]A[</small>]`
);
let newYorkElement = document.querySelector(`#new-york`);
let newYorkDate = newYorkElement.querySelector(`.date`);
let newYorkTime = newYorkElement.querySelector(`.time`);
let newYorkTimeFormat = moment().tz(`America/New_York`);
newYorkDate.innerHTML = newYorkTimeFormat.format(`MMMM Do, YYYY`);
newYorkTime.innerHTML = newYorkTimeFormat.format(`h:m:s [<small>]A[</small>]`);
