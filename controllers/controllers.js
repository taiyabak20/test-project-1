const players = require('../models/models')

exports.postPlayers = (req, res)=>{
    const name = req.body.name;
    const dateOfBirth = req.body.dateOfBirth;
    const photoUrl = req.body.photoUrl;
    const Birthplace = req.body.Birthplace;
    const Career = req.body.Career;
    const NumberOfMatches = req.body.NumberOfMatches;
    const Score = req.body.Score;
    const Fifties = req.body.Fifties;
    const Centuries = req.body.Centuries;
    const Wickets = req.body.Wickets;
    const Average = req.body.Average;
    
    players.create({
    name : name,
    dateOfBirth : dateOfBirth,
    photoUrl : photoUrl,
    Birthplace : Birthplace,
    Career : Career,
    NumberOfMatches : NumberOfMatches,
    Score : Score,
    Fifties : Fifties,
    Centuries : Centuries,
    Wickets : Wickets,
    Average : Average
    })
    .then(data => {
        return res.json(data);
        //console.log(data);
    })
    .catch(err => console.log(err))
    
}

exports.getOne = (req, res) => {
    const name = req.params.name;

    players.findOne({
        where: { name : name },
         attributes: ["id", "name", "dateOfBirth", "photoUrl", "Birthplace", "Career", "NumberOfMatches", "Score" ,"Fifties", "Centuries", "Wickets", "Average"]
    })
    .then(data => {
        return res.json({ data });
    })
    .catch(err => console.log(err));
};

exports.editPlayer = (req, res)=>{
    const id = req.params.id;
    players.findByPk(id)
    .then(players =>{
        players.name = req.body.name;
        players.dateOfBirth = req.body.dateOfBirth;
        players.photoUrl = req.body.photoUrl;
        players.Birthplace = req.body.Birthplace;
        players.Career = req.body.Career;
        players.NumberOfMatches = req.body.NumberOfMatches;
        players.Score = req.body.Score;
        players.Fifties = req.body.Fifties;
        players.Centuries = req.body.Centuries;
        players.Wickets = req.body.Wickets;
        players.Average = req.body.Average;
        return players.save()
    })
    .then(()=> console.log('update successful'))
    .catch(err => console.log(err))
}