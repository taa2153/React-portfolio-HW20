import React from 'react';
export default function Footer() {
    const styles = {
        footerContainer: {
            width: "100%",
            height: "2.5rem",
            display: "flex",
            fontFamily: "Source Code Pro, monospace",
            letterSpacing: "2.5px",
            borderTop: "3px solid #B6B4B4",
            justifyContent: "left",
            marginTop: "200px",
            paddingLeft: "3vw",
            background:"#D7BDCA"
    
        },
    
        listInlineItem: {
            display: "flex",
            flexDirection: "row",
            alignContent: "left",
            flexGrow: "1",
            color: "#CE9178",
            border: "1px solid #FFFFFF",
            borderRadius: "18px",
            fontSize: "15px",
            letterSpacing: "2.5px",
            backgroundColor: "transparent",
            width: "22vw",
            height: "3.5vh",
            fontFamily: "Source Code Pro, monospace",
            paddingLeft: "10px",
            padding: "1.5vh",
            margin: "1vw",
            justifyContent:"center"
            
        },
    
        h5: {
            fontFamily: "Source Code Pro, monospace", 
            fontSize: "15px",
            color: "#9CDCFB",
            padding: "0",
        },
    
        col:{
            width: "30vw",
            height: "auto",
            float: "left",
            boxSizing: "border-box",
            padding: "2vw",
            margin:"1vw"
    
        },
    
        ul:{
            listStyleType: "none",
            margin: "0",
            paddingLeft: "10px",
            borderLeft: "1px solid #686868",
    
        },
    
        a:{
            color: "#CE9178",
        },
    
    }

    return (
        <div className='footer' style={styles.footerContainer}>
        <div className= 'col' style={styles.col}>
            <h5 style={styles.h5}> Connect</h5>
            <ul className='list-inline' style={styles.ul}>
                <li className='list-inline-item' style={styles.listInlineItem}><a  style={styles.a} href='https://github.com/Lunirs' >Github </a></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/lyf703331869' >Twitter </a></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/amckelvey' >Instagram </a></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/shayosullivan' >Medium</a></li>
            </ul>
        </div>
    
        </ div>
    )
}