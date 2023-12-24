

const url = 'http://localhost:3000';
const btn = document.querySelector('.btn');

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Move these inside the click event listener to capture the latest values when the button is clicked
    let name = document.querySelector('#name').value;
    let dateOfBirth = document.querySelector('#dob').value;
    let photoUrl = document.querySelector('#photo').value;
    let Birthplace = document.querySelector('#Birthplace').value;
    let Career = document.querySelector('#career').value;
    let NumberOfMatches = document.querySelector('#numberOfMatches').value;
    let Score = document.querySelector('#score').value;
    let Fifties = document.querySelector('#fifties').value;
    let Centuries = document.querySelector('#centuries').value;
    let Wickets = document.querySelector('#wickets').value;
    let Average = document.querySelector('#average').value;

    const objInput = {
        name: name,
        dateOfBirth: dateOfBirth,
        photoUrl: photoUrl,
        Birthplace: Birthplace,
        Career: Career,
        NumberOfMatches: NumberOfMatches,
        Score: Score,
        Fifties: Fifties,
        Centuries: Centuries,
        Wickets: Wickets,
        Average: Average
    };

    try {
        const res = await axios.post(url, objInput);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }

      document.querySelector('#name').value ='';
     document.querySelector('#dob').value ='';
     document.querySelector('#photo').value ='';
      document.querySelector('#Birthplace').value ='';
     document.querySelector('#career').value ='';
     document.querySelector('#numberOfMatches').value ='';
     document.querySelector('#score').value ='';
     document.querySelector('#fifties').value ='';
     document.querySelector('#centuries').value ='';
     document.querySelector('#wickets').value ='';
     document.querySelector('#average').value ='';
});


const searchBtn = document.querySelector('.searchBtn')

searchBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

const searchedName = document.querySelector('#searchedName').value;

    getOne = async () => {
        const res = await axios.get(`${url}/${searchedName}`);
        let player = res.data.data
    
        document.querySelector('.searchedDetails').innerHTML =
        ` 
        <button class="editBtn">Edit Player</button>
        <div id="userDetails">
        <img id="userImage" src="${player.photoUrl}" alt="User Image">
        <p id="userName">${player.name}</p>
        <p id="userDOB">${player.dateOfBirth}</p>
      </div>
      <div><h2>Personal Infromation</h2></div>
      <p id="Matches">Number Of Matches: ${player.NumberOfMatches}</p>
        <p id="Runs">Runs: ${player.Score}</p>
        <p id="fifties">Number of fifties: ${player.Fifties}</p>
        <p id="centuries">Number of centuries: ${player.Centuries}</p>
        <p id="Avg">Avg: ${player.Average}</p>
        <p id="Wickets">Wickets: ${player.Wickets}</p>
      
        <p id="userDOB">${player.Career}</p>
    
    ` 
    const editBtn = document.querySelector('.editBtn')

editBtn.addEventListener('click', async(e) =>{
    
    document.querySelector('#name').value = player.name;
    document.querySelector('#dob').value = player.dateOfBirth;
    document.querySelector('#photo').value = player.photoUrl;
     document.querySelector('#Birthplace').value = player.dateOfBirth;
    document.querySelector('#career').value = player.Career;
    document.querySelector('#numberOfMatches').value = player.NumberOfMatches;
    document.querySelector('#score').value = player.Score;
    document.querySelector('#fifties').value = player.Fifties;
    document.querySelector('#centuries').value = player.Centuries;
    document.querySelector('#wickets').value = player.Wickets;
    document.querySelector('#average').value = player.Average;

})
    }
    getOne()
    
})

