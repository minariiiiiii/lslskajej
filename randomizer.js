// ======================
// DATA
// ======================

const teamData = {
    "76ers":        ["Moses Malone", "Allen Iverson", "Julius Erving", "Joel Embiid"],
    "Blazers":        ["Brandon Roy", "Clyde Drexler", "Greg Oden", "Damian Lillard"],
    "Bucks":        ["Sidney Moncrief", "Giannis Antetokounmpo", "Oscar Robertson", "Bob Dandridge"],
    "Bulls":        ["Michael Jordan", "Scottie Pippen", "Artis Gilmore", "Dennis Rodman"],
    "Cavaliers":        ["Kyrie Irving", "Brad Daugherty", "Terrell Brandon", "Zydrunas Ilgauskas"],
    "Celtics":        ["Bill Russell", "Bob Cousy", "Larry Bird", "John Havlicek"],
    "Clippers":        ["Bob McAdoo", "Danny Manning", "Chris Kaman", "Blake Griffin"],
    "Grizzlies":        ["Marc Gasol", "Zach Randolph", "Shareef Abdur-Rahim", "Ja Morant"],
    "Hawks":        ["Dominique Wilkins", "Bob Pettit", "Dikembe Mutombo", "Trae Young"],
    "Heat":        ["Dwyane Wade", "LeBron James", "Alonzo Mourning", "Chris Bosh"],
    "Hornets":        ["Larry Johnson", "Lamelo Ball", "Kendall Gill", "Gerald Wallace"],
    "Jazz":        ["John Stockton", "Pete Maravich", "Adrian Dantley", "Karl Malone"],
    "Kings":        ["Chris Webber", "Demarcus Cousins", "Tyreke Evans", "Mitch Richmond"],
    "Knicks":        ["Patrick Ewing", "Dave Debusschere", "Derrick Williams", "Jeremy Lin"],
    "Lakers":        ["Shaquille O'neal", "Kobe Bryant", "Jerry West", "James Worthy"],
    "Magic":        ["Dwight Howard", "Tracy Mcgrady", "Penny Hardaway", "Hedo Turkoglu"],
    "Mavericks":        ["Dirk Nowitzki", "Mark Aguirre", "Luka Doncic", "Jamal Mashburn"],
    "Nets":        ["Jason Kidd", "Kenyon Martin", "Joe Johnson", "Drazen Petrovic"],
    "Nuggets":        ["David Thompson", "Carmelo Anthony", "Marcus Camby", "Fat Lever"],
    "Pacers":        ["Jermaine O'neal", "Paul George", "Reggie Miller", "Danny Granger"],
    "Pelicans":        ["Anthony Davis", "Chris Paul", "Tony Douglas", "Brandon Ingram"],
    "Pistons":        ["Rasheed Wallace", "Isiah Thomas", "Dave Bing", "Grant Hill"],
    "Raptors":        ["Vince Carter", "Jeff Morrison", "Kyle Lowry", "Demar Derozan"],
    "Rockets":        ["Hakeem Olajuwon", "Elvin Hayes", "Yao Ming", "Calvin Murphy"],
    "Spurs":        ["Tim Duncan", "David Robinson", "Tony Parker", "Manu Ginobli"],
    "Suns":        ["Steve Nash", "Charles Barkley", "Amare Stoudemire", "Shawn Marion"],
    "Thunder":        ["Gary Payton", "Ray Allen", "Kevin Durant", "Spencer Haywood"],
    "Timberwolves":        ["Kevin Garnett", "Karl-Anthony Towns", "Sam Cassell", "Kevin Love"],
    "Warriors":        ["Stephen Curry", "Rick Barry", "Monta Ellis", "Nate Thurmond"],
    "Wizards":        ["Wes Unseld", "Manute Bol", "Gheorghe Muresan", "Gilbert Arenas"],
};

// ======================
// PLAYER IDS
// ======================

