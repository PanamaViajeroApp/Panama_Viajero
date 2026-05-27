import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import ProvinceVideoJSX from '../../../components/province/ProvinceVideo.jsx';
import ProvinceInfo from '../../../components/province/ProvinceInfo.jsx';
import Activities from '../../../components/province/Activities.jsx';
import Suggestions from '../../../components/province/Suggestions.jsx';
import MapSection from '../../../components/province/MapSection.jsx';
import OtherProvinces from '../../../components/province/OtherProvinces.tsx';
import { provincias } from './BocasDelToro.js';

function BocasDelToro() {
    const navigate = useNavigate();
    const location = useLocation();
    const bocasDelToro = provincias[0];

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.hash]);

    return (
        <div className="relative bg-brand-soft text-brand-charcoal">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    onLogoClick={() => navigate('/#home')}
                    onUsClick={() => navigate('/#us')}
                    onMapClick={() => navigate('/#map')}
                    onSuggestionsClick={() => navigate('/#suggestions')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>

            <ProvinceVideoJSX provinceData={bocasDelToro} />

            <ProvinceInfo provinceData={bocasDelToro} />

            <Activities provinceData={bocasDelToro} />

            <Suggestions provinceData={bocasDelToro} navigate={navigate} basePath="../bocas-del-toro" />

            <MapSection provinceData={bocasDelToro} />

            <OtherProvinces provincias={provincias} />

            <BottomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    );
}
export default BocasDelToro;
