import React, { useEffect } from 'react';

const LinkedInBadge = () => {
    useEffect(() => {
        // Carregar o script externo do LinkedIn
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        // Limpar o script ao desmontar o componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="badge-base LI-profile-badge"
            data-locale="pt_BR"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="deivisonfernandes"
            data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/deivisonfernandes?trk=profile-badge">
            </a>
        </div>
    );
};

export default LinkedInBadge;
