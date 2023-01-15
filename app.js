
/*Arrow function definition that we call in index.html THIS SEARCH VERSION DOESN't WORK --> kept for learning*/
const search2= () =>{

  /*the id is search-item as defined in the html input tag for the search bar. It gets the value from the user
  input in the search box*/
  const searchbox = document.getElementById("search-item").nodeValue.toUpperCase();

  /*we will have to match the user input to the gym list, so we have to access the gym list*/
  const gymitems = document.getElementById("gym-list");


  /*Each gym is separated by div but part of the class="gym" so we can access all the gyms to rearrange them later based 
  on the user input*/
  const gym = document.querySelectorAll(".gym");

  /*To access gym name*/
  const gname = gymitems.getElementsByTagName("h2");

  /* To sort by gym name */
  for(var i=0; i<gname.length;i++){

    /*Gets the first h2 element (gym name) from the list of gyms and assigning it to a variable called match */
    let match = gym[i].getElementsByTagName('h2')[0];


    if(match){

      /*storing match text content in textvalue*/
      let textvalue = match.textContent || match.innerHTML;

      /*compares the textvalue var to the user input in the searchbox. IndexOf() returns the index of the first
      occurence of the searchbox value in the textvalue if it exists. */
      if(textvalue.toUpperCase().indexOf(searchbox)>-1){

        /*searchbox value was found, this statement makes the gym visible to the user */
        gym[i].style.display = "";
      }
      
      else{
        /*searchbox value was not found */
        gym[i].style.display = "none";
      }

    }

  }

}

function search() {
  // Get the input field
  var input = document.getElementById("search-item");
  // Get the value of the input field
  var filter = input.value.toUpperCase();
  // Get the gym list
  var gymList = document.getElementById("gym-list");
  // Get all the gyms
  var gyms = gymList.getElementsByClassName("gym");
  // Loop through all the gyms
  for (var i = 0; i < gyms.length; i++) {
    var gym = gyms[i];
    var gymName = gym.getElementsByTagName("h2")[0];
    var gymLocation = gym.getElementsByTagName("h3")[0];
    // check if the gym name or location match the user input (ignoring case)
    if (gymName.innerHTML.toUpperCase().indexOf(filter) > -1 || gymLocation.innerHTML.toUpperCase().indexOf(filter) > -1) {
      /*Displays Gym*/
      gym.style.display = "";
    } else {
      /*Hides It*/
      gym.style.display = "none";
    }
  }
}

const findMe = () => {
  
}


