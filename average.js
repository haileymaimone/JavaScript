function gpaCalculator()
{
    var gpaSum = 0;
    var count = parseInt(prompt("How many grades would you like to enter? (Number must be 2 or greater)"));
    // ensure user enters a number AND ensure that number is greater than 1
    // if number is less than 2, there is no point to calculating an average
    while(isNaN(count) || count<2)
    {
        console.log("\n--------------------WARNING------------------------");
        console.log("You entered an invalid response.  Please try again.")
        console.log("---------------------------------------------------\n");
        var count = parseInt(prompt("\nHow many grades would you like to enter? (Number must be 2 or greater)"));
    }

    // stores letter grades into array
    for(let i=0; i<count; i++)
    {
        var grade = prompt("Enter your letter grade for class " + (i+1) +":").toUpperCase();
        while(grade != 'A' && grade != 'B' && grade != 'C' && grade != 'D' && grade != 'F')
            {
                console.log("\n-----------------------WARNING---------------------------");
                console.log("You did not enter a valid letter grade. Please try again.");
                console.log("---------------------------------------------------------\n");
                var grade = prompt("Enter your letter grade for class " + (i+1) +":").toUpperCase();
            }

        // store proper GPA points for each letter grade
        if(grade == "A")
        {
            num[i]=4;
        }
        else if(grade == "B")
        {
            num[i]=3;
        }
        else if(grade == "C")
        {
            num[i]=2;
        }
        else if(grade == "D")
        {
            num[i]=1;
        }
        else if(grade == "F")
        {
            num[i]=0;
        }


        // adds new value to sum each loop
        gpaSum = gpaSum+num[i];
    }

    // prints out data
    var gpa_average= gpaSum/count; // calculates GPA from the grade average
    
    return gpa_average;

}

function gradeCalculator()
{
    var gradeSum =0;
    var count = parseInt(prompt("\nHow many grades would you like to enter? (Number must be 2 or greater)"));
    // ensure user enters a number AND ensure that number is greater than 1
    // if number is less than 2, there is no point to calculating an average
    while(isNaN(count) || count<2)
    {
        console.log("\n--------------------WARNING------------------------");
        console.log("You entered an invalid response.  Please try again.")
        console.log("---------------------------------------------------\n");
        var count = parseInt(prompt("\nHow many grades would you like to enter? (Number must be 2 or greater)\n"));
    }

    for(let i=0; i<count; i++)
    {
        var percent = Number(prompt("Enter the percentage of grade " + (i+1) +":"));
        
        // error checking -- ensure user enters a number or a valid grade percentage
        while(isNaN(percent) || percent<0)
        {
            console.log("\n---------------------WARNING-------------------------");
            console.log("You entered an invalid percentage.  Please try again.");
            console.log("-----------------------------------------------------\n");
            var percent = Number(prompt("Enter the percentage of grade " + (i+1) +":"));
        };

        if(percent >= 90)
        {
            gradeArr[i]= 'A';
        }
        else if(percent >= 80)
        {
            gradeArr[i]= 'B';
        }
        else if(percent >= 70)
        {
            gradeArr[i]= 'C';
        }
        else if(percent >= 60)
        {
            gradeArr[i]= 'D';
        }
        else
        {
            gradeArr[i]= 'F';
        }

        gradeSum = gradeSum+percent;
    }
    console.log("\nGrades: "+ gradeArr);
    var grade_average= gradeSum/count;


    return grade_average;
}


const prompt = require('prompt-sync')();

var gradeArr = [];
var num = [];
var average =0;

console.log("\n--------------------------------------------");
console.log("  Welcome to the GPA and grade calculator!  ");
console.log("--------------------------------------------\n");
do
{
    console.log("Would you like to calculate your GPA or your class grade?");
    var answer = prompt("Please enter 'GPA' or 'grade':");
    if(answer == "GPA" || answer == "Gpa" || answer == "gpa")
    {
        average=gpaCalculator();
        average=average.toFixed(3);
        console.log("\nYour class GPA is:", average);
        break;
    }
    else if(answer == "grade" || answer == "GRADE" || answer == "Grade")
    {
        average=gradeCalculator();
        average=average.toFixed(2);
        if(average>=90)
        {
            var letterGrade='A';
        }
        else if(average>=80)
        {
            var letterGrade= 'B';
        }
        else if(average>=70)
        {
            var letterGrade= 'C';
        }
        else if(average>=60)
        {
            var letterGrade= 'D';
        }
        else if(average<60)
        {
            var letterGrade= 'F';
        }

        console.log("\nYour grade percentage is:", average, "%");
        console.log("Final Letter Grade: ", letterGrade);

        break;
    }
    else
    {
        console.log("\n-------------------WARNING-----------------------");
        console.log("You entered an invalid phrase.  Please try again.");
        console.log("-------------------------------------------------\n");
    }
} while(answer != "GPA" || answer != "grade");
