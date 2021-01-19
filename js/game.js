class game 
{
   constructor ()
   {

   } 

   getState ()
   {
       var gameRef = database.ref ('GameState');
       gameRef.on("value", function(data)
       {
           GameState = data.val();
       })
   } 
  
  update(state)
  {
     database.ref('/').update({GameState:state}) 
  }
   
  start ()
  {
      if (GameState === 0)
      {
          Player = new player();
          Player.getCount ();
          Form = new form();
          Form.display ();
      }
  }
}