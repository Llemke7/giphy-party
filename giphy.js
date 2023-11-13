console.log("Let's get this party started!");

async function getGif(searchTerm) {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        
        
        const gifUrl = response.data.data[0].images.original.url;

        
        const img = document.createElement('img');
        img.src = gifUrl;

        
        document.body.appendChild(img);
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
}

document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const inputValue = document.getElementById('search').value;
    await getGif(inputValue);
});

document.getElementById('removeGif').addEventListener('click', function () {
    
    document.querySelectorAll('img').forEach(img => img.remove());
});
