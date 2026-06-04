import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import ProvinceVideoJSX from '../../../components/destinations/ProvinceVideo.jsx';
import Activities from '../../../components/destinations/Activities.jsx';
import Sitios from '../../../layout/sites/Sitios.jsx';
import OtherProvinces from '../../../components/destinations/OtherProvinces.tsx';
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
        <div className="relative isolate text-brand-charcoal">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    autoHideOnScroll
                    onLogoClick={() => navigate('/#home')}
                    onUsClick={() => navigate('/#us')}
                    onMapClick={() => navigate('/#map')}
                    onSuggestionsClick={() => navigate('/#suggestions')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>

            <ProvinceVideoJSX provinceData={bocasDelToro} fixedBackground />

            <Activities provinceData={bocasDelToro} />

            <Sitios provinceData={bocasDelToro} />

            <OtherProvinces provincias={provincias} />

            <div className="mt-40">
                <BottomBanner onLogoClick={() => navigate('/#home')} />
            </div>
        </div>
    );
}
export default BocasDelToro;
