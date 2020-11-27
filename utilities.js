const data1=[
    { "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/xT98tLqatZPQApyRmlPL12LtiWp.jpg" , "mv0title" : "The Hobbit: The Battle of the Five Armies" , "mv0date" : "Dec 10, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/db32LaOibwEliAmSL2jjDF6oDdj.jpg" , "mv0title" : "Star Wars: The Rise of Skywalker" , "mv0date" : "Dec 18, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/iZf0KyrE25z1sage4SYFLCCrMi9.jpg" , "mv0title" : "1917" , "mv0date" : "Dec 25, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg" , "mv0title" : "Aladdin" , "mv0date" : "May 22, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/yx4cp1ljJMDSFeEex0Zjv45b55E.jpg" , "mv0title" : "Da 5 Bloods" , "mv0date" : "Jun 12, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/u12KThfDZpBGQ98Qg7ahWvMV9gq.jpg" , "mv0title" : "Britt-Marie Was Here" , "mv0date" : "Jan 25, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" , "mv0title" : "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)" , "mv0date" : "Feb 05, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" , "mv0title" : "Harry Potter and the Philosopher's Stone" , "mv0date" : "Nov 16, 2001" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg" , "mv0title" : "Onward" , "mv0date" : "Feb 29, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/tQf4DUygWo64AOuqgk4jEDCE3Ws.jpg" , "mv0title" : "Gone Girl" , "mv0date" : "Oct 01, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jUVbqKcDgcLSS5s4UV82XUkMKlU.jpg" , "mv0title" : "Athlete A" , "mv0date" : "Jun 24, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg" , "mv0title" : "Extraction" , "mv0date" : "Apr 24, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg" , "mv0title" : "Terminator: Dark Fate" , "mv0date" : "Oct 23, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/8Ga1CI4ZIIF8fxyfjZ5sNlb75e4.jpg" , "mv0title" : "A Whisker Away" , "mv0date" : "Jun 18, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fOvqEunubL3wPskvtk2Ficfl0pH.jpg" , "mv0title" : "Wasp Network" , "mv0date" : "Jan 29, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/izGiAbtC2lmGk3bbV5t3OowJhtP.jpg" , "mv0title" : "Irresistible" , "mv0date" : "Jun 26, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" , "mv0title" : "Interstellar" , "mv0date" : "Nov 05, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" , "mv0title" : "Spider-Man: Far from Home" , "mv0date" : "Jun 28, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/pThyQovXQrw2m0s9x82twj48Jq4.jpg" , "mv0title" : "Knives Out" , "mv0date" : "Nov 27, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/uS9qxeCuP1WTYytdyQy9bydTgIi.jpg" , "mv0title" : "Run with the Hunted" , "mv0date" : "Jun 26, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg" , "mv0title" : "Bad Boys for Life" , "mv0date" : "Jan 15, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" , "mv0title" : "Inception" , "mv0date" : "Jul 15, 2010" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg" , "mv0title" : "Frozen II" , "mv0date" : "Nov 20, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg" , "mv0title" : "Bulbbul" , "mv0date" : "Jun 24, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg" , "mv0title" : "The Lion King" , "mv0date" : "Jul 12, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/p69QzIBbN06aTYqRRiCOY1emNBh.jpg" , "mv0title" : "Doctor Sleep" , "mv0date" : "Oct 30, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" , "mv0title" : "Star Wars" , "mv0date" : "May 25, 1977" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/GQP6noTBKsYiAYyn8PYXFcsSgH.jpg" , "mv0title" : "Se7en" , "mv0date" : "Sep 22, 1995" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/3B2twt8I02cLAPHG6dkDpTFbgz5.jpg" , "mv0title" : "Followed" , "mv0date" : "Jun 26, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg" , "mv0title" : "Bloodshot" , "mv0date" : "Mar 05, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/2mxS4wUimwlLmI1xp6QW6NSU361.jpg" , "mv0title" : "Big Hero 6" , "mv0date" : "Oct 24, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg" , "mv0title" : "The Dark Knight" , "mv0date" : "Jul 16, 2008" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" , "mv0title" : "Spider-Man: Homecoming" , "mv0date" : "Jul 05, 2017" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg" , "mv0title" : "Harry Potter and the Chamber of Secrets" , "mv0date" : "Nov 13, 2002" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg" , "mv0title" : "Terminator Genisys" , "mv0date" : "Jun 23, 2015" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg" , "mv0title" : "Angel Has Fallen" , "mv0date" : "Aug 21, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg" , "mv0title" : "Gabriel's Inferno" , "mv0date" : "May 29, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/zfE0R94v1E8cuKAerbskfD3VfUt.jpg" , "mv0title" : "It Chapter Two" , "mv0date" : "Sep 04, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg" , "mv0title" : "Teenage Mutant Ninja Turtles" , "mv0date" : "Aug 07, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" , "mv0title" : "The Lord of the Rings: The Fellowship of the Ring" , "mv0date" : "Dec 18, 2001" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg" , "mv0title" : "Scoob!" , "mv0date" : "May 15, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" , "mv0title" : "The Lord of the Rings: The Return of the King" , "mv0date" : "Dec 01, 2003" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" , "mv0title" : "Thor: Ragnarok" , "mv0date" : "Oct 25, 2017" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg" , "mv0title" : "Inside Out" , "mv0date" : "Jun 09, 2015" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg" , "mv0title" : "The Hobbit: An Unexpected Journey" , "mv0date" : "Nov 26, 2012" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg" , "mv0title" : "The Imitation Game" , "mv0date" : "Nov 14, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg" , "mv0title" : "Ford v Ferrari" , "mv0date" : "Nov 13, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg" , "mv0title" : "The Gentlemen" , "mv0date" : "Dec 03, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/c7CTxNNPeg6MH9VA9BBvMKdPmSh.jpg" , "mv0title" : "Nobody Knows I'm Here" , "mv0date" : "Jun 24, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" , "mv0title" : "John Wick: Chapter 3 - Parabellum" , "mv0date" : "May 15, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" , "mv0title" : "Blade Runner 2049" , "mv0date" : "Oct 04, 2017" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/velWPhVMQeQKcxggNEU8YmIo52R.jpg" , "mv0title" : "The Green Mile" , "mv0date" : "Dec 10, 1999" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/myf3qzpeN0JbuFRPwSpJcz7rmAT.jpg" , "mv0title" : "Vivarium" , "mv0date" : "Jul 12, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg" , "mv0title" : "Captain America: Civil War" , "mv0date" : "Apr 27, 2016" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg" , "mv0title" : "The Hunt" , "mv0date" : "Mar 11, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg" , "mv0title" : "The Shawshank Redemption" , "mv0date" : "Sep 23, 1994" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg" , "mv0title" : "The King of Staten Island" , "mv0date" : "Jul 01, 2020" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg" , "mv0title" : "Jumanji: The Next Level" , "mv0date" : "Dec 04, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg" , "mv0title" : "Five Feet Apart" , "mv0date" : "Mar 15, 2019" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/8TSSBdw1CiIWZkWmcALoLdWs4Do.jpg" , "mv0title" : "Exodus: Gods and Kings" , "mv0date" : "Dec 03, 2014" },
{ "img0url" : "https://image.tmdb.org/t/p/w220_and_h330_face/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg" , "mv0title" : "The Godfather" , "mv0date" : "Mar 14, 1972" }
];
     
function mean(){

    location.assign("./watching-page.html")
}

document.getElementById("all0").innerHTML =`
${data1.map(function(mv) {return `<a onclick="mean()" class="movies" id="cardss cardss" style=""><img src="${mv.img0url}" class="jpgimg" alt="${mv.mv0title}"><span class="titles">${mv.mv0title}</span></a>`}).join('') }
`


const rando = [
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg" , "mv-title " : "Alien" , "mv-date " : "May 25, 1979" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/cgC67SOxd9xkjN4Bnvjtuj1vI8T.jpg" , "mv-title " : "Jungle Beat: The Movie" , "mv-date " : "Jun 26, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" , "mv-title " : "Black Panther" , "mv-date " : "Feb 13, 2018" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg" , "mv-title " : "Harry Potter and the Goblet of Fire" , "mv-date " : "Nov 16, 2005" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/p2YrGRvSef7tKZCgfiwqPKSNFB7.jpg" , "mv-title " : "The Hot Chick" , "mv-date " : "Dec 13, 2002" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/2L3Cn0CizbSy2E9KJt1SiOSyb6p.jpg" , "mv-title " : "What Lies Beneath" , "mv-date " : "Jul 21, 2000" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/vJeUocshLnZ23k9aKyA2XhkFZF5.jpg" , "mv-title " : "The Cabbie" , "mv-date " : "Oct 10, 2000" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" , "mv-title " : "Titanic" , "mv-date " : "Nov 18, 1997" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/aINpljdt3VVMrCLtJW4BektwYOp.jpg" , "mv-title " : "Babyteeth" , "mv-date " : "Jun 18, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg" , "mv-title " : "Deadpool" , "mv-date " : "Feb 09, 2016" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg" , "mv-title " : "Trolls World Tour" , "mv-date " : "Mar 12, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/MBiKqTsouYqAACLYNDadsjhhC0.jpg" , "mv-title " : "Red Shoes and the Seven Dwarfs" , "mv-date " : "Jul 25, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" , "mv-title " : "Star Wars: The Last Jedi" , "mv-date " : "Dec 13, 2017" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/iH4C837ZWm8IYqULL3PWyGKVtqY.jpg" , "mv-title " : "Cinderella" , "mv-date " : "Mar 12, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg" , "mv-title " : "Master and Commander: The Far Side of the World" , "mv-date " : "Nov 14, 2003" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/aOYHJclz1yZdFT3hdMY8TeYU4fk.jpg" , "mv-title " : "The Perfect Storm" , "mv-date " : "Jun 26, 2000" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg" , "mv-title " : "The Fifth Element" , "mv-date " : "May 02, 1997" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/cCTJPelKGLhALq3r51A9uMonxKj.jpg" , "mv-title " : "Dark Phoenix" , "mv-date " : "Jun 05, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/u6QBDGUCOEMRekna95ip2MxplbQ.jpg" , "mv-title " : "The Devil Wears Prada" , "mv-date " : "Jun 30, 2006" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/7GsM4mtM0worCtIVeiQt28HieeN.jpg" , "mv-title " : "Jojo Rabbit" , "mv-date " : "Oct 18, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/uDQibffYgssdiqx7izO57wdLc6.jpg" , "mv-title " : "Harry Potter and the Prisoner of Azkaban" , "mv-date " : "May 31, 2004" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/qq8xf2SQqHifUUyc0k6Hj1065f1.jpg" , "mv-title " : "Whiplash" , "mv-date " : "Oct 10, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg" , "mv-title " : "The Lord of the Rings: The Two Towers" , "mv-date " : "Dec 18, 2002" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" , "mv-title " : "The Matrix" , "mv-date " : "Mar 30, 1999" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/aSBIBTM2mLYLilRBW6XWVitXAKo.jpg" , "mv-title " : "Quantum of Solace" , "mv-date " : "Oct 30, 2008" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg" , "mv-title " : "Inglourious Basterds" , "mv-date " : "Aug 18, 2009" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/wHqGb8J6tXBVwjqWooGMtNEjs2A.jpg" , "mv-title " : "Léon: The Professional" , "mv-date " : "Sep 14, 1994" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/mb4zAOosaO9tHyH1n7g0634moK0.jpg" , "mv-title " : "Jupiter Ascending" , "mv-date " : "Feb 04, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/vOEbimiBaTQr9SDFfDHHWCZdZK2.jpg" , "mv-title " : "Lawrence of Arabia" , "mv-date " : "Dec 10, 1962" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/dgznnOxd2Z9bijIc5xkmSoX4V5T.jpg" , "mv-title " : "The Mafia: Payback" , "mv-date " : "Jun 25, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" , "mv-title " : "Fight Club" , "mv-date " : "Oct 15, 1999" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg" , "mv-title " : "Deadpool 2" , "mv-date " : "May 10, 2018" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/qvktm0BHcnmDpul4Hz01GIazWPr.jpg" , "mv-title " : "The Terminator" , "mv-date " : "Oct 26, 1984" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg" , "mv-title " : "Maleficent: Mistress of Evil" , "mv-date " : "Oct 16, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg" , "mv-title " : "The Mummy" , "mv-date " : "Apr 16, 1999" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg" , "mv-title " : "Apocalypse Now" , "mv-date " : "Aug 15, 1979" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/qWrPZZL7CC3MqySlOzpXaUWjUrd.jpg" , "mv-title " : "2 Minutes of Fame" , "mv-date " : "Jun 16, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/gwi5kL7HEWAOTffiA14e4SbOGra.jpg" , "mv-title " : "Doctor Strange" , "mv-date " : "Oct 25, 2016" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" , "mv-title " : "Pulp Fiction" , "mv-date " : "Sep 10, 1994" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg" , "mv-title " : "Avatar" , "mv-date " : "Dec 10, 2009" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg" , "mv-title " : "Charlie's Angels" , "mv-date " : "Nov 14, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fEXxILY3zm8821sEMSHrD1rjMe.jpg" , "mv-title " : "Escape from Alcatraz" , "mv-date " : "Jan 25, 1979" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg" , "mv-title " : "Ready Player One" , "mv-date " : "Mar 28, 2018" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg" , "mv-title " : "Zombieland: Double Tap" , "mv-date " : "Oct 09, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jNB2zXgLG8D98X1kYwERVlrW3Oa.jpg" , "mv-title " : "Tomorrowland" , "mv-date " : "May 19, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg" , "mv-title " : "Gemini Man" , "mv-date " : "Oct 02, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/ik8PugpL41s137RAWEGTAWu0dPo.jpg" , "mv-title " : "Maleficent" , "mv-date " : "May 28, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/33VdppGbeNxICrFUtW2WpGHvfYc.jpg" , "mv-title " : "The Call of the Wild" , "mv-date " : "Feb 19, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg" , "mv-title " : "Dunkirk" , "mv-date " : "Jul 19, 2017" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" , "mv-title " : "Mulan" , "mv-date " : "Jul 23, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg" , "mv-title " : "Men in Black" , "mv-date " : "Jul 02, 1997" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/oYUZHYMwNKnE1ef4WE5Hw2a9OAY.jpg" , "mv-title " : "Apollo 13" , "mv-date " : "Jun 30, 1995" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg" , "mv-title " : "Little Women" , "mv-date " : "Dec 25, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/or1gBugydmjToAEq7OZY0owwFk.jpg" , "mv-title " : "Braveheart" , "mv-date " : "May 24, 1995" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/m5h3NtZ2ZfryIHl1MvatmANvIqQ.jpg" , "mv-title " : "Dracula Untold" , "mv-date " : "Oct 01, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/hF5AFDTWEqECQEvqOsFG2FQ6DJM.jpg" , "mv-title " : "Adventures of Rufus: The Fantastic Pet" , "mv-date " : "May 26, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/xRWht48C2V8XNfzvPehyClOvDni.jpg" , "mv-title " : "Alita: Battle Angel" , "mv-date " : "Jan 31, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg" , "mv-title " : "Fury" , "mv-date " : "Oct 15, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" , "mv-title " : "Avengers: Age of Ultron" , "mv-date " : "Apr 22, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg" , "mv-title " : "Logan" , "mv-date " : "Feb 28, 2017" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg" , "mv-title " : "How to Train Your Dragon: The Hidden World" , "mv-date " : "Jan 03, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg" , "mv-title " : "Bohemian Rhapsody" , "mv-date " : "Oct 24, 2018" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/JC8KQ2BXaAIFEU8zEuakiwUQSr.jpg" , "mv-title " : "Saving Private Ryan" , "mv-date " : "Jul 24, 1998" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/18IydtBgq8aJZpbP6NxCAGjHhae.jpg" , "mv-title " : "Chappie" , "mv-date " : "Mar 04, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg" , "mv-title " : "The Hunger Games: Mockingjay - Part 1" , "mv-date " : "Nov 19, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/38C91I7Xft0gyY7BITm8i4yvuRb.jpg" , "mv-title " : "Ted 2" , "mv-date " : "Jun 25, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/30YacPAcxpNemhhwX0PVUl9pVA3.jpg" , "mv-title " : "Spies in Disguise" , "mv-date " : "Dec 04, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/1lB6KF7CDdaxykXdsd0y6ISNiOs.jpg" , "mv-title " : "Terminator 2: Judgment Day" , "mv-date " : "Jul 03, 1991" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg" , "mv-title " : "The Martian" , "mv-date " : "Sep 30, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg" , "mv-title " : "Ant-Man and the Wasp" , "mv-date " : "Jul 04, 2018" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg" , "mv-title " : "Bombshell" , "mv-date " : "Dec 13, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg" , "mv-title " : "Coco" , "mv-date " : "Oct 27, 2017" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/f7plKDERmGfUw9ErDArkqnzKGMk.jpg" , "mv-title " : "Rush Hour" , "mv-date " : "Sep 18, 1998" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/jMQdkZwXh8TLsJev8cT0pKeTwrj.jpg" , "mv-title " : "Aladdin" , "mv-date " : "Nov 25, 1992" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/9rd002JS49RwDW944fF1wjU8iTV.jpg" , "mv-title " : "Star Wars: The Force Awakens" , "mv-date " : "Dec 15, 2015" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg" , "mv-title " : "Midsommar" , "mv-date " : "Jul 03, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg" , "mv-title " : "Portrait of a Lady on Fire" , "mv-date " : "Jun 17, 2019" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/5X3VOy9lD44VclKsWTi8gHZGjhL.jpg" , "mv-title " : "Hercules" , "mv-date " : "Jul 23, 2014" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/f4Q6BKm1lv9u5xoffbIIwrOYf6z.jpg" , "mv-title " : "Waterworld" , "mv-date " : "Jul 28, 1995" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/q2lkJf1TAjImTHCEO7XvbqPtnPb.jpg" , "mv-title " : "Infamous" , "mv-date " : "Jun 12, 2020" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg" , "mv-title " : "The Shining" , "mv-date " : "May 23, 1980" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/czVhhAaSBFpakur7U8pOIDV9NUG.jpg" , "mv-title " : "Grease" , "mv-date " : "Jul 07, 1978" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg" , "mv-title " : "Harry Potter and the Deathly Hallows: Part 1" , "mv-date " : "Oct 17, 2010" },
{ "img-url" : "https://image.tmdb.org/t/p/w220_and_h330_face/sDupSRbqxJhSrjKQI33w7Fd8Owz.jpg" , "mv-title " : "Underworld: Blood Wars" , "mv-date " : "Nov 24, 2016" }
];

function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  
  
// function rfun() { 
    
//     var sr = rando[Math.floor(random(1, 5))-1]; 
//     return sr ;
// }  

document.getElementById("sfun").innerHTML=`
${rando.map(function(vs) {
    rando[Math.floor(random(1, 5))-1]; 
    return `<div onclick="mn()" class="cardss"><a  class="movies"><img src="${vs.imgsurl}" class="jpgimg" alt="${vs.mvtitle}"><span class="titles">${vs.mvtitle}</span></a></div>`
    }).join('') 
  }`




















// "use strict";
// let urrl=[];
// fetch("./mov.json")

//     .then(function(resp){
//         return resp.json();
//     }
//     )
//     .then(function(data){

// urrl= data;
// console.log(urrl);

//     }
//     );


//     let a =[];
//     a= $(document.getElementsByClassName("jpgimg"));
// //  console.log(typeof a);
// // function wr() {a.forEach(Attr => console.log(Attr));}
// // wr();
// var res = Object.keys(a).map(function(keys){
//     return[a[keys]];
// });
// console.log(res.alt);