// Your code here
function saturdayFun (activity = 'roller-skate', clean = "bathe my dog!"){
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork( workOffice = 'go to the office',worHome= "work from home"){
    return(`This Monday, I will ${workOffice}.`);

}
function wrapAdjective(wrap = "*"){
    return function adjective(adj='noun') {
        return `You are ${wrap}${adj}${wrap}!`
    }

}