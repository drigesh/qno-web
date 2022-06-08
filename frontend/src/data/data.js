export const shops_details = [
    {
        id:1,
        isOpen:true,
        name:'khokha 1',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQK5JTRqUM-VoRE-TaouhSwIkNndnK6UpGw&usqp=CAU',
        add:'khokha 1st shop',
        desc:'Provides all your custom needs',
        location:'khokha',
        last_time: 3000, // in seconds    (add current time in seconds + )
        rating:4.5,
        services:
            {
                hair:{
                    name:'hair cut',
                    time:15,
                    price:70
                },
                beard:{
                    name:'beard style',
                    time:10,
                    price:30
                }
            }
        ,
        reviews:[
            {
                name:'customer 1',
                rating:4.2,
                desc:'This is the best salon.'
            },
            {
                name:'customer 2',
                rating:4.9,
                desc:'This is the best salon with affordable prices.'
            },
            {
                name:'customer 3',
                rating:4.2,
                desc:'I was new here but its very easy to get hair cut here.'
            }
        ],
        
        // [1,3,7]
        // wt = 15+10+25 = 50
    },
    {
        id:2,
        isOpen:true,
        name:'khokha 2',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCM1ZRgV_OCfjcZwgcxw7REdScIzyBGhNbg&usqp=CAU',
        add:'khokha 2nd shop',
        desc:'Our salon is best',
        location:'khokha',
        last_time:4260,
        rating:4.7,
        services:
            {
                hair:{
                    name:'hair cut',
                    time:18,
                    price:60
                },
                beard:{
                    name:'beard style',
                    time:13,
                    price:30
                },
                hair_color:{
                    name:'hair color',
                    time:20,
                    price:80
                }
            }
        ,
        reviews:[
            {
                name:'customer 1',
                rating:4.2,
                desc:'This is the best salon.'
            },
            {
                name:'customer 2',
                rating:4.9,
                desc:'This is the best salon with affordable prices.'
            },
            {
                name:'customer 3',
                rating:4.2,
                desc:'I was new here but its very easy to get hair cut here.'
            }
        ],
        // queue:[2,3,5]
        // wt = 18+13+38 = 61
    },
    {
        id:3,
        isOpen:true,
        name:'khokha 3',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqSGJn2lT6SsW66WUGFhVTMDxqMZ-jK__Aw&usqp=CAU',
        add:'khokha 3rd shop',
        desc:'No one is like us her.',
        location:'market_complex',
        last_time:9000,
        rating:4.7,
        services:
            {
                hair:{
                    name:'hair cut',
                    time:20,
                    price:60
                },
                beard:{
                    name:'beard style',
                    time:10,
                    price:30
                },
                hair_color:{
                    name:'hair color',
                    time:25,
                    price:80
                },
                bleach:{
                    name:'bleach',
                    time:35,
                    price:120
                }
            },
        reviews:[
            {
                name:'customer 1',
                rating:1.2,
                desc:'This is the worst.'
            },
            {
                name:'customer 2',
                rating:4.9,
                desc:'Really good.'
            },
            {
                name:'customer 3',
                rating:4.2,
                desc:'Good enough for bleaching.'
            }
        ],
        // queue:[2,3,4,5]
        // wt = 20+25+30+65  = 140
    }
]


export const users = [
    {
        id:1,
        name:'user1',
        img:'',
        checkedIn:true,
        shop_id:3,
        order_id:2,
        checkedIn_time:600
    },
    {
        id:2,
        name:'user2',
        img:'',
        checkedIn:true,
        shop_id:1,
        order_id:1,
        checkedIn_time:0
    },
    {
        id:3,
        name:'user3',
        img:'',
        checkedIn:true,
        shop_id:2,
        order_id:3,
        checkedIn_time:1200
    },
    {
        id:4,
        name:'user4',
        img:'',
        checkedIn:false,
        shop_id:0,
        order_id:0,
        checkedIn_time:0
    },
    {
        id:5,
        name:'user5',
        img:'',
        checkedIn:true,
        shop_id:1,
        order_id:7,
        checkedIn_time:1500
    },
    {
        id:6,
        name:'user6',
        img:'',
        checkedIn:true,
        shop_id:2,
        order_id:2,
        checkedIn_time:120
    },
    {
        id:7,
        name:'user7',
        img:'',
        checkedIn:true,
        shop_id:1,
        order_id:3,
        checkedIn_time:900
    },
    {
        id:8,
        name:'user8',
        img:'',
        checkedIn:false,
        shop_id:0,
        order_id:0,
        checkedIn_time:0
    },
    {
        id:9,
        name:'user9',
        img:'',
        checkedIn:true,
        shop_id:3,
        order_id:5,
        checkedIn_time:5100
    },
    {
        id:10,
        name:'user10',
        img:'',
        checkedIn:true,
        shop_id:3,
        order_id:4,
        checkedIn_time:3300
    },
    {
        id:11,
        name:'user11',
        img:'',
        checkedIn:true,
        shop_id:2,
        order_id:5,
        checkedIn_time:1980
    },
    {
        id:12,
        name:'user12',
        img:'',
        checkedIn:true,
        shop_id:3,
        order_id:3,
        checkedIn_time:1800
    },
    {
        id:13,
        name:'user13',
        img:'',
        checkedIn:false,
        shop_id:0,
        order_id:0,
        checkedIn_time:0
    }
]



// orders = {
//  shopid:{
//     orders
//  }
//}
//
export const orders = {
    1:[
        {
            id:1,
            uesr_id:2,
            services_taken : ['hair'],
            order_placed_time: 0,
            total_time:15
        },
        {
            id:3,
            uesr_id:7,
            services_taken : ['beard'],
            order_placed_time: 900,
            total_time:10
        },
        {
            id:7,
            uesr_id:5,
            services_taken : ['hair','beard'],
            order_placed_time: 1500,
            total_time:25
        }
    ],
    2:[
        {
            id:2,
            uesr_id:6,
            services_taken : ['hair'],
            order_placed_time: 120,
            total_time:18
        },
        {
            id:3,
            uesr_id:3,
            services_taken : ['beard'],
            order_placed_time: 1200,
            total_time:13
        },
        {
            id:5,
            uesr_id:11,
            services_taken : ['hair','hair_color'],
            order_placed_time: 1980,
            total_time:38
        }
    ],
    3:[
        {
            id:2,
            uesr_id:1,
            services_taken : ['hair'],
            order_placed_time: 600,
            total_time:20
        },
        {
            id:3,
            uesr_id:12,
            services_taken : ['hair_color'],
            order_placed_time: 1800,
            total_time:25
        },
        {
            id:4,
            uesr_id:10,
            services_taken : ['hair','beard'],
            order_placed_time: 3300,
            total_time:30
        },
        {
            id:5,
            uesr_id:9,
            services_taken : ['hair','beard','bleach'],
            order_placed_time: 5100,
            total_time:65
        }
    ]
}

export const current_time = 600 //in seconds.

export const locations = ['khokha','market_complex']

export const services = ['hair', 'beard', 'hair color','bleach']

export const shopNames = ['1','2','3','4','5','6']