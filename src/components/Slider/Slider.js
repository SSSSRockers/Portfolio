import React from "react";
import Carousel from "../Carousel";
import Ecommerce from "../../assets/ecommerce.svg";
import Analytics from "../../assets/analytics.svg";
import Development from "../../assets/development.svg";
import MobileFriendly from "../../assets/mobile-friendly.svg";
import ContentManagement from "../../assets/content-management.svg";
import { Typography, Paper } from "@material-ui/core";

const mockData = [
    {
        name: 'Design + Development',
        imgName: Development,
        description: `Clean, modern designs - optimized for performance, search engines, and converting users to customers.`
    },
    {
        name: 'Analytics',
        imgName: Analytics,
        description: `Get insights into who is browsing your site so that you can make smarter business decisions.`
    },
    {
        name: 'Mobile-friendly',
        imgName: MobileFriendly,
        description: `A responsive design makes your website accessible to all users, regardless of their device.`
    },
    {
        name: 'eCommerce',
        imgName: Ecommerce,
        description: `Integration of eCommerce platforms, payment gateways, custom product templates, and more.`
    },
    {
        name: 'Content Management',
        imgName: ContentManagement,
        description: `Custom WordPress theme and plugin development. Easily update content without knowing how to code.`
    }
];

function Slider() {
    const renderSlides = () => 
        mockData.map((item, index) => (
            <Paper key={`Slide__` + index} className="Slider__paper-box">
                <img src={item.imgName} alt="Analytics" className="Slider__media" />
                <Typography
                    variant="h5"
                    className="h4 color-primary mb-4"
                >
                    {item.name}
                </Typography>
                <Typography variant="subtitle2">
                    {item.description}
                </Typography>
            </Paper>
        ));

    return (
        <div className="Slider Slider-Box" id="aboutSection">
            <Carousel renderSlides={renderSlides()}></Carousel>
        </div>
    );
}

export default Slider;
