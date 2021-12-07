/*Under we Start with the IIFE(Immediately Invoked Function Expression) a Functional Programming Paradigm
That helps organizing and protecting the global variables from being affected*/
let recipeRepository = (function(){
  let recipeList = [
    {name: 'Meat and Poultry', type:['Beef', 'Duck', 'Lamb'], difficulty: [10], height: [1, 2]},
    {name: 'Fish and Seafood', type:['Cod', 'Salmon', 'Prawns'], difficulty: [7], height: [1, 2]},
    {name: 'Diets', type:['Vegetarian', 'Vegan', 'Pescatarian'], difficulty: [4], height: [1, 2]}
  ]
  /*the function under 'add' have a 'typeof' to make sure that the 'typeof' value input is an object, if not is rejected*/
  function add (recipe) {
    if(typeof recipe === 'object' &&
        'name' in recipe &&
        'type' in recipe &&
        'difficulty' in recipe){
        recipeList.push(recipe);
    }else{
      document.write('The recipe is not correct');
    }
  }

  function addListItem (recipe) {
    let recipeUnorderedList = document.querySelector('.recipe-list');
    let recipeListItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = recipe.name;
    button.classList.add('button-style');

    recipeListItem.appendChild(button);
    recipeUnorderedList.appendChild(recipeListItem);
    /*Under we are creating an Event Listener opening on click using the 'showDetails' function that we create to show/open the recipeList*/
    button.addEventListener('click', function (){
      showDetails(recipe);
    });
  }
  /*Under we create a 'showDetails' function to open our recipeList in the */
  function showDetails(recipe) {
    console.log(recipe.name, recipe.type, recipe.difficulty);
  }

  function getAll () {
    return recipeList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();
/*Now, with IIFE the only way possible to access the recipeRepository is through the 2 functions 'add' and 'getAll'*/


/*'froEach()' function under. Is a more effective already set up function to substitute the 'for' Loop*/
recipeRepository.getAll().forEach(function(recipe){
  recipeRepository.addListItem(recipe);
});










/*---*/
/*let recipeListFilter = recipeRepository.getAll();*/
/*'filter()' function under. It helps searching*/
/*
recipeListFilter.filter(function(recipe){
    document.write('<p>' + recipe.name + '</p>')
    document.write(recipe.difficulty < 5)
});
*/


/*---*/
/*
let validKeyNames = ['name', 'type', 'difficulty', 'height']

function check (obejct) {
  return validKeyNames.every({}.hasOwnProperty.bind(object));
};

document.write(recipeRepository.add(recipeRepository.check));
*/

/*---*/
/*
if(recipe.difficulty < 5 && recipe.difficulty > 0){ // in this section i'm saying to print all objects smaller then 5 and greater then 0.
  document.write('<p>' + recipe.name + ' (difficulty:) ' + recipe.difficulty + '</p>') // recipeList[i].name will print the name + '(difficulty)' will print the string + recipeList[i].difficulty will print the value of difficulty data.
}else if(recipe.difficulty < 8 && recipe.difficulty > 4){ // in this section i'm saying to print all objects smaller then 8 and greater then 4.
  document.write('<p>' + recipe.name + ' (difficulty:) ' + recipe.difficulty + '</p>')
}else{ // in this section i'm saying to print everything else
  document.write('<p>' + recipe.name + ' (difficulty:) ' + recipe.difficulty + ' - Sweeet, this one is hard! ' + '</p>')
}
*/
