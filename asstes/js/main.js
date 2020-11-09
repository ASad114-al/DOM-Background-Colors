const butt =document.getElementById("button")
const color = document.getElementById("bodycolor")
butt.onclick=function()
{event. preventDefault()
    var x = document.getElementById("farbeAuswahlen").selectedIndex;
    var y = document.getElementById("farbeAuswahlen").options;
   
    console.log("Index: " + y[x].index + " is " + y[x].text)

    if(y[x].index ==0 )
    {
        color.style.background="Orchid";
    }
    if(y[x].index ==1)
    {
        color.style.background= "cornsilk"
    }
    if(y[x].index ==2)
    {
        color.style.background= "Blue"
    }
    if(y[x].index ==3)
    {
        color.style.background= "gold"
    }
    if(y[x].index ==4)
    {
        color.style.background= "  Wheat  "
    }
    if(y[x].index ==5)
    {
        color.style.background= " Turquoise   "
    }
    if(y[x].index ==6)
    {
        color.style.background= "Moccasin    "
    }
    if(y[x].index ==7)
    {
        color.style.background= "rgb(102, 1, 1)   "
    }
    if(y[x].index ==8)
    {
        color.style.background= " lime  "
    }
    if(y[x].index ==9)
    {
        color.style.background= "  Gray   "
    }

}