import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../components/destinations/ProvinceVideo.jsx';
import Activities from '../../components/destinations/Activities.jsx';
import ProvinceZonesOnly from '../../components/destinations/ProvinceZonesOnly.jsx';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import OtherProvinces from '../../components/destinations/OtherProvinces.tsx';
import { chiriquiProvinceData } from './index.js';

function Chiriqui() {
    const navigate = useNavigate();
    const provinceData = chiriquiProvinceData[0];

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
                <div className="relative min-h-screen">
                    <div className="relative z-20">
                        <Activities provinceData={provinceData} />
                        <ProvinceZonesOnly provinceData={provinceData} />
                        <OtherProvinces provincias={chiriquiProvinceData} />
                    </div>
                    <div className="relative z-20 mt-40">
                        <BottomBanner onLogoClick={() => navigate('/#home')} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Chiriqui;
