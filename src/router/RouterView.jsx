import { Route, Routes } from "react-router-dom";
import FilosofiDibalikInspirasiReferencyDanRiset from '../components/pages/FilosofiDibalikInspirasiReferencyDanRiset.jsx';
import FlexWrapPadaTailwind from '../components/pages/FlaxWrapPadaTailwind.jsx';
import PerbedaanLocalStorageDanSessionStorage from '../components/pages/PerbedaanLocalStorageDanSessionStorage.jsx';
import Home from "../components/pages/Home.jsx";
import UnicodeArticle from "../components/pages/Unicode.jsx";

function RouterView() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/unicode' element={<UnicodeArticle />}/>
        <Route path='/perbedaan-local-storage-dan-session-storage' element={<PerbedaanLocalStorageDanSessionStorage />}/>
          <Route path='/filosofi-dibalik-inspirasi-referency-dan-riset' element={<FilosofiDibalikInspirasiReferencyDanRiset />}/>
          <Route path='/flex-wrap-pada-tailwind' element={<FlexWrapPadaTailwind />}/>
      </Routes>
    </div>
  )
}

export default RouterView