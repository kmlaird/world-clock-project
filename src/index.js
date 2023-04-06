/*Homepage*/
function updateTime() {
  //Berlin
  let berlinElement = document.querySelector(`#berlin`);
  let berlinDate = berlinElement.querySelector(`.date`);
  let berlinTime = berlinElement.querySelector(`.time`);
  let berlinTimeFormat = moment().tz(`Europe/Berlin`);
  berlinDate.innerHTML = berlinTimeFormat.format(`MMMM Do, YYYY`);
  berlinTime.innerHTML = berlinTimeFormat.format(
    `h:mm:ss [<small>]A[</small>]`
  );
  //Melbourne
  let melbourneElement = document.querySelector(`#melbourne`);
  let melbourneDate = melbourneElement.querySelector(`.date`);
  let melbourneTime = melbourneElement.querySelector(`.time`);
  let melbourneTimeFormat = moment().tz(`Australia/Melbourne`);
  melbourneDate.innerHTML = melbourneTimeFormat.format(`MMMM Do, YYYY`);
  melbourneTime.innerHTML = melbourneTimeFormat.format(
    `h:mm:ss [<small>]A[</small>]`
  );
  //New York
  let newYorkElement = document.querySelector(`#new-york`);
  let newYorkDate = newYorkElement.querySelector(`.date`);
  let newYorkTime = newYorkElement.querySelector(`.time`);
  let newYorkTimeFormat = moment().tz(`America/New_York`);
  newYorkDate.innerHTML = newYorkTimeFormat.format(`MMMM Do, YYYY`);
  newYorkTime.innerHTML = newYorkTimeFormat.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}

/*select function updates */
function updateCity(event) {
  function updateNewTime() {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace(`_`, ` `).split(`/`)[1];
    let cityDateTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector(`#cities`);
    citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDateTime.format(`MMMM Do, YYYY`)}</div>
          </div>
          <div class="time">${cityDateTime.format(
            `h:mm:ss`
          )} <small>${cityDateTime.format(`A`)}</small></div>
        </div>`;
  }
  updateNewTime();
  setInterval(updateNewTime, 1000);
}

/*global function calls */
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector(`#city`);
citiesSelect.addEventListener(`change`, updateCity);
