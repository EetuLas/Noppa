const div = document.querySelector("#dice")
const img = document.querySelector("img")

div.addEventListener('click', () => {
    const random_number = Math.floor(Math.random() * 6) + 1
    img.src = './kuvat/' + random_number + '.png'
})

const getImage = (num) => {
    switch(num) {
        case 1:
            return '1.png'
        case 2:
            return '2.png'
        case 3:
            return '3.png'
        case 4:
            return '4.png'
        case 5:
            return '5.png'
        case 6:
            return '6.png'
    }
}