import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize:28
});
export const grayCard = style({
    backgroundColor:"#5b5b5b" ,
    width:300,
    margin:"1rem",
    height:100,
    color:"#f8f8f8",
    display:"flex" ,
    justifyContent:"center",
    alignItems:"center" 
});
export const redCard = style({
    backgroundColor:"#ff5555" ,
    width:300,
    margin:"1rem",
    height:300,
    color:"#000",
    display:"flex" ,
    justifyContent:"center",
    alignItems:"center",
    border: "1px solid #fff"
});
export const textCard = style({
    width:300,
    margin:"1rem",
    color:"#fff",
    padding:"1rem",
    border: "1px solid #fff"
});
export const cards = style({
    display:"flex",
  flexWrap:"wrap" ,
  justifyContent:"center" 
});