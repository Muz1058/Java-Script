let myName="Java Script     ";

//console.log(myName.length);  //16

//console.log(myName.trueLength);

let myHero=["Thor","spider"]

let heroPower={
    thor:"Hammer",
    spider:"sling",

    getSpiderPower:function(){
        console.log(`Spider power : ${this.spider}`);
    }
}

Object.prototype.javaScript=function(){
    console.log("Java Script Name is present in all objects");
}


//heroPower.javaScript();

//myHero.javaScript()  //correct because we add javaScript() method to object which is Top hierarichy , as ARRAY also have properties of object so ARRAY also have access to method javaScript()


Array.prototype.heyJS=function(){
    console.log("Hey JS");
}

myHero.heyJS()

//heroPower.heyJS()  //error  aswe add heyJs() to Array not Object