import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../components/destinations/ProvinceVideo.jsx';
import Activities from '../../components/destinations/Activities.jsx';
import ProvinceZonesAndSites from '../../components/destinations/ProvinceZonesAndSites.jsx';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import OtherProvinces from '../../components/destinations/OtherProvinces.tsx';
import { provincias } from './CocleData.js';

function Cocle() {
    const navigate = useNavigate();
    const provinceData = provincias[0];

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#video') {
            const videoElement = document.querySelector('video');
            if (videoElement) {
                videoElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

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
            <ProvinceVideo provinceData={provinceData} fixedBackground />
            <section className="relative z-10 ">
                <Activities provinceData={provinceData} />
                <ProvinceZonesAndSites provinceData={provinceData} />
                <OtherProvinces provincias={provincias} />
                <div className="mt-40">
                    <BottomBanner onLogoClick={() => navigate('/#home')} />
                </div>
            </section>
        </div>
    );
}
export default Cocle;
