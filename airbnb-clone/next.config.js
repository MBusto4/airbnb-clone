module.exports = {



    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://127.0.0.1:3000',
                    },
                ],
            },



            {
                source: '/:search*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Request-Method',
                        value: 'GET',
                    },
                    {
                        key: 'mode',
                        value: 'no-cors',
                    },
                ],
            },




            {
                source: '/api/search',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Request-Method',
                        value: 'GET',
                    },
                    {
                        key: 'mode',
                        value: 'no-cors',
                    },
                ],
            },
        ]
    },

    images: {
        domains: [
            'links.papareact.com',
            'a0.muscache.com',
            'p.kindpng.com'

        ]
    }

}