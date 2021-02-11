import React from 'react';
import SimpleDialogDemo from '../Dialog/Dialog';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DescriptionIcon from '@material-ui/icons/Description';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function Footer() {
    const [value, setValue] = React.useState();
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleLinksChange = (item, value) => {
        setValue(value);
        switch (value) {
            case 0:
                setModalOpen(true);
                break;
            case 1:
                window.open("https://in.linkedin.com/in/shushant-arora-7ba6a247", "__blank");
                break;
            case 2:
                window.open("tel:+91-813-011-0350", "__blank");
                break;
            default:
                window.open("https://drive.google.com/file/d/1DhTAglf0qNqbEcCBqsVoSdDqHnZCP84D/view", "__blank");
                break;
        }
    }

    return (
        <div id="contactSection">
            <BottomNavigation
                value={value}
                onChange={handleLinksChange}
                showLabels
                className={`Footer`}
            >
                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                <BottomNavigationAction label="Linked In" icon={<LinkedInIcon />} />
                <BottomNavigationAction label="Mobile" icon={<PhoneIphoneIcon />} />
                <BottomNavigationAction label="C.V." icon={<DescriptionIcon />} />
            </BottomNavigation>
            <SimpleDialogDemo modalOpen={modalOpen} closeModal={() => setModalOpen(false)} />
        </div>
    );
}
