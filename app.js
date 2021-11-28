class lightColor
{
    constructor(ctx,color,arc_y,second)
    {
        this.ctx = ctx;
        this.color = color;
        this.arc_y = arc_y;
        this.second = second;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(250, arc_y, 30, 0, 2 * Math.PI);
        ctx.fill();
        if(second != null)
        {
            ctx.fillStyle = "white";
            ctx.font = "bold 25px Arial";
            if(second >= 10)
                ctx.fillText(second, 234,arc_y+8);
            else
                ctx.fillText(second, 240,arc_y+8);
        }
    }   

}
window.onload = function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(200,90,100,220);
    context.fillRect(235,310,30,100); 
    function DefaultLight()
    {
        var defaultLight = new lightColor(context,"gray",130,null);
        var defaultLight = new lightColor(context,"gray",200,null);
        var defaultLight = new lightColor(context,"gray",270,null);
    }
    var secRed = 12;
    var secYellow = 5;
    var secGreen = 15;
    function lightLoop()
    {
        function Red()
        {
            DefaultLight();
            redLight = new lightColor(context,"red",130,secRed);
            if(secRed < 0)
            {
                Yellow();
            }
            else
                secRed--;
        }
        function Yellow()
        {
            DefaultLight();
            yellowLight = new lightColor(context,"yellow",200,secYellow);
            if(secYellow < 0)
            {
                Green();
            }
            else
                secYellow--;
        }
        function Green()
        {
            DefaultLight();
            greenLight = new lightColor(context,"green",270,secGreen);
            if(secGreen < 0)
            {
                secRed = 12;
                secGreen = 15;
                secYellow = 5;
                Red();
            }
            else
                secGreen--;
        }
        Red();
    }
    lightLoop();
    setInterval(lightLoop,1000);
}