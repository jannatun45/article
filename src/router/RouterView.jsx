import { Route, Routes } from "react-router-dom";
import FilosofiDibalikInspirasiReferencyDanRiset from '../components/pages/FilosofiDibalikInspirasiReferencyDanRiset.jsx';
import FlexWrapPadaTailwind from '../components/pages/FlaxWrapPadaTailwind.jsx';
import PerbedaanLocalStorageDanSessionStorage from '../components/pages/PerbedaanLocalStorageDanSessionStorage.jsx';
import UnicodeArticle from "../components/pages/Unicode.jsx";
import CaraBekerjaDenganCabangDiGit from "../components/pages/CaraBekerjaDenganCabangDiGit .jsx";
import PenamaanCabangDiGit from "../components/pages/PenamaanCabangDiGit .jsx";
// import PageContent from "../components/molecules/PageContents.jsx";
import CategoryPage from "../components/pages/CategoryPage.jsx";
import AddArticle from "../components/article/AddArticle.jsx";

function RouterView() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<AddArticle />}/>
        <Route path='/penamaan-cabang-di-git' element={<PenamaanCabangDiGit />}/>
        <Route path='/unicode' element={<UnicodeArticle />}/>
        <Route path='/cara-bekerja-dengan-cabang-di-git' element={<CaraBekerjaDenganCabangDiGit />}/>
        <Route path='/perbedaan-local-storage-dan-session-storage' element={<PerbedaanLocalStorageDanSessionStorage />}/>
        <Route path='/filosofi-dibalik-inspirasi-referency-dan-riset' element={<FilosofiDibalikInspirasiReferencyDanRiset />}/>
        <Route path='/flex-wrap-pada-tailwind' element={<FlexWrapPadaTailwind />}/>

        {/* <Route path='/category/:categoryName' element={<PageContent />} /> */}
        <Route path='/category/:categoryName' element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default RouterView