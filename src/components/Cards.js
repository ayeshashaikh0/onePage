import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import '../App.css';
import faces from '../images/Images';
const Cards = () => {
 const [user,setUser]=useState([]);
 const fetchData=()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((response)=>{
         return response.json();
     })
     .then((data)=>{
       console.log(data);
         setUser(data);
     })
     .catch((err)=>{
       console.log(err);
     })
     
}
 useEffect(()=>{
  fetchData();
 },[])
 const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor:"#FDEFF4",
  },
  media: {
    height:250,
    
  },
 
});
const classes = useStyles();

  return (
    <>
    <h1 class="heading">Users Profile</h1>
    {user.map((person)=>{
      const{id,name,email,address,phone,website,company}=person;
      
    return(
      <>
    <div key={id}>
    <Grid container  display="flex" direction="row"justifyContent="center" alignItems="center">
    <Grid item  xs={12} sm={6} md={4}>
    {faces.map(face=>(
    <Card className={classes.root}  direction="row">
      <CardActionArea>
        <CardMedia className={classes.media}
          image={face} />
        <CardContent>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h3>{address.street}</h3>
          <h3>{company.name}</h3>
          <h4>{phone}</h4>
          <h4>{website}</h4>
        </CardContent>
      </CardActionArea> 
    </Card>
    ))}
    </Grid>
    </Grid>
    
    </div>
     </> )
    })}
  <div>
  <Typography  variant="body2"color="black" align="center" className="footer">
  {'Copyright © '}
  <a color="black" href="https://mui.com/" className="link">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
   </>
  )
  
}
export default Cards;