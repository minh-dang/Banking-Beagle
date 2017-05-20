'use strict';
module.exports = class Feature {
    constructor(name, code, enabled, trigger, action, postbackTrigger, postbackAction){
        this.name = name;                       // Name of the feature.
        this.code = code;                       // DATABASE_CODE for the feature.
        this.enabled = enabled;                 // Whether the feature is enabled.
        this.trigger = trigger;                 // The message action is taken if the 
        this.action = action;                   //   message trigger evaluates to true.
        this.postbackTrigger = postbackTrigger; // The portback action is taken if the
        this.postbackAction = postbackAction;   //   postback trigger evaluates to true.
    }
};