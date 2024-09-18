import './two.css'
import './Assets/Picture2.png'
import cargo_truck from './Assets/cargo_truck.png'
export default function Two() {
    return (
        <div id="main" >
            <img id="pictureOne" src="https://mrstateless.com/wp-content/uploads/2020/11/SNK2-1024x621.jpg" alt="Rolex's New Watch" />
            <strong id='automatic_watch'>Automatic Watch</strong> <br />
            <strong>$350.00 USD</strong>
            <p id='line1'>Lorem ipsum, dolor sit amet consectetur itaque, reprehenderit illum ea consequuntur cumque.</p>
            <p id='line2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum aut consequatur vel quidem culpa rerum corporis facere atque nulla optio blanditiis, dignissimos earum placeat minima eaque odio aliquam autem?</p>

            <div id='features_div'>
                <div id='one'>
                    <p className='sub_headings'>Features</p>

                </div>
                <div id='feature1'>

                    <p>Chronograph </p>

                    <p>Master Chronometer Certified </p>
                    <p>Tachymeter </p>
                </div >

                <div id='feature2'>
                    <p>Anti-magnetic</p>
                    <p>Chronometer</p>
                    <p>Small seconds</p>
                </div>
            </div>

            <div>
                <p className='sub_headings'> Product details</p>
                <p><strong>Between Lugs: </strong> 20 mm</p>
                <p><strong>Bracelet: </strong> leather strap</p>
                <p><strong>Case: </strong> Steel</p>
                <p><strong>Case diameter: </strong> 42 mm</p>
                <p><strong>Dial color: </strong> Black</p>
                <p><strong>Crystal : </strong> Domed, scratch-resistant sapplire crystal eith anti-reflective crystal with anti-reflective inside</p>
                <p><strong>Water resistance: </strong> 5 bar (50 meters /167feet)</p>
            </div>

            <div id='add_to_cart'>
                {/* <p>ADD TO CART</p> */}
                <p>
                <a id='add' href="https:www.google.com">ADD TO CART</a>

                </p>
            </div> 

            <div id='delivery'>
                <p><img id='truck' src={cargo_truck} alt="truck" /> 2-3 business days delivery</p>
            </div>

        </div>
    )
}