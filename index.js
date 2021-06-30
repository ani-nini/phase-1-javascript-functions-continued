// Your code here
function saturdayFun (activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork( workOffice = 'go to the office'){
    return(`This Monday, I will ${workOffice}.`);

}
function wrapAdjective(wrap = "*"){
    return function adjective(adj='noun') {
        return `You are ${wrap}${adj}${wrap}!`
    }

}