import React  from "react";
import stocks from "./stock-data";

function Home() {

const stocksDisplay = stocks.map((stock, index) => {
    return (
        
            
               
                 <tr>
                    <td>{stock.name}{stock.symbol}</td>
                    <td>{stock.lastPrice}</td>
                    <td>{stock.change}</td>
                
                    </tr>
            
            
        
        
    )
}
)

    return (
      <div className="table">
       
            
            <table>
                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                 </tr>
               {stocksDisplay}
               
             </table>
      
      </div>
    );
}

export default Home;
