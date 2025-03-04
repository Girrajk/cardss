import React from "react";
import '../Pages/Style.css'

function Card() {
    return (
        <>
            <div className="main">


                <div className="Cards">
                    <div className="image">
                        <img src="https://images.pexels.com/photos/21067/pexels-photo.jpg?cs=srgb&dl=pexels-jeshoots-21067.jpg&fm=jpg"
                            alt="image not found" />


                    </div>
                    <div className="Title">
                        <h1>Console</h1>

                    </div>
                    <div className="des">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et ab quas voluptate vel. Tempore.</p>
                        <button>
                            Go Anywhere
                        </button>

                    </div>
                </div>



                <div className="Cards">
                    <div className="image">
                        <img src="https://media.gettyimages.com/id/155376463/photo/colorful-kids-outdoor-playground-equipment-with-slides.jpg?s=612x612&w=gi&k=20&c=tBWiOJblW6p5iCFUCpj9qeCM5KoISNlq-9s3qwdBx50="
                            alt="image not found" />


                    </div>
                    <div className="Title">
                        <h1>Playground</h1>

                    </div>
                    <div className="des">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et ab quas voluptate vel. Tempore.</p>
                        <button>
                            Go Anywhere
                        </button>

                    </div>
                </div>



                <div className="Cards">
                    <div className="image">
                        <img src="https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg" alt="image not found" />


                    </div>
                    <div className="Title">
                        <h1>Advanture</h1>

                    </div>
                    <div className="des">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et ab quas voluptate vel. Tempore.</p>
                        <button>
                            Go Anywhere
                        </button>

                    </div>
                </div>


            </div>


        </>

    )
}
export default Card