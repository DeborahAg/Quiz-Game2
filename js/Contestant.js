class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');

     contestantCountRef.on("value",(data)=>{
       contestantCount = data.val();
     })


    // contestantCountRef.on("value",()=>{
    //   contestantCount = data.val();
    // })

  

  }

  updateCount(count){
    // database.ref('/').update({
    //   count: contestantCount
    // });


  




     database.ref('/').update({
       contestantCount: count
     });

  }

 
}