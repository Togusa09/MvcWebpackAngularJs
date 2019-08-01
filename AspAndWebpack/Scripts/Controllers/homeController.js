import { app } from "../app.module";

var homeContoller = function(){
    this.testProperty = "Test Value";
    this.testMethod = function(){
        return "Test Method Value";
    }
};

app.controller('homeController', homeContoller);