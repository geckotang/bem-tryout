({
    block: 'page',
    title: '俺が考えた最強のタイトル',
    favicon: 'favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '俺の考えた最強のBEM' }}
    ],
    content:[
        {
            block: 'header',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: {
                            block: 'b-search',
                            attrs: { action: '/search.xml' },
                            input: {
                                elem: 'input',
                                attrs: { placeholder: 'Find' }
                            },
                            button: {
                                elem: 'button'
                            }
                        }
                    },
                    {
                        elem: 'right',
                        content: {
                            block: 'b-logo',
                            content: {
                                elem: 'link',
                                url: 'http://bem.info',
                                content: [
                                    {
                                        elem: 'icon',
                                        url: 'http://dummyimage.com/300x100/000/fff&text=LOGO'
                                    },
                                    {
                                        elem: 'slogan',
                                        content: 'A new way of thinking'
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        },
	{
	    block: 'heroImage',
	    tag: 'img',
	    attrs: {
	        src: 'http://placehold.jp/960x150.png',
		alt: ' '
	    }
	},
        {
            block: 'tab',
	    tag: 'ul',
            content: [
                {
                    elem: 'item',
		    tag: 'li',
                    content: 'tab1',
	            mods: {is: 'current'}
                },
                {
                    elem: 'item',
		    tag: 'li',
                    content: 'tab2',
                }
            ]
        },
	{
	    block: 'goods',
	    goods: [
                {
                    new: false,
                    title: '猿でもわかるBEM',
                    image: 'http://dummyimage.com/300x200&text=猿でもわかるBEM',
                    price: '1,500',
		    author: '弁梦太郎',
                    url: 'http://example.com/'
                },
                {
                    new: false,
                    title: 'BEMテクニックバイブル -効率的なBEMに役立つ2億の技-',
                    image: 'http://dummyimage.com/300x200&text=BEMテクニックバイブル',
                    price: '2,500',
		    author: 'BEMサポーターズ',
                    url: 'http://example.com/'
                },
                {
                    new: true,
                    title: '独習 BEM',
                    image: 'http://dummyimage.com/300x200&text=独習BEM',
                    price: '3,500',
		    author: '弁梦山二郎',
                    url: 'http://example.com/'
                }
	    ]
	},
        { elem: 'js', url: '_index.js' }
    ]
})
