const path = './model/'
const startButton = document.getElementById('start')

startButton.onclick = () => init()

let model, webcam

const init = async () => {
    try {
        const modelPath = path + 'model.json'
        const metadataPath = path + 'metadata.json'

        model = await tmImage.load(modelPath, metadataPath)

        webcam = new tmImage.Webcam(200, 200, false) // false to flip camera
        await webcam.setup() // request access to camera
        await webcam.play()

        window.requestAnimationFrame(loop)

        let maxPredictions = model.getTotalClasses()

        document.getElementById('webcam-container').appendChild(webcam.canvas)
        console.log(`Model loaded successfully. Number of predictions: ${maxPredictions}`)
    } catch (error) {
        console.error('Error loading model or setting up webcam:', error)
    }
}

const loop = async () => {
    webcam.update()
    await predict()
    window.requestAnimationFrame(loop)
}

const predict = async () => {
    const predictions = await model.predict(webcam.canvas)
    console.log(predictions)
}