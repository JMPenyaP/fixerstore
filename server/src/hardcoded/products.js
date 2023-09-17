const {Product}=require("../db")

const products = [
    {

       name: "PROTECTOR ADHESIVO SUELAS",
        categoryId: 1,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "producto para zapatos",
        date: "01-18-2023",
        priceOfList: 95.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      }, 
      {

       name: "CORDONES REFLECTIVOS",
        categoryId: 2,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "CORDONES REFLECTIVOS, DECORAN MUY BONITO EL CALZADO, TIENE MUY BUENA RESITENCIA Y REFLEJAN EN LA OSCURIDAD, SE UTILIZAN EN LAS BOTAS Y LOS TENIS.",
        date: "01-18-2023",
        priceOfList: 5,
        statusOffer: false,
        offer: 25.000,
        status: false,
        stock: 15
      
      },
      {

       name: "HORMAS PLASTICAS",
        categoryId: 3,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "SON HORMAS EN MATERIAL DE PLASTICO, PERO NO TE DEJES ENGAÑAR SU COMPLICADA ESTRUCTURA TIENE LA FUERZA Y DURABILIDAD SUFICIENTE PARA MANTER LA FORMA DE TU ZAPATOS, E IMPIDEN QUE COMIENCEN A SALIR ARRUGAS POR LOS DOBLECES QUE SE REALIZAN A LA ACCION DE CAMINAR O TROTAR, SON RECOMENDABLES EN ZAPATOS DE HORMA MEDIANA ( BOTINES, TACONES Y TENIS DE DAMA).",
        date: "01-18-2023",
        priceOfList: 35.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "PLANTILLAS SILICON ERGONOMIC PIE PLANO",
        categoryId: 4,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
        date: "01-18-2023",
        priceOfList: 65.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "TALONERAS NIVELADORAS EN SILICONA",
        categoryId: 5,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "ESTE TIPO DE TALONERA TIENE EN UN COSTADO MAS LEVATAMIENTO, POR LO QUE TE AYUDA A DARLE UNIFORMIDAD A TU CAMINAR EN CASO DE QUE APOYES MAS EN UN COSTADO O TENGAS UN PROBLEMA ANATOMICO EN LA PARTE DEL TALON. POR SU MATERIAL EN GEL ES ERGONOMICA Y TE AYUDA AL AMORTIGUO DEL TALON. SE UTILIZA EN TENI, BOTA Y ZAPATO FORMAL.",
        date: "01-18-2023",
        priceOfList: 45.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "CEPILLO PARA GAMUZA",
        categoryId: 6,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "ES UN CEPILLO DE LIMPIEZA PROFESIONAL PARA LA GAMUZA, TIENE UN LADO DE CERDAS DE ALAMBRE QUE NOS AYUDA A PEINAR Y EMPAREJAR LA GAMUZA, TAMBIEN AYUDA AL PROCESO DE LA TINTURA PARA QUE EL MATERIAL ABRA EL PORO Y PENETRE MEJOR EL QUIMICO, AL COSTADO TIENE UNOS DIENTES DE GOMA QUE AYUDA A LIMPIAR EL MUGRE O POLVO POR LOS ORIFICIOS DE TU CALZADO ENTRE LA CAPELLA Y SUELA, Y AL RESPALDO HAY CERDAS DE GOMA QUE TE AYUDAN A LIMPIAR LAS MOTAS Y SUCIEDAD QUE ESTE ALMACENE.",
        date: "01-18-2023",
        priceOfList: 25.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "LIMPIADOR EXPRESS",
        categoryId: 7,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES, NO EMPAREJA UN ZAPATO DESCOLORIDO, ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA Y TEXTIL.",
        date: "01-18-2023",
        priceOfList: 20.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "SHIELDS ANTIARRUGAS",
        categoryId: 8,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "LOS SHIELD, SON SOPORTES INTERNOS, QUE NOS AYUDAN A QUE EL CALZADO NO PIERDA SU FORMA EN LA PARTE DEL EMPEINE, SON MATERIAL PLASTICO MUY MALEABLE. EIMPIDEN DE QUE ELLOS SE ARRUGEN EN EL DOBLES DEL CAMINAR (EMPEINE)",
        date: "01-18-2023",
        priceOfList: 35.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "CALZADOR PLASTICO",
        categoryId: 9,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "ESTE CALZADOR ES DE PASTA , ETE AYUDA A PONERTE LOS ZAPATOS CON MAS FACILILDAD EN LA PARTE DEL TALON. TOCA INCLINARSE POR LO QUE ES CORTO.",
        date: "01-18-2023",
        priceOfList: 15.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } ,
      {

       name: "ALMOHADILLAS PARA METATARSO",
        categoryId: 10,
        firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
        carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
        description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
        date: "01-18-2023",
        priceOfList: 25.000,
        statusOffer: false,
        offer: 10,
        status: false,
        stock: 15
      
      } 
]

const createProducts=async()=>{
    const promises = products.map((prod) => Product.create({name:prod.name,categoryId:prod.categoryId,firstImage:prod.firstImage,carrouselImage:prod.carrouselImage,description:prod.description.toLowerCase(),date:prod.date,priceOfList:prod.priceOfList,statusOffer:prod.statusOffer,offer:prod.offer,status:prod.status,stock:prod.stock}));
    await Promise.all(promises);
}

module.exports={
    createProducts
}