//COMM644
//Assignment 3, Part 1
//
//Practice with Arrays (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//---------------------------------------------------------------------
//var movies=["Iron Man","Edge of Tomorrow","The Boxtrolls","Selma","Gone Girl"];
//console.log(movies[1]);
//---------------------------------------------------------------------

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//console.log(movies[0]);
//---------------------------------------------------------------------

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//---------------------------------------------------------------------
//var movies=["Iron Man","Edge of Tomorrow","The Boxtrolls","Selma","Gone Girl"];
//movies.splice(2,0,"Transformers: Age of Extinction");
//console.log(movies.length);
//---------------------------------------------------------------------

//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//delete movies[0]
//console.log(movies.join("-"));
//---------------------------------------------------------------------

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//for(var i=0;i<movies.length;i++){
//    console.log(movies[i]);
//}
//---------------------------------------------------------------------

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//for(var movie in movies){
//    console.log(movies[movie]);
//}
//---------------------------------------------------------------------
//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//movies.sort();
//for(var movie in movies){
//    console.log(movies[movie]);
//}
//---------------------------------------------------------------------
//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//printMovies("Movies I like:",movies);
//printMovies("Movies I regret watching:",leastFavMovies);
//
//function printMovies(strings, arrays){
//    console.log(strings);
//     console.log("");
//    for (var x in arrays){
//        console.log(arrays[x]);
//    }
//     console.log("");
//}
//---------------------------------------------------------------------
//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//printMovies(movies);
//
//function printMovies(arrays){
//    for (var x in arrays){
//        console.log(arrays[x]);
//    }
//}
//---------------------------------------------------------------------

//10.	Return just the last item in the array and display it within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//
//console.log(movies[movies.length-1]);
//---------------------------------------------------------------------

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
// 
//console.log(movies.shift());
//---------------------------------------------------------------------

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//
//for(var x in leastFavMovies){
//    for (var y in movies){
//        if(leastFavMovies[x]==movies[y]){
//            console.log(y);
//        }
//    }  
//}
//---------------------------------------------------------------------

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employee2){
//    console.log(employee2[x].name);
//}

//---------------------------------------------------------------------

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employees){
//    console.log(employees[x].name);
//}
//---------------------------------------------------------------------


//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employees){
//    if(employees[x].isCurrentEmployee=="true")console.log(employees[x].name);
//}
//---------------------------------------------------------------------

//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
//---------------------------------------------------------------------
//var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//for (var x in movies){
//    
//    var nameArray = movies[x].filter(function(item) {	
//    return typeof item == "string";
//});
//    console.log(nameArray);                              
//}
//---------------------------------------------------------------------
                              
//Practice with Functions (5 points)
//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
//---------------------------------------------------------------------
//var displayMessage=function(message){
//    console.log(message);
//}
//
//displayMessage("This is the message");
//---------------------------------------------------------------------

//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
//---------------------------------------------------------------------
//function calculate(numb1,numb2){
//    return numb1%numb2;
//}
//console.log(calculate(5,2));
//---------------------------------------------------------------------

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//
//
//---------------------------------------------------------------------
//var employees=["ZAK" ,"JESSICA","MARK","FRED","SALLY"];
//
//var showEmployees=function(arrays){
//    console.log("Employees:");
//    console.log("");
//    for(var x in arrays){
//        console.log(arrays[x]);
//    }
//}
//
//showEmployees(employees);
//---------------------------------------------------------------------