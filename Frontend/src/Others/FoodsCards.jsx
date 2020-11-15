import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector } from 'react-redux'
import {cartListItem} from '../Redux/Cart/action'
import { useState } from 'react';
import styles from '../Styling/LandingPage.module.css'
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      
    },
}));

function FoodsCards( {item} ) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [addons , setAddons ]= useState([])
    const [addonsTotalPrice , setAddonsTotalPrice] = useState(0)
    const [addedItem , setAddedItem] = useState(true)
    let cartList = useSelector((state) => state.cartItemReducer.cartList)
    
    const findItem = cartList.find((foodItem) => foodItem.title === item.title)
    // console.log(findItem)
    const handleQuantity = ( val ) => {
        findItem.qty = Number(findItem.qty) + Number(val)
        cartList = cartList.map((qtyItem) => qtyItem.title == findItem.title ? findItem : qtyItem)
        if(findItem.qty === 0 && val === -1){
            cartList = cartList.filter((qtyFilter) => qtyFilter.title !== findItem.title)
            dispatch(cartListItem( cartList ))
            return
        }
        dispatch(cartListItem( cartList ))
    }
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        const data = { title : item.title , amount : item.amount , type : item.type , qty : 1 , addons : [] }
        let quantity = cartList.find((res) => res.title === item.title )
        if( quantity ){
            quantity.qty = quantity.qty+1
            cartList = cartList.map((res) => res.title === item.title ? quantity : res)
        }
        else{
            cartList = [...cartList , data]
        }
        dispatch(cartListItem( cartList ))
        setOpen(false);
    };

    const handleAddItem = ( ) => {        
        const data = { title : item.title , amount : Number(item.amount) + Number(addonsTotalPrice) , type : item.type , qty : 1 , addons : addons}
        let quantity = cartList.find((res) => res.title === item.title )
        if( quantity){
            quantity.qty = quantity.qty+1
            cartList = cartList.map((res) => res.title === item.title ? quantity : res)
        }
        else{
            cartList = [...cartList , data]
        }
        // console.log(cartList)
        dispatch(cartListItem( cartList ))
        setOpen(false);
    };

    const handleAddons = (item , e) => {
        if(e.target.checked){
            setAddons (
                [...addons , item]
            )
            setAddonsTotalPrice(Number(addonsTotalPrice) + Number(item.price))
        }
        else if( !e.target.checked){
            let findAddons = addons.findIndex((addonsItem) => addonsItem.name === item.name)
            if( findAddons >= 0){
                addons.splice(findAddons , 1)
                setAddons(addons)
                setAddonsTotalPrice(Number(addonsTotalPrice) - Number(item.price))
            }
        }
    };

    const body = (
        <div style={{ width: "100%",height: "100%",backgroundColor: "#eeeeee",}}>
            <div style={modalStyle} className={classes.paper}>
                <div className={styles.modalLayout}>
                    <h3 id="simple-modal-title" className={styles.modalTitle}> {item.title}</h3>
                    <h4><i className="fas fa-times text-secondary" onClick = {handleClose} ></i></h4> 
                </div>
                <p id="simple-modal-description">
                    <div className={styles.addonsTitle}> AddOns</div>
                    {  
                        item.addons_value.map((items) => (
                            <div className={styles.addonValue} key={item._id}>
                                <div className={styles.inputDiv}>
                                    <input type="checkbox" name="addons" value={items.name} onChange={( e ) =>handleAddons(items , e)}/> 
                                    <p className='pl-1'> { items.name}</p> 
                                </div>
                                    <p className={styles.addonValuePrice}>₹{items.price}</p>  
                            </div>
                        ))
                    }
                    <div  className={styles.modalFooter}>
                        <div> <p> { addons.length } add-on selected</p></div>
                        <div className={styles.addonsSelected} >
                            <p>₹{Number(item.amount) + Number(addonsTotalPrice)}</p>
                        </div>
                        <div >
                                <button type="button" className={`btn float-right rounded-pill ml-2  text-white ${styles.colorCode}`} onClick={handleAddItem}>ADD ITEM </button>
                            
                        </div>
                    </div>
                </p>
            </div>
        </div>
    );

    return(
        <>
            <div className = 'col-12 col-sm-12 col-md-6 col-lg-4' key={item.id}>
                <div style={{display:'flex', fontSize:'13px', color:'#A8A8A8'}}>
                    <div className={styles.foodType}>{item.type === 'VEG' ? <img src="./vegIcon.png" alt="Vegetarian" className={styles.typeIcon}/>  : <img src="/non-vegetarian.png" alt="non-veg" className={styles.typeIcon} />}</div>
                    <div>{item.cuisine}</div>
                </div>
                <div className ="card m-2 rounded">
                    <Link to ={`/${item.title}/product/${item.id}`}><img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/></Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        { item.best_offers && <div className ={styles.bestOfferDiv}>
                                <div className={styles.bestOfferTitle}>
                                    Best offers
                                </div>
                                <div className={styles.rightShapes}></div>
                        </div>}
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                                ₹{item.amount} 
                            </div>
                            <div>
                                {
                                    item.addons === true ? 
                                   <div>
                                    {
                                        (findItem == undefined ) ? 
                                        <button type="button" className={`btn float-right rounded-pill px-3 text-white ${styles.colorCode}`} onClick = {handleOpen}>ADD +</button> :
                                        <div className='d-flex px-3' style={{ width:'100%',backgroundColor:'#df561d',borderRadius:'20px',color:'white'}}>
                                        <button className="px-2 py-2" onClick={() => handleQuantity(-1)} style={{width:'100%', borderRadius:'20px 0px 0px 20px',border:'none',backgroundColor:'#df561d' ,color:'white'}}>-</button>
                                        <span className="px-3 py-2" style={{display:'inline' ,width:"100%", borderRadius:'50%',border:'none',backgroundColor:'#df561d',backgroundImage:' linear-gradient(to left,#fe7c18,#df561d)',color:'white'}}>{findItem.qty}</span>
                                        <button className="px-2 py-2" onClick={() => handleOpen()} style={{width:'100%', borderRadius:'0px 20px 20px 0px',border:'none',backgroundColor:'#df561d',color:'white'}}>+</button>
                                        </div>
                                    }
                                   </div>
                                :                           
                                    <div>
                                       { findItem == undefined ? 
                                        <button type="button" className={`btn float-right rounded-pill px-4 text-white ${styles.colorCode}`} onClick ={handleAddItem}>ADD</button> : 
                                        <div className='d-flex px-3' style={{ width:'100%',backgroundColor:'#df561d',borderRadius:'20px',color:'white'}}>
                                            <button className="px-2 py-2" onClick={() => handleQuantity(-1)} style={{width:'100%', borderRadius:'20px 0px 0px 20px',border:'none',backgroundColor:'#df561d' ,color:'white'}}>-</button>
                                            <span className="px-3 py-2" style={{display:'inline' ,width:"100%", borderRadius:'50%',border:'none',backgroundColor:'#df561d',backgroundImage:' linear-gradient(to left,#fe7c18,#df561d)',color:'white'}}>{findItem.qty}</span>
                                            <button className="px-2 py-2" onClick={() => handleQuantity(1)} style={{width:'100%', borderRadius:'0px 20px 20px 0px',border:'none',backgroundColor:'#df561d',color:'white'}}>+</button>
                                        </div>}
                                    </div>
                                
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}
                </Modal>
            </div>
        </>
    )
}

export default FoodsCards