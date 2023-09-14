import { Link } from "react-router-dom";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={style.fondo}>
      <div>
        <img
          className={style.imagen}
          src="https://s3-alpha-sig.figma.com/img/9ccf/c8d6/6e718ddad34663d36c96c23b5cfa4c76?Expires=1695600000&Signature=F63Rr52Gs2lVPyIbI2jUaoY24YsTD3khvOHbin03UWMpOZU6g5CfRj9PF9F0X5y4q4ihvvzVrkfdoBe7ed4SjkTk~haT64igeUgzevB~WT7kFtAuwuvQjQDsLXC1enkZ8YYanXH5dhW8VolhTwDgjM92HF5V7vm821qKNJs1E1LAF6Ts7kt~cB2nyR5YqFYPMbpol1B4pNMmR-kuUVOnnwgGubfuI1zA7C4t-Cj03mZvOpnfN~hzK5Htyp-bYDvtMyZXlPKPwMyIRKl0BrVH~2g3zsJ-GYSd3XVN5NQAro7VAGZJzLupYwwEJwEcwFBEA07iBzoJerBtd3HpL0UzIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="imagen"
        />
      </div>
      <div className={style.cita}>
        <img
          className={style.imagen2}
          src="https://s3-alpha-sig.figma.com/img/5f7f/bda8/af80b1a55d4d2867e3c0e5b3ec7b5327?Expires=1695600000&Signature=aSab-OJ-1pT8ZoTfRwBwLAhQK4yXJauWjcrrE0TXDQcx1J2r~ooWM9F1Neymp~EdzVdZlWp89aBA6x1iw7oy6oWFMCQ1rH49dWK5builq9t3WTU-mdXXuKRadEKZ9iE4bAqHnWthzWFekzAU-i-IaL7VRHdbvCr0PzA6eB~--PSAUsdhlR3NPlVNRJoYu6YXsmn5RRcMS9XS6dNFOGhnlLpLHSD28ujlhF23H0jB99asq77vInKVOV73XzpykDPNVIj187d-x-nrWmLxW57gBtHSl6vFhI1Yix0rfyvhU2uOi1aALnbkx2-yirGywiVFcjWmv-EQKhk4tsdcQ20gAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="ribbon"
        />
        <p className={style.promo}>
          20% de descuento por todo el mes de septiembre por compras superiores
          a $50.000
        </p>
        <Link to="/Catalogo" className={style.link}>
          <button className={style.button}>Ir a comprar</button>
        </Link>
      </div>
    </div>
  );
}
