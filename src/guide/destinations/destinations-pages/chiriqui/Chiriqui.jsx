import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../components/destinations/ProvinceVideo.jsx';
import Activities from '../../components/destinations/Activities.jsx';
import SelectedActivitiesBar from '../../components/destinations/SelectedActivitiesBar.jsx';
import ProvinceSitesOnly from '../../components/destinations/ProvinceSitesOnly.jsx';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import OtherProvinces from '../../components/destinations/OtherProvinces.tsx';
import { chiriquiProvinceData } from './index.js';

function Chiriqui() {
    const navigate = useNavigate();
    const location = useLocation();
    const provinceData = chiriquiProvinceData[0];
    const [selectedActivities, setSelectedActivities] = useState([]);

    const toggleSelectedActivity = (activity) => {
        setSelectedActivities((current) => {
            const currentList = Array.isArray(current) ? current : current ? [current] : [];
            const normalizedActivity = activity
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .trim();

            const alreadySelected = currentList.some(
                (item) =>
                    String(item)
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .trim() === normalizedActivity,
            );

            if (alreadySelected) {
                return currentList.filter(
                    (item) =>
                        String(item)
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .trim() !== normalizedActivity,
                );
            }

            return [...currentList, activity];
        });
    };

    const removeSelectedActivity = (activityToRemove) => {
        setSelectedActivities((current) => {
            const currentList = Array.isArray(current) ? current : current ? [current] : [];
            const targetKey = String(activityToRemove)
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .trim();

            return currentList.filter(
                (item) =>
                    String(item)
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .trim() !== targetKey,
            );
        });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
            <ProvinceVideo provinceData={provinceData} fixedBackground />
            <section className="relative z-10 ">
                <Activities
                    provinceData={provinceData}
                    selectedActivities={selectedActivities}
                    onActivitySelect={toggleSelectedActivity}
                />
                <SelectedActivitiesBar
                    selectedActivities={selectedActivities}
                    onRemoveActivity={removeSelectedActivity}
                    onClearAll={() => setSelectedActivities([])}
                />
                <ProvinceSitesOnly provinceData={provinceData} selectedActivities={selectedActivities} />
                <OtherProvinces provincias={chiriquiProvinceData} />
                <div className="mt-40">
                    <BottomBanner onLogoClick={() => navigate('/#home')} />
                </div>
            </section>
        </div>
    );
}

export default Chiriqui;
