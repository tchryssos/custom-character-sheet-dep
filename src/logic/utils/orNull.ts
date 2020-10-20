import ternary from 'logic/utils/ternary'

export default (condition: boolean, truthy: any) => ternary(condition, truthy, null)
