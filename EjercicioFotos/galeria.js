 let images = document.querySelectorAll('.image-container img')
 let p = document.querySelectorAll('.image-container p')

 async function getData() {
    try {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        let data = await response.json();

        images.forEach((img, i) => {
            img.src = data[i].url
            p[i].textContent = `ID: ${data[i].id}, URL: ${data[i].url}`
        })

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();

