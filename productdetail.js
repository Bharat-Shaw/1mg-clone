

function smallimagesdisplay(){
    let smallImages = document.querySelectorAll('#smallimages img');
    let mainImage = document.querySelector('#mainimage img');

    smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', () => {
            console.log(smallImage)
        mainImage.src = smallImage.src;
    
        smallImages.forEach(img => img.classList.remove('active'));
        smallImage.classList.add('active');
        });
    });
}

    
const getdata= async () => {
    const response = await fetch("http://localhost:3000/products?id=2");
    const data = await response.json();
    console.log(data)
    displayproduct(data);
    smallimagesdisplay();
}
getdata();

function displayproduct(data){
    document.getElementById("mainimage").innerHTML=""
    data.map(elem =>{
        let image= document.createElement("img");
        image.src = elem.image;
        
        let image1= document.createElement("img");
        image1.src = elem.image;
        image1.classList.add('active');

        let image2 = document.createElement("img");
        image2.src = elem.image2;
        //document.getElementById("smallimages").append(image2);

        let image3 = document.createElement("img");
        image3.src = elem.image3;
        //document.getElementById("smallimages").append(image3);

        let image4 = document.createElement("img");
        image4.src = elem.image4;
        document.getElementById("smallimages").append(image1,image2,image3, image4);
        
        // document.getElementById("mainimage").innerHTML = ''; // clear out previous images
        document.getElementById("mainimage").append(image);


    })
}
