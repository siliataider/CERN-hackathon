
function flatten(doubleArray){
    return doubleArray.reduce((a,b) => [...a, ...b], []);
}

const TileMap = params => {
    return <g>
        {
            flatten(params.tileMap)
        }
    </g>
}

export default TileMap;