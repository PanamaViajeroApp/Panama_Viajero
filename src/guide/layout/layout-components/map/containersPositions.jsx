import LosSantos from '../../prov-pages/LosSantos.jsx'
import ChiriquiSvg from '../../prov-pages/ChiriquiSvg.jsx'
import LineaBocasDelToroSvg from '../../prov-pages/LineaBocasDelToroSvg.jsx'
import LineaChiriquiSvg from '../../prov-pages/LineaChiriquiSvg.jsx'
import BocasDelToroSvg from '../../prov-pages/BocasDelToroSvg.jsx'
import Cocle from '../../prov-pages/CocleSvg.jsx'
import Colon from '../../prov-pages/Colon.jsx'
import GunaYala from '../../prov-pages/GunaYalaSvg.jsx'
import Darien from '../../prov-pages/Darien.jsx'
import Veraguas from '../../prov-pages/VeraguasSvg.jsx'
import Herrera from '../../prov-pages/HerreraSvg.jsx'
import Panama from '../../prov-pages/PanamaSvg.jsx'
import PanamaOeste from '../../prov-pages/PanamaOesteSvg.jsx'
import LineaCocleSvg from '../../prov-pages/LineaCocleSvg.jsx'
import LineaColonSvg from '../../prov-pages/LineaColonSvg.jsx'
import LineaDarienSvg from '../../prov-pages/LineaDarienSvg.jsx'
import LineaGunaYalaSvg from '../../prov-pages/LineaGunaYalaSvg.jsx'
import LineaHerreraSvg from '../../prov-pages/LineaHerreraSvg.jsx'
import LineaLosSantosSvg from '../../prov-pages/LineaLosSantosSvg.jsx'
import LineaPanamaSvg from '../../prov-pages/LineaPanamaSvg.jsx'
import LineaPanamaOesteSvg from '../../prov-pages/LineaPanamaOesteSvg.jsx'
import LineaVeraguasSvg from '../../prov-pages/LineaVeraguasSvg.jsx'

export const provinces = [
  { component: LosSantos, alt: 'Los Santos', hoverKey: 'los-santos', to: '/provincias/los-santos#video', top: '68.87%', left: '39.90%', width: '11.71%', zIndex: 24 },
  { component: ChiriquiSvg, alt: 'Chiriquí', hoverKey: 'chiriqui', to: '/provincias/chiriqui#video', top: '28.5%', left: '-0.20%', width: '25.66%' },
  { component: BocasDelToroSvg, alt: 'Bocas del Toro', hoverKey: 'bocas-del-toro', to: '/provincias/bocas-del-toro#video', top: '-3%', left: '0.50%', width: '32%' },
  { component: Cocle, alt: 'Coclé', hoverKey: 'cocle', to: '/provincias/cocle#video', top: '12%', left: '34.75%', width: '21%' },
  { component: Colon, alt: 'Colón', hoverKey: 'colon', to: '/provincias/colon#video', top: '0%', left: '37.56%', width: '30.05%', zIndex: 31 },
  { component: GunaYala, alt: 'Guna Yala (San Blas)', hoverKey: 'guna-yala', to: '/provincias/comarca-guna-yala#video', top: '7.08%', left: '64.68%', width: '31.22%', zIndex: 23 },
  { component: Darien, alt: 'Darién', hoverKey: 'darien', to: '/provincias/darien#video', top: '18.5%', left: '77.2%', width: '23.5%' },
  { component: Veraguas, alt: 'Veraguas', hoverKey: 'veraguas', to: '/provincias/veraguas#video', top: '26%', left: '20.85%', width: '23.60%', zIndex: 22 },
  { component: Herrera, alt: 'Herrera', hoverKey: 'herrera', to: '/provincias/herrera#video', top: '58.50%', left: '28.85%', width: '20.85%', zIndex: 23 },
  { component: PanamaOeste, alt: 'Panamá Oeste', hoverKey: 'panama-oeste', to: '/provincias/panama-oeste#video', top: '12.2%', left: '46.35%', width: '15.5%', zIndex: 32 },
  { component: Panama, alt: 'Panamá', hoverKey: 'panama', to: '/provincias/panama#video', top: '0%', left: '56.5%', width: '30.80%', zIndex: 29 },
]

