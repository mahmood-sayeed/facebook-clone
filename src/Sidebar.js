import "./Sidebar.css";
import { ExpandMoreOutlined } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SidebarRow from './SidebarRow';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />

        <SidebarRow
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
        />

        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
    );
}

export default Sidebar;
