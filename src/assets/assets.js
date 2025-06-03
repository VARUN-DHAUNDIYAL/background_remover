import logo from './logo.png';
import video_banner from './home-page-banner.mp4';
import people from './people.png'
import people_org from './people-org.png';
import credits from './dollar.png';
export const assets = {
    logo,
    video_banner,
    people,
    people_org,
    credits
};

export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description:
            'First, choose the image you want to remove the background from by clicking on "Start from a photo". Your image format can be PNG or JPG. We support all image dimensions.',
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description:
            "Our tool automatically removes the background from your image. Next, you can choose a background color. Our most popular options are white and transparent backgrounds, but you can pick any color you like.",
    },
    {
        step: "Step 3",
        title: "Download your image",
        description:
            "After selecting a new background color, download your photo and you're done! You can also save your picture in the Photoroom App by creating an account.",
    },
];

export const categories = ["People","Products","Animals","Cars","Graphics"];

export const plans = [
    {
        name: 'Brokies Package',
        price: '99',
        credits: '50 credits',
        description: 'Best for personal use',
        popular: false,
    },
    {
        name: 'Normal Package',
        price: '149',
        credits: '100 credits',
        description: 'Best for new-business use',
        popular: true,
    },
    {
        name: 'Real Deal Package',
        price: '199',
        credits: '200 credits',
        description: 'Best for high scale enterprise use',
        popular: false,
    },
];

export const testimonials = [
    {
        id: 1,
        quote: "Works best for Mr Hisenberg.",
        author: "Jessy Blueman",
        handle: "@tightight"
    },
    {
        id: 2,
        quote: "remove.bg is leaps and bounds ahead of the competition. A thousand times better than the lazer I chase.",
        author: "Hysenberg's cat",
        handle: "@meow"
    },
    {
        id: 3,
        quote: "We were impressed by its ability to account for pesky, feathery hair without making an image look jagged and amateurish.Was used by Newton himself.",
        author: "Newton's Apple",
        handle: "@coding_gravity"
    }
];
export const FOOTER_CONSTANTS = [
    {
        url: "https://facebook.com",
        logo: "https://img.icons8.com/fluent/30/000000/facebook-new.png"
    },
    {
        url: "https://linkedin.com",
        logo: "https://img.icons8.com/fluent/30/000000/linkedin-2.png"
    },
    {
        url: "https://instagram.com",
        logo: "https://img.icons8.com/fluent/30/000000/instagram-new.png"
    },
    {
        url: "https://twitter.com",
        logo: "https://img.icons8.com/fluent/30/000000/twitter.png"
    }
];
