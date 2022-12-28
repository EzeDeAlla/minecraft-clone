import { 
    woodImg,
    dirtImg,
    grassImg,
    glassImg,
 } from "./images.js";

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const glassTexture = new TextureLoader().load(glassImg)

const woodTexture = new TextureLoader().load(woodImg)

    woodTexture.wrapS = RepeatWrapping
    woodTexture.wrapT = RepeatWrapping
    woodTexture.magFilter = NearestFilter

    grassTexture.wrapS = RepeatWrapping
    grassTexture.wrapT = RepeatWrapping
    grassTexture.magFilter = NearestFilter

    glassTexture.wrapS = RepeatWrapping
    glassTexture.wrapT = RepeatWrapping
    glassTexture.magFilter = NearestFilter
    
    dirtTexture.wrapS = RepeatWrapping
    dirtTexture.wrapT = RepeatWrapping
    dirtTexture.magFilter = NearestFilter

export { 
    woodTexture,
    grassTexture,
    dirtTexture,
    glassTexture,
}