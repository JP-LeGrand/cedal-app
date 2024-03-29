import himg1 from '/public/images/service-single/1.jpg'
import himg2 from '/public/images/service-single/2.jpg'
import himg3 from '/public/images/service-single/3.jpg'
import cimg from '/public/images/service-single/4.jpg'
import mimg from '/public/images/service-single/5.jpg'
import eimg from '/public/images/service-single/6.jpg'
import seimg from '/public/images/service-single/7.jpg'
import ptimg from '/public/images/service-single/8.jpg'
import rhimg from '/public/images/service-single/9.jpg'

import wimg1 from '/public/images/service-single/w1.jpg'
import wimg2 from '/public/images/service-single/w2.jpg'


import ocimg from '/public/images/service-single/10.jpg'
import ocimg2 from '/public/images/service-single/11.jpg'
import ocimg3 from '/public/images/service-single/12.jpg'
import ocimg4 from '/public/images/service-single/13.jpg'
import ocimg5 from '/public/images/service-single/14.jpg'

import wpimg1 from '/public/images/service-single/15.jpg'
import wpimg2 from '/public/images/service-single/16.jpg'
import wpimg3 from '/public/images/service-single/17.jpg'

import wpimg4 from '/public/images/service-single/wp1.jpg'
import wpimg5 from '/public/images/service-single/wp2.jpg'

import ntimg1 from '/public/images/service-single/18.jpg'
import ntimg2 from '/public/images/service-single/20.jpg'
import ntimg3 from '/public/images/service-single/19.jpg'

import ntimg4 from '/public/images/service-single/nt1.jpg'
import ntimg5 from '/public/images/service-single/nt2.jpg'


import picon1 from '/public/images/icon/1.png'
import picon2 from '/public/images/icon/2.png'
import picon3 from '/public/images/icon/3.png'



const Services = [
    {
        id: '1',
        fIcon1:'flaticon-graduation-cap',
        title:'Academic Support',
        slug:'Academic-Support',
        description:'We provide volunteer tutors with the skills and qualifications to give private lessons to children living in the care setting. The tutoring covers high school subjects where learners are struggling, and it takes place after school hours twice a week.',
        simg1:himg1,
        simg2:himg2,
        simg3:himg3,
    },
    {
        id: '2',
        fIcon1:'flaticon-ecology',
        title:'Training in good people skills',
        slug:'Training-in-good-people-skills',
        description:'In addition to content knowledge-based skills, we prepare young people to aster interpersonal skills that enable them to relate to others on a personal or professional level. We encourage young people to participate in our workshops and youth discussion groups aimed to affect positive change in their environments.',
        simg1:cimg,
        simg2:himg2,
        simg3:himg3,
    },
    // {
    //     id: '3',
    //     fIcon1:'flaticon-medicine',
    //     title:'Medical Care',
    //     slug:'Medical-Care',
    //     description:'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    //     simg1:mimg,
    //     simg2:himg2,
    //     simg3:himg3,
    // },
    {
        id: '4',
        fIcon1:'flaticon-medicine',
        title:'Adolescent health awareness',
        slug:'Adolescent-health-awareness',
        description:'The idea is to promote adolescent health literacy that helps to improve their health and reshape their habits to avoid unhealthy lifestyle choices.',
        simg1:eimg,
        simg2:himg2,
        simg3:himg3,
    },
    {
        id: '5',
        fIcon1:'flaticon-eco-light',
        title:'Gender equality and women empowerment',
        slug:'Women-Equality',
        description:'CEDAL creates opportunities for them to have access to training and as a result, make autonomous work choices outside the household.',
        simg1:seimg,
        simg2:wimg1,
        simg3:wimg2,
    },
    // {
    //     id: '6',
    //     fIcon1:'flaticon-tiger',
    //     title:'Protecting Tigers',
    //     slug:'Protecting-Tigers',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ptimg,
    //     simg2:wimg1,
    //     simg3:wimg2,
    // },
    // {
    //     id: '7',
    //     fIcon1:'flaticon-target',
    //     title:'Reducing Hunting',
    //     slug:'Reducing-Hunting',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:rhimg,
    //     simg2:wimg1,
    //     simg3:wimg2,
    // },
    // {
    //     id: '8',
    //     fIcon1:'flaticon-dolphin',
    //     title:'Ocean Protection',
    //     slug:'Ocean-Protection',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ocimg,
    //     simg2:ocimg4,
    //     simg3:ocimg5,
    // },
    // {
    //     id: '9',
    //     fIcon1:'flaticon-whale',
    //     title:'Saving Whale',
    //     slug:'Saving-Whale',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ocimg2,
    //     simg2:ocimg4,
    //     simg3:ocimg5,
    // },
    // {
    //     id: '10',
    //     fIcon1:'flaticon-fish',
    //     title:'Reducing Hunting',
    //     slug:'Reducing-Huntings',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ocimg3,
    //     simg2:ocimg4,
    //     simg3:ocimg5,
    // },
    // {
    //     id: '11',
    //     fIcon1:picon1,
    //     title:'Wash Your Hands',
    //     slug:'Wash-Your-Hands',
    //     description:'Lorem ipsum dolor sit amet econsectetur adipiscin.',
    //     simg1:wpimg1,
    //     simg2:wpimg4,
    //     simg3:wpimg5,
    // },
    // {
    //     id: '12',
    //     fIcon1:picon2,
    //     title:'Wear Musk',
    //     slug:'Wear-Musk',
    //     description:'Lorem ipsum dolor sit amet econsectetur adipiscin.',
    //     simg1:wpimg2,
    //     simg2:wpimg4,
    //     simg3:wpimg5,
    // },
    // {
    //     id: '13',
    //     fIcon1:picon3,
    //     title:'Avoid Shakehand',
    //     slug:'Avoid-Shakehand',
    //     description:'Lorem ipsum dolor sit amet econsectetur adipiscin.',
    //     simg1:wpimg3,
    //     simg2:wpimg4,
    //     simg3:wpimg5,
    // },
    // {
    //     id: '14',
    //     fIcon1:'flaticon-forest',
    //     title:'Save Forest',
    //     slug:'Save-Forest',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ntimg3,
    //     simg2:ntimg4,
    //     simg3:ntimg5,
    // },
    // {
    //     id: '15',
    //     fIcon1:'flaticon-ecology',
    //     title:'Recyling Process',
    //     slug:'Recyling-Process',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ntimg1,
    //     simg2:ntimg4,
    //     simg3:ntimg5,
    // },
    // {
    //     id: '16',
    //     fIcon1:'flaticon-eco-light',
    //     title:'Green Energy',
    //     slug:'Green-Energy',
    //     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    //     simg1:ntimg2,
    //     simg2:ntimg4,
    //     simg3:ntimg5,
    // }
]
export default Services;