export const externalProvinceDecorations = [
  { alt: 'Bocas del Toro', hoverKey: 'bocas-del-toro', to: '/provincias/bocas-del-toro#video', lineComponent: LineaBocasDelToroSvg, lineTop: '13%', lineLeft: '13.8%', lineWidth: '4%', buttonTop: '13%', buttonLeft: '16.5%', color: 'text-brand-charcoal/85' },
  { alt: 'Chiriquí', hoverKey: 'chiriqui', to: '/provincias/chiriqui#video', lineComponent: LineaChiriquiSvg, lineTop: '51.9%', lineLeft: '7.4%', lineWidth: '4%', buttonTop: '62.6%', buttonLeft: '10.2%', color: 'text-brand-charcoal/65' },
  { alt: 'Veraguas', hoverKey: 'veraguas', to: '/provincias/veraguas#video', lineComponent: LineaVeraguasSvg, lineTop: '71.4%', lineLeft: '25.4%', lineWidth: '4%', buttonTop: '86%', buttonLeft: '20.7%', color: 'text-brand-charcoal/65' },
  { alt: 'Los Santos', hoverKey: 'los-santos', to: '/provincias/los-santos#video', lineComponent: LineaLosSantosSvg, lineTop: '85%', lineLeft: '48.4%', lineWidth: '4%', buttonTop: '95%', buttonLeft: '51.2%', color: 'text-brand-charcoal/65' },
  { alt: 'Herrera', hoverKey: 'herrera', to: '/provincias/herrera#video', lineComponent: LineaHerreraSvg, lineTop: '64.7%', lineLeft: '43%', lineWidth: '4%', buttonTop: '64.8%', buttonLeft: '46.8%', color: 'text-brand-charcoal/65' },
  { alt: 'Coclé', hoverKey: 'cocle', to: '/provincias/cocle#video', lineComponent: LineaCocleSvg, lineTop: '43%', lineLeft: '48.5%', lineWidth: '4%', buttonTop: '56.6%', buttonLeft: '51.3%', color: 'text-brand-charcoal/65' },
  { alt: 'Colón', hoverKey: 'colon', to: '/provincias/colon#video', lineComponent: LineaColonSvg, lineTop: '4.5%', lineLeft: '40.7%', lineWidth: '3%', buttonTop: '4.4%', buttonLeft: '43.4%', color: 'text-brand-charcoal/85' },
  { alt: 'Panamá Oeste', hoverKey: 'panama-oeste', to: '/provincias/panama-oeste#video', lineComponent: LineaPanamaOesteSvg, lineTop: '35.5%', lineLeft: '53%', lineWidth: '4%', buttonTop: '49.5%', buttonLeft: '55.9%', color: 'text-brand-charcoal/85' },
  { alt: 'Panamá', hoverKey: 'panama', to: '/provincias/panama#video', lineComponent: LineaPanamaSvg, lineTop: '23%', lineLeft: '61.1%', lineWidth: '4%', buttonTop: '37.3%', buttonLeft: '64%', color: 'text-brand-charcoal/85' },
  { alt: 'Guna Yala (San Blas)', hoverKey: 'guna-yala', to: '/provincias/comarca-guna-yala#video', lineComponent: LineaGunaYalaSvg, lineTop: '3.1%', lineLeft: '81%', lineWidth: '5%', buttonTop: '5.4%', buttonLeft: '84.6%', color: 'text-brand-charcoal/85' },
  { alt: 'Darién', hoverKey: 'darien', to: '/provincias/darien#video', lineComponent: LineaDarienSvg, lineTop: '67.8%', lineLeft: '77.3%', lineWidth: '4%', buttonTop: '82.6%', buttonLeft: '74.3%', color: 'text-brand-charcoal/85' },
]

