import React, { FC, ReactElement } from "react";

type PropsType = {
    socialNetwork: string;
    image: string;
};

const SocialButton: FC<PropsType> = ({ socialNetwork, image }): ReactElement => {
    return (
        <a
            className={`btn btn-block social-btn ${socialNetwork}`}
            href={`https://e-com-dev.herokuapp.com//oauth2/authorize/${socialNetwork}`}
        >
            <img src={image} alt={socialNetwork} />
            {`Log in with ${socialNetwork.charAt(0).toUpperCase() + socialNetwork.slice(1)}`}
        </a>
    );
};

export default SocialButton;
