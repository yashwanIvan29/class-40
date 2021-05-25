class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.place = 0;
    }
  
    getCount(){
      var playerCountRef = database.ref('PLAYERCOUNT');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        PLAYERCOUNT: count
      });
    }
    getFinishedPlayers(){
      var finishedPlayersRef = database.ref('finishedPlayers');
      finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
      })
    }
  
    static updateFinishedPlayers(){
      database.ref('/').update({
        finishedPlayers: finishedPlayers+1
      });
      this.place +=1;
    }
    
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        place : this.place
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }