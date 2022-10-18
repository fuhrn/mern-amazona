import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Nestor",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      // 1
      name: "Casio F91W-1 Classic Resin Strap Digital Sport Watch",
      slug: "casio-f91w-1-classic-resin-strap-digital-sport-watch",
      category: "Watches",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/lbs5qiqaqba8k3diwxrf.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024452/qgpw0yxc5hxylgkxbz6a.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024459/g2zjyemq6iiu5kbbk1gj.jpg",
      ], // 679px × 829px
      price: 17.4,
      countInStock: 34,
      brand: "Casio",
      rating: 0,
      numReviews: 0,
      description:
        "LED light, Stopwatch, Daily Alarm, Auto-calendar, 12/24 Hour Format, Approx. battery life: 7 years on CR2016, Water Resistant - Do not submerge in water, item is not waterproof, not meant for showering/bathing or swimming",
    },
    {
      // 2
      name: "Amazfit Bip 3 Pro Smart Watch for Android iPhone",
      slug: "amazfit-bip-3-pro-smart-watch-for-android-iphone",
      category: "Watches",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Amazfit_pro_1_yglk08.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Amazfit_pro_2_dnxvdx.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Amazfit_pro_3_zcahge.jpg",
      ],
      price: 54.99,
      countInStock: 12,
      brand: "Amazfit",
      rating: 0,
      numReviews: 0,
      description:
        'Immerse yourself in the 1.69" super-large and colorful HD display, and see all your incoming text and calls in awesome, expansive quality. Express more of yourself with 50 plus watch faces and editable watch faces & widgets - or customize with your own photos..Water resistance depth:50 meters',
    },
    {
      // 3
      name: "Timex Unisex Weekender 38mm Watch",
      slug: "timex-unisex-weekender-38mm-watch",
      category: "Watches",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Timex_unisex_1_gd3lln.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Timex_unisex_2_ne5wud.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Timex_unisex_3_tjnjjj.jpg",
      ],
      price: 34.3,
      countInStock: 24,
      brand: "Timex",
      rating: 0,
      numReviews: 0,
      description:
        "Adjustable olive green 20 millimeter nylon slip-thru strap fits up to 8-inch wrist circumference. The case finish is polished. Silver-tone 38 millimeter brass case with mineral glass crystal. Indiglo light-up watch dial. Water resistant to 30 meters (100 feet): In general, withstands splashes or brief immersion in water, but not suitable for swimming or bathing",
    },
    {
      // 4
      name: "Fossil Men's Minimalist Stainless Steel Slim Casual Watch",
      slug: "fossil-mens-minimalist-stainless-steel-slim-casual-watch",
      category: "Watches",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Fossil_1_v9lox5.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Fossil_2_xnamcg.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Fossil_3_gruz5d.jpg",
      ],
      price: 38.4,
      countInStock: 15,
      brand: "Fossil",
      rating: 0,
      numReviews: 0,
      description:
        "Case size: 44mm; Band size: 22mm; quartz movement with three-hand analog display; hardened mineral crystal lens resists scratches; imported. Black stainless steel case with black dial; genuine black leather band with adjustable buckle closure; interchangeable with all 22mm Fossil watch straps. Water resistant to 30m (100ft): withstands splashes or brief immersion in water, but not suitable for swimming or showering; 3 ATM",
    },
    {
      // 5
      name: "Philips H4205 On-Ear Wireless Headphones",
      slug: "philips-h4205-on-ear-wireless-headphones",
      category: "Headphones",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/headphone_phillips_1_pw6par.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/headphone_phillips_2_baxgqu.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/headphone_phillips_3_hjhvgs.jpg",
      ],
      price: 34.99,
      countInStock: 9,
      brand: "Phillips",
      rating: 0,
      numReviews: 0,
      description:
        "HERE COMES THE BASS: Pronounced beats. Stronger vibes. These wireless on-ear headphones boast a BASS boost button for deeper bass at a touch. Powerful 32mm drivers bring the best out of your favorite soundtracks.",
    },
    {
      // 6
      name: "Bang & Olufsen Beoplay H95 Premium Comfortable Wireless",
      slug: "bang-olufsen-beoplay-h95-premium-comfortable-wireless",
      category: "Headphones",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Bang_1_ojn2ha.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Bang_2_viygf0.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Bang_3_moqguy.jpg",
      ],
      price: 899,
      countInStock: 16,
      brand: "Bang & Olufsen",
      rating: 0,
      numReviews: 0,
      description:
        "LONG-LASTING BATTERY. With up to 38 hours of playtime on a single charge with ANC, Beoplay H95 push the boundaries to give you more time to enjoy your music. NOISE CANCELLED. Beoplay H95 offer exceptional sound quality through customised titanium drivers and our most advanced Adaptive Active Noise Cancellation yet. POWERFUL SOUND. Two 40mm titanium drivers with neodymium magnets have been carefully selected and customised for Beoplay H95 to improve sound precision and increase the low frequency response.",
    },
    {
      // 7
      name: "JBL Tune 125TWS True Wireless In-Ear Headphones",
      slug: "jbl-tune-125tws-true-wireless-in-ear-headphones",
      category: "Headphones",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jbl_headphone_1_ssuaxt.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jbl_headphone_2_gwa5ha.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jbl_headphone_3_ilyub7.jpg",
      ],
      price: 99.95,
      countInStock: 0,
      brand: "JBL",
      rating: 0,
      numReviews: 0,
      description:
        "JBL PURE BASS SOUND: JBL has powered festivals and concerts around the world for decades. Now let JBL bring your own world to life with incredible Pure Bass sound in these wireless earphones..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears",
    },
    {
      // 8
      name: "Jabra Elite 3 in Ear Wireless Bluetooth Earbuds – Noise Isolating",
      slug: "jabra-elite-3-in-ear-wireless-bluetooth-earbuds-noise-isolating",
      category: "Headphones",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jabra_headpone_1_rn0lxc.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jabra_headpone_2_kgfvsx.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/jabra_headpone_3_jphiub.jpg",
      ],
      price: 47.99,
      countInStock: 13,
      brand: "Jabra",
      rating: 0,
      numReviews: 0,
      description:
        "FREE THE BASS – You deserve music your way, every day; With 6mm speakers and class-leading customization options, the Jabra Elite 3 compact buds deliver rich, clear sound and punchy bass that’s not only just powerful, but also unique to you.",
    },
    {
      // 9
      name: "HOTWEEMS Wireless Mouse, D-09 Computer Mouse USB Cordless Mice for Laptop",
      slug: "hotweems-wireless-mouse-d-09-computer-mouse-usb-cordless-mice-for-laptop",
      category: "Mouses",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/hotweems_mouse_1_e3hl2k.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/hotweems_mouse_2_cbvrmm.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/hotweems_mouse_3_duiglg.jpg",
      ],
      price: 9.99,
      countInStock: 24,
      brand: "Hotweems",
      rating: 0,
      numReviews: 0,
      description:
        "Advanced ergonomic computer mouse provides total comfort with 30° ergonomic handshake angel, contoured grips and premium matte finish🛎️TWO VERSION SHIPPED RANDOMLY ,only difference is with logo or not",
    },
    {
      // 10
      name: "Amazon Basics 3-Button Wired USB",
      slug: "amazon-basics-3-button-wired-usb",
      category: "Mouses",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/amazon_mouse_1_cyoe1u.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/amazon_mouse_2_mrsabh.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/amazon_mouse_3_ytvxfu.jpg",
      ],
      price: 6.99,
      countInStock: 32,
      brand: "amazon",
      rating: 0,
      numReviews: 0,
      description:
        "Computer mouse for easily navigating a computer interface; click, scroll, and more. Includes a USB-connected wired black mouse with 3 buttons for effortless fingertip control. High-definition (1000 dpi) optical tracking ensures responsive cursor control for precise tracking and easy text selection. Plug-and-go ready for instant use",
    },
    {
      // 11
      name: "Verbatim USB Corded Mini Travel Optical Wired Mouse for Mac and PC",
      slug: "verbatim-usb-corded-mini-travel-optical-wired-mouse-for-mac-and-pc",
      category: "Mouses",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/verbatim_mouse_1_ivgbbr.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/verbatim_mouse_2_q70ncb.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/verbatim_mouse_3_qnasbp.jpg",
      ],
      price: 4.99,
      countInStock: 21,
      brand: "Verbatim",
      rating: 0,
      numReviews: 0,
      description:
        "Simple, plug-and-play USB corded connection; PC and Mac compatible. Ultra-compact design; mouse measures L x D x H (in): 1.7 x 3.0 x 1.1 with 27-inch retractable cable; no need to wrap the cord around the mouse or deal with tangles. High-resolution optical technology for smooth and precise tracking.",
    },
    {
      // 12
      name: "Logitech G203 Wired Gaming Mouse, 8,000 DPI, Rainbow Optical Effect",
      slug: "logitech-g203-wired-gaming-mouse-8000-dpi-rainbow-optical-effect",
      category: "Mouses",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Logitec_mouse_1_ocvjjq.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Logitec_mouse_2_xjyls6.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/Logitec_mouse_3_p9nosn",
      ],
      price: 8.5,
      countInStock: 17,
      brand: "Logitech",
      rating: 0,
      numReviews: 0,
      description:
        "Selling Gaming Gear Brand - Based on independent aggregated sales data (FEB 19 - FEB 20) of Gaming Keyboard, Mice, and PC Headset in units from: US, CA, CN, JP, KR, TW, TH, ID, DE, FR, RU, UK, SE, TR. 8,000 DPI gaming-grade sensor responds precisely to movements. Customize your sensitivity settings to suit the sensitivity you like with Logitech G HUB gaming software and cycle easily through up to 5 DPI settings.",
    },
    {
      // 13
      name: "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS",
      slug: "acer-sb220q-bi-215-inches-full-hd-1920-x-1080-ips",
      category: "Monitors",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/acer_monitor_1_goy93i.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/acer_monitor_2_qhpvrs.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/acer_monitor_3_wh8ub3.jpg",
      ],
      price: 99,
      countInStock: 32,
      brand: "Acer",
      rating: 0,
      numReviews: 0,
      description:
        "21.5 inches Full HD (1920 x 1080) widescreen IPS display. And Radeon free sync technology. No compatibility for VESA Mount. Refresh rate: 75 hertz - Using HDMI port. Zero-frame design; Ultra-thin; 4ms response time; IPS panel",
    },
    {
      // 14
      name: "ASUS VY279HE 27” Eye Care Monitor, 1080P Full HD, 75Hz, IPS",
      slug: "asus-vy279he-27-eye-care-monitor-1080p-full-hd-75hz-ips",
      category: "Monitors",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/asus_monitor_1_uw83ed.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/asus_monitor_2_gdh9ku.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/asus_monitor_3_h7h3cg.jpg",
      ],
      price: 154,
      countInStock: 15,
      brand: "Asus",
      rating: 0,
      numReviews: 0,
      description:
        "27-inch Full HD (1920 x 1080) LED backlight display with IPS 178° wide viewing angle panel. Up to 75Hz refresh rate with AMD Sync technology to eliminate tracing and ensure crisp and clear video playback. Color Augmentation mode allow users with color vision deficiency to better distinguish between different colors",
    },
    {
      // 15
      name: "LG 34WP60C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440)",
      slug: "lg-34wp60c-b-34-inch-219-curved-ultraWide-qhd-3440x1440",
      category: "Monitors",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/LG_monitor_1_ilbo0r.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/LG_monitor_2_alzwfa.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/LG_monitor_3_ax9y0q.jpg",
      ],
      price: 299,
      countInStock: 5,
      brand: "LG",
      rating: 0,
      numReviews: 0,
      description:
        "Computer monitor with QHD Display features a wide 21:9 aspect ratio to view multiple documents at once, as well as immerse you in your favorite movies and games. High-quality image production, color, and brightness with HDR10 and sRGB 99% color gamut. High 160-Hertz refresh rate with 1-millisecond Motion Blur Reduction (MBR) is ideal for fast-paced games",
    },
    {
      // 16
      name: "ViewSonic VA2447-MHU 24 Inch Full HD 1080p USB C Monitor with Ultra-Thin Bezel",
      slug: "viewsonic-va2447-mhu-24-inch-full-hd-1080p-usb-c-monitor-with-ultra-thin-bezel",
      category: "Monitors",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/viewSonic_1_ox6jf3.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/viewSonic_2_arpbzk.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/viewSonic_3_fmgmnv.jpg",
      ],
      price: 119,
      countInStock: 13,
      brand: "ViewSonic",
      rating: 0,
      numReviews: 0,
      description:
        "GREAT FOR HOME AND OFFICE: An ideal all-around 24 inch display for offices or remote work. SEE THE DIFFERENCE: Razor-sharp clarity and detail with Full HD (1920x1080p) resolution. LESS CABLE CLUTTER: In addition to fast data, audio and video transfer, USB Type-C also provides 15W charging over a single cable.",
    },
    {
      // 17
      name: "Paper Mate Gel Pens | InkJoy Pens, Medium Point, Assorted, 14 Count",
      slug: "paper-mate-gel-pens-inkjoy-pens-medium-point-assorted-14-count",
      category: "Pens",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/papermate_pens_1_xkklcy.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/papermate_pens_2_nxdo1b.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/papermate_pens_3_bermsv.jpg",
      ],
      price: 12.99,
      countInStock: 51,
      brand: "Paper Mate",
      rating: 0,
      numReviews: 0,
      description:
        "Dries 3X faster for reduced smearing. Smooth, colorful ink keeps the ideas flowing across the page and brightens your writing. Ergonomic comfort grip wraps the entire gel pen 0.7 millimeter medium point spreads ink beautifully.",
    },
    {
      // 18
      name: "Pentel WOW! Colors Retractable Ballpoint Pens, Medium Line, Assorted Ink Colors, 8 Pack (BK440BP8M)",
      slug: "pentel-wow-colors-retractable-ballpoint-pens-medium-line-assorted-ink-colors-8-pack-bk440BP8M",
      category: "Pens",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/pentel_pens_1_ebvwsm.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/pentel_pens_2_kcbjii.jpg",
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/pentel_pens_3_wfzolg.jpg",
      ],
      price: 7.99,
      countInStock: 39,
      brand: "Pentel",
      rating: 0,
      numReviews: 0,
      description:
        "One 3-count pack of Pentel 4-Color Ballpoint Pens. Enhance your note and data organization skills with one versatile 4 color ballpoint pen. Cost-effective and long-lasting refillable pens. Multicolor pens with a comfortable wide barrel design",
    },
    {
      // 19
      name: "BIC Round Stic Grip Xtra Comfort Ballpoint Pen, Medium Point (1.2mm)",
      slug: "bic-round-stic-grip-xtra-comfort-ballpoint-pen-medium-point-12mm",
      category: "Pens",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/bic_pen_1_eyvako.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/bic_pen_2_ss8qiu.jpg",
      ],
      price: 7.99,
      countInStock: 133,
      brand: "BIC",
      rating: 0,
      numReviews: 0,
      description:
        "Stick pens with soft grip for comfortable writing. Our Quality Comes in Writing. Available in fine point in black, blue and red ink pens and medium point in black, blue, green, red, pink, purple, lime green and turquoise ink. Medium point ink pens features ink technology.",
    },
    {
      // 20
      name: "uni-ball Roller Grip Rollerball Pens Fine Point, 0.7mm, Black, 12 Pack",
      slug: "uni-ball-roller-grip-rollerball-pens-fine-point-07mm-black-12-pack",
      category: "Pens",
      image:
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/uniball_pen_1_pccmq5.jpg",
      images: [
        "https://res.cloudinary.com/ddt3wrica/image/upload/v1666024442/uniball_pen_3_imxegi.jpg",
      ],
      price: 17.69,
      countInStock: 82,
      brand: "Uniball",
      rating: 0,
      numReviews: 0,
      description:
        "Rollerball Pen: Create in comfort with our roller ball pens; Our fine-point pens offer a smooth writing experience and rich color payoff, while a durable tip allows for unparalleled precision. Superior Everyday Performance: Our fine-point pen delivers vibrant lines with a rich hue, giving your documents more clarity and excellent readability. Uni Super Ink: Water- and fade-resistant ink helps you compose long-lasting, high-quality documents you can archive; Our ink pens offer protection against water, fading, and fraud",
    },
  ],
};
export default data;
