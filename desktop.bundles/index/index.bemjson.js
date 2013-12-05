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
        { elem: 'js', url: '_index.js' }
    ]
})
