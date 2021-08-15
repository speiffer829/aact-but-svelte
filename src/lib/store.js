import { writable, get, derived } from 'svelte/store'
import { onMount } from 'svelte'


export let materialArrs = writable([
{
			Q: 1000,
			m: 100,
			ti: '20.0&deg;C',
			materials: [
				{
					id: 1,
					text: 'Bolagnium',
					fill: 'blue',
					mass: 100,
					energy: 1000,
					startTemp: 20.0,
					endTemp: 24.8,
					heatCapacity: 2.1,
					done: false,
					equationIndex: 0,
					materialCosts: '$4,000',
					labor: '$150/hr',
					totalTime: 8,
					totalCost: 5200,
					correctCost: true,
					hintImg: 'sub-a.jpg',
					wiggle: .6
				},
				{
					id: 2,
					text: 'Adamant',
					fill: 'green',
					mass: 100,
					energy: 1000,
					startTemp: 20.0,
					endTemp: 25.5,
					heatCapacity: 1.8,
					done: false,
					equationIndex: 0,
					materialCosts: '$5,000',
					labor: '$100/hr',
					totalTime: 6,
					totalCost: 5600,
					correctCost: false,
					hintImg: 'sub-b.jpg',
					wiggle: .5
				},
				{
					id: 3,
					text: 'Finkonium',
					fill: 'yellow',
					mass: 100,
					energy: 1000,
					startTemp: 20.0,
					endTemp: 27.7,
					heatCapacity: 1.3,
					done: false,
					equationIndex: 0,
					hintImg: 'sub-c.jpg',
					wiggle: 2.3
				},
				{
					id: 4,
					text: 'Cavorite',
					fill: 'orange',
					mass: 100,
					energy: 1000,
					startTemp: 20.0,
					endTemp: 26.3,
					heatCapacity: 1.6,
					done: false,
					equationIndex: 0,
					hintImg: 'sub-d.jpg',
					wiggle: 2.1
				}
			]
		},
		{
			Q: 2000,
			m: 50,
			ti: '20.0&deg;C',
			materials: [
				{
					id: 1,
					text: 'Vibranium',
					fill: 'blue',
					mass: 50,
					energy: 2000,
					startTemp: 20.0,
					endTemp: 46.9,
					heatCapacity: 1.5,
					done: false,
					equationIndex: 0,
					hintImg: 'vibranium-hint.jpg',
					wiggle: .6
				},
				{
					id: 2,
					text: 'Beskar',
					fill: 'green',
					mass: 50,
					energy: 2000,
					startTemp: 20.0,
					endTemp: 38.4,
					heatCapacity: 2.2,
					done: false,
					equationIndex: 0,
					hintImg: 'beskar-hint.jpg',
					materialCosts: '$6,000',
					labor: '$100/hr',
					totalTime: 4,
					totalCost: 6400,
					correctCost: true,
					wiggle: 1.5
				},
				{
					id: 3,
					text: 'Blanchettium',
					fill: 'yellow',
					mass: 50,
					energy: 2000,
					startTemp: 20.0,
					endTemp: 43.7,
					heatCapacity: 1.7,
					done: false,
					equationIndex: 0,
					hintImg: 'carbonite-hint.jpg',
					wiggle: 2.1
				},
				{
					id: 4,
					text: 'Gundarium',
					fill: 'orange',
					mass: 50,
					energy: 2000,
					startTemp: 20.0,
					endTemp: 35.3,
					heatCapacity: 2.6,
					done: false,
					equationIndex: 0,
					hintImg: 'gundarium-hint.jpg',
					materialCosts: '$5,000',
					labor: '$150/hr',
					totalTime: 12,
					totalCost: 6800,
					correctCost: false,
					wiggle: 1.2
				}
			]
		}
	])

export let version = writable(null)

export let completedQs = writable(0)
export let correctScore = writable(0)

export let questions = writable([
      {
        template: 'Question',
        question: 'This is a test Question?',
        explination: 'The particle were moving faster <strong>Because of Science!</strong> <span>Smaller Text Explination</span>',
        answers: [
          {
            answer: 'True',
            correct: true
          },
          {
            answer: 'False',
            correct: false
          }
        ]
      }
    ])

export let questionIndex = writable(0)
export let equation = writable(
      {
        name: "Specific Heat Equation",
        description: "Let's explore this formula. Click through and see the definitions of each variable.",
        equation: "<span class=\"highlight\">Q = mcΔT",
        steps: [
          {
            variable: "Q",
            text: "The amount of heat energy added to (+) or taken away from (–) a sample to cause the temperature change, usually measured in Joules, (J).",
            equation: "<span class=\"highlight\">Q</span> = mcΔT",
          },
          {
            variable: "m",
            text: "The mass of the sample, usually measured in grams, (g).",
            equation: "Q = <span class=\"highlight\">m</span>cΔT",
          },
          {
            variable: "c",
            text: "The specific heat capacity of the sample, characteristic of the type of material, usually measured in units of Joules per gram degree Celsius, (J/g°C).",
            equation: "Q = m<span class=\"highlight\">c</span>ΔT",
          },
          {
            variable: "ΔT",
            text: "The change in temperature, usually measured in degrees Celsius, (°C); Tf &minus; Ti",
            equation: "Q = mc<span class=\"highlight\">ΔT</span>",
          },
        ]
      }
    )
export let equationIndex = writable(0)
export let materials = writable()


//Getters 

export const currentQ = derived(questionIndex, $questionIndex => get(questions)[$questionIndex])
// export const currentE = derived(equationIndex, $equationIndex => get(equations)[$equationIndex]);


//functions 
async function setVersion() {
	const newVersion = Math.round(Math.random() * 1);
	const allMaterials = await get(materialArrs)

	version.set(newVersion)
	materials.set(allMaterials[newVersion]);
}

setVersion()