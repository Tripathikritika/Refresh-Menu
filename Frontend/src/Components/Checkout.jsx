import React , {useState } from "react";
import styles from "../Styling/Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import Axios from "axios";
import Map from '../Others/Map'
import { deleteItem } from "../Redux/Cart/action";
import { useEffect } from "react";
// import { } from '../Redux/Login/action'

function Checkout() {
  const dispatch = useDispatch()
  const cartListItem = useSelector((state) => state.cartItemReducer.cartList);
  const loggedInName = useSelector((state) => state.reducer.userName)
  const loggedInEmail= useSelector((state) => state.reducer.userEmail)
  const isAuth = useSelector((state) => state.reducer.isAuth)
  const [ mobile,setMobile ] = useState("")
  const history = useHistory()
  let total = 0; 
  let packagingfee = cartListItem.length > 0 ? Number(30) : 0;
  let GST = 0;
  let CGST = 0;
  let SGST = 0;
  let deliver = cartListItem.length > 0 ? Number(25) : 0;
  let [saveButton , setSaveButton] = useState(false)

  for (let i = 0; i < cartListItem.length; i++) {
    total += cartListItem[i].amount * cartListItem[i].qty;
  }

  GST = Number((total + packagingfee) * 0.05);
  CGST = Number((total + packagingfee) * 0.025);
  SGST = Number((total + packagingfee) * 0.025);

  const paymentHandler = async (e) => {
    const API_URL = `http://localhost:8000/`;
    const response = await Axios.get(
      `${API_URL}order/${(total + packagingfee + deliver + GST).toFixed(2)}`
    );
    const { data } = response;
      console.log(response)
    const options = {
      name: "Refresh-Menu",
      description: "Payment of items",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {
            price: (total + packagingfee + deliver + GST).toFixed(2),
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          if (captured) {
            dispatch(deleteItem())
            history.push('/checkout-form')
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#E85826",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if( cartListItem.length === 0){
    return <Redirect to = '/' />
  }
console.log(mobile)
  return (
    <>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.header}>
            <div>
              <Link to='/'>
                  <img src="./Logo.jpg" alt="" />
              </Link>
              
            </div>
            <div style={{ paddingTop: "1%" }}>
              <img src="./helpicon.svg" alt="help" />
            </div>
          </div>
          <div className={styles.banner}>
            <h5>
              We're facing issues with UPI Payments, Please choose Netbanking or
              cards
            </h5>
          </div>
          <div className={styles.bodyDiv}>
            <div className="container pt-5 pb-5">
              <div className="row">
                <div className="col-7">
                 {!isAuth ? 
                 <div className="conatiner">
                    <div className="row">                    
                      <div className="col-12">
                        <div className="card rounded-0 p-4">
                          <div className="card-body d-flex bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                              <img src="./Guest.svg" alt="Guest Icon" />
                            </div>
                            <div className={`p-2 bd-highlight ${styles.guest}`}>
                              Guest
                            </div>
                            <div className={`ml-auto p-2 bd-highlight ${styles.otherButton}`}>
                              Change
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    : 
                  <div className="container">
                    <div className="row">
                    <div className="col-12" >
                  <div className="card rounded-0 p-4">
                    <div className="card-body d-flex bd-highlight mb-3">
                      <div className="p-2 bd-highlight">
                        <img src="./Guest.svg" alt="Guest Icon" />
                      </div>
                      <div>
                        <div className={`p-2 bd-highlight ${styles.guest}`}>
                          Logged In As
                        </div>
                        <div className="row">
                          <div className="col-12 text-left ">
                            {loggedInName}
                            <br/>
                            {loggedInEmail}
                          </div>
                        </div>
                      </div>
                      {/* <div className={`ml-auto p-2 bd-highlight ${styles.otherButton}`}>
                        Details
                      </div> */}
                    </div>
                  </div> 
                  </div>
                 </div>
                  </div>
                 }
                    <div className="col-12">
                      <div className="card rounded-0 p-4 mt-3">
                        <div className="card-body d-flex">
                          <div className="p-2 bd-highlight">
                            <img src="./Location.svg" alt="Guest Icon" />
                          </div>
                          <div className={`p-2 bd-highlight ${styles.delivery}`}>
                            Delivery Address
                          </div>
                        </div>
                            <Map mobile = {mobile} setMobile = {setMobile} style={{width:'100%'}}/>
                      </div>
                    </div>

                 
                    <div className="col-12">
                      <div className="card rounded-0 p-4 mt-3">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="p-2 bd-highlight">
                              <img src="./Payment.svg" alt="Guest Icon" />
                            </div>
                            <div
                              className={`p-2 bd-highlight ${styles.payment}`}
                            >
                              Paymethod Method
                            </div>
                            
                          </div>
                          <div className={styles.offers}>Offers</div>
                          <div className="d-flex justify-content-between">
                            <div className="text-left">
                              <img
                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/db7b276d-8641-4602-967b-08b0a1014d87.png"
                                className={`img-fluid ${styles.img}`}
                                alt="amazonPay"
                              />
                              <p>Amazon Pay</p>
                              <p className={styles.offerInfo}>
                                Flat Rs 25 cashback on Min purchase of Rs 200
                              </p>
                              <p className={styles.otherButton}>Avail Offer</p>
                            </div>
                            <div className="text-left">
                              <img
                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/6e184ad6-1df1-4c3e-8b64-33d3f1a6fea2.png"
                                className={`img-fluid ${styles.img}`}
                                alt="Mobikwik"
                              />
                              <p>Mobikwik</p>
                              <p className={styles.offerInfo}>
                                Get 15% Supercash on 1st & 3rd Payment || <br />{" "}
                                KWIK15
                              </p>
                              <p className={styles.otherButton}>Avail Offer</p>
                            </div>
                          </div>
                          <div className={styles.payment}>
                            Payment Methods
                            <div class="row">
                              <div class="col-5">
                                <div
                                  class="nav flex-column nav-pills border "
                                  id="v-pills-tab"
                                  role="tablist"
                                  aria-orientation="vertical"
                                >
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="cash-home-pill"
                                    data-toggle="pill"
                                    href="#v-pills-cash"
                                    role="tab"
                                    aria-controls="v-pills-cash"
                                    aria-selected="true"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                    
                                  >
                                    Cash
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="phonepe-pill"
                                    data-toggle="pill"
                                    href="#v-pills-phonepay"
                                    role="tab"
                                    aria-controls="v-pills-phonepay"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    PhonePe
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="wallets-pill"
                                    data-toggle="pill"
                                    href="#v-pills-wallets"
                                    role="tab"
                                    aria-controls="v-pills-wallets"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    Wallets
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="google-pay-tez"
                                    data-toggle="pill"
                                    href="#v-pills-google-pay"
                                    role="tab"
                                    aria-controls="v-pills-google-pay"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    Google Pay(Tez)
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark active"
                                    id="razor-ticket"
                                    data-toggle="pill"
                                    href="#v-pills-razor"
                                    role="tab"
                                    aria-controls="v-pills-razor"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    Razor Pay
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="sodexo-meal-card"
                                    data-toggle="pill"
                                    href="#v-pills-sodexo"
                                    role="tab"
                                    aria-controls="v-pills-sodexo"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    Sodexo Meal Card
                                  </a>
                                  <a
                                    class="nav-link p-3 text-dark"
                                    id="net-banking"
                                    data-toggle="pill"
                                    href="#v-pills-banking"
                                    role="tab"
                                    aria-controls="v-pills-banking"
                                    aria-selected="false"
                                    style={{borderBottom:'3px solid #e85826',backgroundColor:'white'}}
                                  >
                                    Net Banking
                                  </a>
                                </div>
                              </div>
                              <div class="col-7">
                                <div
                                  class="tab-content"
                                  id="v-pills-tabContent"
                                >
                                  <div
                                    class="tab-pane fade show"
                                    id="v-pills-cash"
                                    role="tabpanel"
                                    aria-labelledby="cash-home-pill"
                                  >
                                    <h1>
                                      <i class="far fa-money-bill-alt"></i>
                                    </h1>
                                    <div className={styles.cash}>Cash</div>
                                    <div className={styles.cashInfo}>
                                      Pay with cash on deliver
                                    </div>
                                    <Link to="#">
                                      <button
                                        type="button"
                                        class={` px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}
                                        onClick={() => dispatch(deleteItem())}
                                     >
                                        {" "}
                                        PLACE ORDER . ₹
                                        {(
                                          total +
                                          packagingfee +
                                          deliver +
                                          GST
                                        ).toFixed(2)}{" "}
                                      </button>
                                    </Link>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="v-pills-phonepay"
                                    role="tabpanel"
                                    aria-labelledby="phonepe-pill"
                                  >
                                    <img
                                      src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/d7cd76ca-2328-4d57-a1c6-d55420621346.jpg"
                                      alt="phonepay"
                                    />{" "}
                                    <br />
                                    <Link to="#">
                                      <button
                                        type="button"
                                        class={` px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}
                                      >
                                        {" "}
                                        PLACE ORDER . ₹
                                        {(
                                          total +
                                          packagingfee +
                                          deliver +
                                          GST
                                        ).toFixed(2)}{" "}
                                      </button>
                                    </Link>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="v-pills-wallets"
                                    role="tabpanel"
                                    aria-labelledby="wallets-pill"
                                  >
                                    <div className="container ">
                                      <div className="row">
                                        <div className="col-6">
                                          <div class="card mb-3 ">
                                            <div class="card-body">
                                              <img
                                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/008b797a-1d2c-4fff-9f66-fb3b92aad54c.png"
                                                className={`img-fluid ${styles.walletImg}`}
                                                alt="twidTm"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div class="card mb-3">
                                            <div class="card-body">
                                              <img
                                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/db7b276d-8641-4602-967b-08b0a1014d87.png"
                                                className={`img-fluid ${styles.walletImg}`}
                                                alt="amazonPay"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div class="card mb-3">
                                            <div class="card-body">
                                              <img
                                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/e3cdfccd-ae46-4bcd-9c16-046e3f08e69e.png"
                                                className={`img-fluid ${styles.walletImg}`}
                                                alt="paytm"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div class="card mb-3">
                                            <div class="card-body">
                                              <img
                                                src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/6e184ad6-1df1-4c3e-8b64-33d3f1a6fea2.png"
                                                className={`img-fluid ${styles.img}`}
                                                height="30px"
                                                alt="mobikwik"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div class="card mb-3">
                                            <div class="card-body">
                                              <img
                                                src="https://d3gy1em549lxx2.cloudfront.net/b9817816-3c3c-4885-946d-1df447303c65.jpg"
                                                className={`img-fluid ${styles.walletImg}`}
                                                alt="freerecharge"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Link to="#">
                                        <button
                                          type="button"
                                          class={` px-5 mt-0 btn btn-lg rounded-pill ${styles.placeOrderButton} `}
                                        >
                                          {" "}
                                          PLACE ORDER . ₹
                                          {(
                                            total +
                                            packagingfee +
                                            deliver +
                                            GST
                                          ).toFixed(2)}{" "}
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="v-pills-google-pay"
                                    role="tabpanel"
                                    aria-labelledby="google-pay-tez"
                                  >
                                
                                  </div>
                                  <div
                                    class="tab-pane fade show  active"
                                    id="v-pills-razor"
                                    role="tabpanel"
                                    aria-labelledby="razor-ticket"
                                    
                                  >
                                    <img
                                      src="./razorPay.jpg"
                                      alt="razor"
                                      height="30px"
                                    />
                                    <Link to="#">
                                      <button
                                        type="button"
                                      
                                        onClick={paymentHandler}
                                        disabled = {mobile.length < 10 ? true : false}
                                        class={` px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}
                                      >
                                        {" "}
                                        PLACE ORDER . ₹
                                        {(
                                          total +
                                          packagingfee +
                                          deliver +
                                          GST
                                        ).toFixed(2)}{" "}
                                      </button>
                                    </Link>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="v-pills-sodexo"
                                    role="tabpanel"
                                    aria-labelledby="sodexo-meal-card"
                                  >
                                   
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="v-pills-banking"
                                    role="tabpanel"
                                    aria-labelledby="net-banking"
                                  >
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  
                    
                  </div>
               
                <div className="col-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div class="card rounded-0">
                        <div class="card-body ">
                          <div className={`text-left ${styles.deliveryTime}`}>
                            Delivery Time
                          </div>
                          <div>
                            <h6 className={`text-left ${styles.deliverInfo}`}>
                              Deliver Now{" "}
                            </h6>
                            <p className="text-muted text-left ml-3">
                              Your order will be delivered within{" "}
                              <b>45 minutes</b>{" "}
                            </p>
                          </div>
                          <div
                            className={`ml-auto p-2 pl-3 my-3 bd-highlight text-left ${styles.otherButton}`}
                          >
                            Schedule for later
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div class="card rounded-0">
                        <div class="card-body ">
                          <div className={`text-left ${styles.deliveryTime}`}>
                            You Might Also Like
                          </div>
                          <div>
                            <hr />
                          </div>
                          <div>
                            {cartListItem &&
                              cartListItem.map((res) => (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                    key={res._id}
                                  >
                                    <div className={styles.foodType}>
                                      {res.type === "VEG" ? (
                                        <img
                                          src="./vegIcon.png"
                                          alt="Vegetarian"
                                          className={styles.typeIcon}
                                        />
                                      ) : (
                                        <img
                                          src="/non-vegetarian.png"
                                          alt="Non Veg"
                                          className={styles.typeIcon}
                                        />
                                      )}
                                    </div>
                                    <div> {res.title}</div>
                                    <div> {res.qty}</div>
                                  </div>
                                  <div className="text-left pl-5 ">
                                    <b>₹{res.amount}</b>
                                  </div>
                                </>
                              ))}
                          </div>
                          <div className={styles.safety}>
                            <h5>
                              Safety Assured meals and contactless delivery
                            </h5>
                          </div>
                          <div className={styles.coupons}>
                            <h4>
                              <img
                                src="https://www.freshmenu.com/pages/checkout/devices/default/images/discount.svg"
                                alt=""
                              />
                              Check available coupons
                            </h4>
                          </div>
                          <div className={styles.contactless}>
                            <input type="checkbox" id="fname" name="fname" />
                            <div>
                              <label for="fname">
                                Opt for ContactLess Delivery
                              </label>{" "}
                              <br />
                              {/* <small> Rider would leave your food parcel at a distance/ <br/> drop off at security gate.</small> */}
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              textAlign: "left",
                            }}
                          >
                            <div>
                              <div>Item Price</div>
                              <div>Packaging Fee</div>
                              <div>Delivery Fee</div>

                              <div>
                                GST (5%)
                                <div>CGST (2.5%)</div>
                                <div>SGST (2.5%)</div>
                              </div>
                              <hr />
                              <div>Payable</div>
                            </div>
                            <div>
                              
                               <div>₹{ total.toFixed(2)}</div>
                              <div>+₹{packagingfee}.00</div>
                              <div>+₹{deliver}.00</div>
                              <div>+₹{GST.toFixed(2)}</div>
                              <div>+₹{CGST.toFixed(2)}</div>
                              <div>+₹{SGST.toFixed(2)}</div>
                              <hr />
                              <div>
                                ₹
                                {(total + packagingfee + deliver + GST).toFixed(
                                  2
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <div class="card p-4 rounded-0">
                        <div class="card-body text-left">
                          <div className={`${styles.help}`}>Need Help?</div>
                          <br />
                          <div>
                            <h2 className="text-success pl-2">080-6824-5911</h2>
                            <small className="pl-2">
                              Lines open from 9:00 AM to 12:00 AM
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Checkout;
