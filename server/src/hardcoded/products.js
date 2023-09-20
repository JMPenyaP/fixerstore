const { Product } = require("../db")

const products = [

  {
    name: "Protector Adhesivo Suelas",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png"],
    description: "producto para zapatos",
    date: "01-18-2023",
    priceOfList: 95.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Cordones Reflectivos",
    categoryId: 2,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706972/FIXERSHOES/IMG_4141_v4m6tw.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg"],
    description: "CORDONES REFLECTIVOS, DECORAN MUY BONITO EL CALZADO, TIENE MUY BUENA RESITENCIA Y REFLEJAN EN LA OSCURIDAD, SE UTILIZAN EN LAS BOTAS Y LOS TENIS.",
    date: "01-18-2023",
    priceOfList: 5,
    statusOffer: true,
    offer: 25.000,
    status: true,
    stock: 15

  },
  {

    name: "Hormas Plasticas",
    categoryId: 3,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705595/FIXERSHOES/Copia_de_image00008_ahebor.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705586/FIXERSHOES/Copia_de_image00004_eqlb4k.png"],
    description: "SON HORMAS EN MATERIAL DE PLASTICO, PERO NO TE DEJES ENGAÑAR SU COMPLICADA ESTRUCTURA TIENE LA FUERZA Y DURABILIDAD SUFICIENTE PARA MANTER LA FORMA DE TU ZAPATOS, E IMPIDEN QUE COMIENCEN A SALIR ARRUGAS POR LOS DOBLECES QUE SE REALIZAN A LA ACCION DE CAMINAR O TROTAR, SON RECOMENDABLES EN ZAPATOS DE HORMA MEDIANA ( BOTINES, TACONES Y TENIS DE DAMA).",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Plantillas Silicon Ergonomic Pie Plano",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705704/FIXERSHOES/image00011_cvmbw7.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705705/FIXERSHOES/image00020_avficn.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705722/FIXERSHOES/image00071_ltoic9.png"],
    description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
    date: "01-18-2023",
    priceOfList: 65.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Taloneras Niveladoras En Siliconas",
    categoryId: 5,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705725/FIXERSHOES/image00073_ej7twy.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00034_pv6jd3.png"],
    description: "ESTE TIPO DE TALONERA TIENE EN UN COSTADO MAS LEVATAMIENTO, POR LO QUE TE AYUDA A DARLE UNIFORMIDAD A TU CAMINAR EN CASO DE QUE APOYES MAS EN UN COSTADO O TENGAS UN PROBLEMA ANATOMICO EN LA PARTE DEL TALON. POR SU MATERIAL EN GEL ES ERGONOMICA Y TE AYUDA AL AMORTIGUO DEL TALON. SE UTILIZA EN TENI, BOTA Y ZAPATO FORMAL.",
    date: "01-18-2023",
    priceOfList: 45.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Cepillo Para Gamuza",
    categoryId: 6,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705741/FIXERSHOES/image00124_m6fkwr.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00132_evlhxv.png"],
    description: "ES UN CEPILLO DE LIMPIEZA PROFESIONAL PARA LA GAMUZA, TIENE UN LADO DE CERDAS DE ALAMBRE QUE NOS AYUDA A PEINAR Y EMPAREJAR LA GAMUZA, TAMBIEN AYUDA AL PROCESO DE LA TINTURA PARA QUE EL MATERIAL ABRA EL PORO Y PENETRE MEJOR EL QUIMICO, AL COSTADO TIENE UNOS DIENTES DE GOMA QUE AYUDA A LIMPIAR EL MUGRE O POLVO POR LOS ORIFICIOS DE TU CALZADO ENTRE LA CAPELLA Y SUELA, Y AL RESPALDO HAY CERDAS DE GOMA QUE TE AYUDAN A LIMPIAR LAS MOTAS Y SUCIEDAD QUE ESTE ALMACENE.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Limpiador Express",
    categoryId: 7,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00115_wwra1a.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00129_zgitym.png"],
    description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES, NO EMPAREJA UN ZAPATO DESCOLORIDO, ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA Y TEXTIL.",
    date: "01-18-2023",
    priceOfList: 20.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Shields Antiarrugas",
    categoryId: 8,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705715/FIXERSHOES/image00050_r2e6sl.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705716/FIXERSHOES/image00052_t22ydq.png"],
    description: "LOS SHIELD, SON SOPORTES INTERNOS, QUE NOS AYUDAN A QUE EL CALZADO NO PIERDA SU FORMA EN LA PARTE DEL EMPEINE, SON MATERIAL PLASTICO MUY MALEABLE. EIMPIDEN DE QUE ELLOS SE ARRUGEN EN EL DOBLES DEL CAMINAR (EMPEINE)",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Calzado Plastico",
    categoryId: 9,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705717/FIXERSHOES/image00054_fwrgky.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705721/FIXERSHOES/image00066_xwvoox.png"],
    description: "ESTE CALZADOR ES DE PASTA , ETE AYUDA A PONERTE LOS ZAPATOS CON MAS FACILILDAD EN LA PARTE DEL TALON. TOCA INCLINARSE POR LO QUE ES CORTO.",
    date: "01-18-2023",
    priceOfList: 15.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15



  },
  {

    name: "Almohadillas Para Metatarso",
    categoryId: 10,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705726/FIXERSHOES/image00079_ay0hmn.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705726/FIXERSHOES/image00079_ay0hmn.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705725/FIXERSHOES/image00076_eze0la.png"],
    description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {
    name: "Punteras Silicona",
    categoryId: 10,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705706/FIXERSHOES/image00028_evt9d1.png"],
    description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15
  },
  {

    name: "Reavivador De Gamuza",
    categoryId: 8,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705738/FIXERSHOES/image00117_fycba0.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705738/FIXERSHOES/image00117_fycba0.png"],
    description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES,  NO EMPAREJA UN ZAPATO DESCOLORIDO, (ES SIMILAR AL LIMPIADOR EXPRESS), ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA  Y TEXTIL.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {
    name: "Crema Hidratante",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705745/FIXERSHOES/image00142_jgeqoh.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706962/FIXERSHOES/IMG_4130_aqzakf.jpg"],
    description: "ESTE CREMA AYUDA A HIDRATAR Y REJUVENCER  EL CUERO, SU TONALIDAD ES NEUTRA (SIRVE PARA TODOS LOS COLORES),  TAPAS RASPONES SOLO EN CASO DE QUE SU CALZADO NO SE ENCUENTRE DESCOLORIDO. ES RECOMENDABLE SOLO PARA EL CUERO QUE TENGA SU CONTEXTURA LISA.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Kit Limpieza PREMIUM",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706551/FIXERSHOES/IMG_4139_zddk65.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00106_bzmhkb.png"],
    description: "ES UN KID DE LIMPIEZA PROFESIONAL, INCLUYE: SHAMPOO ESPECIALIZADO PARA UNA LIMPIEZA PROFUNDA DE TONALIDAD NEUTRA, INCLUYE TAMBIEN UN CEPILLO QUE TIENE LAS CERDAS SUAVES PARA MAYOR PENETRACION EN LOS POROS Y MEJOR TRATO DEL MATERIAL, PARA HACER EL POROCESO DE REFREGAR Y SACARLE TODA LA SUCIEDAD QUE ESTE CONTEGA,  Y POR ULTIMO INCLUIMOS EL TRAPITO DE MICROFIBRA QUE AYUDA A RETIRAR LA ESPUMA SE VA FORMANDO POR EL PROCESO DE REFREGADO. TODO ESTO ESTA EMPACADO EN SU CAJITA CORRESPONDIENTE PARA SU PRESENTACION.",
    date: "01-18-2023",
    priceOfList: 55.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },

  {

    name: "Limpiador En Seco Gamuza",
    categoryId: 7,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705739/FIXERSHOES/image00121_l32uxo.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705739/FIXERSHOES/image00118_iyvctp.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706958/FIXERSHOES/IMG_4125_xupgyq.jpg"],
    description: "ESTE LIMPIADOR EN SECO VIENE EN UN FRASCO DE SPRAY O ATOMIZADOR, AYUDA A LA LIMPIEZA DEL CALZADO, ES RECOMENDABLE UTILIZARLO EN GAMUZA, ANTE, CARNAZA, NOBUCK Y EN ALGUNOS TEXTILES, NO SE REQUIERE DE UNA LIMPIEZA ESPECIALIDA, NI DE NINGUN OTRO QUIMICO",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },

  {

    name: "Horma Cedro Madera",
    categoryId: 3,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00110_hy4dgj.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00110_hy4dgj.png"],
    description: "SON HORMAS EN MATERIAL DE MADERA DE CEDRO, MUY BUEN MATERIAL Y RESITENTE PARA  MANTENER LA FORMA DE TUS ZAPATOS, ADEMAS AYUDAN A ANCHARLOS Y ALARGARLOS POR UNOS MILIMETROS E IMPIDEN QUE SE TE ARRUGEN TUS ZAPATOS. SE UTILIZAN EN HORMAS DE ZAPATOS GRANDES (ES MAS FRECUNTE EN CALZADO  DE CABALLEROS), VERBIGRACIA: BOTAS, ZAPATOS FORMALES",
    date: "01-18-2023",
    priceOfList: 85.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15


  },
  //16
  {

    name: "Plantilla En Silicona Para Subir Estatura",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705713/FIXERSHOES/image00045_fbnsmu.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00112_tyu2ts.png"],
    description: "Son plantillas que ayudan a subir estatura, hechas para el cuidado del talon de la parte interna del zapato",
    date: "01-18-2023",
    priceOfList: 45.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15


  },
  {

    name: "Cordones De Cuero",
    categoryId: 2,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg"],
    description: "ESTOS CORDONES , LE DAN UN ESTILO MUY BONITO A TU CALZADO, ADEMAS RESISTENTES Y DURABLES, SE UTILIZAN FRECUENTEMENTE EN LAS BOTAS Y ZAPATOS EN CUERO",
    date: "01-18-2023",
    priceOfList: 15.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  },
  {

    name: "Calzador Plastico Largo Doble",
    categoryId: 9,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00040_o523tr.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00040_o523tr.png"],
    description: "ES UN CALZADOR PLASTICO DOBLE, POR EL LARGOR DEL MISMO AYUDA A PONERTE LOS ZAPATOS CON MAS FACILIDAD EN LA PARTE DEL TALON, NO TIENES QUE INCLINARTE POR SU TAMAÑO EN LUGAR DE OTROS QUE SON MAS CORTOS.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15


  }, {

    name: "Plantilla En Silicona Para Damas",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705710/FIXERSHOES/image00038_feamxa.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706965/FIXERSHOES/IMG_4132_kklhzm.jpg"],
    description: "ESTAS PLANTILLAS SON EN MATERIAL EN GEL, NOS AYUDAN A LA COMODIDAD DE LA PLANTA DEL PIE, TIENE UNA SUPERFICIE QUE SOBRESALE EN SU MITAD QUE SIRVE PARA EL PIE PLANO Y SU COMODIDAD. NO AYUDA A TRATAR EL CASO, NO OBSTANTE; LE DA COMODIDAD Y ESTABILIDAD A LA HORA DE CAMINAR, POR SU MATERIAL HERGONOMICO Y FLEXIBLE, AYUDA AL AMORIGUO Y DESCANSO DEL PIE",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: true,
    offer: 10,
    status: true,
    stock: 15

  }


]

const createProducts = async () => {
  const promises = products.map((prod) => Product.create({ name: prod.name, categoryId: prod.categoryId, firstImage: prod.firstImage, carrouselImage: prod.carrouselImage, description: prod.description.toLowerCase(), date: prod.date, priceOfList: prod.priceOfList, statusOffer: prod.statusOffer, offer: prod.offer, status: prod.status, stock: prod.stock }));
  await Promise.all(promises);
}


module.exports = {
  createProducts
}