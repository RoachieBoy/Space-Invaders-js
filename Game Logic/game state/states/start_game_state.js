class StartGameState extends GameState{

    enter () {
        InputHelper.eventSubscriptions ();
    }
    
    update () {
        background (bg_color);
        fill(255);
        textSize(32);
        text("Press Enter to start", width/2, height/2);

        // register event lisener for the enter key
        if(InputHelper.keys["Enter"]){
            gameStateManager.setState('playing');
        }
    }

    exit () {
        InputHelper.unsubscribeAll ();
    }
}