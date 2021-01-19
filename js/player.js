class player 
{
    constructor ()
    {

    } 

    getCount ()
    {
        var playerRef = database.ref ('PlayerCount');
        playerRef.on ("value", function (data)
        {
            PlayerCount = data.val ();
        }) 
    } 

    updateCount (count)
    {
        database.ref('/').update({PlayerCount : count})
    } 

    updateName (name)
    {
        var playerIndex = "Player" + PlayerCount;
        database.ref(playerIndex).set({'Name':name})
    }
}