const feedDisplay = document.querySelector('#feed');

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(content => {
            const contentItem =`<div><h3>`+ content.title +`</h3><p>`+ content.url +`</p></div>` ;
            feedDisplay.insertAdjacentHTML("beforeend", contentItem);
            
        });
    })
    .catch(err => console.log(err));