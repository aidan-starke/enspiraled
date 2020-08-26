const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const colors = []

for (let i = 0; i < 10000; i++) {
    colors.push(randomColour())
}

export function getColor(n) {
    return colors[n]
}