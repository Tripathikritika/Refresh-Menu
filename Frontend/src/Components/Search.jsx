import React from 'react'
import styles from '../Styling/Search.module.css'
import Footer from '../Others/Footer'
function Search() {
    return (
        <>
            <div div className={styles.mainDiv}>
                <div className={styles.header}>
                    <div>
                        <img src="./Logo.jpg" alt=""/>
                    </div>
                    <div style={{paddingTop:'1%'}}>
                        <img src="./helpicon.svg" alt="help"/>
                    </div>
                </div>
                <div>
                    <div className={styles.bodyDiv}>
                       <div className="container">
                            <div className="text-right">Back To Menu</div>
                            <input type="text" className={styles.searchInput} placeholder="Search"/>
                       </div>
                       <div>
                            <h5>RECENT SEARCH</h5>
                       </div>
                       <div>
                           <h5>TOP CATEGORIES</h5>
                       </div>
                       <div className="container" style={{margin:'0px auto'}}>
                            <div className="row ">
                            <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Asian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Pan-Asian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Fusion</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">World Cuisine</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Indian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Continental</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">447 cal | High Protein</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">575 cal | Low Calorie</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Universal</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">South Indian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Oriental</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Mexican</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Middle Eastern</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Japanese</h5>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer />
        </>
    )
}

export default Search