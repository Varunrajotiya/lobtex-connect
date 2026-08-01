// Products are simply clickable image cards.
// Clicking a product opens WhatsApp with the predefined message below.
// This is NOT an eCommerce catalog — there is no cart, price, or checkout.

import productTurboVent from '../assets/images/product_turbo_vent.jpg'
import productBoltFasteners1 from '../assets/images/product_bolt_fasteners_1.jpg'
import productBoltFasteners2 from '../assets/images/product_bolt_fasteners_2.jpg'
import productFoilInsulation from '../assets/images/product_foil_insulation.jpg'
import productPolycarbonateBase from '../assets/images/product_polycarbonate_base.jpg'
import aluminiumFoilTape from '../assets/images/aluminiumfoiltape.jpeg'
import product7 from '../assets/images/product7.jpeg'
import product8 from '../assets/images/product8.jpeg'
import product9 from '../assets/images/product9.jpeg'
import product10 from '../assets/images/product10.jpeg'

const products = [
  {
    id: 1,
    title: 'Turbo Ventilator Fans',
    subtitle: 'Turbolite roof ventilators',
    image: productTurboVent,
    message: 'Hi, I am interested in "Turbo Ventilator Fans". Please share more details and pricing.'
  },
  {
    id: 2,
    title: 'Bolt Fasteners',
    subtitle: 'Anchor & sleeve bolts',
    image: productBoltFasteners1,
    message: 'Hi, I am interested in "Bolt Fasteners". Please share more details and pricing.'
  },
  {
    id: 3,
    title: 'Bolt Fasteners',
    subtitle: 'Heavy-duty anchor bolts',
    image: productBoltFasteners2,
    message: 'Hi, I am interested in "Bolt Fasteners". Please share more details and pricing.'
  },
  {
    id: 4,
    title: 'Aluminium Foil Insulation Bubble Sheet',
    subtitle: 'Thermal insulation roll',
    image: productFoilInsulation,
    message: 'Hi, I am interested in "Aluminium Foil Insulation Bubble Sheet". Please share more details and pricing.'
  },
  {
    id: 5,
    title: 'Polycarbonate Base',
    subtitle: 'Profile roof sheets',
    image: productPolycarbonateBase,
    message: 'Hi, I am interested in "Polycarbonate Base". Please share more details and pricing.'
  },
  {
    id: 6,
    title: 'ALUMINIUM FOIL BUTYL TAPE',
    subtitle: 'WATERPROOF ALUMINIUM FOIL BUTYL TAPE',
    image: aluminiumFoilTape,
    message: 'Hi, I am interested in "waterproof aluminium foil BUTYL TAPE". Please share more details and pricing.'
  },
  {
    id: 7,
    title: 'FASTNERS',
    subtitle: 'Fastners & screw',
    image: product7,
    message: 'Hi, I am interested in "Fastners & screw". Please share more details and pricing.'
  },
  {
    id: 8,
    title: 'CUTTING WHEEL',
    subtitle: 'Cutting Wheel',
    image: product8,
    message: 'Hi, I am interested in "CUTTING WHEEL". Please share more details and pricing.'
  },
  {
    id: 9,
    title: 'Sealing pin screw',
    subtitle: 'Screw',
    image: product9,
    message: 'Hi, I am interested in "Sealing pin screw". Please share more details and pricing.'
  },
  {
    id: 10,
    title: 'Fastner',
    subtitle: 'Fastner',
    image: product10,
    message: 'Hi, I am interested in "Fastner". Please share more details and pricing.'
  }
]

export default products
