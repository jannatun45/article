import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FilosofiDibalikInspirasiReferencyDanRiset from '../components/pages/FilosofiDibalikInspirasiReferencyDanRiset.jsx';
import FlexWrapPadaTailwind from '../components/pages/FlaxWrapPadaTailwind.jsx';
import PerbedaanLocalStorageDanSessionStorage from '../components/pages/PerbedaanLocalStorageDanSessionStorage.jsx';
import UnicodeArticle from "../components/pages/html/Unicode.jsx";
import CaraBekerjaDenganCabangDiGit from "../components/pages/git/CreatingAndSwitchingBranchesToNewFeatures.jsx";
import PenamaanCabangDiGit from "../components/pages/git/PenamaanCabangDiGit .jsx";
import CategoryPage from "../components/pages/CategoryPage.jsx";
import AddArticle from "../components/article/AddArticle.jsx";
import SetupAndConfigurasi from "../components/pages/bootcamp/SetupAndConfigurasi.jsx";
import GitBranchSwitching from "../components/pages/error/GitBranchSwitching.jsx";
import AppExpress from "../components/atoms/AppExpress.jsx";
import Vocabulary from "../components/pages/vocabulary/Vocabulary.jsx";
import PathGlobal from "../components/pages/windows/PathGlobal.jsx";
import MusicalScale from "../components/pages/music/MusicalScale.jsx";
import HydrateFallbackInSSR from "../components/pages/react/HydrateFallbackInSSR.jsx";
import Shortcut from "../components/pages/vscode/Shortcut.jsx";

function RouterView() {
  const navigate = useNavigate();

  useEffect(() => {
    // Mengecek apakah halaman ini pertama kali dimuat
    const isFirstVisit = localStorage.getItem("isFirstVisit");

    if (!isFirstVisit) {
      // Jika belum pernah mengunjungi, arahkan ke /category/all
      localStorage.setItem("isFirstVisit", "true");
      navigate('/category/all');
    }
  }, [navigate]);

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<AddArticle />} />
        <Route path='/penamaan-cabang-di-git' element={<PenamaanCabangDiGit />} />
        <Route path='/shortcut' element={<Shortcut />} />
        <Route path='/musical-scale' element={<MusicalScale />} />
        <Route path='/hydrate-fallback-in-ssr' element={<HydrateFallbackInSSR />} />
        <Route path='/vocabulary' element={<Vocabulary />} />
        <Route path='/path-global' element={<PathGlobal />} />
        <Route path='/git-branch-switching' element={<GitBranchSwitching />} />
        <Route path='/unicode' element={<UnicodeArticle />} />
        <Route path='/cara-bekerja-dengan-cabang-di-git' element={<CaraBekerjaDenganCabangDiGit />} />
        <Route path='/perbedaan-local-storage-dan-session-storage' element={<PerbedaanLocalStorageDanSessionStorage />} />
        <Route path='/filosofi-dibalik-inspirasi-referency-dan-riset' element={<FilosofiDibalikInspirasiReferencyDanRiset />} />
        <Route path='/flex-wrap-pada-tailwind' element={<FlexWrapPadaTailwind />} />
        <Route path='/setup-and-configurasi' element={<SetupAndConfigurasi />} />
        <Route path='/setup-and-configurasi/:id' element={<AppExpress />} />
        <Route path='/category/:categoryName' element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default RouterView;
