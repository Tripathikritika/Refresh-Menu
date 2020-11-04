import React, { Component } from "react";
import styled from "styled-components";
import {Box, TableRow} from "@material-ui/core" 
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
`;

class Footer extends Component {
    
  render() {
    return (
        <div>
            
            <>
                <hr/>
             
                
                <Box style={{width:"100%",height:"500px",fontFamily: "Helvetica",fontWeight:"bolder",fontSize:"13px"}}>
                    <Box style={{background:"white",color:"black",height:"250px"}}>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <Box style={{marginLeft:"60px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left",opacity:"0.25"}}>COMPANY</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>FAQ</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>About</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Careers</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Blog</p>
                              </div>
                              <div>
                                <table>
                                    <TableRow>
                                        <td>
                                        <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Terms</p>
                                        </td>   
                                        <td>
                                        <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Privacy</p>
                                        </td>         
                                    </TableRow>
                                    
                                </table>
                                
                              </div>
                              
                            </Box>

                            <Box style={{marginLeft:"20px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left",opacity:"0.25"}}>HELP & CONTACT</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",}}>Help Center</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Email Us</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>080-6824-5911</p>
                              </div> 
                            </Box>

                            <Box style={{marginLeft:"20px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left",opacity:"0.25"}}>MORE FROM US</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",}}>Bulk/Party Order</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Cake Order</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>FreshClub</p>
                              </div> 
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60"}}>Offers</p>
                              </div> 
                            </Box>
                            <Box style={{marginLeft:"140px"}}>
                                <div style={{marginTop:"25px"}}>
                                <p style={{border:"none",textAlign:"left",opacity:"0.25"}}>SUSBCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
                                </div>
                                <div style={{marginTop:"25px"}}>
                                    <input style={{width:"350px",height:"40px",label:"Enter your Email"}}></input>
                                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                                    <button style={{width:"50px",border:"none",background:"none",}}>Subscribe</button>
                                </div>
                                <div style={{marginTop:"40px",}}>
                                    <img src="https://www.freshmenu.com/pages/common/images/google-play.jpg" alt="google play store"style={{width:"130px",height:"40px",textAlign:"left"}}></img>
                                    <img src="https://www.freshmenu.com/pages/common/images/btn-app-store-normal-2.svg" alt="apple store" style={{width:"130px",height:"40px",textAlign:"left"}}></img>
                                    <IconButton aria-label="facebook" disabled color="primary">
                                        <FacebookIcon style={{fontsize:"60px"}} />
                                    </IconButton>
                                    <IconButton aria-label="facebook" disabled color="primary">
                                        <TwitterIcon style={{fontsize:"60px"}} />
                                    </IconButton>
                                    <IconButton aria-label="facebook" disabled color="primary">
                                        <InstagramIcon style={{fontsize:"60px"}} />
                                    </IconButton>
                                    
                                </div>
                            </Box>
                        </div>
                    </Box>
                    <Box style={{background:"rgb(65, 59, 59)",color:"white",height:"250px"}}>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <Box style={{marginLeft:"60px",marginTop:"15px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left"}}>CATEGORIES</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Mains</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Pizzas</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Salads</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Deserts</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Quickbites</p>
                              </div>
                            </Box>
                            <Box style={{marginLeft:"60px",marginTop:"15px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left"}}>CUISINES</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Indian</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Chinese</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Italian</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>American</p>
                              </div>
                            </Box>
                            <Box style={{marginLeft:"40px",marginTop:"45px"}} >
                              <div>
                                <p style={{border:"none",margin:"15px",textAlign:"left"}}></p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Mexican</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Thai</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Continental</p>
                              </div>
                              <div>
                                <p style={{border:"none",background:"none",margin:"15px",textAlign:"left",opacity:"0.60",fontWeight:"normal"}}>Mediterranean</p>
                              </div>
                            </Box>

                        </div>
                    </Box>
                  
                </Box>
            </>
        </div>
     
    );
  }
}

export default Footer;