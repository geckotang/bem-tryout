({
    block: 'page',
    title: '俺が考えた最強のタイトル',
    favicon: 'favicon.ico',
    head: [
        { elem: 'css', url: 'index/_index.css', ie: false },
        { elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
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
                        content: 'left here'
                    },
                    {
                        elem: 'right',
                        content: 'right here'
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
        { elem: 'js', url: 'index/_index.js' }
    ]
})
