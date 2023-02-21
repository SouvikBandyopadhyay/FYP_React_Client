import credits from "./credits.json"

function Footer(){

    const namelist=credits.credits;
    
    return (
        <div className="Footer">
            {namelist.map((item,index)=>{
                // console.log(index);
                // list from credit.json
                return (
                    <div className="names-in-credits flex-col center" key={index}>
                        {item.name} : {item.email},
                    </div>
                )
            })}
        </div>
    )
    };

export default Footer