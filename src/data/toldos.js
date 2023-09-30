import thumbnailCofre from '../assets/toldos/cofre/toldo-cofre.png';
import image1Cofre from '../assets/toldos/cofre/1.jpeg';
import image2Cofre from '../assets/toldos/cofre/2.jpg';
import image3Cofre from '../assets/toldos/cofre/3.jpg';
import image4Cofre from '../assets/toldos/cofre/4.jpg';

import thumbnailPergola from '../assets/toldos/pergola/Toldo-Pergola.png';
import image1Pergola from '../assets/toldos/pergola/1.jpg';
import image2Pergola from '../assets/toldos/pergola/2.jpg';
import image3Pergola from '../assets/toldos/pergola/3.jpg';
import image4Pergola from '../assets/toldos/pergola/4.jpg';

import thumbnailBrazoExtensible from '../assets/toldos/brazo-extensible/Toldo-Brazo-Extensible.png';
import image1BrazoExtensible from '../assets/toldos/brazo-extensible/1.jpg';
import image2BrazoExtensible from '../assets/toldos/brazo-extensible/2.jpg';
import image3BrazoExtensible from '../assets/toldos/brazo-extensible/3.jpeg';
import image4BrazoExtensible from '../assets/toldos/brazo-extensible/4.jpg';

import thumbnailBioclimatico from '../assets/toldos/bioclimático/Toldo-Bioclimático.png';
import image1Bioclimatico from '../assets/toldos/bioclimático/1.jpg';
import image2Bioclimatico from '../assets/toldos/bioclimático/2.jpg';
import image3Bioclimatico from '../assets/toldos/bioclimático/3.jpg';
import image4Bioclimatico from '../assets/toldos/bioclimático/4.jpg';

import thumbnailVela from '../assets/toldos/vela/Toldo-Vela.png';
import image1Vela from '../assets/toldos/vela/1.jpg';
import image2Vela from '../assets/toldos/vela/2.jpg';
import image3Vela from '../assets/toldos/vela/3.jpg';
import image4Vela from '../assets/toldos/vela/4.jpeg';

import thumbnailPortada from '../assets/toldos/portada/Toldo-Portada.png';
import image1Portada from '../assets/toldos/portada/1.jpg';
import image2Portada from '../assets/toldos/portada/2.jpg';
import image3Portada from '../assets/toldos/portada/3.jpg';
import image4Portada from '../assets/toldos/portada/4.jpg';

import thumbnailVertical from '../assets/toldos/vertical/Toldo-Vertical.png';
import image1Vertical from '../assets/toldos/vertical/1.jpg';
import image2Vertical from '../assets/toldos/vertical/2.jpg';
import image3Vertical from '../assets/toldos/vertical/3.jpg';
import image4Vertical from '../assets/toldos/vertical/4.png';

import thumbnailVeranda from '../assets/toldos/veranda/Toldo-Veranda.png';
import image1Veranda from '../assets/toldos/veranda/1.jpg';
import image2Veranda from '../assets/toldos/veranda/2.jpg';
import image3Veranda from '../assets/toldos/veranda/3.jpg';
import image4Veranda from '../assets/toldos/veranda/4.png';

import thumbnailCapota from '../assets/toldos/capota/Toldo-Capota.png';
import image1Capota from '../assets/toldos/capota/1.jpg';
import image2Capota from '../assets/toldos/capota/2.jpg';
import image3Capota from '../assets/toldos/capota/3.jpg';
import image4Capota from '../assets/toldos/capota/4.jpg';

import thumbnailPergoraing from '../assets/toldos/pergoraing/Toldo-pergoraing.png';
import image1Pergoraing from '../assets/toldos/pergoraing/1.jpg';
import image2Pergoraing from '../assets/toldos/pergoraing/2.jpg';
import image3Pergoraing from '../assets/toldos/pergoraing/3.jpg';
import image4Pergoraing from '../assets/toldos/pergoraing/4.jpg';

let nextToldoId = 0;

function generateUniqueId() {
    return nextToldoId++;
}

const toldos = [
    {
        id: generateUniqueId(),
        title: 'Toldo Cofre',
        description: 'Este tipo de toldo encierra por completo su tela cuando está retraído, protegiéndola de los elementos climáticos y asegurando durabilidad a largo plazo.',
        thumbnail: thumbnailCofre,
        images: [
            image1Cofre,
            image2Cofre,
            image3Cofre,
            image4Cofre,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Pergola',
        description: 'Los toldos pérgola proporcionan una área sombreada más grande y suelen usarse para cubrir espacios exteriores como patios y terrazas. Pueden ser retráctiles o fijos.',
        thumbnail: thumbnailPergola,
        images: [
            image1Pergola,
            image2Pergola,
            image3Pergola,
            image4Pergola,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Brazo Extensible',
        description: 'Versátil y retráctil, proporciona sombra flexible para patios, terrazas y ventanas.',
        thumbnail: thumbnailBrazoExtensible,
        images: [
            image1BrazoExtensible,
            image2BrazoExtensible,
            image3BrazoExtensible,
            image4BrazoExtensible,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Bioclimático',
        description: 'Las pérgolas bioclimáticas son estructuras versátiles que regulan la temperatura y proporcionan sombra de forma natural. Controlan la luz, protegen contra la lluvia y ahorran energía, creando espacios sostenibles y personalizables al aire libre.',
        thumbnail: thumbnailBioclimatico,
        images: [
            image1Bioclimatico,
            image2Bioclimatico,
            image3Bioclimatico,
            image4Bioclimatico,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Vela',
        description: 'Diseño moderno y versátil que proporciona sombra en formas creativas, perfecto para exteriores.',
        thumbnail: thumbnailVela,
        images: [
            image1Vela,
            image2Vela,
            image3Vela,
            image4Vela,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Portada',
        description: 'Se extiende hacia afuera desde la fachada, proporcionando sombra y protección en la entrada.',
        thumbnail: thumbnailPortada,
        images: [
            image1Portada,
            image2Portada,
            image3Portada,
            image4Portada,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Vertical',
        description: 'Existen varios tipos de toldos verticales, y la elección depende de tus necesidades específicas y el estilo que prefieras. Algunos de los tipos más comunes incluyen:..',
        thumbnail: thumbnailVertical,
        images: [
            image1Vertical,
            image2Vertical,
            image3Vertical,
            image4Vertical,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Veranda',
        description: 'Cubre espacios amplios como restaurantes y áreas de asientos al aire libre.',
        thumbnail: thumbnailVeranda,
        images: [
            image1Veranda,
            image2Veranda,
            image3Veranda,
            image4Veranda,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Capota',
        description: 'Forma redondeada, agrega elegancia a la fachada de un edificio.',
        thumbnail: thumbnailCapota,
        images: [
            image1Capota,
            image2Capota,
            image3Capota,
            image4Capota,
        ]
    },
    {
        id: generateUniqueId(),
        title: 'Toldo Pergoraing',
        description: 'Cubre espacios amplios como restaurantes y áreas de asientos al aire libre.',
        thumbnail: thumbnailPergoraing,
        images: [
            image1Pergoraing,
            image2Pergoraing,
            image3Pergoraing,
            image4Pergoraing,
        ]
    }
];

export default toldos;