/*Game Names:
    G1: 
    G2: 
    G3: 
    G4: 
*/
let jsonPath = "./assets/userData.json";

function saveScore(gameName, scre, screStr, lvl) {
    let json = {};

    json = getItem("UserData");
    if (json == null) {
        createDataJSON();
        json = getItem("UserData");
    }
    
    if (json[gameName+lvl] == null) {
        createGameTemplate(json, gameName);
    }

    json[gameName+lvl].scores.push([scre, screStr]);


    storeItem("UserData", json);
}

function createDataJSON() {
    
    let newJson = {};
    newJson.userName = "User1";

    storeItem("UserData", newJson);
}

function createGameTemplate(json, gameName) {
    for (let i = 1; i <= 3; i++) {
        json[gameName+i] = {};
        json[gameName+i].highScore = "0";
        json[gameName+i].scores = [];
    }
}

function getGameScores(gameName, level) {
    let json = {};

    json = getItem("UserData");
    if (json == null) {
        createDataJSON();
        json = getItem("UserData");
    }

    if (json[gameName+level] == null) {
        createGameTemplate(json, gameName);
    }

    return json[gameName+level].scores;
}