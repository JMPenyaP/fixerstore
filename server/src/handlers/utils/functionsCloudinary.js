const cloudinary = require("cloudinary").v2;


cloudinary.config({

    cloud_name: 'dgxp4c4yk',
    api_key: '688625681362868',
    api_secret: 'ybK4kmazCtDdaVJRrVkHjhVkCxo',
})



const firstImageFunction = async (firstImage) => {


    const image = await cloudinary.uploader.upload(firstImage, function (error, result) {

        if (error) {
            console.log("imagen no existe")
        } else {

            console.log("imagen creada satisfactoriamente");
        }
    })

    return image.secure_url;

}

const imagesInCarrousel = async (carrousel) => {


    const imagenes = await Promise.all(

        carrousel.map(async (images) => {
            const array = [];

            try {
                const imagesInCarrousel = await cloudinary.uploader.upload(images);
                array.push(imagesInCarrousel.secure_url);
            } catch (error) {
                console.error("Error al cargar el carrousel:", error);
            }

            return array;
        })
    );

    return imagenes.flat();
}



module.exports = {

    firstImageFunction,
    imagesInCarrousel

}