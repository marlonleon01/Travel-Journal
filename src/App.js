import Navbar from "./Components/Navbar"
import Locations from "./Components/Locations";
import data from "./Components/data"

export default function App() {
  const locationInfo = data.map(items => {
    return <Locations 
            key={items.id}
            {...items} 
            />
  })
  
  return (
    <div className="all-content">
      <Navbar />
      {locationInfo}
    </div>
  );
}


