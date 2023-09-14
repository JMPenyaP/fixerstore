import style from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={style.divNavBar}>
      <img
        src="https://s3-alpha-sig.figma.com/img/3833/7eca/e60625366dc9df5f0771fb658c866d39?Expires=1695600000&Signature=p4RVXaHWNaHJrK8200eTzaVVgwGmr0fpTtH8Fafay72nuONitHO-lXBMZwxBk5m02Ovx2QMWa-yYFxSdDw3APSToZoFt15CAVzqRMsQb1cyvtI7OgA~FKgjQbi9KSu6Y5KUjvNBmQcPwnI5Ypkw4dpPCQ9tfoV8UatuWbzeW3aqipK-a3GHtg14kbSqxuvXNe~Wlbv8IBpwoKBr7149G-TkWstKArQgtQqSahwxnt7WL04V7FIN7J2EceOtplXcsOBhbSMUxKu~wyJOJe314XKSHBM1tCA-Coh7jeEGgvA0KwdztsMsuj8KXPlHxJRDuW4dP7RL-Q7S0lSBi4m5A8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Logo Fixer"
        className={style.logo}
      />
      <div className={style.divButtonsNav}>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Quienes Somos</button>
      </div>
      <input type="search" placeholder="Buscar Producto" />
      <div className={style.userLetter}>A</div>
      <div className={style.carritoDiv}>
        <img
          src="https://s3-alpha-sig.figma.com/img/12c3/1118/bb819854018b2e238fa8383bbc4dbc58?Expires=1695600000&Signature=lPvxgur06egYS0OhwWAM1GfdJRgREFP694bOi99E7DCMjPQbhtrlb2kTSZ00905WpfUYpOw2zfwHOFsx~e3sKpbkBQCUdiY-nTavcHquK2wrPaiQag5r7-aFv3ntKGU9iy4lKBizSJ5K3z0kGeJ9xg-ND0yExebRRMCZLrYmDPwy2Dk-w1-YBJCV~ln0CJTBuFfGwhuX-x5JljAzmH40NQFm2w7J8J6PWISaHteB0Tm9zVNBWzYs~6OjZOC-h~eaYNJIgKQZM-JWc6ntHTwgis6xTx0k2v2vvxRANqhZmlmpsgcoMfQNbCi1IdqfbAgz48J00zRtos4acXhZmZvYBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Bolso de Compras"
          className={style.carritoImg}
        />
      </div>
    </div>
  );
};

export default Navbar;
