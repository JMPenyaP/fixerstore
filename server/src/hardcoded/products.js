const { Product } = require("../db")

const products = [

<<<<<<< HEAD
  {
    name: "PROTECTOR ADHESIVO SUELAS",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png"],
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
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706972/FIXERSHOES/IMG_4141_v4m6tw.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg"],
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
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705595/FIXERSHOES/Copia_de_image00008_ahebor.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705586/FIXERSHOES/Copia_de_image00004_eqlb4k.png"],
    description: "SON HORMAS EN MATERIAL DE PLASTICO, PERO NO TE DEJES ENGAÑAR SU COMPLICADA ESTRUCTURA TIENE LA FUERZA Y DURABILIDAD SUFICIENTE PARA MANTER LA FORMA DE TU ZAPATOS, E IMPIDEN QUE COMIENCEN A SALIR ARRUGAS POR LOS DOBLECES QUE SE REALIZAN A LA ACCION DE CAMINAR O TROTAR, SON RECOMENDABLES EN ZAPATOS DE HORMA MEDIANA ( BOTINES, TACONES Y TENIS DE DAMA).",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "PLANTILLAS SILICON ERGONOMIC PIE PLANO",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705704/FIXERSHOES/image00011_cvmbw7.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705705/FIXERSHOES/image00020_avficn.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705722/FIXERSHOES/image00071_ltoic9.png"],
    description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
    date: "01-18-2023",
    priceOfList: 65.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "TALONERAS NIVELADORAS EN SILICONA",
    categoryId: 5,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705725/FIXERSHOES/image00073_ej7twy.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00034_pv6jd3.png"],
    description: "ESTE TIPO DE TALONERA TIENE EN UN COSTADO MAS LEVATAMIENTO, POR LO QUE TE AYUDA A DARLE UNIFORMIDAD A TU CAMINAR EN CASO DE QUE APOYES MAS EN UN COSTADO O TENGAS UN PROBLEMA ANATOMICO EN LA PARTE DEL TALON. POR SU MATERIAL EN GEL ES ERGONOMICA Y TE AYUDA AL AMORTIGUO DEL TALON. SE UTILIZA EN TENI, BOTA Y ZAPATO FORMAL.",
    date: "01-18-2023",
    priceOfList: 45.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "CEPILLO PARA GAMUZA",
    categoryId: 6,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705741/FIXERSHOES/image00124_m6fkwr.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00132_evlhxv.png"],
    description: "ES UN CEPILLO DE LIMPIEZA PROFESIONAL PARA LA GAMUZA, TIENE UN LADO DE CERDAS DE ALAMBRE QUE NOS AYUDA A PEINAR Y EMPAREJAR LA GAMUZA, TAMBIEN AYUDA AL PROCESO DE LA TINTURA PARA QUE EL MATERIAL ABRA EL PORO Y PENETRE MEJOR EL QUIMICO, AL COSTADO TIENE UNOS DIENTES DE GOMA QUE AYUDA A LIMPIAR EL MUGRE O POLVO POR LOS ORIFICIOS DE TU CALZADO ENTRE LA CAPELLA Y SUELA, Y AL RESPALDO HAY CERDAS DE GOMA QUE TE AYUDAN A LIMPIAR LAS MOTAS Y SUCIEDAD QUE ESTE ALMACENE.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "LIMPIADOR EXPRESS",
    categoryId: 7,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00115_wwra1a.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00129_zgitym.png"],
    description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES, NO EMPAREJA UN ZAPATO DESCOLORIDO, ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA Y TEXTIL.",
    date: "01-18-2023",
    priceOfList: 20.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "SHIELDS ANTIARRUGAS",
    categoryId: 8,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705715/FIXERSHOES/image00050_r2e6sl.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705716/FIXERSHOES/image00052_t22ydq.png"],
    description: "LOS SHIELD, SON SOPORTES INTERNOS, QUE NOS AYUDAN A QUE EL CALZADO NO PIERDA SU FORMA EN LA PARTE DEL EMPEINE, SON MATERIAL PLASTICO MUY MALEABLE. EIMPIDEN DE QUE ELLOS SE ARRUGEN EN EL DOBLES DEL CAMINAR (EMPEINE)",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "CALZADOR PLASTICO",
    categoryId: 9,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705717/FIXERSHOES/image00054_fwrgky.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705721/FIXERSHOES/image00066_xwvoox.png"],
    description: "ESTE CALZADOR ES DE PASTA , ETE AYUDA A PONERTE LOS ZAPATOS CON MAS FACILILDAD EN LA PARTE DEL TALON. TOCA INCLINARSE POR LO QUE ES CORTO.",
    date: "01-18-2023",
    priceOfList: 15.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15



  },
  {

    name: "ALMOHADILLAS PARA METATARSO",
    categoryId: 10,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705726/FIXERSHOES/image00079_ay0hmn.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705726/FIXERSHOES/image00079_ay0hmn.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705725/FIXERSHOES/image00076_eze0la.png"],
    description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {
    name: "PUNTERAS SILICONA",
    categoryId: 10,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705709/FIXERSHOES/image00032_dqqxt1.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705706/FIXERSHOES/image00028_evt9d1.png"],
    description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15
  },
  {

    name: "REAVIVADOR DE GAMUZA",
    categoryId: 8,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705738/FIXERSHOES/image00117_fycba0.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705738/FIXERSHOES/image00117_fycba0.png"],
    description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES,  NO EMPAREJA UN ZAPATO DESCOLORIDO, (ES SIMILAR AL LIMPIADOR EXPRESS), ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA  Y TEXTIL.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "CREMA HIDRATANTE",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705745/FIXERSHOES/image00142_jgeqoh.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706962/FIXERSHOES/IMG_4130_aqzakf.jpg"],
    description: "ESTE CREMA AYUDA A HIDRATAR Y REJUVENCER  EL CUERO, SU TONALIDAD ES NEUTRA (SIRVE PARA TODOS LOS COLORES),  TAPAS RASPONES SOLO EN CASO DE QUE SU CALZADO NO SE ENCUENTRE DESCOLORIDO. ES RECOMENDABLE SOLO PARA EL CUERO QUE TENGA SU CONTEXTURA LISA.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "KIT LIMPIEZA PREMIUM",
    categoryId: 1,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706551/FIXERSHOES/IMG_4139_zddk65.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00106_bzmhkb.png"],
    description: "ES UN KID DE LIMPIEZA PROFESIONAL, INCLUYE: SHAMPOO ESPECIALIZADO PARA UNA LIMPIEZA PROFUNDA DE TONALIDAD NEUTRA, INCLUYE TAMBIEN UN CEPILLO QUE TIENE LAS CERDAS SUAVES PARA MAYOR PENETRACION EN LOS POROS Y MEJOR TRATO DEL MATERIAL, PARA HACER EL POROCESO DE REFREGAR Y SACARLE TODA LA SUCIEDAD QUE ESTE CONTEGA,  Y POR ULTIMO INCLUIMOS EL TRAPITO DE MICROFIBRA QUE AYUDA A RETIRAR LA ESPUMA SE VA FORMANDO POR EL PROCESO DE REFREGADO. TODO ESTO ESTA EMPACADO EN SU CAJITA CORRESPONDIENTE PARA SU PRESENTACION.",
    date: "01-18-2023",
    priceOfList: 55.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },

  {

    name: "LIMPIADOR EN SECO GAMUZA",
    categoryId: 7,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705739/FIXERSHOES/image00121_l32uxo.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705739/FIXERSHOES/image00118_iyvctp.png", "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706958/FIXERSHOES/IMG_4125_xupgyq.jpg"],
    description: "ESTE LIMPIADOR EN SECO VIENE EN UN FRASCO DE SPRAY O ATOMIZADOR, AYUDA A LA LIMPIEZA DEL CALZADO, ES RECOMENDABLE UTILIZARLO EN GAMUZA, ANTE, CARNAZA, NOBUCK Y EN ALGUNOS TEXTILES, NO SE REQUIERE DE UNA LIMPIEZA ESPECIALIDA, NI DE NINGUN OTRO QUIMICO",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },

  {

    name: "HORMA CEDRO MADERA",
    categoryId: 3,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00110_hy4dgj.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705734/FIXERSHOES/image00110_hy4dgj.png"],
    description: "SON HORMAS EN MATERIAL DE MADERA DE CEDRO, MUY BUEN MATERIAL Y RESITENTE PARA  MANTENER LA FORMA DE TUS ZAPATOS, ADEMAS AYUDAN A ANCHARLOS Y ALARGARLOS POR UNOS MILIMETROS E IMPIDEN QUE SE TE ARRUGEN TUS ZAPATOS. SE UTILIZAN EN HORMAS DE ZAPATOS GRANDES (ES MAS FRECUNTE EN CALZADO  DE CABALLEROS), VERBIGRACIA: BOTAS, ZAPATOS FORMALES",
    date: "01-18-2023",
    priceOfList: 85.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15


  },
  //16
  {

    name: "PLANTILLA EN SILICONA PARA SUBIR ESTATURA",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705713/FIXERSHOES/image00045_fbnsmu.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00112_tyu2ts.png"],
    description: "Son plantillas que ayudan a subir estatura, hechas para el cuidado del talon de la parte interna del zapato",
    date: "01-18-2023",
    priceOfList: 45.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15


  },
  {

    name: "CORDONES DE CUERO",
    categoryId: 2,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706961/FIXERSHOES/IMG_4129_xhfm54.jpg"],
    description: "ESTOS CORDONES , LE DAN UN ESTILO MUY BONITO A TU CALZADO, ADEMAS RESISTENTES Y DURABLES, SE UTILIZAN FRECUENTEMENTE EN LAS BOTAS Y ZAPATOS EN CUERO",
    date: "01-18-2023",
    priceOfList: 15.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  },
  {

    name: "CALZADOR PLASTICO LARGO DOBLE",
    categoryId: 9,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00040_o523tr.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705711/FIXERSHOES/image00040_o523tr.png"],
    description: "ES UN CALZADOR PLASTICO DOBLE, POR EL LARGOR DEL MISMO AYUDA A PONERTE LOS ZAPATOS CON MAS FACILIDAD EN LA PARTE DEL TALON, NO TIENES QUE INCLINARTE POR SU TAMAÑO EN LUGAR DE OTROS QUE SON MAS CORTOS.",
    date: "01-18-2023",
    priceOfList: 25.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15


  }, {

    name: "PLANTILLA EN SILICONA PARA DAMAS",
    categoryId: 4,
    firstImage: "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705710/FIXERSHOES/image00038_feamxa.png",
    carrouselImage: ["https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694706965/FIXERSHOES/IMG_4132_kklhzm.jpg"],
    description: "ESTAS PLANTILLAS SON EN MATERIAL EN GEL, NOS AYUDAN A LA COMODIDAD DE LA PLANTA DEL PIE, TIENE UNA SUPERFICIE QUE SOBRESALE EN SU MITAD QUE SIRVE PARA EL PIE PLANO Y SU COMODIDAD. NO AYUDA A TRATAR EL CASO, NO OBSTANTE; LE DA COMODIDAD Y ESTABILIDAD A LA HORA DE CAMINAR, POR SU MATERIAL HERGONOMICO Y FLEXIBLE, AYUDA AL AMORIGUO Y DESCANSO DEL PIE",
    date: "01-18-2023",
    priceOfList: 35.000,
    statusOffer: false,
    offer: 10,
    status: false,
    stock: 15

  }




=======
       name: "PROTECTOR ADHESIVO SUELAS",
        categoryId: 1,
        firstImage: "https://m.media-amazon.com/images/I/71HzIui4jKL._AC_SL1500_.jpg",
        carrouselImage: ["https://m.media-amazon.com/images/I/51RusUSivgL._AC_SL1280_.jpg","https://www.cleanlab.pe/cdn/shop/products/sole-guard-protector-adhesivo-para-suela-1-par-555627_1200x1200.jpg?v=1690643277","https://m.media-amazon.com/images/I/41H8pnb0HYL._AC_UF894,1000_QL80_.jpg"],
        description: "producto para zapatos",
        date: "01-18-2023",
        priceOfList: 95.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      }, 
      {

       name: "CORDONES REFLECTIVOS",
        categoryId: 2,
        firstImage: "https://static.wixstatic.com/media/e1a3ce_dc1a8bfaf90e4824b44e1d99264f778d~mv2.jpeg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e1a3ce_dc1a8bfaf90e4824b44e1d99264f778d~mv2.jpeg",
        carrouselImage: ["https://static.wixstatic.com/media/e1a3ce_d93dca7fee3a40e0a38200c36fd33df1~mv2.jpg/v1/fill/w_448,h_320,al_c,lg_1,q_80,enc_auto/e1a3ce_d93dca7fee3a40e0a38200c36fd33df1~mv2.jpg","https://static.wixstatic.com/media/f384ee_b8ad84edf23c4a99bc494528af1bb96f~mv2.png/v1/fill/w_940,h_788,al_c,q_90,enc_auto/f384ee_b8ad84edf23c4a99bc494528af1bb96f~mv2.png","https://http2.mlstatic.com/D_NQ_NP_874213-CBT48133339939_112021-O.webp"],
        description: "CORDONES REFLECTIVOS, DECORAN MUY BONITO EL CALZADO, TIENE MUY BUENA RESITENCIA Y REFLEJAN EN LA OSCURIDAD, SE UTILIZAN EN LAS BOTAS Y LOS TENIS.",
        date: "01-18-2023",
        priceOfList: 5,
        statusOffer: false,
        offer: 25.000,
        status: true,
        stock: 15
      
      },
      {

       name: "HORMAS PLASTICAS",
        categoryId: 3,
        firstImage: "https://thumbs.dreamstime.com/z/hormas-pl%C3%A1sticas-y-de-madera-con-cuero-en-taller-150125723.jpg",
        carrouselImage: ["https://lahormadetunegocio.com/wp-content/uploads/2021/10/horma-de-plastico.jpg","https://c8.alamy.com/compes/2an8ed2/dura-de-plastico-utilizado-en-la-fabricacion-de-zapatos-fila-de-plastico-utilizado-para-la-fabricacion-de-hormas-para-calzados-zapatos-modernos-un-monton-de-plastico-zapata-pasado-sobre-una-plancha-de-madera-2an8ed2.jpg","https://http2.mlstatic.com/D_NQ_NP_664529-MCO47547963025_092021-O.webp"],
        description: "SON HORMAS EN MATERIAL DE PLASTICO, PERO NO TE DEJES ENGAÑAR SU COMPLICADA ESTRUCTURA TIENE LA FUERZA Y DURABILIDAD SUFICIENTE PARA MANTER LA FORMA DE TU ZAPATOS, E IMPIDEN QUE COMIENCEN A SALIR ARRUGAS POR LOS DOBLECES QUE SE REALIZAN A LA ACCION DE CAMINAR O TROTAR, SON RECOMENDABLES EN ZAPATOS DE HORMA MEDIANA ( BOTINES, TACONES Y TENIS DE DAMA).",
        date: "01-18-2023",
        priceOfList: 35.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "PLANTILLAS SILICON ERGONOMIC PIE PLANO",
        categoryId: 4,
        firstImage: "https://cdnx.jumpseller.com/ortopedicosolaya/image/3913298/thumb/540/540?1650652285",
        carrouselImage: ["https://cdnx.jumpseller.com/ortopedicosolaya/image/3913299/Plantillas_de_Descanso_2.jpg?1650652285","https://img.ws.mms.shopee.com.co/fb62665be0fb2774503630727af0777f","https://m.media-amazon.com/images/I/61xme9M3JLL._AC_UF894,1000_QL80_.jpg"],
        description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
        date: "01-18-2023",
        priceOfList: 65.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "TALONERAS NIVELADORAS EN SILICONA",
        categoryId: 5,
        firstImage: "https://cdnx.jumpseller.com/ortopedicosolaya/image/4403589/Talonera_Silicona_4.jpg?1651073612",
        carrouselImage: ["https://http2.mlstatic.com/D_NQ_NP_995925-MCO51474971039_092022-O.webp","https://http2.mlstatic.com/D_NQ_NP_742487-MCO42338472398_062020-O.webp","https://lh3.googleusercontent.com/_GW6g_e7subGwkbJXKeS4Drv3_FNs6Pw0tu5p1_8k2QI4fTj89LhVmBpHyClMcj5VMtDQmsAGPqz6I3oiDUJLNOdtoVISI65x7o"],
        description: "ESTE TIPO DE TALONERA TIENE EN UN COSTADO MAS LEVATAMIENTO, POR LO QUE TE AYUDA A DARLE UNIFORMIDAD A TU CAMINAR EN CASO DE QUE APOYES MAS EN UN COSTADO O TENGAS UN PROBLEMA ANATOMICO EN LA PARTE DEL TALON. POR SU MATERIAL EN GEL ES ERGONOMICA Y TE AYUDA AL AMORTIGUO DEL TALON. SE UTILIZA EN TENI, BOTA Y ZAPATO FORMAL.",
        date: "01-18-2023",
        priceOfList: 45.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "CEPILLO PARA GAMUZA",
        categoryId: 6,
        firstImage: "https://http2.mlstatic.com/D_NQ_NP_956962-CBT48130803753_112021-O.webp",
        carrouselImage: ["https://i5.walmartimages.com.mx/mg/gm/3pp/asr/dcf4b7e2-2b0e-4316-9dd6-16b74e9ce082.7250477f1ffa7b9283d8baaaee86c3c2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","https://m.media-amazon.com/images/I/51kcSSiDc2S.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFPZ6Kro26RMEuQA5UBAQD1d0_Yf44Shbkg&usqp=CAU"],
        description: "ES UN CEPILLO DE LIMPIEZA PROFESIONAL PARA LA GAMUZA, TIENE UN LADO DE CERDAS DE ALAMBRE QUE NOS AYUDA A PEINAR Y EMPAREJAR LA GAMUZA, TAMBIEN AYUDA AL PROCESO DE LA TINTURA PARA QUE EL MATERIAL ABRA EL PORO Y PENETRE MEJOR EL QUIMICO, AL COSTADO TIENE UNOS DIENTES DE GOMA QUE AYUDA A LIMPIAR EL MUGRE O POLVO POR LOS ORIFICIOS DE TU CALZADO ENTRE LA CAPELLA Y SUELA, Y AL RESPALDO HAY CERDAS DE GOMA QUE TE AYUDAN A LIMPIAR LAS MOTAS Y SUCIEDAD QUE ESTE ALMACENE.",
        date: "01-18-2023",
        priceOfList: 25.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "LIMPIADOR EXPRESS",
        categoryId: 7,
        firstImage: "https://www.latercera.com/resizer/Ogkg3goneuFGU51n13rAiHlaT74=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/S4SIXF4OVJFAXDGA74KKJE5WZQ.jpeg",
        carrouselImage: ["https://plazavea.vteximg.com.br/arquivos/ids/25668484-512-512/null.jpg","https://www.clara.es/medio/2021/10/14/rutina-de-limpieza-expres-productos_bc8e04f1_1280x1820.jpg","https://plazavea.vteximg.com.br/arquivos/ids/25668483-512-512/null.jpg"],
        description: "ESTE EN UN QUIMICO QUE VIENE EN SU PRESENTACION DE SPRAY O ATOMIZADOR, AYUDA A RENOVAR EL TONO DEL CALZADO SOLO EN CASO DE QUE ESTE SE ENCUENTRE UN POCO DETERIORADO, POR LO QUE ES NEUTRO NO DA TONALIDAD, NO TAPA RAPONES GRANDES, NO EMPAREJA UN ZAPATO DESCOLORIDO, ES RECOMENDABLE UTILIZARLO EN NOBUCK, GAMUZA , CARNZA Y TEXTIL.",
        date: "01-18-2023",
        priceOfList: 20.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "SHIELDS ANTIARRUGAS",
        categoryId: 8,
        firstImage: "https://thecleanindustry.com/images/products/shields/sneaker-shields-2.jpg",
        carrouselImage: ["https://thecleanindustry.com/images/products/shields/sneaker-shields-4.jpg","https://m.media-amazon.com/images/I/419gb4PtyrL._AC_SY1000_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-rme1CQsTYZaTuLL414oVhaKcAcKXHw_Uw&usqp=CAU"],
        description: "LOS SHIELD, SON SOPORTES INTERNOS, QUE NOS AYUDAN A QUE EL CALZADO NO PIERDA SU FORMA EN LA PARTE DEL EMPEINE, SON MATERIAL PLASTICO MUY MALEABLE. EIMPIDEN DE QUE ELLOS SE ARRUGEN EN EL DOBLES DEL CAMINAR (EMPEINE)",
        date: "01-18-2023",
        priceOfList: 35.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "CALZADOR PLASTICO",
        categoryId: 9,
        firstImage: "https://thumbs.dreamstime.com/b/calzador-pl%C3%A1stico-negro-11629165.jpg",
        carrouselImage: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Bbf_Ly8Dw5FQIdQmwVVo624bakFPg7w7qw&usqp=CAU","https://falabella.scene7.com/is/image/FalabellaCO/gsc_122958947_3491458_1?wid=1500&hei=1500&qlt=70","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysUhlOT8SMaVkTYBatGibRoNiQvwe9_02pQ&usqp=CAU"],
        description: "ESTE CALZADOR ES DE PASTA , ETE AYUDA A PONERTE LOS ZAPATOS CON MAS FACILILDAD EN LA PARTE DEL TALON. TOCA INCLINARSE POR LO QUE ES CORTO.",
        date: "01-18-2023",
        priceOfList: 15.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      } ,
      {

       name: "ALMOHADILLAS PARA METATARSO",
        categoryId: 10,
        firstImage: "https://falabella.scene7.com/is/image/FalabellaCO/119332848_1?wid=800&hei=800&qlt=70",
        carrouselImage: ["https://www.ortopedicas.com.co/wp-content/uploads/2022/10/Almohadillas-para-descanso-de-los-pies-2_grande.webp","https://www.ortopedicas.com.co/wp-content/uploads/2022/10/Almohadillas-para-descanso-de-los-pies-2_grande.webp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvtQW_SzQ0EvRTaspkkBIqTUXkr2HtyqOhg&usqp=CAU"],
        description: "SON PLANTILLAS, AYUDAN PARA LA PARTE DE LA PLANTA DEL PIE EN LA ZONA INFEERIOR (LOS METATARSOS) SE UTILIZAN EN LA MAYORIA DE CALZADO PREFERIBLEMENTE EN TACONES O ZAPATOS QUE TENGAN TACON. TE DAN COMODIDAD Y SON EN MATERIAL SILICONA",
        date: "01-18-2023",
        priceOfList: 25.000,
        statusOffer: false,
        offer: 10,
        status: true,
        stock: 15
      
      },
      {

        name: "cepillo",
         categoryId: 4,
         firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
         carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
         description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
         date: "01-18-2023",
         priceOfList: 65.000,
         statusOffer: false,
         offer: 10,
         status: true,
         stock: 15
       
       },
       {

        name: "spray",
         categoryId: 4,
         firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
         carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
         description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
         date: "01-18-2023",
         priceOfList: 65.000,
         statusOffer: false,
         offer: 10,
         status: true,
         stock: 15
       
       },
       {

        name: "gotita",
         categoryId: 4,
         firstImage: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg",
         carrouselImage: ["https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cleaning-tools-image_2243050.jpg"],
         description: "SON PLANTILLAS TRANSPIRABLES, DE MATERIAL EVA TE AYUDAN A LA COMODIDAD DE LA PARTE DEL TALON Y A UNA MICRO TRANSPIRACION DE TUS PIES.SIRVEN PARA HACER DEPORTE E INCLUSO CAMINAR, SE UILIZAN MUCHO EN TENIS DEPORTIVOS.",
         date: "01-18-2023",
         priceOfList: 65.000,
         statusOffer: false,
         offer: 10,
         status: true,
         stock: 15
       
       }
>>>>>>> b44ff78c013721df86b8dce807bddae73bedec0a
]

const createProducts = async () => {
  const promises = products.map((prod) => Product.create({ name: prod.name, categoryId: prod.categoryId, firstImage: prod.firstImage, carrouselImage: prod.carrouselImage, description: prod.description.toLowerCase(), date: prod.date, priceOfList: prod.priceOfList, statusOffer: prod.statusOffer, offer: prod.offer, status: prod.status, stock: prod.stock }));
  await Promise.all(promises);
}

module.exports = {
  createProducts
}