import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/RowPost/RowPost";
import { originals, actions, comedy, horror } from "./Urls";


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title={'Netflix Original'}
               url = {originals}
      />
      <RowPost title={'Action'}
               url = {actions}
               isSmall = {true}
      />

      <RowPost title={'Comedy'}
               url = {comedy}
               isSmall = {true}
      />

      <RowPost title={'Horror'}
               url = {horror}
               isSmall = {true}
      />
    </div>
  );
}

export default App;
