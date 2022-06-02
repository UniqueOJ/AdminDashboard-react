import './product.css';
import {Link} from "react-router-dom";
import Chart from '../../components/charts/Chart';
import { productData } from '../../dummyData';

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to='/newProduct'>
        <button className="productAddButton">Create</button>
        </Link>
     </div>
     <div className="productTop">
         <div className="productTopLeft">
             <Chart data = {productData} dataKey= {'Sales'} title= {'Sales Performance'}/>
         </div>
         <div className="productTopRight">
             <div className="productInfoTop">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZxhtbigwluBrWt0-jKGLghgLaLcmLBmi0g&usqp=CAU" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
             </div>
             <div className="productInfoButtom">
               <div className="productInfoItem">
                 <span className="productInfoKey">id:</span>
                 <span className="productInfoValue">123</span>
               </div>

               <div className="productInfoItem">
                 <span className="productInfoKey">Sales</span>
                 <span className="productInfoValue">5123</span>
               </div>

               <div className="productInfoItem">
                 <span className="productInfoKey">active</span>
                 <span className="productInfoValue">yes</span>
               </div>

               <div className="productInfoItem">
                 <span className="productInfoKey">in stock:</span>
                 <span className="productInfoValue">no</span>
               </div>

               <div className="productInfoItem">
                 <span className="productInfoKey">id:</span>
                 <span className="productInfoValue">123</span>
               </div>

             </div>
         </div>
     </div>
     <div className="productBottom"></div>
    </div>
  )
}
