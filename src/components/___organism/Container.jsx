import Card from "../___molecules/Card";
import photo1 from '../../assets/Pizza Photo (1).svg'
import photo2 from '../../assets/Tortellini Photo (1).svg'
import photo3 from '../../assets/Strawberry cake Photo (1).svg'
import hoticon from '../../assets/Hot Icon.svg'
import wheaticon from '../../assets/Wheat Icon.svg'
import icons from '../../assets/Icons.svg'







function Contanier() {
    return (
        <>
<Card food = {photo1} name= 'Pepperoni Pizza' photo1={hoticon} photo2={wheaticon}
paragraph = 'Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.' 
info = '265 Cal' info2 = 'P/F/C: 12/10/31' info3 = '53.8 °C' newprice = '$23.90' oldprice = '$29.90'/>
<Card food = {photo2} name= 'Tortellini'  photo3={icons}
paragraph = 'Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.'
info = '265 Cal' info2 = 'P/F/C: 12/10/31' info3 = '53.8 °C' newprice = '$17.90' oldprice = '$22.90' />
<Card food = {photo3} name= 'Strawberry Cake'  photo2={wheaticon}
paragraph = 'Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.'
info = '346 Cal' info2 = 'P/F/C: 6/14/49' info3 = '13.9 °C' newprice = '$13.90' oldprice = '$18.90' />

        </>
    )
}
export default Contanier;