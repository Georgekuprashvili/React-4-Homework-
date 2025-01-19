
import "../___molecules/Card.css"
import icon from '../../assets/info (1).svg'

function Card({food,name,photo1,photo2,photo3,paragraph,info,info2,info3,newprice,oldprice}) {

return(
    <>
 <div className="container">

 <div className="image_cont">
<img src={food}  />
<div className="icon_box">
    <img src={icon}  />
</div>
    </div>

 <div className="text_cont">

<div className="info_box">
<div className="section2">
<p className="name">{name}</p>
<div className="icons_cont">
    <div className="photo_box1"> <img src={photo1}  /> </div>
    <div className="photo_box2"> <img src={photo2}  /> </div>
    <div className="photo_box3"> <img src={photo3}  /> </div>
</div>
    </div>
    
<p className="paragraph">{paragraph}</p>

<div className="paragraph_box">
    <p className="info">{info}</p>
    <p className="info">{info2}</p>
    <p className="info">{info3}</p>
</div>
</div>

<div className="footer">
   <div className="price_box">
   <p className="newprice">{newprice}</p>
   <p className="oldprice">{oldprice}</p>
   </div>
    <button className="btn_txt">ORDER</button>

</div>

 </div>

 </div>
    
    </>
)



    
}
export default Card;