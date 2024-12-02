import { Config } from 'tailwindcss';

export const discoverTailwindTheme = {
    height: {
        /** 56px + 72px = 128px */
        headerDesktop: '8rem',
        /** 72px */
        headerFixedMainDesktop: '4.5rem',
        /** 56px */
        headerFixedNavDesktop: '3.5rem',
        /** 64px + 56px = 120px */
        headerTablet: '7.5rem',
        /** 64px */
        headerFixedTablet: '4rem',
        /** 56px */
        headerScrollableTablet: '3.5rem',
        /** 168px */
        headerMobile: '10.5rem',
        /** 48px */
        headerFixedMobile: '3rem',
        /** 48px */
        searchBar: '3rem',
        /** 16px */
        sephoraLogoSmall: '1rem',
        /** 32px */
        countrySwitcherFlag: '2rem',
        /** 56px */
        countrySelectorItem: '3.5rem',
        /** 12px */
        hoverBannerArrow: '0.75rem',
        /** 40px */
        appDownloadIcon: '2.5rem',
        /** 1px */
        divider: '0.06rem',
        /** 8px */
        progressBar: '0.5rem',
        /** 112px */
        brandoramaImg: '7rem',
        /** 67px */
        homeBannerLabel: '4.1875rem',
        /** 24px */
        carouselSlider: '1.5rem',
        /** 4px */
        carouselSliderBar: '0.25rem',
        /** 8px */
        carouselSliderDraggableBar: '0.5rem',
        /** 152px */
        productTileImgMobile: '9.5rem',
        /** 208px */
        productTileImg: '13rem',
        /** 48px */
        backToTop: '3rem',
        /** 208px */
        underBannerTablet: '13rem',
        /** 210px */
        heightBrandoramaCard: '13.125rem',
        /** 112px */
        serviceTileImg: '7rem',
        /** 40px */
        productTileDetails: '2.5rem',
        /** 495px */
        beautyTipsMainImgMaxWidth: '30.9375rem',
        /** 80px */
        basketProductImg: '5rem',
        /** 80px */
        newsletterIcon: '5rem',
        /** 8px */
        iconChipSmall: '0.5rem',
        /** 12px */
        iconChipMedium: '0.75rem',
        /** 16px */
        iconChipWithDigit: '1rem',
        /** 8px */
        iconChip: '0.5rem',
    },
    maxHeight: {
        /** 48px */
        3: '3rem',
        /** 680px */
        headerPanel: '42.5rem',
        /** 48px */
        underBannerContent: '3rem',
    },
    minHeight: {
        /** 208px */
        newsletter: '13rem',
        /** 380px */
        newsletterMobile: '23.75rem',
    },
    width: {
        /** 375px */
        sideMenuMobile: '23.4375rem',
        /** 472px */
        sideMenuTablet: '29.5rem',
        /** 472px + 15px (scrollbar) = 487px */
        sideMenuWithScrollbarTablet: '30.4375rem',
        /** 1440px */
        maxWidth: '90rem',
        /** 960px */
        storesBanner: '60rem',
        /** 448px **/
        basketBanner: '28rem',
        /** 32px */
        countrySwitcherFlag: '2rem',
        connectionBannerInfo: '28.125rem',
        /** 360px */
        buttonLarge: '22.5rem',
        /** 240px */
        hoverBannerArrow: '0.75rem',
        /** 343px */
        redirectionModalMobile: '21.438rem',
        /** 480px */
        redirectionModalTablet: '30rem',
        /** 1px */
        divider: '0.06rem',
        /** 318px */
        reinsurance: '19.875rem',
        /** 119px */
        sephoraLogoSmall: '7.4375rem',
        /** 178px */
        sephoraLogo: '11.125rem',
        /** 246px */
        menuAccordionItemContainer: '15.375rem',
        /** 260px */
        brandoramaCard: '16.25rem',
        /** 213px */
        brandoramaTitle: '13.313rem',
        /** 384px */
        mainBannerCard: '24rem',
        /** 485px */
        mainBannerCardDesktop: '30.3125rem',
        /** 83px */
        homeBannerLabel: '5.1875rem',
        /** 127px */
        openHoursDayLabel: '7.9375rem',
        /** 204px */
        productTileMobile: '12.75rem',
        /** 188px */
        productTileMobileWithoutPadding: '11.75rem',
        /** 240px */
        productTile: '15rem',
        /** 208px */
        productTileWithoutPadding: '13rem',
        /** 152px */
        productTileImgMobile: '9.5rem',
        /** 208px */
        productTileImg: '13rem',
        /** 150px */
        carouselSliderDraggableBar: '9.375rem',
        /** 48px */
        backToTop: '3rem',
        /** 80px */
        fastAccess: '5rem',
        /** 318px */
        reinsuranceListItem: '19.875rem',
        /** 342px */
        serviceTile: '21.375rem',
        /** 331px */
        underBannerImg: '20.6875rem',
        /** 260px */
        sitePreviewButton: '16.25rem',
        /** 343px */
        wishlistModalMobile: '21.4375rem',
        /** 480px */
        wishlistModal: '30rem',
        /** 80px */
        basketProductImg: '5rem',
        /** 112px */
        serviceTileImg: '7rem',
        /** 343px */
        newsletterModalMobile: '21.4375rem',
        /** 480px */
        newsletterModalDesktopS: '30rem',
        /** 80px */
        newsletterIcon: '5rem',
        /** 146px */
        storesAndServicesSkeleton: '9.125rem',
        /** 96px */
        accountSkeleton: '6rem',
        /** 8px */
        iconChipSmall: '0.5rem',
        /** 12px */
        iconChipMedium: '0.75rem',
        /** 16px */
        iconChipWithDigit: '1rem',
        /** 8px */
        iconChip: '0.5rem',
        /** 32px */
        animatedIconDotPdp: '2rem',
        /** 720px */
        productVisualCarouselTablet: '45rem',
        /** 343px */
        productVisualCarousel: '21.438rem',
        /** 640px */
        productVisualTablet: '40rem',
        /** 128px */
        productVisual: '16rem',
    },
    maxWidth: {
        /** 1440px */
        largestDesktop: '90rem',
        /** 343px */
        mainBannerFastAccessLinksTablet: '21.4375rem',
        /** 100% + 2rem (padding) */
        mainBannerFastAccessLinks: 'calc(100% + 2rem)',
        /** 212px */
        brandoramaBrandName: '13.25rem',
        /** 384px */
        beautyTipsCarouselDesktop: '24rem',
        /** 626 + 24 (padding) = 650px */
        beautyTipsCarouselMaxWidth: '40.625rem',
        /** 1156px */
        notFoundPageContent: '72.25rem',
        /** 225px */
        basketProductInformation: '14.063rem',
    },
    minWidth: {
        /** 119px */
        sephoraLogoSmall: '7.4375rem',
        /** 178px */
        sephoraLogo: '11.125rem',
        /** 368 + 16 (padding) = 384px */
        beautyTipsCarouselDesktop: '24rem',
    },
    zIndex: {
        headerScrollable: '3',
        headerScrollableTablet: '2',
        headerFixed: '3',
        openSearchOverlay: '2',
        hoverBannerBackground: '3',
        hoverBanner: '4',
        searchBanner: '4',
        hoverBannerArrow: '5',
        sideMenuBackground: '6',
        sideMenu: '7',
        modalBackground: '8',
        modal: '9',
        iframe: '10',
        mobileSearchBar: '11',
        productTileTag: '1',
        backToTop: '12',
        hoverBeforeBorder: '1',
        sitePreview: '10',
    },
    aspectRatio: {
        mainBanner: '1440/446',
        mainBannerMobile: '375/580',
        mainBannerTablet: '768/320',
    },
    extend: {
        gridTemplateColumns: {
            '1fr_auto': '1fr auto',
        },
        keyframes: {
            lightMove: {
                '0%': {
                    left: '-100%',
                    top: '-100%',
                },
                '100%': {
                    left: '100%',
                    top: '100%',
                },
            },
        },
        animation: {
            lightMove: 'lightMove 2s infinite ease-out',
        },
        backgroundImage: {
            'light-gradient':
                'linear-gradient(90deg, var(--text-text-primary-inverse) 0%, var(--text-text-primary-inverse/80) 50%, var(--text-text-primary-inverse) 100%)',
        },
        transitionProperty: {
            backgroundOutline: 'background-color, outline',
        },
    },
    spacing: {
        /** 28px */
        chipPosition: '1.75rem',
    },
} satisfies Config['theme'];
