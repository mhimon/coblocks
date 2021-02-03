const coblocksLayoutSelector = {
    postTypeEnabled: '1',
    categories: [
        {
            slug: 'about',
            title: 'About',
        },
        {
            slug: 'contact',
            title: 'Contact',
        },
        {
            slug: 'home',
            title: 'Home',
        },
        {
            slug: 'gallery',
            title: 'Gallery',
        },
    ],
    layouts: [
        {
            category: 'about',
            label: 'About Test',
            blocks: [
                [
                    "core/paragraph",
                    {
                        align: "center",
                        content: "Test About Layout.",
                        dropCap: false
                    },
                    []
                ],
                [
                    'core/image',
                    {
                        url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                        alt: 'Image description',
                        caption: '',
                        linkDestination: 'none',
                        className: 'alignfull size-full is-style-default',
                        align: 'full',
                    },
                    [],
                ]
            ],
        },
        {
            category: 'contact',
            label: 'Contact Test',
            blocks:  [
                [
                    "core/paragraph",
                    {
                        align: "center",
                        content: "Test Contact Layout.",
                        dropCap: false
                    },
                    []
                ],
                [
                    'core/image',
                    {
                        url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                        alt: 'Image description',
                        caption: '',
                        linkDestination: 'none',
                        className: 'alignfull size-full is-style-default',
                        align: 'full',
                    },
                    [],
                ]
            ],
        },
        {
            category: 'home',
            label: 'Homepage Test',
            blocks:  [
                [
                    "core/paragraph",
                    {
                        align: "center",
                        content: "Test Home Layout.",
                        dropCap: false
                    },
                    []
                ],
                [
                    'core/image',
                    {
                        url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                        alt: 'Image description',
                        caption: '',
                        linkDestination: 'none',
                        className: 'alignfull size-full is-style-default',
                        align: 'full',
                    },
                    [],
                ]

            ],
        },
        {
            category: 'gallery',
            label: 'Gallery Test',
            blocks: [
                [
                    "core/paragraph",
                    {
                        align: "center",
                        content: "Test Gallery Layout.",
                        dropCap: false
                    },
                    []
                ],
                [
                    'core/image',
                    {
                        url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                        alt: 'Image description',
                        caption: '',
                        linkDestination: 'none',
                        className: 'alignfull size-full is-style-default',
                        align: 'full',
                    },
                    [],
                ],
                [
                    'core/gallery',
                    {
                        images: [
                            {
                                url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                                alt: 'Image description',
                            },
                            {
                                url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                                alt: 'Image description',
                            },
                        ],
                        align: 'full',
                    },
                    [],
                ],
                [
                    'core/cover',
                    {
                        url: 'https://img1.wsimg.com/wpnux/v2/starter-content/templates/keynote/attachments/home-image-1.jpg',
                        alt: 'Image description',
                        caption: '',
                        linkDestination: 'none',
                        className: 'alignfull size-full is-style-default',
                        align: 'full',
                    },
                    [],
                ]
            ],
        }
    ]
};

export default coblocksLayoutSelector;
