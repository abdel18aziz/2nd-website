let data =[{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/tI8ocADh22GtQFV28vGHaBZVb0U.jpg" , "mvtitle" : "Artemis Fowl" , "mvdate" : "Jun 12, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" , "mvtitle" : "Ad Astra" , "mvdate" : "Sep 17, 2019" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/qnlChF8U4diiykXQYs1miigGy7t.jpg" , "mvtitle" : "Lost Bullet" , "mvdate" : "Jun 19, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg" , "mvtitle" : "Sonic the Hedgehog" , "mvdate" : "Feb 12, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/Af2jt7m9GLFpR4V11xOsFmT8OKD.jpg" , "mvtitle" : "Feel the Beat" , "mvdate" : "Jun 19, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" , "mvtitle" : "Parasite" , "mvdate" : "May 30, 2019" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" , "mvtitle" : "Avengers: Infinity War" , "mvdate" : "Apr 25, 2018" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/hau6iHAIWJmlnaaZ0QRYZu9T6B1.jpg" , "mvtitle" : "Seal Team Six: The Raid on Osama Bin Laden" , "mvdate" : "Nov 04, 2012" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/hL2uecLh2rTTbuVbOriXP0PhqIJ.jpg" , "mvtitle" : "7500" , "mvdate" : "Dec 26, 2019" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg" , "mvtitle" : "Force of Nature" , "mvdate" : "Jul 02, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg" , "mvtitle" : "The Invisible Man" , "mvdate" : "Feb 26, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/2Gi9ZA4kRKKsWguUoTvIyj40dxF.jpg" , "mvtitle" : "You Should Have Left" , "mvdate" : "Jun 19, 2020" },
{ "imgsurl" : "https://image.tmdb.org/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" , "mvtitle" : "Joker" , "mvdate" : "Oct 02, 2019" }
];

// function getdata(data){
//     return data ;
// }
 
document.getElementById("al").innerHTML =`
<a href="watching-page.html" class="mouvies" id="cardss" style="">
<h3>${data.map(function(mvs) {return `<img src="${mvs.imgsurl}" class="jpgimg" alt="${mvs.mvtitle}"><span class="titles">${mvs.mvtitle}</span>`}).join('') }</h3>
</a>
`







// <a href="watching-page.html" class="mouvies">
// ${data}
// <img src="${data.imgsurl}" class="jpgimg" alt="${data.mvtitle}" >
// <span class="">${data.mvtitle}</span>
// </a> 












       
        
// function getdata(){
//   re
// }

// $(document).ready(function(){
//     $("img").click(function(){
//         // Change src attribute of image
//         $(this).attr("src", "images/card-front.jpg");
//     });    
// });


// document.getElementById("slk").innerHTML=`<h3 class="lead">Results (${data.length})</h3>`
// $('.cardss').empty();

                

