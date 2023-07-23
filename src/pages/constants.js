import characterImage1Left from "../images/character-1-left.png"
import characterImage2Left from "../images/character-2-left.png"
import characterImage3Left from "../images/character-3-left.png"

import characterImage1Right from "../images/character-1-right.png"
import characterImage2Right from "../images/character-2-right.png"
import characterImage3Right from "../images/character-3-right.png"

import characterImage1Standing from "../images/character-1-standing.png"
import characterImage2Standing from "../images/character-2-standing.png"
import characterImage3Standing from "../images/character-3-standing.png"

export const characterImages = [characterImage1Left,characterImage2Left,characterImage3Left];
export const characterString = ["character-1", "character-2", "character-3"];

export const allCharacters = {
    characterImage1: {
        standing: characterImage1Standing,
        left: characterImage1Left,
        right: characterImage1Right
    },
    characterImage2: {
        standing: characterImage2Standing,
        left: characterImage2Left,
        right: characterImage2Right
    },
    characterImage3: {
        standing: characterImage3Standing,
        left: characterImage3Left,
        right: characterImage3Right
    }
}
