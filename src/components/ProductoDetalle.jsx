export default function ProductoDetalle() {
  return (
    <div className="productDetail">
        <div>
        <h1>Producto</h1>
        <img src="public\img\productos\Jarrón Cilíndrico.jpg" alt="" />
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi natus odit assumenda molestiae sunt eligendi possimus inventore, maxime sit excepturi non eius totam vero delectus deserunt quasi quod officia!
        </p>
        <div>
        <input type="button" value="+" />
        <input type="number" name="" id="" min={1} defaultValue={1}/>
        <input type="button" value="-" />
        </div>
        <button>Agregar al carrito</button>
        </div>
    </div>

  )
}


