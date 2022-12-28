import { usePlane } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { woodTexture } from "../images/textures";

export function Ground () {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore(state => [state.addCube])

    woodTexture.repeat.set(1000, 1000);

    const handleClickWood = event => {
        event.stopPropagation()
        const [x,y ,z] = Object.values(event.point).map(n => Math.ceil(n))

        addCube(x, y, z) 
    }


return(
    <mesh ref={ref} onClick={handleClickWood}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshStandardMaterial attach="material" map={woodTexture} />
    </mesh>
)
}