/*Game Names:
    G1: 
    G2: 
    G3: 
    G4: 
*/
let jsonPath = "./assets/userData.json";

function saveScore(gameName, score) {
    let json = {};

    json = getItem("UserData");
    if (json == null) {
        createDataJSON();
        json = getItem("UserData");
    }


    if (json[gameName] == null) {
        createGameTemplate(json, gameName);
    }

    json[gameName].scores.push(score);


    console.log(json);


    storeItem("UserData", json);
}

function createDataJSON() {
    console.log("creating new...");
    let newJson = {};
    newJson.userName = "User1";

    storeItem("UserData", newJson);
}

function createGameTemplate(json, gameName) {
    console.log("creating gameDat...");
    json[gameName] = {};
    json[gameName].highScore = "0";
    json[gameName].scores = [];
}