export const bocasContainers = [
  {
    id: 'bocas-del-toro-main',
    component: 'Bocas1Container',
    bgClassName: 'bg-transparencia-500',
    style: { top: '28%', left: '21%', width: '3.5%', height: '5%', rotation: 0 },
  },
  {
    id: 'bocas-del-toro-main-2',
    component: 'Bocas1Container',
    bgClassName: 'bg-transparencia-500',
    style: { top: '33.8%', left: '21%', width: '9.7%', height: '8.5%', rotation: 4 },
  },
]
export const chiriContainers = [
  {
    id: 'chiriqui-main',
    component: 'Chiri1Container',
    bgClassName: 'bg-transparencia-500',
    style: { top: '31.5%', left: '3%', width: '12%', height: '10%', rotation: 15 },
  },
  {
    id: 'chiriqui-main-2',
    component: 'Chiri2Container',
    bgClassName: 'bg-transparencia-500',
    style: { top: '40%', left: '3.5%', width: '16%', height: '10%', rotation: 0 },
  },
  {
    id: 'chiriqui-main-3',
    component: 'Chiri3Container',
    bgClassName: 'bg-transparencia-500',
    style: { top: '44%', left: '19%', width: '6.5%', height: '15%', rotation: 10 },
  },

]
export const Vera1Container20 = [
  {
    id: 'veraguas-main',
    component: 'Vera1Container',
    bgClassName: 'bg-transparencia-500',
        style: { 
      top: '54%', 
      left: '31%', 
      width: '6%', 
      height: '17%', 
      rotation: 45 },
  },
  {
    id: 'veraguas-main-2',
    component: 'Vera2Container',
    bgClassName: 'bg-transparencia-500',
    style: { 
      top: '70%', 
      left: '34.5%', 
      width: '1.5%', 
      height: '15%', 
      rotation: -15 },
  },
  {
    id: 'veraguas-main-3',
    component: 'Vera3Container',
    bgClassName: 'bg-transparencia-500',
    style: { 
      top: '80%', 
      left: '36.5%', 
      width: '2%', 
      height: '15%', 
      rotation: -25 },
  },
  {
    id: 'veraguas-main-4',
    component: 'Vera4Container',
    bgClassName: 'bg-transparencia-500',
    style: { 
      top: '67%', 
      left: '28%', 
      width: '4%', 
      height: '8%', 
      rotation: 120},
  },
]

export const cocleContainers = [
  {
    id: 'cocle-main',
    component: 'Cocle1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '36.5%',
      left: '40%',
      width: '6%',
      height: '17%',
      rotation: 50,
      zIndex: 33,
    },
  },
  {
    id: 'cocle-main2',
    component: 'Cocle2Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '50%',
      left: '39.5%',
      width: '6%',
      height: '10%',
      rotation: 105,
      zIndex: 34,
    },
  },
  {
    id: 'cocle-main3',
    component: 'Cocle3Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '36.5%',
      left: '42.8%',
      width: '10%',
      height: '10%',
      rotation: 80,
      zIndex: 35,
    },
  },
]

export const panamaContainers = [
  {
    id: 'panama-main',
    component: 'Panama1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '15%',
      left: '59%',
      width: '10%',
      height: '10%',
      rotation: 0,
      zIndex: 34,
    },
  },
  {
    id: 'panama-main-2',
    component: 'Panama1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '12%',
      left: '59%',
      width: '6%',
      height: '10%',
      rotation: 90,
      zIndex: 35,
    },
  },
]

export const colonContainers = [
  {
    id: 'colon-main',
    component: 'Colon1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '10%',
      left: '50%',
      width: '12%',
      height: '5%',
      rotation: -30,
      zIndex: 36,
    },
  },
]

export const gunaYalaContainers = [
  {
    id: 'guna-yala-main',
    component: 'GunaYala1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '11%',
      left: '85%',
      width: '2%',
      height: '17%',
      rotation: -55,
    },
  },
  {
    id: 'guna-yala-main',
    component: 'GunaYala1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '4.2%',
      left: '79%',
      width: '1.5%',
      height: '17%',
      rotation: -70,
    },
  },
  {
    id: 'guna-yala-main',
    component: 'GunaYala1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '-3%',
      left: '71%',
      width: '1%',
      height: '24%',
      rotation: -90,
    },
  },
    {
    id: 'guna-yala-main',
    component: 'GunaYala1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '8.6%',
      left: '67%',
      width: '3%',
      height: '3%',
      rotation: -45,
    },
  },
]

export const darienContainers = [
  {
    id: 'darien-main',
    component: 'Darien1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '27%',
      left: '84%',
      width: '6%',
      height: '21%',
      rotation: -45,
    },
  },
  {
    id: 'darien-main',
    component: 'Darien1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '34%',
      left: '79%',
      width: '6%',
      height: '10%',
      rotation: -40,
    },
  },
    {
    id: 'darien-main',
    component: 'Darien1Container',
    bgClassName: 'bg-transparencia-500',
    style: {
      top: '34%',
      left: '79%',
      width: '2%',
      height: '12%',
      rotation: 0,
    },
  },
]
