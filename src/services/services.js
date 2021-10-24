export const getProperties = async () => {
    return JSON.parse(localStorage.getItem('properties'))
}

export const getRegion = async () => {
    return JSON.parse(localStorage.getItem('region'))
}

export const getManager = async (id) => {
    const managers = JSON.parse(localStorage.getItem('manager'))
    const manager = managers.find((manager) => manager.id === id)

    return manager
}

export const getProperty = async (id) => {
    const properties = JSON.parse(localStorage.getItem('extendedProperties'))
    const property = properties.find((property) => property.id === id)
    return property
}

export const createProperty = async (property) => {
    const allProperties = JSON.parse(localStorage.getItem('extendedProperties'))
    const id = Math.random() * 100
    const allNewProperties = [...allProperties, { ...property, id }]

    localStorage.setItem('extendedProperties', JSON.stringify(allNewProperties))

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
    localStorage.setItem('properties', JSON.stringify(newProps))
}

export const deleteProperty = async (id) => {
    const allProperties = JSON.parse(localStorage.getItem('extendedProperties'))
    const newProperties = allProperties.filter((property) => property.id !== id)
    localStorage.setItem('extendedProperties', JSON.stringify(newProperties))

    const props = await getProperties()
    const newProps = props.filter((property) => property.id !== id)
    localStorage.setItem('properties', JSON.stringify(newProps))
}

export const updateProperty = async (property) => {
    const allProperties = JSON.parse(localStorage.getItem('extendedProperties'))

    const propertiesWithoutProperty = allProperties.filter(
        (prop) => prop.id !== Number(property.id)
    )
    const newProperties = [...propertiesWithoutProperty, property]

    localStorage.setItem('extendedProperties', JSON.stringify(newProperties))

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

    localStorage.setItem('properties', JSON.stringify([...newProps, newProp]))
}
