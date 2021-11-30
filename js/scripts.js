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
    if(typeof recipe === 'object') {
      recipeList.push(recipe);
    }else{
      document.write('The values are not a object')
    }
  }

  function getAll () {
    return recipeList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();
/*Now, with IIFE the only way possible to access the recipeRepository is through the 2 functions 'add' and 'getAll'*/


/*recipeListLoop was a variable created to access the IIFE through the getAll function*/
let recipeListLoop = recipeRepository.getAll();


/*'froEach' function is a more effective already set up function to substitute the 'for' Loop*/
recipeListLoop.forEach(function(recipe){
  if(recipe.difficulty < 5 && recipe.difficulty > 0){ // in this section i'm saying to print all objects smaller then 5 and greater then 0.
    document.write(recipe.name + ' (difficulty:) ' + recipe.difficulty + '<br>') // recipeList[i].name will print the name + '(difficulty)' will print the string + recipeList[i].difficulty will print the value of difficulty data.
  }else if(recipe.difficulty < 8 && recipe.difficulty > 4){ // in this section i'm saying to print all objects smaller then 8 and greater then 4.
    document.write(recipe.name + ' (difficulty:) ' + recipe.difficulty + '<br>')
  }else{ // in this section i'm saying to print everything else
    document.write(recipe.name + ' (difficulty:) ' + recipe.difficulty + ' - Sweeet, this one is hard! ' + '<br>')
  }
});
