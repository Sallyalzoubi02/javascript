async function getData() {
    let res = await fetch('https://api.npoint.io/9bbef27f36e583d43d9b');
    let data = await res.json();

    for(user of data){
        let card = document.createElement('div');
        card.className="card";
        card.innerHTML = `
        <h2>${user.name}</h2>
        <p><b>Age: </b> ${user.Age}</p>
        <p><b>Email: </b> ${user.Email}</p>
        <p><b>Profession: </b> ${user.Profession}</p>
        `
        cards.appendChild(card);
    }
}

function getDatajson() {
    fetch('Api.json')
    .then((response)=>{

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json(); 
      })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const user = data[i]; 
            let card = document.createElement('div');
            card.className="card";
            card.innerHTML = `
            <h2>${user.name}</h2>
            <p><b>Age: </b> ${user.Age}</p>
            <p><b>Email: </b> ${user.Email}</p>
            <p><b>Profession: </b> ${user.Profession}</p>
            `
            cards.appendChild(card);
        }
    })
    .catch(error => {
        console.error('Error:', error); 
        container.textContent = 'Failed to load data.';
      });

}