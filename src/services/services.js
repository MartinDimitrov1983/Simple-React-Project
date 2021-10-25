import { localStorageManagement } from '../utils/localStorage'

const { getItem, setItem } = localStorageManagement()

export const getProperties = async () => {
    return getItem('properties')
}

export const getRegion = async () => {
    return getItem('region')
}

export const getManager = async (id) => {
    const managers = getItem('manager')
    const manager = managers.find((manager) => manager.id === id)

    return manager
}

export const getProperty = async (id) => {
    const properties = getItem('extendedProperties')
    const property = properties.find((property) => property.id === id)
    return property
}

export const createProperty = async (property) => {
    const allProperties = getItem('extendedProperties')
    const id = Math.random() * 100
    const allNewProperties = [...allProperties, { ...property, id }]

    setItem('extendedProperties', allNewProperties)

    const newProp = {
        id: Number(id),
        name: property.name,
        plan: property.plan,
        units: property.units,
        city: property.city,
        region: Number(property.region),
        manager: Number(property.manager),
    }

    const props = await getProperties()
    const newProps = [...props, newProp]
    setItem('properties', newProps)
}

export const deleteProperty = async (id) => {
    const allProperties = getItem('extendedProperties')
    const newProperties = allProperties.filter((property) => property.id !== id)
    setItem('extendedProperties', newProperties)

    const props = await getProperties()
    const newProps = props.filter((property) => property.id !== id)
    setItem('properties', newProps)
}

export const updateProperty = async (property) => {
    const allProperties = getItem('extendedProperties')

    const propertiesWithoutProperty = allProperties.filter(
        (prop) => prop.id !== Number(property.id)
    )
    const newProperties = [...propertiesWithoutProperty, property]

    setItem('extendedProperties', newProperties)

    const props = await getProperties()
    const newProps = props.filter((prop) => prop.id !== property.id)
    const newProp = {
        id: Number(property.id),
        name: property.name,
        plan: property.plan,
        units: property.units,
        city: property.city,
        region: Number(property.region),
        manager: Number(property.manager),
    }

    setItem('properties', [...newProps, newProp])
}
