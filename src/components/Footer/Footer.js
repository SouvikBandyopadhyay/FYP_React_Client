import credits from "./credits.json"
import React from 'react'
import  styles from"./Footer.module.css"

function Footer(){

    const namelist=credits.credits;
    
    return (
        <div className={styles.Footer}>
            {namelist.map((item,index)=>{
                // console.log(index);
                // list from credit.json
                return (
                    <div className="names-in-credits flex-col center" key={index}>
                        {item.name} : {item.email},
                    </div>
                )
            })}
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear} Souvik, Jahir, Suprit and Amrit | All Right Reserved | Privacy
                </p>
            </div>
        </div>
    )
    };

export default Footer