import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../../components/province/ProvinceVideo.jsx';
import ProvinceInfo from '../../../components/province/ProvinceInfo.jsx';
import Activities from '../../../components/province/Activities.jsx';
import Suggestions from '../../../components/province/Suggestions.jsx';
import MapSection from '../../../components/province/MapSection.jsx';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import OtherProvinces from '../../../components/province/OtherProvinces.tsx';
import { provincias} from './LosSantosData.js';

function LosSantos() {
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
            <ProvinceVideo provinceData={provinceData} />
            <ProvinceInfo provinceData={provinceData} />
            <Activities provinceData={provinceData} />
            <Suggestions provinceData={provinceData} navigate={navigate} basePath="/provincias/los-santos" />
            <MapSection provinceData={provinceData} />
            <OtherProvinces provincias={provincias} />
            <BottomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    );
}

export default LosSantos;