const playerIds = {
    "Adrian Dantley": 101232,
    "Allen Iverson": 2738,
    "Alonzo Mourning": 2756,
    "Amare Stoudemire": 2710,
    "Anthony Davis": 203076,
    "Artis Gilmore": 101241,
    "Bill Russell": 101255,
    "Blake Griffin": 201933,
    "Bob Cousy": 101227,
    "Bob Dandridge": 101225,
    "Bob McAdoo": 101254,
    "Bob Pettit": 101208,
    "Brad Daugherty": 101250,
    "Brandon Ingram": 1627747,
    "Brandon Roy": 2612,
    "Calvin Murphy": 101246,
    "Carmelo Anthony": 2567,
    "Chris Bosh": 201959,
    "Chris Kaman": 2686,
    "Chris Paul": 201939,
    "Chris Webber": 2730,
    "Clyde Drexler": 2566,
    "Damian Lillard": 203081,
    "Danny Granger": 2606,
    "Danny Manning": 2730,
    "Dave Bing": 101233,
    "Dave Debusschere": 101276,
    "David Robinson": 2206,
    "David Thompson": 101149,
    "Demar Derozan": 201942,
    "Demarcus Cousins": 202326,
    "Dennis Rodman": 2218,
    "Derrick Coleman": 2741,
    "Derrick Rose": 201959,
    "Derrick Williams": 203110,
    "Dikembe Mutombo": 2551,
    "Dirk Nowitzki": 1071,
    "Dominique Wilkins": 2725,
    "Drazen Petrovic": 101234,
    "Dwyane Wade": 2548,
    "Dwight Howard": 2708,
    "Fat Lever": 101219,
    "Gary Payton": 2345,
    "Gerald Wallace": 2766,
    "Gheorghe Muresan": 101307,
    "Giannis Antetokounmpo": 203507,
    "Gilbert Arenas": 2731,
    "Grant Hill": 201949,
    "Greg Oden": 1626161,
    "Hakeem Olajuwon": 2755,
    "Hedo Turkoglu": 2730,
    "Isiah Thomas": 101243,
    "Ja Morant": 1629630,
    "Jamal Mashburn": 2605,
    "Jeremy Lin": 201939,
    "Jeremy Sochan": 1631100,
    "Jermaine O'neal": 2389,
    "Jerry West": 2545,
    "Joe Johnson": 2730,
    "Joel Embiid": 203954,
    "John Havlicek": 101245,
    "John Stockton": 2396,
    "Julius Erving": 2552,
    "Karl Malone": 2500,
    "Karl-Anthony Towns": 1627741,
    "Kawhi Leonard": 202695,
    "Kendall Gill": 101206,
    "Kenyon Martin": 2420,
    "Kevin Durant": 201142,
    "Kevin Garnett": 2561,
    "Kevin Love": 2580,
    "Kobe Bryant": 977,
    "Kyle Lowry": 201950,
    "Kyrie Irving": 201939,
    "Lamarcus Aldridge": 2595,
    "Lamelo Ball": 1630163,
    "Larry Bird": 2562,
    "Larry Johnson": 2611,
    "LeBron James": 2544,
    "Luka Doncic": 1629029,
    "Manute Bol": 101260,
    "Marc Gasol": 2427,
    "Marcus Camby": 2710,
    "Mark Aguirre": 101235,
    "Michael Jordan": 893,
    "Mitch Richmond": 2730,
    "Monta Ellis": 101133,
    "Moses Malone": 2522,
    "Nate Thurmond": 101258,
    "Oscar Robertson": 101257,
    "Pat George": 202331,
    "Patrick Ewing": 2396,
    "Paul George": 202331,
    "Penny Hardaway": 2567,
    "Pete Maravich": 101239,
    "Ray Allen": 2561,
    "Reggie Miller": 2565,
    "Rick Barry": 101108,
    "Sam Cassell": 2383,
    "Scottie Pippen": 2225,
    "Shawn Marion": 2375,
    "Shareef Abdur-Rahim": 2771,
    "Shaquille O'neal": 2730,
    "Sidney Moncrief": 101214,
    "Spencer Haywood": 101227,
    "Stephen Curry": 201939,
    "Steve Nash": 2566,
    "Tim Duncan": 2396,
    "Tim Hardaway": 2345,
    "Tony Douglas": 101251,
    "Tony Parker": 2227,
    "Tracy Mcgrady": 2752,
    "Trae Young": 1629029,
    "Tyreke Evans": 203110,
    "Vince Carter": 2605,
    "Wes Unseld": 101285,
    "Yao Ming": 2397,
    "Zach Randolph": 2757,
    "Zydrunas Ilgauskas": 2430,
};

// ======================
// UTILITIES
// ======================

function getTeams() {
    return Object.keys(teamData).sort();
}

function getPlayers(team) {
    return teamData[team] || [];
}

function getPlayerId(playerName) {
    return playerIds[playerName] || 0;
}

// ======================
// UI INITIALIZATION
// ======================

document.addEventListener("DOMContentLoaded", function () {
    const teamSelect = document.getElementById("teamSelect");
    const playerDisplay = document.getElementById("playerDisplay");
    const randomizeBtn = document.getElementById("randomizeBtn");
    const playerImage = document.getElementById("playerImage");
    const playerName = document.getElementById("playerName");
    const playerTeam = document.getElementById("playerTeam");

    const teams = getTeams();
    teams.forEach((team) => {
        const option = document.createElement("option");
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    });

    teamSelect.addEventListener("change", function () {
        const selectedTeam = teamSelect.value;
        const players = getPlayers(selectedTeam);
        playerDisplay.innerHTML = players
            .map((player) => `<div class="player-card">${player}</div>`)
            .join("");
    });

    randomizeBtn.addEventListener("click", function () {
        const teams = getTeams();
        const randomTeam = teams[Math.floor(Math.random() * teams.length)];
        const players = getPlayers(randomTeam);
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        const playerId = getPlayerId(randomPlayer);

        playerName.textContent = randomPlayer;
        playerTeam.textContent = randomTeam;
        playerImage.src = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
        playerImage.onerror = function () {
            playerImage.src = "https://via.placeholder.com/1040x760?text=No+Image";
        };

        teamSelect.value = randomTeam;
        const players_list = getPlayers(randomTeam);
        playerDisplay.innerHTML = players_list
            .map((player) => {
                const className = player === randomPlayer ? "player-card active" : "player-card";
                return `<div class="${className}">${player}</div>`;
            })
            .join("");
    });

    // Initialize
    teamSelect.dispatchEvent(new Event("change"));
});
