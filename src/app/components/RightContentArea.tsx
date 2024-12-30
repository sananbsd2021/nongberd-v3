import GallerysShowListPage from "./Gallery_Show";
import ImageSlider from "./ImageSlider";
import NewsListPage from "./Newslist";

export default function RightContentAreaPage() {
    return (
        <div>
            <ImageSlider />
            <NewsListPage />
            <GallerysShowListPage />
        </div>
    );
}
