import Product from "../Products/Product";
import "./ProductList.css"

const ProductList = () => {
    return (
        <div className="Products-list">
            <Product
                Thumnail={'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6j53jb22qfcb_tn'}
                Title="Dân dẫn chó"
                Price={1000}
                Consume="120"
            >
                <div className="product-top">
                    <p>Yêu thích+</p></div>
            </Product>
            <Product
                Thumnail={'https://down-vn.img.susercontent.com/file/vn-11134201-23020-26znicthx2nv80_tn'}
                Title="Túi xách nữ"
                Price={2000}
                Consume="1k"
            >
                <div className="product-discount">
                    <p>Flash sale</p></div>
            </Product>
            <Product
                Thumnail={'https://down-vn.img.susercontent.com/file/964e0beecd4ddb0b78281fb36f73e51d_tn'}
                Title="Ví da nam "
                Price={2000}
                Consume="1k"
            >
                <div className="product-top">
                    <p>Yêu thích+</p></div>
            </Product>
            <Product
                Thumnail={'https://down-vn.img.susercontent.com/file/5942aa047cfa17356cc8452c0ac03543_tn'}
                Title="Cây lau nhà phun sương"
                Price={2000}
                Consume="1k"
            >
                <div className="product-discount">
                    <p>Flash sale</p></div>
            </Product>

        </div>
    )
}

export default ProductList;