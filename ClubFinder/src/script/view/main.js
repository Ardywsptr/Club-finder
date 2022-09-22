import DataSource from '../data/data-source.js';

const main = ()=> {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  //ganti arrow function
    const onButtonSearchClicked = async ()=> {
    dataSource.searchClub(searchElement.value)
      try{
        const result = await dataSource.searchClub(searchElement.value);
        renderResult(result)
      }catch(message){
        fallbackResult(message);
      }
  };

  //ganti arrow function
  const renderResult = results => {
    clubListElement.innerHTML = '';
    //ganti arrow function
    results.forEach(club =>{
      const {name, fanArt, description} = club;
      
      const clubElement = document.createElement('div');
      clubElement.setAttribute('class', 'club');

      clubElement.innerHTML = `
          <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
          <div class="club-info">
          <h2>${name}</h2>
          <p>${description}</p>
          </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  //ganti arrow function
  const fallbackResult = message => {
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;
