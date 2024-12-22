//piezas por tamaño domo


const domoPerro = [
    {
        category: 'A',
        baseLength: 74,
        grad: ['33deg', '33deg'],
        quantity: 40
    },
    {
        category: 'B',
        baseLength: 66,
        grad: ['18.6deg', '32.8'],
        quantity: 40
    },
    {
        category: 'C',
        baseLength: 61,
        grad: ['18.6deg', '32.8'],
        quantity: 40
    },
    {
        category: 'D',
        baseLength: 77,
        grad: ['27.8deg', '27.8deg'],
        quantity: 30
    },
    {
        category: 'E',
        baseLength: 64,
        grad: ['28.6deg', '28.6deg'],
        quantity: 10
    },
    {
        category: 'F',
        baseLength: 63,
        grad: ['28.6deg', '27.4deg'],
        quantity: 10
    },
    {
        category: 'G',
        baseLength: 62,
        grad: ['28.6deg', '27.4deg'],
        quantity: 10
    },
]

const calcTotalWoodLength = (array) =>{
    const totalLength = array.reduce((acc, woodPieceCat)=>{
        console.log(acc, woodPieceCat)
        const calc = (woodPieceCat.baseLength * woodPieceCat.quantity)
        return acc + calc
    }, 0)
    console.log("TCL: calcTotalWoodLength -> totalLength", totalLength)
    return totalLength 

}


const comercialWoodlength = ['3,20m', '3,96m']


constole.log((calcTotalWoodLength(domoPerro)) / 3960)

