import toObjectByProperty from 'logic/utils/toObjectByProperty'
import { SheetElement } from 'types/sheet'

const metaTag = 'meta'
const attributesTag = 'attributes'
const skillsTag = 'skills'
const combatTag = 'combat'

// START - CHARACTER META - START
const name = {
	id: 'name',
	label: 'Name',
	tag: metaTag,
}

const level = {
	id: 'level',
	label: 'Level',
	tag: metaTag,
}

const classes = {
	id: 'classes',
	label: 'Classes',
	tag: metaTag,
}

const race = {
	id: 'race',
	label: 'Race',
	tag: metaTag,
}

const alignment = {
	id: 'alignment',
	label: 'Alignment',
	tag: metaTag,
}

const profBonus = {
	id: 'profBonus',
	label: 'Proficiency Bonus',
	tag: metaTag,
}

const description = {
	id: 'description',
	label: 'Description',
	tag: metaTag,
}
// END - CHARACTER META - END

// START - CHARACTER SKILLS & ATTRS - START
const attributes = {
	id: 'attributes',
	label: 'Attributes',
	tag: attributesTag,
}

const savingThrows = {
	id: 'savingThrows',
	label: 'Saving Throws',
	tag: attributesTag,
}

const skills = {
	id: 'skills',
	label: 'Skills',
	tag: skillsTag,
}
// END - CHARACTER SKILLS & ATTRS - END

// START - COMBAT - START
const armorClass = {
	id: 'ac',
	label: 'AC',
	tag: combatTag,
}

const initiative = {
	id: 'initiative',
	label: 'Initiative',
	tag: combatTag,
}

const speed = {
	id: 'speed',
	label: 'Speed',
	tag: combatTag,
}

const hitPoints = {
	id: 'hp',
	label: 'Hit Points',
	tag: combatTag,
}

const hitDice = {
	id: 'hitDice',
	label: 'Hit Dice',
	tag: combatTag,
}

const deathSaves = {
	id: 'deathSaves',
	label: 'Death Saves',
	tag: combatTag,
}

const attacks = {
	id: 'attacks',
	label: 'Attacks',
	tag: combatTag,
}

const castingAbility = {
	id: 'castingAbility',
	label: 'Casting Ability',
	tag: combatTag,
}

const castingSave = {
	id: 'castingSave',
	label: 'Spell Save DC',
	tag: combatTag,
}
// END - COMBAT - END

export const SHEET_ELEMENTS = [
	name, level, classes, race, alignment,
	profBonus, description, attributes, savingThrows, skills,
	armorClass, initiative, speed, hitPoints, hitDice,
	deathSaves, attacks, castingAbility, castingSave,
]

export const SHEET_ELEMENTS_BY_TAG = SHEET_ELEMENTS.reduce(
	(acc: { [key: string]: SheetElement[] }, el: SheetElement) => {
		const { tag } = el
		if (acc[tag]) {
			acc[tag].push(el)
		} else {
			acc[tag] = [el]
		}
		return acc
	}, {},
)
