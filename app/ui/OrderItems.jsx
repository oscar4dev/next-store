import DeleteOrder from "./DeleteOrder";

function formatDate(isoString) {
   const dateObj = new Date(isoString);
   const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
   };
   return dateObj.toLocaleString('en-US', options);
}

export default function OrderItems({ item }) {   
   
   return (
      <li>
         <p className="capitalize">{ item.name }</p>
         <p>{ formatDate(item.created_at) }</p>
         <p>{ item.email }</p>
         <p>{ item.priorityStatus }</p>
        
        <DeleteOrder id={ item.id } />
      </li>
   )
}
