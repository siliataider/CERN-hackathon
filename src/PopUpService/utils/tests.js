const testLevel0 =[
    {
        "question": "Who developed the atomic theory?",
        "choices": [
            "Lucky Luke",
            "John Dalton",
            "Averell Dalton",
        ],
        "correctAnswerIndex": 1
    },
]

const testLevel1 =[
    {
        "question": "What did Rutherford use to hit the foil of gold?",
        "choices": [
            "Alpha particles",
            "Beta particles",
            "Gamma particles",
        ],
        "correctAnswerIndex": 0
    },

]

const testLevel2 =[
    {
        "question": "What is the name of the particle discovered by James Chadwick?",
        "choices": [
            "neutrino",
            "neutron",
            "neutralino",
        ],
        "correctAnswerIndex": 1
    },
    {
        "question": "Why is it called like that?",
        "choices": [
            "They can be found in nature.",
            "They are new particles.",
            "They have no electric charge.",
        ],
        "correctAnswerIndex": 2
    },
]

const testLevel3 =[
    {
        "question": "What are some of the Quark flavors?",
        "choices": [
            "up, down, and strange",
            "red, green and blue",
            "sweet, sour and salty",
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "What particles keep the quarks together?",
        "choices": [
            "Photons",
            "Electrons",
            "Gluons",
        ],
        "correctAnswerIndex": 2
    },
]

export const lastLevel = {
    "definition": [
        "You should now have a better picture of what we are made of, and we hope you enjoyed traveling with us through the fantastic world of subatomic particles. However, our understanding of the universe is not complete and a lot of questions remain unanswered. We still need physicists and engineers to work on these subjects and improve our knowledge of how it all started and what the universe is made of. Maybe you will be the one discovering a new particle and winning a Nobel prize! ",
        "You can answer this little quiz and find out your odds of winning a nobel prize in physics according to the statistics. "
    ],
    "questionsTitle" : "Quiz Physics Nobel prize",
    "questions": [
        {
            "question": "Which field do you want to work in?",
            "choices": [
                "Astrophysics",
                "Nuclear and particle physics",
                "Quantum mechanics",
                "Optics",
                "Material science",
            ],
        },
        {
            "question": "Are you a theoretical or experimental physicist?",
            "choices": [
                "Experimentalist",
                "Theorist",
            ],
        },
    ],
    "funFacts": [
        "The youngest : Lawrence Bragg (25 years old)  who won the Nobel prize with his father “for their services in the analysis of crystal structure by means of X-rays”",
        "The oldest : Arthur Ashkin (96 years old) “for the optical tweezers and their application to biological systems”",
        "Only 4 women : ",
        "- Marie Curie who earned it with her husband 'in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel'",
        "- Maria Goeppert-Mayer for her discoveries concerning nuclear shell structure",
        "- Donna Strickland for her method of generating high-intensity, ultra-short optical pulses (laser)",
        "- Andrea Ghez for the discovery of a supermassive black hole at the center of our galaxy",
        "The only one who received 2 Physics Nobel prizes : John Bardeen ‘for their researches on semiconductors and their discovery of the transistor effect’, and ‘for their jointly developed theory of superconductivity, usually called the BCS-theory’",
        "The one who received both the Nobel prize and the Ig Nobel prize : Andre Geim won the Nobel prize for the discovery of graphene, and the Ig Nobel for making frogs levitating with a magnet."
    ]

}

export const fieldPoints = {
    "Astrophysics":10.11,
    "Nuclear and particle physics":47.61,
    "Quantum mechanics":13.09,
    "Optics":8.92,
    "Material science":20.23,
    "Experimentalist": 67,
    "Theorist": 33,
    "":0
}


export const tests = [
    testLevel0, testLevel1, testLevel2,testLevel3,lastLevel
]