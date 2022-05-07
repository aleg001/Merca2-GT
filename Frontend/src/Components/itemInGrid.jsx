import React from "react";

var itemInGrid = React.createClass({
  render: function () {
    return (
      <div className="container">
        <a href="../VerProducto/Producto1/index.html">
          <div className="container_item">
            <figure className="fotositem_portada">
              <img
                src="https://m.media-amazon.com/images/I/61MAaDuEyJS._AC_SX425_.jpg"
                alt="Echo show"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> Zona 16 Guatemala </h4>
              <h5 className="product_price"> 1500 </h5>
            </div>
            <h3 className="product_name"> Amazon Echo Show</h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 23 horas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </div>
        </a>
        <div className="container_item">
          <a href="../VerProducto/crayonesTucan.html">
            <figure className="fotositem_portada">
              <img
                src="data:image/jpeg;base64,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"
                alt="lapices"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> Zona 1 Mixco </h4>
              <h5 className="product_price"> 15 </h5>
            </div>
            <h3 className="product_name"> Caja crayones Tucan </h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 5 días </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <figure className="fotositem_portada">
            <a href="../VerProducto/iphone11.html">
              <img
                src="https://i.blogs.es/187a45/iphone-11-pro-02/840_560.jpg"
                alt="iphone"
                width="200px"
                height="200px"
              />
            </a>
          </figure>
          <a href="../VerProducto/iphone11.html">
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> Quetzaltenango </h4>
              <h5 className="product_price"> 9500 </h5>
            </div>
            <h3 className="product_name"> Iphone 11 pro liberado </h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 2 semanas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <a href="../VerProducto/Botas/index.html">
            <figure className="fotositem_portada">
              <img
                src="https://m.media-amazon.com/images/I/81+qyYlboML._AC_UX575_.jpg"
                alt="botas"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> El naranjo </h4>
              <h5 className="product_price"> 699.99 </h5>
            </div>
            <h3 className="product_name">Dr. Martens Botas Chelsea Unisex</h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 3 horas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <a href="../VerProducto/Hervidora/index.html">
            <figure className="fotositem_portada">
              <img
                src="https://m.media-amazon.com/images/I/71iBRcNOaWL._AC_SX679_.jpg"
                alt="Hervidora de agua"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> El naranjo </h4>
              <h5 className="product_price"> 250 </h5>
            </div>
            <h3 className="product_name">Hervidora de agua eléctrica</h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 3 horas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <a href="../VerProducto/Taburete/index.html">
            <figure className="fotositem_portada">
              <img
                src="https://m.media-amazon.com/images/I/81EHLsHN9tL._AC_SX679_.jpg"
                alt="Taburete de bar"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> El naranjo </h4>
              <h5 className="product_price"> 250 </h5>
            </div>
            <h3 className="product_name">Taburete de bar</h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 3 horas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <a href="../VerProducto/YogaMat/index.html">
            <figure className="fotositem_portada">
              <img
                src="https://m.media-amazon.com/images/I/81ImIZfdP3L._AC_SX679_.jpg"
                alt="Mat de yoga"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> El naranjo </h4>
              <h5 className="product_price"> 200 </h5>
            </div>
            <h3 className="product_name">Tapete de yoga</h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 3 horas </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <a href="../VerProducto/quartzWatch.html">
            <figure className="fotositem_portada">
              <img
                src="https://esika.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210099210-fotoproductoenfondoblanco.jpg"
                alt="reloj"
                width="200px"
                height="200px"
              />
            </figure>
            <div className="contenidositem_ubicacionprecio">
              <h4 className="ubicacion"> Zona 16 Guatemala </h4>
              <h5 className="product_price"> 2499.99 </h5>
            </div>
            <h3 className="product_name"> Quartz Watch </h3>
            <div className="contenidositem_tiemporating">
              <h6 className="hora_publicacion"> Hace 1 mes </h6>
              <figure className="temporalrating">
                <img
                  src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                  alt="ratingstars"
                  height="40px"
                  width="100px"
                />
              </figure>
            </div>
          </a>
        </div>
        <div className="container_item">
          <figure className="fotositem_portada">
            <img
              src="data:image/jpeg;base64,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"
              alt="sonic_backpack"
              width="200px"
              height="200px"
            />
          </figure>
          <div className="contenidositem_ubicacionprecio">
            <h4 className="ubicacion"> El naranjo </h4>
            <h5 className="product_price"> 250 </h5>
          </div>
          <h3 className="product_name"> Mochilera Sonic 2000</h3>
          <div className="contenidositem_tiemporating">
            <h6 className="hora_publicacion"> Hace 3 horas </h6>
            <figure className="temporalrating">
              <img
                src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                alt="ratingstars"
                height="40px"
                width="100px"
              />
            </figure>
          </div>
        </div>
        <div className="container_item">
          <figure className="fotositem_portada">
            <img
              src="https://m.media-amazon.com/images/I/413c6K02qRL._AC_SY580_.jpg"
              alt="sonic_backpack"
              width="200px"
              height="200px"
            />
          </figure>
          &lt;
          <div className="contenidositem_ubicacionprecio">
            <h4 className="ubicacion"> El naranjo </h4>
            <h5 className="product_price"> 250 </h5>
          </div>
          <h3 className="product_name"> Mochilera Sonic 2000</h3>
          <div className="contenidositem_tiemporating">
            <h6 className="hora_publicacion"> Hace 3 horas </h6>
            <figure className="temporalrating">
              <img
                src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
                alt="ratingstars"
                height="40px"
                width="100px"
              />
            </figure>
          </div>
        </div>
      </div>
    );
  },
});
