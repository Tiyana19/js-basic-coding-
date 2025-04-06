            // Function to calculate total actual sleep hours for the week

const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 12;
        case 'friday':
            return 6;
        case 'saturday':
            return 5;
        case 'sunday':
            return 4;
        default :
            console.log('Invalid day input');
            return 0;

    }
}
const getActualSleepHours = () => {
    // return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days.reduce((total, day) => total + getSleepHours(day), 0);
}
const getIdealSleepHours = () => {
    let idealHours = 6;
    return idealHours * 7;
}
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log('You get the perfect amount of sleep!');
    }else if(actualSleepHours > idealSleepHours){
        let sleepDifference = actualSleepHours - idealSleepHours;
        console.log(`You got too much sleep!!!, you slept ${sleepDifference} hours more than your ideal sleep.`);
    }else {
        sleepDifference = idealSleepHours - actualSleepHours
        console.log(`You need to get more rest. you needed ${sleepDifference} hours more to get ideal sleep.`);
    }
}
calculateSleepDebt();
