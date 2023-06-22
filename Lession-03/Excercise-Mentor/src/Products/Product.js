import "./Product.css";

const Product = (props) => {
    const {Thumnail, Title, Price, Consume, children} = props || {};
    return (
        <div className="product-container">
            <div className="product-thumnail">
                <img src={Thumnail} alt={Title} />
            </div>
            <div className="product-detail">
                <div className="product-title">
                    <p>{Title}</p>
                    {/* <div className="product-discount">
                        <p>Flash sale</p></div> */}
                        {children}
                </div>
                <div className="product-price">
                    <div className="product-cost">
                        <p><span style={{ fontSize: '10px' }}>đ </span>{Price}</p>
                    </div>

                    <div className="product-consume" style={{color:'rgba(0,0,0,.54)', fontSize:'12px'}}>
                        <p>đã bán {Consume}</p>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default Product;