console.log("Let's get this party started!");

async function getGif(){
    const response = await axios.get("api.giphy.com/v1/gifs/trending");
    console.log(response);
}