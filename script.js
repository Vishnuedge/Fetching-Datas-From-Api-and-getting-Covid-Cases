const getCountry = async ()=>{
    //GETTING TEXT FROM TEXT BOX
    var countryName = document.getElementById('text').value;
    if(countryName == "" || null){
        alert('ENTER COUNTRY NAME')
    }else{
      
    //APPENDING COUNTRY NAME FROM TEXT BOX TO URL'S    
    var url = `https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`;
    var restApi = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
    
    try { 
        //DATA FROM URL   
        var response = await fetch(url);
        var result = await response.json();
        //DATA FROM REST API    
        var response1 = await fetch(restApi);
        var result1 = await response1.json();
        var data = result1.map(element => {
            return element.flag;
        });

          
        //CREATING ELEMENT DYNAMICALLY
            var row = document.querySelector('#get');
            var column = document.createElement('div');
            column.setAttribute('class','col-xl-4 ml-15');
        //CARD
            var card = document.createElement('div');
            card.setAttribute('class','card');
            card.setAttribute('style','width : 25rem');
            

            var image = document.createElement('img');
            image.setAttribute('class','card-img-top');
            image.src = data;
            
            var cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');

            var header = document.createElement('h4');
            header.innerText = result.All.country;
            header.setAttribute('style','text-transform: uppercase')
        //UNORDERED LIST INSIDE CARD 
            var unorder = document.createElement('ul');
            unorder.setAttribute('class','list-group list-group-flush');
        
            var list1 = document.createElement('li');
            list1.setAttribute('class','list-group-item');
            list1.innerHTML =  `<h6>Population : <span class = "fw-normal"> ${result.All.population}</span> </h6>`;
            var list2 = document.createElement('li');
            list2.setAttribute('class','list-group-item');
            list2.innerHTML =  `<h6>Confirmed : <span class = "fw-normal"> ${result.All.confirmed}</span> </h6>`;
            var list3 = document.createElement('li');
            list3.setAttribute('class','list-group-item');
            list3.innerHTML =  `<h6>Recovered : <span class = "fw-normal"> ${result.All.recovered}</span> </h6>`;
            var list4 = document.createElement('li');
            list4.setAttribute('class','list-group-item');
            list4.innerHTML =  `<h6>Deaths : <span class = "fw-normal"> ${result.All.deaths}</span> </h6>`;
        //APPENDING TO PARENTS
            unorder.append(list1,list2,list3,list4);
            cardBody.append(header);
            card.append(image,cardBody,unorder);
            
            column.append(card);
            row.append(column);
        
        
}catch (error) {
    console.log(error);
}
    }

}