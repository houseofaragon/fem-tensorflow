import * as tf from '@tensorflow/tfjs'
import * as tfd from '@tensorflow/tfjs-data'

const recordButton = document.getElementsByClassName('record-button')
const buttonsContainer = document.getElementById('buttons-container')

let webcam, initialModel, mouseDown, newModel

const trainButton = document.getElementById('train')
const predictButton = document.getElementById('predict')
const statusElement = document.getElementById('status')
const batchSizeFraction = 0.4
const epochs = 30
const denseUnits = 100

let isTraining = false
let isPredicting = false

const loadModel = async = () => {
    
}