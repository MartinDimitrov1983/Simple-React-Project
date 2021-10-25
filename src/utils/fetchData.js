import { getProperties, getRegion, getManager } from '../services/services'

export const fetchData = async (setProperties, setRegions, setLoading) => {
    const props = await getProperties()
    const regions = await getRegion()
    const mappedProps = []

    for (let i = 0; i < props.length; i++) {
        const propsRegion = regions.find(
            (region) => region.id === props[i].region
        )
        const manager = await getManager(props[i].manager)
        const currentProp = {
            ...props[i],
            region: propsRegion.name,
            manager: `${manager?.firstName} ${manager?.lastName}`,
        }

        mappedProps.push(currentProp)
    }

    setProperties(mappedProps)
    setRegions(regions)
    setLoading(false)
}
