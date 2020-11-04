import React from 'react'
import styles from './LandingPage.module.css'
function LandingPage() {

    
    return (
        <>
        {/* First part */}
            <div>
                <div className={ styles.carouselCards }>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a7918f75-63a3-4923-8879-b27f104fa10d.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/93d71f3b-8f02-4c52-993a-2cb4ac45c00e.jpg" height = "300px" alt="Large Plates"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/64f2ee38-bbba-460f-976b-cb60b532e507.jpg" height = "300px" alt="Bowls"/>
                    </div>
                    {/* <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/1635b32e-b727-489a-bcd6-870941b29c40.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a8d84480-dc3b-42c2-80d3-d3c3f4f2740e.jpg" height = "300px" alt="Order Today"/>
                    </div> */}
                </div>
                <div>
                    <h1>Categories</h1>
                    <div>
                        <div className = 'row'>
                            <div className="col-12">
                                <div className="row" style={{position:'relative'  }} data-spy="scroll" data-target=".navbar" data-offset="50">
                                    <div id="list-example" className="list-group col-2"  >
                                        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                                    </div>

                                    <div data-offset="0" className="scrollspy-example col-10" style={{height:'400px',overflow:'scroll'}}>
                                        <h4 id="list-item-1">Item 1</h4>
                                        <p>
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.
                                        Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.

                                        </p>
                                        <h4 id="list-item-2">Item 2</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!

                                        </p>
                                        <h4 id="list-item-3">Item 3</h4>
                                        <p>
                                            Sxfhrcfyjvhgfdszertyuiopl;l,kmjnhgvfdswertyuiokjhgfdsaqw3e4r5t6y7u8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam officia non repellat eos, velit maxime quasi fuga dolor eius excepturi magni necessitatibus vero harum atque tenetur molestiae? Ipsam, voluptatum debitis!
                                        </p>
                                        <h4 id="list-item-4">Item 4</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi amet iure asperiores eligendi quae in recusandae aliquid repellat ratione laboriosam, tenetur obcaecati similique sapiente reprehenderit quam? Delectus, recusandae maiores!
                                            Lorem ipsum dolor sit amet c
                                            Lorem ipsum dolor sit amet c
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage