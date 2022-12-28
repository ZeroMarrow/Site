jQuery(function(){
    jQuery('#btn1').click();
 });

function fnc1() {
    var c = document.getElementById("btntab1");
    if (c.innerHTML === "Tabs are very convenient.") {
        c.innerHTML = "Tabs with soft transitioning effect."
    }
    if (c.innerHTML === "Tabs reduce the working time.") {
        c.innerHTML = "Tabs with soft transitioning effect."
    }
    var cc = document.getElementById("btntab2");
    if (cc.innerHTML === "Tabs are very cool super duper what a useful thing in our and not our world, consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus") 
    {
        cc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus vero officiis provident eaque mollitia!"
    }if (cc.innerHTML === "We all love tabs before losing weight, that we already want to cry for how much they are useful productive and much more amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt") 
    {
        cc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus vero officiis provident eaque mollitia!"
    }
    
}

function fnc2() {
    var x = document.getElementById("btntab1");
    if (x.innerHTML === "Tabs with soft transitioning effect.") {
        x.innerHTML = "Tabs are very convenient.";
    }if  (x.innerHTML === "Tabs reduce the working time.") {
        x.innerHTML = "Tabs are very convenient."; 
    }
    var xx = document.getElementById("btntab2");
    if (xx.innerHTML === "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus vero officiis provident eaque mollitia!") 
    {
    xx.innerHTML = "Tabs are very cool super duper what a useful thing in our and not our world, consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus"
    }if (xx.innerHTML === "We all love tabs before losing weight, that we already want to cry for how much they are useful productive and much more amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt") 
    {
        xx.innerHTML = "Tabs are very cool super duper what a useful thing in our and not our world, consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus"
    }
}
function fnc3() {
    var z = document.getElementById("btntab1");
    if (z.innerHTML === "Tabs are very convenient.") {
        z.innerHTML = "Tabs reduce the working time.";

    }if (z.innerHTML === "Tabs with soft transitioning effect.") {
        z.innerHTML = "Tabs reduce the working time."
    }
    var zz = document.getElementById("btntab2");
    if (zz.innerHTML === "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus vero officiis provident eaque mollitia!") {
        zz.innerHTML = "We all love tabs before losing weight, that we already want to cry for how much they are useful productive and much more amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt"
    }if (zz.innerHTML === "Tabs are very cool super duper what a useful thing in our and not our world, consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt, dolorum id accusamus eos corporis facilis reiciendis animi sunt ipsam nulla voluptatibus") {
        zz.innerHTML = "We all love tabs before losing weight, that we already want to cry for how much they are useful productive and much more amet consectetur adipisicing elit. Reprehenderit corrupti aliquam cum incidunt"
    }
}

