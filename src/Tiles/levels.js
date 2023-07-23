const levels = [{
        physicist: {
            startPos: [5, 7],
            rotation: 180
        },
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
            [9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 6, 0, 0],
            [2, 1, 1, 1, 1, 4, 5, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 7, 9, 0],
            [0, 0, 0, 9, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0, 7, 9, 9, 9, 9, 9, 9, 1, 0, 0, 0, 1, 9],
            [0, 0, 0, 6, 0, 0, 0, 1, 4, 5, 1, 1, 4, 5, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 6, 9, 9, 9, 0, 0, 0, 0],
            [9, 9, 0, 9, 1, 0, 0, 6, 0, 0, 0, 0, 7, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 0, 0, 7, 0, 9, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9],
            [0, 1, 0, 6, 0, 0, 0, 1, 4, 5, 0, 0, 0, 0, 0, 1, 4, 5, 1, 3],
            [0, 1, 0, 7, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 9, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        startPos: [2, 0],
        endPos: [11, 19]
    },
    {
        map: [
            [0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 9, 9, 9, 9, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 9, 9],
            [0, 0, 0, 1, 1, 4, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 1],
            [0, 0, 0, 9, 6, 0, 0, 6, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0],
            [0, 0, 0, 1, 7, 0, 0, 7, 9, 9, 9, 9, 9, 1, 1, 4, 5, 1, 9, 9],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 4, 5, 1, 1, 0, 0, 0, 1, 1, 3],
            [0, 0, 0, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 7, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 1, 4, 5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4, 5, 1, 1],
            [2, 4, 5, 1, 1, 0, 0, 1, 9, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 9, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        physicist: {
            startPos: [9, 7],
            rotation: 180
        },
        startPos: [9, 0],
        endPos: [5, 19]
    },
    {
        physicist: {
            startPos: [7, 14],
            rotation: 180
        },
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 0, 0, 9, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 4, 5, 1, 0, 0, 0, 0, 0, 1, 0, 6, 0, 0, 1, 0],
            [0, 0, 0, 9, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 7, 0, 0, 1, 1],
            [9, 9, 9, 1, 1, 0, 0, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 4, 5, 1, 9, 9, 9, 1, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 0, 0, 0],
            [0, 0, 0, 0, 9, 0, 1, 9, 0, 0, 0, 1, 4, 5, 1, 1, 1, 9, 9, 9],
            [0, 0, 0, 0, 6, 0, 1, 1, 0, 9, 9, 1, 0, 0, 0, 9, 1, 4, 5, 3],
            [0, 0, 0, 9, 7, 0, 0, 1, 0, 6, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 9, 7, 0, 0, 0, 0, 0, 6, 0, 0, 9, 9],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 7, 0, 0, 1, 1],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
          ],
        startPos: [5, 0],
        endPos: [8, 19]
    },
    {
        physicist: {
            startPos: [4, 10],
            rotation: 180
        },
        map: [
            [0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [0, 0, 0, 0, 0, 0, 0, 1, 4, 5, 1, 1, 4, 5, 1, 4, 5, 1, 1, 3],
            [0, 0, 0, 9, 9, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 9, 9, 9, 7, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [9, 9, 9, 9, 1, 4, 5, 1, 4, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 1, 4, 5, 1, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 6, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 7, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        startPos: [8, 0],
        endPos: [1, 19]
    }, {
        physicist: {
            startPos: [5, 11],
            rotation: 180
        },
        map: [
            [9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 1, 1, 4, 5, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 9, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 7, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 4, 5, 1, 4, 5, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 4, 5, 9, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 9],
            [0, 0, 0, 9, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1, 1, 4, 5, 1, 3],
            [0, 0, 0, 1, 1, 0, 0, 7, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 0, 0, 1, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          startPos: [1, 0],
          endPos: [9, 19]
    },

];


export default levels;