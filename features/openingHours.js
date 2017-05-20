'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');
let branchHours = {
    "timestamp": 1471437663001,
    "stores": {
        "WPS" : { "name" : "West Perth Store", "hours" : "Monday: 9:00 AM - 5:00 PM  Tuesday: 9:30 AM - 5:00 PM  Wednesday: 9:00 AM - 5:00 PM  Thursday: 9:00 AM - 5:00 PM  Friday: 9:00 AM - 5:00 PM  Saturday:  Closed  Sunday:  Closed"},
        "BPS" : { "name" : "Bankwest Place Store", "hours" : "Monday: 8:00 AM - 6:00 PM  Tuesday: 8:00 AM - 6:00 PM  Wednesday: 8:00 AM - 6:00 PM  Thursday: 8:00 AM - 6:00 PM  Friday: 8:00 AM - 6:00 PM  Saturday: 9:00 AM - 5:00 PM  Sunday:  Closed"},
        "HSS" : { "name" : "Hay Street Store", "hours" : "Monday: 9:00 AM - 5:00 PM  Tuesday: 9:30 AM - 5:00 PM  Wednesday: 9:00 AM - 5:00 PM  Thursday: 9:00 AM - 5:00 PM  Friday: 9:00 AM - 5:00 PM  Saturday:  Closed  Sunday:  Closed"}
    }
}


let trigger = function(actionName){
    return actionName === "openingHours";
}

let action = function(recipientId, result){
    var matchFound = false;
	for(var storeId in branchHours.stores) {
		var indivStore = branchHours.stores[storeId];
		if(result.resolvedQuery.includes(indivStore.name))	{
    		sendTextMessage(recipientId, indivStore.hours);
            matchFound = true;
		}
	}

    //If opening hours for a specific store were not requested then send the opening hours
    //for ALL stores
    if(!matchFound)    {
        sendAllOpeningHoursTextMessage(recipientId);
    }
}

function sendAllOpeningHoursTextMessage(recipientId)   {
    sendTextMessage(recipientId, "Below are the opening hours for all our stores \n\n");
        for(var storeId in branchHours.stores) {
            var indivStore = branchHours.stores[storeId];
            sendTextMessage(recipientId, indivStore.name + "\n" + indivStore.hours);
         }

}

module.exports = {
    trigger: trigger,
    action: action
};