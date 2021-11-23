let recipeList = [
  {name: 'Meat and Poultry', type:['Beef', 'Duck', 'Lamb'], difficulty: [10], height: [1, 2]},
  {name: 'Fish and Seafood', type:['Cod', 'Salmon', 'Prawns'], difficulty: [7], height: [1, 2]},
  {name: 'Diets', type:['Vegetarian', 'Vegan', 'Pescatarian'], difficulty: [4], height: [1, 2]}
];

for (let i = 0; i < recipeList.length; i++){ // here the initialization 'walk' start on 0 (i=0); condition for the 'direction' until the 'end' of the array(that's why 'length'; action to 'walk' until the end of the array in the 'direction' from '0'(i) to the 'end')
  if(recipeList[i].difficulty < 5 && recipeList[i].difficulty > 0){ // in this section i'm saying to print all objects smaller then 5 and greater then 0.
    document.write(recipeList[i].name + ' (difficulty:) ' + recipeList[i].difficulty + '<br>') // recipeList[i].name will print the name + '(difficulty)' will print the string + recipeList[i].difficulty will print the value of difficulty data.
  }else if(recipeList[i].difficulty < 8 && recipeList[i].difficulty > 4){ // in this section i'm saying to print all objects smaller then 8 and greater then 4.
    document.write(recipeList[i].name + ' (difficulty:) ' + recipeList[i].difficulty + '<br>')
  }else{ // in this section i'm saying to print everything else
    document.write(recipeList[i].name + ' (difficulty:) ' + recipeList[i].difficulty + ' - Sweeet, this one is hard! ' + '<br>')
  }
}
